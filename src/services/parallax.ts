/* eslint-disable no-return-assign */
/* eslint-disable class-methods-use-this */

import { Ref } from "react";
import { Observable, Subject } from "rxjs";

export class Section {
  private _element!: Ref<HTMLElement>;
  private _sequence!: number;
  private _activeSequence: number = 0;
  private _nextSequence: Subject<void>;
  private _prevSequence: Subject<void>;

  constructor(private _id: number) {
    this._nextSequence = new Subject();
    this._prevSequence = new Subject();
  }

  register(element: Ref<HTMLElement>, sequence: number): void {
    this._element = element;
    this._sequence = sequence;
    const elm: HTMLElement = (this.element as any).current;
    elm.id = `section-${this._id}`;
  }

  get element(): Ref<HTMLElement> {
    if (!this._element) throw new Error("Section not registered");
    return this._element;
  }

  get sequence(): number {
    if (!this._sequence) throw new Error("Section not registered");
    return this._sequence;
  }

  nextSequence(): void {
    if (this._activeSequence > this._sequence - 1)
      throw new Error("Cannot go to next sequence");
    this._activeSequence++;
    this._nextSequence.next();
  }

  prevSequence(): void {
    if (this._activeSequence === 0)
      throw new Error("Cannot go to previous sequence");
    this._activeSequence--;
    this._prevSequence.next();
  }

  activate(): void {
    const elm: HTMLElement = (this.element as any).current;
    console.log('activated');
    // const link = document.createElement('a');
    // link.href = `#${elm.id}`;
    // link.click();
    document.getElementById(`section-${this._id}`)?.scrollIntoView({ behavior: 'smooth' });
    // queueMicrotask(() => {
    //   console.log('executed')
    //   elm.scrollIntoView({ behavior: "smooth" })
    // });
  }

  get on(): { [key: string]: Observable<void> } {
    return {
      prev: this._prevSequence,
      next: this._nextSequence,
    };
  }
}

class ParallaxService {
  private _sections: { [key: number]: Section };
  private _activeSection: number = 0;
  private _deepScrollRef: Ref<HTMLElement> = null;

  constructor() {
    this._sections = {};
    window.addEventListener('load', () => this.registerEvent());
  }

  private activeSection(): Section {
    return this._sections[this._activeSection];
  }

  public set deepScroll(ref: Ref<HTMLElement>) { 
    this._deepScrollRef = ref;
  }

  private registerEvent() {
    const parallaxService = this;
    const callback = (function () {
      console.log('trigger')
      let oldScroll = 0;
      let eventLock = false;
      return function __registerEvent(this: Window) {
        if(eventLock) return;
        console.log('event tirggered')
        eventLock = true;
        setTimeout(() => eventLock = false, 1000);
        let scrollDirectionDown = true;
        if (oldScroll > this.scrollY) {
          scrollDirectionDown = false;
        } else {
          scrollDirectionDown = true;
        }
        oldScroll = this.scrollY;
        if (scrollDirectionDown) {
          try {
            parallaxService.activeSection().nextSequence();
          } catch (e) {
            const nextSection = parallaxService._activeSection + 1;
            if (!parallaxService._sections[nextSection]) return;
            parallaxService._activeSection = nextSection;
            parallaxService.getSection(nextSection).activate();
          }
        } else {
          try {
            parallaxService.activeSection().prevSequence();
          } catch (e) {
            if (parallaxService._activeSection === 0) return;
            const prevSection = parallaxService._activeSection - 1;
            parallaxService._activeSection = prevSection;
            parallaxService.getSection(prevSection).activate();
          }
        }
      };
    })();
    window.addEventListener("scroll", callback);
  }

  public getSection(key: number): Section {
    if (!this._sections[key]) this._sections[key] = new Section(key);
    if (!this._activeSection && typeof this._activeSection !== 'number') this._activeSection = key;
    return this._sections[key];
  }
}

export default new ParallaxService();

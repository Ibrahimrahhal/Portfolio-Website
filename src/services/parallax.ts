/* eslint-disable no-return-assign */
/* eslint-disable class-methods-use-this */

import { Observable, BehaviorSubject, Subject } from "rxjs";

class Section {

  private _element!: HTMLElement;
  private _sequence!: number;
  private _activeSequence: number = 0;

  private _nextSequence: Subject<void>;
  private _prevSequence: Subject<void>;

  constructor() {
    this._nextSequence = new Subject();
    this._prevSequence = new Subject();
  }

  register(element: HTMLElement, sequence: number): void {
    this._element = element;
    this._sequence = sequence;
  }

  get element(): HTMLElement {
    if(!this._element) throw new Error("Section not registered");
    return this._element;
  }

  get sequence(): number { 
    if(!this._sequence) throw new Error("Section not registered");
    return this._sequence;
  }

  nextSequence(): void { 
    if(this._activeSequence === this._sequence-1) 
      throw new Error("Cannot go to next sequence");
    this._activeSequence++;
    this._nextSequence.next();
  }

  prevSequence(): void {
    if(this._activeSequence === 0) 
      throw new Error("Cannot go to previous sequence");
    this._activeSequence--;
    this._prevSequence.next();
  }

  activate(): void {
    this.element.scrollIntoView();
  }

  get on(): {[key: string]: Observable<void>} {
    return {
      prev: this._prevSequence,
      next: this._nextSequence,
    }
  }

  
}

class ParallaxService {
  private _sections: {[key: number]: Section};
  private _activeSection: number;

  constructor() {
    this._sections = {};
    this._activeSection = NaN;
    this.registerEvent();
  }

  private activeSection(): Section {
    return this._sections[this._activeSection];
  }

  private registerEvent() {
    const parallaxService = this;
    const callback = (function () {
      let oldScroll = 0;
      return function __registerEvent(this: Window){
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
          } catch(e) {
            const nextSection = parallaxService._activeSection+1;
            if(!parallaxService._sections[nextSection]) return;
            parallaxService._activeSection = nextSection;
            parallaxService.getSection(nextSection).activate();
          }
      } else {
        try {
          parallaxService.activeSection().prevSequence();
        } catch(e) {
          if(parallaxService._activeSection === 0) return;
          const prevSection = parallaxService._activeSection-1;
          parallaxService._activeSection = prevSection;
          parallaxService.getSection(prevSection).activate();
        }
      }
      }
    })();
    window.addEventListener('scroll', callback);
  }


  public getSection(key: number): Section {
    if(!this._sections[key])
      this._sections[key] = new Section;
    if(!this._activeSection) this._activeSection = key;
    return this._sections[key];
  }
}

export default new ParallaxService();

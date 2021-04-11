/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, Suspense, lazy } from "react";
import Lottie from "react-lottie";
import "./animation.scss";

const Animation = (props: any): ReactElement => {
  return <Lottie {...props} />;
};

export default (props: any) => {
  const Compontent = lazy(() => {
    const { animation, options } = props;
    return new Promise((resolve) => {
      import(`../../../public/animations/${animation}.json`).then(
        ({ default: myData }): void => {
          (options || {}).animationData = myData;
          resolve({
            default: (() => {
              return <Animation {...props} />;
            }) as never,
          });
        }
      );
    });
  });
  return (
    <Suspense fallback={<div />}>
      <Compontent />
    </Suspense>
  );
};

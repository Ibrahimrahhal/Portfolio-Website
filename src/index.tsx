import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { I18nProvider } from "@core";
import i18n from "@services/i18n";
import SiteLoader from "@components/site-loader";
import reportWebVitals from "./reportWebVitals";
import "./core";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <I18nProvider i18n={i18n}>
        <SiteLoader load={() => import("./App")} />
      </I18nProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";

import Main from "./Main";

import 'typeface-roboto';

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";


ReactDOM.render(
    <I18nextProvider i18n={i18n}>
      <Main/>
    </I18nextProvider>
  , 
  document.getElementById("root")
);
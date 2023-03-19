// Third party package
import { createAction } from "@reduxjs/toolkit";

// types
import { ApiCallBeganTypes } from "../config/types";

export const apiCallBegan = createAction<ApiCallBeganTypes>('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

export const signoutRequest = createAction('signoutRequest');
import { ResponseModel } from "./responseModel";

export interface SingleResponseModel<T> extends ResponseModel{
    data:T
}
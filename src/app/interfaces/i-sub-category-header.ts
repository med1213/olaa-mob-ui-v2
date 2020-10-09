import { ISubCategory } from "./i-sub-category";

export interface ISubCategoryHeader {
    RefCategoryId: number;
    Name: string;
    OrderIndex: number;
    Items: any[];
}

import { ISubCategoryHeader } from "./i-sub-category-header";

export interface ISubCategoriesContent {
    ImageId: number;
    ImageUrl: string;
    Name: string;
    RefCategoryId: number;
    DataList: ISubCategoryHeader[];
}

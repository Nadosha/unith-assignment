import {ItemPropsType} from "@Types/Item";

export interface DataStateI {
    data: ItemPropsType[] | null;
    error?: string | null;
    loading: boolean;
    active: number | null;
}
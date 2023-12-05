import {useAppSelector} from "@Redux/store";
import {selectData} from "@Redux/reducers";
import {ItemPropsType} from "@Types/Item";

export const useGetItemsList = () => {
    const {data, loading, error} = useAppSelector(
        (state) => selectData(state)
    );

    return {
        data,
        loading,
        error,
    }
}

export const useSelectItemsList = (id?: string | undefined) => {
    const {data, loading, error} = useGetItemsList()

    return {
        data: data?.find((item: ItemPropsType) => item.id === Number(id)),
        loading,
        error,
    }
}
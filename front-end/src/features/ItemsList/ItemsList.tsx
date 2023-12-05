import React from "react";
import ItemCard from "@Components/UI/Cards";
import {Flex} from '@radix-ui/themes';
import {CardsSkeleton} from "@Components/UI/CardsSkeleton";
import {NoData} from "@Components/UI/NoData";
import {useGetItemsList} from "@Hooks/hooks";

const ItemsList = () => {
    const {data: productItems, loading, error} = useGetItemsList()

    if (loading) {
        return (
            <Flex direction="row" gap="2" wrap={"wrap"} justify={'center'}>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
            </Flex>
        );
    }

    if (!productItems?.length) {
        return <NoData/>
    }

    if (!productItems?.length && error) {
        return <div>Something went wrong: <strong>{error}</strong></div>;
    }

    return (
        <>
            <Flex direction="row" gap="2" wrap={"wrap"} justify={'center'}>
                {productItems?.map((item: any) => (
                    <ItemCard key={item.id} {...item} />
                ))}
            </Flex>
        </>
    )

};

export default ItemsList;
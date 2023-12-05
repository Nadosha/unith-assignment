import {Flex} from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";

export const DetailSkeleton = () => {
    return (
        <Flex direction="column" gap="2" key={1} style={{maxWidth: 500, margin: 'auto'}} className={'item-details'}>
            <Skeleton/>
            <Skeleton/>
            <Skeleton height={360} width="100%"/>
            <Skeleton height={34}/>
        </Flex>
    )
}
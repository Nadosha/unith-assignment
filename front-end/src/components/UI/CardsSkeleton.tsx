import {Card, Inset, Text} from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import React from "react";

export const CardsSkeleton = () => {
    return (
        <Card size="2" style={{width: 200}}>
            <Inset clip="padding-box" side="top" pb="current">
                <Skeleton height={140} width="100%"/>
            </Inset>
            <Text as="p" size="3">
                <Skeleton/>
            </Text>
        </Card>
    )
}
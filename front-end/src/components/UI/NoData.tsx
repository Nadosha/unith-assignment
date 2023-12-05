import {Flex, Heading} from "@radix-ui/themes";
import {handleImageError} from "@Utils/handleImageError";
import React from "react";

export const NoData = () => {
    return (
        <Flex direction="column" wrap={"wrap"}>
            <Heading as={'h1'} size="5" align="center">No items to display</Heading>
            <img src='/no-connection.jpeg' alt='no data to display' onError={handleImageError} loading="lazy"
                 style={{
                     display: 'block',
                     objectFit: 'cover',
                     width: '40%',
                     backgroundColor: 'var(--gray-5)',
                     margin: 'auto'
                 }}/>
        </Flex>
    )
}
import {Flex, Heading} from "@radix-ui/themes";
import {handleImageError} from "@Utils/handleImageError";
import React from "react";

export const NotFound = () => {
    return (
        <Flex direction="column" wrap={"wrap"} mt={'9'}>
            <Heading as={'h1'} size="5" align="center">404 | Page not Found</Heading>
            <img src='/404.jpeg' alt='no data to display' onError={handleImageError} loading="lazy"
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
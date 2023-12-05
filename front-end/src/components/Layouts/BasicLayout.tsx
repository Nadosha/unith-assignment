import React from 'react';
import {Box, Heading, Section} from "@radix-ui/themes";
import {Outlet, useLocation} from "react-router-dom";
import {getPageTitle} from "@Utils/getPageTitle";

const BasicLayout = () => {
    const location = useLocation()
    const getPage = getPageTitle(location.pathname);

    return (
        <Section size="2" p="5">
            <Heading as={'h1'} size="9" style={{color: '#508D69'}}>{getPage}</Heading>
            <Box style={{marginTop: '60px'}}>
                <Outlet/>
            </Box>
        </Section>

    );
};

export default BasicLayout;
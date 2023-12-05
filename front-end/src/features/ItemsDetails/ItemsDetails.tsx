import {setActive} from "@Redux/reducers";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "@Redux/store";
import React from "react";
import {handleImageError} from "@Utils/handleImageError";
import {Button, Flex, Heading, Text} from "@radix-ui/themes";
import {DetailSkeleton} from "@Components/UI/DetailSkeleton";
import {useSelectItemsList} from "@Hooks/hooks";
import {NoData} from "@Components/UI/NoData";


const ItemsDetails = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {data, loading, error} = useSelectItemsList(id)
    const navigate = useNavigate();

    if (loading) {
        return <DetailSkeleton/>;
    }

    if (!data) {
        return <NoData/>
    }

    if (!data && error) {
        return <div>Something went wrong: <strong>{error}</strong></div>;
    }

    const buttonHandler = () => {
        dispatch(setActive(Number(data.id)));
        navigate('/');
    }

    return (
        <Flex direction="column" gap="2" key={1} style={{maxWidth: 500, margin: 'auto'}} className={'item-details'}>
            <Heading as={'h1'}>{data.title}</Heading>
            <Text as={'p'} size='3'>{data.description}</Text>
            <img src={data.img} alt={data.title} onError={handleImageError} loading="lazy" height={360} width={480}
                 style={{
                     display: 'block',
                     objectFit: 'cover',
                     width: '100%',
                     maxHeight: 360,
                     backgroundColor: 'var(--gray-5)',
                 }}/>
            <Button onClick={buttonHandler}>Go Home</Button>
        </Flex>
    );
};

export default ItemsDetails;
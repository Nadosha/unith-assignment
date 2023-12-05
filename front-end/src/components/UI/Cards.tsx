import {Link} from "react-router-dom";
import {urlify} from "@Utils/urlify";
import {useAppSelector} from "@Redux/store";
import React from "react";
import {Card, Inset, Strong, Text} from "@radix-ui/themes";
import {handleImageError} from "@Utils/handleImageError";


const ItemCard = (item: any) => {
    const getLink = `${item.id}/${urlify(item.title)}`
    const active = useAppSelector((state) => state.data.active) === item.id;

    return (
        <Link to={getLink} className={active ? 'active' : ''}>
            <Card size="2" style={{width: 200}} key={item.id}>
                <Inset clip="padding-box" side="top" pb="current">
                    <img
                        src={item.img}
                        alt={item.title}
                        height={140} width={200}
                        style={{
                            display: 'block',
                            objectFit: 'cover',
                            width: '100%',
                            height: 140,
                            backgroundColor: 'var(--gray-5)',
                        }}
                        onError={handleImageError}
                        loading="lazy"
                    />
                </Inset>
                <Text as="p" size="3">
                    <Strong>{item.title}</Strong> {item.description}
                </Text>
            </Card>
        </Link>
    );
}

export default ItemCard;
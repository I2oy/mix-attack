import React from 'react';
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";

type ItemCardProps = {
    id: string;
    name: string;
    removeCallback: (id: string) => void;
}

const ItemCard = (props: ItemCardProps) => {
    return (
        <div className={"flex flex-row justify-between items-stretch"}>
            <div className={"flex-grow px-3 py-4 border-gray-100 rounded-md border shadow bg-neutral-100"}>{props.name}</div>
            <Button variant={"ghost"} size={"manual"} onClick={() => props.removeCallback(props.id)} className={"ml-4 px-5 text-red-500 border border-transparent hover:border-red-300 hover:bg-transparent hover:text-red-300"}><X /></Button>
        </div>
    );
};

export default ItemCard;

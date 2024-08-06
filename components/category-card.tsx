"use client"

import {CategoryForm} from "@/components/forms/category-form";
import {ItemForm} from "@/components/forms/item-form";
import {useState} from "react";
import ItemCard from "@/components/item-card";

type ItemEntry = {
    id: string,
    name: string
}

export default function CategoryCard() {

    const [items, setItems] = useState<ItemEntry[]>([]);
    const [category, setCategory] = useState<string>('');

    const addItem = (newItem: string) => {
        if (newItem) {
            const uuid = crypto.randomUUID();
            setItems([{id: uuid, name: newItem}, ...items]);
        }
    }

    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
            <div className="flex flex-col gap-2 w-96">
                <div className="mb-6">
                <CategoryForm />
                <ItemForm onAddCallback={addItem} />
                    </div>
                {items.map((item, i) => (
                    <ItemCard key={item.id} id={item.id} name={item.name} removeCallback={removeItem}></ItemCard>
                ))}
            </div>
    );
}

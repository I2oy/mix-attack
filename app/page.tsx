import {ItemForm} from "@/components/forms/item-form";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import CategoryCard from "@/components/category-card";

export default function Home() {
    return (
        <main className="min-h-dvh">
            <div className="pt-[15vh] flex flex-col items-center justify-center">
                <div className="mb-28">
                    <h1 className="scroll-m-20 font-extrabold tracking-tight text-5xl text-neutral-50">MixAttack</h1>
                    <p className="text-neutral-100">
                        Get started mixing
                    </p>
                </div>
                <div className="flex flex-row items-start justify-evenly gap-24">
                    <CategoryCard />
                    <Button className="h-24 w-24 border-dashed border-[6px] border-neutral-600 shadow-none bg-transparent dark" variant={"outline"}>
                        <Plus className="h-10 w-14 text-neutral-50"/>
                    </Button>
                </div>
            </div>
        </main>
    );
}

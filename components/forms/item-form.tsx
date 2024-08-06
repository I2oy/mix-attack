"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {toast} from "@/components/ui/use-toast"
import {Plus} from "lucide-react";

const FormSchema = z.object({
    itemName: z.string().min(1, {
        message: "Item name must be at least 1 characters.",
    }),
})

type ItemFormProps = {
    onAddCallback: (addItem: string) => void
}

export function ItemForm(props: ItemFormProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            itemName: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        props.onAddCallback(data.itemName);
        form.reset();
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="itemName"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                {/*TODO: Make placeholder a random object each time*/}
                                <div className="flex flex-row gap-4 justify-items-stretch">
                                    <Input placeholder="something" className="dark bg-neutral-600 text-neutral-50" {...field} />
                                    <Button type="submit" className="dark"><Plus className="h-4 w-8"/></Button>
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

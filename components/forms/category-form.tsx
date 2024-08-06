
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import {Plus} from "lucide-react";

const FormSchema = z.object({
  categoryName: z.string().min(1, {
    message: "Item name must be at least 1 characters.",
  }),
})

export function CategoryForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      categoryName: "Something Here",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
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
                  name="categoryName"
                  render={({field}) => (
                      <FormItem>
                        <FormControl>
                          {/*TODO: Make placeholder a random object each time*/}
                            <Input placeholder="something" className="pl-0 text-2xl border-0 focus-visible:ring-0 shadow-[0px] dark text-neutral-50"  {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                  )}
              />
            </form>
          </Form>
  )
}

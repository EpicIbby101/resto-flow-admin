"use client";

import * as z from "zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

// Here we create a schema to ensure that there is at least one character in the input form
const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();

  // Used to assign which elements need to be disabled when the form is loading.
  const [loading, setLoading] = useState(false);

  // 1: We need to define the hook for our form.
  // What we can do is define a variable and import useForm from react-hook-form
  // Then in the angle brackets we can call z.infer and define the typeof to formSchema.
  // In the following parentheses and brackets we add a resolver so our form can be validated using zod.
  // Then we want to define our default values in the form of name as an empty string.
  const storeForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2: We now need to define an onSubmit function which will be triggered in the form in the jsx.
  // For now it will be an empty function.
  // This will be an async function, so async/await as we'll make some calls.
  // In the async brackets we can define z.infer and define the typeof to formSchema.
  // We want to use this function to create a new store. Since it's currently still an empty function, we can just console.log the values.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/stores", values);

      // Refreshes the entire page in response to creating store to reflect change.
      window.location.assign(`/${response.data.id}`);
      toast.success("Store created. Please wait.");
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // 3: In between the modal, we want to create our actual form.
    // We want to import the form component from ui and spread the entire form that we defined above into this form.
    // Within the Form component, we want to define the actual form html element and call the handleSubmit function using onSubmit.
    // Next we want to define the FormField within the html form element. We import this from ui/form.
    // Within the FormField we'll define a couple of props => control, name and render. This is a self-closing element.
    // Now inside the FormField, we want to render the FormItem from ui/form.
    // Within the FormItem, we want to define the actual form items like the FormLabel, FormControl in which we add the Input. The input will hold a placeholder and we also pass in the field prop which is taken from the library.

    // 4: Outside of the FormItems we want to render out our buttons for cancel and continue.
    // We can import and use the Button component from ShadUI.
    // For the cancel button we can add a variant for styling and an onClick that calls the storeModal.onClose that closes the modal.
    // For the continue button we can instead make it a type of submit which calls the onSubmit from the code in (step 3).
    // Finally we can add a message to the form if user has not filled in form using FormMessage imported by ui/form.
    <Modal
      title="Create Store"
      description="Add a new store to manage your products"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...storeForm}>
            <form onSubmit={storeForm.handleSubmit(onSubmit)}>
              <FormField
                control={storeForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <input
                        disabled={loading}
                        className="w-full border rounded-md py-1"
                        placeholder="Name your store..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end">
                <Button
                  disabled={loading}
                  variant="outline"
                  onClick={storeModal.onClose}
                >
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FormProvider } from "react-hook-form";
import TextField from "./TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TextFieldArray from "./TextFieldArray";
import useMutateCivilizationForm from "@/Hooks/useMutateCivilizationForm";

function MutateModal({ isEditing, setIsEditing, selectedCivilization }) {
    const {
        methods,
        handleSubmit,
        append,
        controlledFields,
        isUpdating,
        onSubmit,
    } = useMutateCivilizationForm({ selectedCivilization });

    useEffect(() => {
        if (isEditing) return;
        methods.reset({ civilization_bonus: [""] });
    }, [isEditing]);

    return (
        <Dialog.Root open={isEditing} onOpenChange={setIsEditing}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/30 fixed inset-0" />
                <FormProvider {...methods}>
                    <Dialog.Content
                        className="fixed grid grid-rows-[auto,1fr,auto] inset-0 self-center overflow-y-auto h-fit mx-auto my-auto max-w-[450px] max-h-[90vh] w-[90vw] bg-gray rounded-xl shadow-lg p-3"
                        forceMount={true}
                    >
                        <section className="flex justify-between  px-1">
                            <h2 className="text-primary text-2xl font-bold mb-2">
                                {isUpdating
                                    ? "Update Civilization"
                                    : "Create Civilization"}
                            </h2>
                            <FontAwesomeIcon
                                className="w-[40px] fa-xl text-lightblue leading-1 mt-1 cursor-pointer hover:text-primary"
                                icon={faXmark}
                                onClick={() => setIsEditing(false)}
                            />
                        </section>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-3 overflow-y-auto p-1 pr-5"
                        >
                            <div className="grid grid-cols-2 gap-3">
                                <TextField
                                    fieldName="name"
                                    label="Name"
                                    placeholder="Enter Name"
                                />

                                <TextField
                                    label="Expansion Name"
                                    fieldName="expansion"
                                    placeholder="Enter expansion title"
                                />
                            </div>
                            <TextField
                                label="Army Type"
                                fieldName="army_type"
                                placeholder="Enter army type"
                            />

                            <TextField
                                label="Unique Unit"
                                fieldName="unique_unit"
                                placeholder="Enter unique unit"
                            />

                            <TextField
                                label="Unique Tech"
                                fieldName="unique_tech"
                                placeholder="Enter unique tech"
                            />

                            <TextField
                                label="Team Bonus"
                                fieldName="team_bonus"
                                placeholder="Enter team bonus"
                            />

                            <TextFieldArray
                                controlledFields={controlledFields}
                                append={append}
                            />
                            {/* Hidden submit used as a quick way to enable submit onEnter */}
                            <input type="submit" className="hidden" />
                        </form>
                        <section className="pt-3 px-1">
                            <button
                                onClick={handleSubmit(onSubmit)}
                                className="cursor-pointer focus:outline-none focus:ring-primary-400 focus:ring-2 bg-green px-3 py-1 w-fit rounded-lg text-tan font-bold hover:bg-green-400"
                            >
                                {isUpdating ? "Update" : "Create"}
                            </button>
                        </section>
                    </Dialog.Content>
                </FormProvider>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default MutateModal;

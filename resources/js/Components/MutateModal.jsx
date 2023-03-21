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
                <Dialog.Content
                    className="fixed inset-0 self-center h-fit mx-auto my-auto max-w-[450px] bg-gray rounded-xl shadow-lg p-3"
                    forceMount={true}
                >
                    <div className="flex justify-between w-[90vw]">
                        <h2 className="text-primary text-2xl font-bold mb-2">
                            {isUpdating
                                ? "Create Civilization"
                                : "Update Civilization"}
                        </h2>
                        <FontAwesomeIcon
                            className="w-[40px] fa-xl text-lightblue leading-1 mt-1 cursor-pointer hover:text-primary"
                            icon={faXmark}
                            onClick={() => setIsEditing(false)}
                        />
                    </div>
                    <FormProvider {...methods}>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-3 "
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

                            <input
                                type="submit"
                                className="cursor-pointer bg-green px-2 py-1 w-fit rounded-lg text-tan font-bold hover:bg-green-400"
                            />
                        </form>
                    </FormProvider>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default MutateModal;

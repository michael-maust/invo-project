import React from "react";
import TextField from "./TextField";

function TextFieldArray({ controlledFields, append }) {
    return (
        <>
            <div className="flex gap-3 items-center mt-3">
                <h3 className="text-primary font-bold italic pb-0 leading-0">
                    Civilization Bonuses
                </h3>

                <button
                    type="button"
                    className="cursor-pointer bg-green px-2 py-px w-fit rounded-lg text-tan font-bold hover:bg-green-400"
                    onClick={() =>
                        append({
                            name: "",
                        })
                    }
                >
                    + Add
                </button>
            </div>
            {controlledFields.map((_, index) => {
                return (
                    <TextField
                        fieldName={`civilization_bonus.${index}`}
                        placeholder="Enter civilization bonus"
                    />
                );
            })}
        </>
    );
}

export default TextFieldArray;

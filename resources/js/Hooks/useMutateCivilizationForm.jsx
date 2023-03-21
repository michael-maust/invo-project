import { useEffect, useCallback } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    expansion: z.string().min(1, "Expansion title is required"),
    army_type: z.string().min(1, "Army type is required"),
    unique_unit: z.string().min(1, "Unique unit is required"),
    unique_tech: z.string().min(1, "Unique tech is required"),
    team_bonus: z.string().min(1, "Team bonus is required"),
});

function useMutateCivilizationForm({ selectedCivilization }) {
    const parsedBonusArray = selectedCivilization?.civilization_bonus
        ? JSON.parse(selectedCivilization?.civilization_bonus)
        : [""];

    const methods = useForm({
        defaultValues: {
            civilization_bonus: [],
            ...selectedCivilization,
        },
        resolver: zodResolver(schema),
    });
    const { handleSubmit, reset, control, watch } = methods;

    const { fields, append } = useFieldArray({
        control,
        name: "civilization_bonus",
    });

    const watchFieldArray = watch("civilization_bonus");
    console.log({ watchFieldArray, fields });
    const controlledFields = fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldArray[index],
        };
    });

    useEffect(() => {
        reset({
            ...selectedCivilization,
            civilization_bonus: parsedBonusArray,
        });
    }, [selectedCivilization]);

    const isUpdating = selectedCivilization === null;

    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return {
        methods,
        handleSubmit,
        append,
        controlledFields,
        isUpdating,
        onSubmit,
    };
}

export default useMutateCivilizationForm;
import {
    faTag,
    faShieldHalved,
    faGear,
    faUserPlus,
    faTrash,
    faPencil,
} from "@fortawesome/free-solid-svg-icons";
import IconRow from "@/Components/IconRow";
import TooltipButton from "./TooltipButton";
import { useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

function Card({ civilization, setIsEditing, setSelectedCivilization }) {
    const {
        id,
        name,
        expansion,
        army_type,
        unique_unit,
        unique_tech,
        team_bonus,
        civilization_bonus,
    } = civilization;

    const handleDelete = () => {
        Inertia.delete(route("civilization.destroy", id));
    };

    return (
        <>
            <div className="bg-gray p-3 my-3 first:mt-0 rounded-lg break-inside-avoid w-full justify-start flex flex-col gap-2 shadow-md">
                <section className="flex justify-between">
                    <div className="">
                        <p className="text-[1.5rem] leading-none text-primary font-bold pb-0">
                            {name}
                        </p>
                        <p className="text-tan italic text-base">{expansion}</p>
                    </div>

                    <div className="flex gap-1 justify-start items-start">
                        <TooltipButton
                            icon={faTrash}
                            title={"Remove"}
                            onClick={() => {
                                console.log("Remove");
                                handleDelete();
                            }}
                        />

                        <TooltipButton
                            icon={faPencil}
                            title={"Edit"}
                            onClick={() => {
                                console.log("Remove");
                                setIsEditing(true);
                                setSelectedCivilization(civilization);
                            }}
                        />
                    </div>
                </section>

                <hr className="border-none rounded-full h-1 bg-lightgray w-2/5" />

                <div className="flex flex-col gap-3">
                    {/* TODO: add tooltips on icons */}
                    <IconRow icon={faTag} title={army_type} />
                    <IconRow icon={faShieldHalved} title={unique_unit} />
                    <IconRow icon={faGear} title={unique_tech} />
                    <IconRow icon={faUserPlus} title={team_bonus} />
                </div>

                <section className="">
                    <p className="text-primary text-lg font-bold italic">
                        Civilization Bonuses
                    </p>

                    <ul className="pl-8 pr-3 flex gap-1 flex-col">
                        {JSON.parse(civilization_bonus)?.map((bonus) => (
                            <li
                                key={bonus}
                                className="list-disc list-outside text-tan leading-0"
                            >
                                {bonus}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
}

export default Card;

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

function Card({ civilization }) {
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
    return (
        <div
            key={id}
            className="bg-gray p-3 rounded-lg max-w-xs w-[90vw] justify-start flex flex-col gap-2 shadow-md"
        >
            <section className="flex justify-between">
                <div className="">
                    <p className="text-[1.5rem] leading-none text-primary font-bold pb-0">
                        {name}
                    </p>
                    <p className="text-tan italic text-base">{expansion}</p>
                </div>

                <div className="flex gap-1">
                    <TooltipButton
                        icon={faTrash}
                        title={"Remove"}
                        onClick={() => console.log("Remove")}
                    />

                    <TooltipButton
                        icon={faPencil}
                        title={"Edit"}
                        onClick={() => console.log("Remove")}
                    />
                </div>
            </section>

            <hr className="border-none rounded-full h-1 bg-lightgray w-2/5" />

            <div className="flex flex-col gap-1">
                <IconRow icon={faTag} title={army_type} />
                <IconRow icon={faShieldHalved} title={unique_unit} />
                <IconRow icon={faGear} title={unique_tech} />
                <IconRow icon={faUserPlus} title={team_bonus} />
            </div>
        </div>
    );
}

export default Card;

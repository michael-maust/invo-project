import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Tooltip from "@radix-ui/react-tooltip";

function IconRow({ icon, title, tooltip }) {
    return (
        <Tooltip.Provider>
            <Tooltip.Root delayDuration={0}>
                <div className="grid grid-cols-[20px,1fr] gap-2">
                    <Tooltip.Trigger asChild>
                        <FontAwesomeIcon
                            className="w-[20px] text-lightblue leading-1 mt-1"
                            icon={icon}
                        />
                    </Tooltip.Trigger>
                    <p className="text-tan font-medium leading-1">{title}</p>
                </div>
                <Tooltip.Content
                    sideOffset={4}
                    className=" px-2 bg-lightgray p-1 shadow-md border border-gray rounded-md"
                >
                    <p className="text-base leading-none text-tan">{tooltip}</p>
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

export default IconRow;

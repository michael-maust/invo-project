import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Tooltip from "@radix-ui/react-tooltip";

function TooltipButton({ icon, title, onClick }) {
    return (
        <Tooltip.Provider>
            <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                    <button
                        onClick={onClick}
                        className="flex focus:outline-none focus:ring-primary-400 focus:ring-2 items-center gap-2 group/button bg-lightgray px-3 py-2 h-fit rounded-lg text-tan hover:text-primary transition-all duration-300 relative overflow-hidden"
                    >
                        <FontAwesomeIcon className="text-base" icon={icon} />
                    </button>
                </Tooltip.Trigger>

                <Tooltip.Content
                    sideOffset={4}
                    className=" px-2 bg-lightgray p-1 shadow-md border border-gray rounded-md"
                >
                    <p className="text-base leading-none text-tan">{title}</p>
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

export default TooltipButton;

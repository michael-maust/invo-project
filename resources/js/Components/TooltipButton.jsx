import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

function TooltipButton({ icon, title, onClick }) {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger>
                    <button
                        onClick={onClick}
                        className="flex items-center gap-2 group/button bg-lightgray px-3 py-2 h-fit  rounded-lg text-primary hover:text-primary-600 transition-all duration-500 relative overflow-hidden"
                    >
                        <FontAwesomeIcon className="text-base" icon={icon} />
                    </button>
                </Tooltip.Trigger>

                <Tooltip.Content>
                    <p className="text-base leading-none">{title}</p>
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

export default TooltipButton;

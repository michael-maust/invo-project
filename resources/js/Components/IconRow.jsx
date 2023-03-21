import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconRow({ icon, title }) {
    return (
        <div className="grid grid-cols-[20px,1fr] gap-2">

            <FontAwesomeIcon className="w-[20px] text-lightblue leading-1 mt-1" icon={icon} />
            <p className="text-tan font-medium leading-1">{title}</p>
        </div>
    );
}

export default IconRow;

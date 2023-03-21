import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconRow({ icon, title }) {
    return (
        <div className="grid grid-cols-[20px,1fr]  gap-2 items-center">
            <FontAwesomeIcon className="w-[20px] text-lightblue" icon={icon} />
            <p className="text-tan font-medium">{title}</p>
        </div>
    );
}

export default IconRow;

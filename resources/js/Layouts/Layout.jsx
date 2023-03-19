import BuildingVector from "public/pictures/BuildingVector.svg";
import cx from "clsx";

export default function Layout({ children, className }) {
    return (
        <div className="min-h-screen bg-lightgray flex flex-1 flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
            <header className="flex justify-between w-full py-3 px-6 items-center bg-gray">
                <img src={BuildingVector} />
                Header
            </header>

            <div
                className={cx(
                    "w-full flex-1 flex p-3 overflow-y-auto",
                    className
                )}
            >
                {children}
            </div>

            <footer className="p-3 bg-gray w-full flex items-center justify-center">
                <p className="text-tan whitespace-pre-wrap">
                    <span className="text-primary font-bold">
                        Laravel Project{" "}
                    </span>
                    // Michael Maust
                </p>
            </footer>
        </div>
    );
}

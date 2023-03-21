import cx from "clsx";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Layout({ children, className }) {
    return (
        <div className="min-h-screen relative bg-lightgray flex flex-1 flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
            <header className="flex relative flex-col justify-center w-full p-3 pt-6 items-center ">
                <ApplicationLogo className="w-auto h-[75px] fill-tan text-gray-800 dark:text-gray-200" />

                <p className=" text-tan font-serif text-[3rem] leading-0">Civilize</p>
            </header>

            <div
                className={cx(
                    "w-full flex-1 flex p-3 overflow-y-auto",
                    className
                )}
            >
                {children}
            </div>

            <footer className="p-3 mt-6 bg-gray w-full flex items-center justify-center">
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

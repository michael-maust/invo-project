import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useCallback, useState } from "react";

import Card from "@/Components/Card";
import Toolbar from "@/Components/Toolbar";

export default function Welcome(props) {
    const [query, setQuery] = useState("");
    const data = usePage().props;
    const civilizations = props.civilizations;

    console.log(query)

    console.log(civilizations);

    const handleCreate = useCallback(() => {
        console.log("Handle Create");
    }, []);

    return (
        <>
            <Head title="Welcome" />
            <Layout className="flex flex-col items-center justify-center">
                <Toolbar
                    onQueryChange={setQuery}
                    query={query}
                    onCreate={handleCreate}
                />
                <div className="xl:columns-4 columns-1 md:columns-2 lg:columns-3 gap-3 [column-fill:_balance] max-w-[90vw]">
                    {civilizations.map((civilization) => (
                        <Card
                            key={civilization.id}
                            civilization={civilization}
                        />
                    ))}
                </div>
            </Layout>
        </>
    );
}

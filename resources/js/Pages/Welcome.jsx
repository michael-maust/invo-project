import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { Link, useForm, usePage } from "@inertiajs/react";

import Card from "@/Components/Card";

export default function Welcome(props) {
    const data = usePage().props;
    const civilizations = props.civilizations;

    console.log(civilizations);
    return (
        <>
            <Head title="Welcome" />
            <Layout className="flex items-center justify-center">
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

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
            <Layout className="flex flex-wrap gap-3 items-center justify-center">
                {civilizations.map((civilization) => (
                    <Card civilization={civilization} />
                ))}
            </Layout>
        </>
    );
}

import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Layout className="flex flex-col items-center">
                <div className="bg-gray p-3 rounded-lg">Card</div>
            </Layout>
        </>
    );
}

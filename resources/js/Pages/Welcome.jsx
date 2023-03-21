import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { useCallback, useState, useMemo } from "react";

import Card from "@/Components/Card";
import Toolbar from "@/Components/Toolbar";
import MutateModal from "@/Components/MutateModal";

export default function Welcome(props) {
    const [query, setQuery] = useState("");
    const [isEditing, setIsEditing] = useState("");
    const [selectedCivilization, setSelectedCivilization] = useState();
    const civilizations = props.civilizations;

    const handleCreate = useCallback(() => {
        console.log("Handle Create");
        setIsEditing(true)
        setSelectedCivilization(null)
    }, []);

    // TODO: change filter to actually query the database to improve user performance
    const filteredData = useMemo(
        () =>
            civilizations.filter(
                (item) =>
                    item.name.toLowerCase().includes(query.toLowerCase()) ||
                    item.expansion.toLowerCase().includes(query.toLowerCase())
            ),

        [query, civilizations]
    );

    return (
        <>
            <Head title="Welcome" />
            <Layout className="flex flex-col items-center">
                <Toolbar
                    onQueryChange={setQuery}
                    query={query}
                    onCreate={handleCreate}
                />
                <div className="xl:columns-4 columns-1 md:columns-2 lg:columns-3 gap-3 [column-fill:_balance] max-w-[90vw]">
                    {filteredData.map((civilization) => (
                        <Card
                            key={civilization.id}
                            civilization={civilization}
                            setIsEditing={setIsEditing}
                            setSelectedCivilization={setSelectedCivilization}
                        />
                    ))}
                    <MutateModal
                        setIsEditing={setIsEditing}
                        isEditing={isEditing}
                        selectedCivilization={selectedCivilization}
                    />
                </div>
            </Layout>
        </>
    );
}

import {useQuery} from "@apollo/client";
import {GET_CONTINENTS} from "../apollo/queries";
import {Link} from "react-router-dom";

export default function Root() {
    const {loading, error, data} = useQuery(GET_CONTINENTS)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <h1 className='text-center text-4xl my-10'>Continents</h1>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-20">
                {data.continents.map((continent: any) => (
                    <div
                        key={continent.code}
                        className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                    >
                        <div className="flex-shrink-0">
                            <p>{continent.emoji}</p>
                        </div>
                        <div className="min-w-0 flex-1">
                            <Link to={`/${continent.code}/countries`} className="focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <p className="text-sm font-medium text-gray-900">{continent.name}</p>
                                <p className="truncate text-sm text-gray-500">{continent.countries.length} pays.</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

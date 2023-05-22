import {useParams} from "react-router-dom";
import {GET_COUNTRY} from "../apollo/queries";
import {useQuery} from "@apollo/client";
import BackButton from "../components/BackButton";

export default function CountriesDetails() {
    const {countryCode} = useParams();

    const {loading, error, data} = useQuery(GET_COUNTRY, {
        variables: {code: countryCode}
    })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const { name, native, languages, capital } = data.country;

    return (
        <>
            <BackButton />
            <section className="overflow-hidden bg-white shadow sm:rounded-lg my-8 mx-32 mt-15">
                <div className="px-4 py-6 sm:px-6">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">{name} Informations</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Details</p>
                </div>
                <div className="border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Capital</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{capital}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Native</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{native}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Languages</dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                    {languages.map((language: any, index: string) => (
                                        <li key={index} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">{language.name}</span>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </section>
        </>
    );
}
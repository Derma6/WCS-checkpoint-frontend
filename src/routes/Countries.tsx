import {Link, useParams} from "react-router-dom";
import {GET_COUNTRIES} from "../apollo/queries";
import {useQuery} from "@apollo/client";
import BackButton from "../components/BackButton";
import CountrySearch from "../components/CountrySearch";
import {useState} from "react";
import {countriesFilter} from "../utils/CountriesFilter";

export default function Countries() {
    const {continentCode} = useParams();
    const [search, setSearch] = useState('');

    const {loading, error, data} = useQuery(GET_COUNTRIES, {
        variables: {code: continentCode}
    })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const countries = search ? countriesFilter(data.continent.countries, search) : data.continent.countries;

    return (
        <>
            <BackButton />
            <h1 className='text-center text-4xl my-10'>Continents : {data.continent.name}</h1>
            <CountrySearch setSearch={setSearch}/>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-20">
                {countries.map((country: any) => (
                    <div
                        key={country.code}
                        className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                    >
                        <div className="flex-shrink-0">
                            <p>{country.emoji}</p>
                        </div>
                        <div className="min-w-0 flex-1">
                            <Link to={`/${continentCode}/country/${country.code}`} className="focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <p className="text-sm font-medium text-gray-900">{country.name}</p>
                                <p className="truncate text-sm text-gray-500">Capital : {country.capital}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
import {GlobeAltIcon} from "@heroicons/react/24/outline";

interface CountrySearchProps {
    setSearch: (search: string) => void;
}

export default function CountrySearch ({setSearch}: CountrySearchProps) {

    const handleChange = (e: any) => {
        setSearch(e.target.value);
    }

    return (
        <div className='w-1/3 m-auto my-5'>
            <label htmlFor="search" className="block text-sm font-medium leading-6 text-gray-900">
                Quick search
            </label>
            <div className="relative mt-2 flex items-center">
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full rounded-md border-0 py-1.5 pr-14 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <GlobeAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
            </div>
        </div>
    )
}
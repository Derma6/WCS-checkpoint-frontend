export function countriesFilter(countries: any[], search: string) {
    return countries.filter((country) => {
        return country.name.toLowerCase().includes(search.toLowerCase());
    });
}
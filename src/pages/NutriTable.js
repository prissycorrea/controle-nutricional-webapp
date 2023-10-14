import SearchBar from '../components/TablePage/Search';
import Filter from '../components/TablePage/Filter';

const NutriTable = () => {
    return (
        <div>
        <SearchBar onSearchChange={(e) => console.log(e.target.value)} />
        <Filter />
        </div>
    );
};

export default NutriTable;
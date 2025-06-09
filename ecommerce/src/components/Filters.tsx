import { useCategories } from "../hooks/useCategories";

function SkeletonFilters() {
    return (
        <aside className='w-1/4 p-4 bg-white pb-4 animate-pulse'>
            <div className="mb-4">
                <div className="h-4 bg-gray-200 w-1/3 mb-4 rounded"/>
                <div className="h-10 bg-gray-200 rounded-md"/>
            </div>

            <div className="mb-4">
                <div className="h-4 bg-gray-200 w-1/3 mb-4 rounded"/>
                <div className="flex flex-wrap gap-2">
                    {[...Array(4)].map((_,i) => (
                        <div key={i} className="h-8 bg-gray-200 w-20 rounded-full"/>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default function Filters({ filters, onFilter }: FiltersProps) {
    const { data, error, isLoading } = useCategories()
    if (isLoading) { return <SkeletonFilters />; }
    if (error) {
        return (
            <div className="text-center text-red-500">
                Failed to load categories. Please try again later.
            </div>
        )
    };

    return (
        <aside className='w-1/4 p-4 bg-white pb-4'>
            <div className='mb-4'>
                <h3 className='text-lg font-semibold mb-4'>Sort by</h3>
                <select 
                    onChange={(e) => onFilter({ ...filters, sort: e.target.value })}
                    className='w-full p-2 border rounded-md'
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Decending</option>
                </select>
            </div>

            <div className='mb-4'>
                <h3 className='text-lg font-semibold mb-4'>Categories</h3>
                <div className='flex flex-wrap gap-2'>
                    <button 
                        className={`px-3 py-1 rounded-full capitalize ${
                            filters?.category === ''
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                        onClick={() => onFilter({ ...filters, category: '' })}
                    >
                        All products
                    </button>
                    {data.map((category: string) => (
                        <button 
                            key={category} 
                            className={`px-3 py-1 rounded-full capitalize ${
                                filters?.category === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                            onClick={() => onFilter({ ...filters, category })}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    )
}

type FilterType = {
    category?: string,
    sort?: string,
    maxPrice?: number,
};

type FiltersProps = { 
    filters?: FilterType,
    onFilter: (filter: FilterType) => void,
};
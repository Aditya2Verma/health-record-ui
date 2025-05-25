import React from 'react';

export default function SearchBar({ filters, setFilters }) {
  const handleSearch = (e) => {
    setFilters({ ...filters, searchTerm: e.target.value });
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by summary or notes..."
        value={filters.searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border rounded shadow-sm"
      />
    </div>
  );
}

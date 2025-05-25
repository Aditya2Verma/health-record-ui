import React from 'react';

export default function FilterBar({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <select
        name="type"
        value={filters.type}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">All Record Types</option>
        <option value="vitals">Vitals</option>
        <option value="medication">Medication</option>
        <option value="diagnostics">Diagnostics</option>
      </select>

      <input
        type="date"
        name="startDate"
        value={filters.startDate}
        onChange={handleChange}
        className="p-2 border rounded"
      />

      <input
        type="date"
        name="endDate"
        value={filters.endDate}
        onChange={handleChange}
        className="p-2 border rounded"
      />
    </div>
  );
}

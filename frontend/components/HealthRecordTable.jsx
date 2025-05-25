import React, { useEffect, useState } from 'react';

export default function HealthRecordTable({ filters }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      let query = `?patientId=123`;

      if (filters.type) query += `&type=${filters.type}`;
      if (filters.startDate) query += `&startDate=${filters.startDate}`;
      if (filters.endDate) query += `&endDate=${filters.endDate}`;
      if (filters.searchTerm) query += `&search=${filters.searchTerm}`;

      const response = await fetch(`/api/patient-records${query}`);
      const data = await response.json();
      setRecords(data);
    };

    fetchRecords();
  }, [filters]);

  return (
    <div className="overflow-x-auto shadow-md rounded border bg-white">
      <table className="min-w-full">
        <thead className="bg-blue-100 text-blue-800">
          <tr>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Summary</th>
            <th className="p-2 text-left">Severity</th>
            <th className="p-2 text-left">Physician</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{record.date}</td>
                <td className="p-2 capitalize">{record.type}</td>
                <td className="p-2">{record.summary}</td>
                <td className="p-2">{record.severity}</td>
                <td className="p-2">{record.physician}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-4 text-gray-500" colSpan="5">No records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

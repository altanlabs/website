import React from 'react';
import { Layout } from '@/layout';

const sampleData = [
  { match: 'Team A vs Team B', score: '2-1', date: '2023-10-01' },
  { match: 'Team C vs Team D', score: '0-0', date: '2023-10-02' },
  { match: 'Team E vs Team F', score: '3-2', date: '2023-10-03' },
];

const FootballResults = () => {
  return (
    <Layout showSidebar={false} showHeader={true} showFooter={true}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Football Results</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Match</th>
              <th className="py-2">Score</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((result, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{result.match}</td>
                <td className="border px-4 py-2">{result.score}</td>
                <td className="border px-4 py-2">{result.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default FootballResults;

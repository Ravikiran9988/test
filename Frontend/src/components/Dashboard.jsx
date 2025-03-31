import React, { useState, useEffect } from "react";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log("Fetching dashboard data...");
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay
        const fetchedData = [
          { title: "Recent Analysis", description: "View your latest AI-powered skin analysis." },
          { title: "Product Recommendations", description: "Check AI-recommended skincare products for you." },
          { title: "Consult a Dermatologist", description: "Connect with a skincare expert for further guidance." },
        ];
        setData(fetchedData);
      } catch (err) {
        if (data.length === 0) setError("Failed to load dashboard data."); // Only set error if data is empty
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
        Your Skincare Dashboard
      </h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loading ? (
        <p className="text-center text-gray-500">Loading dashboard...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <DashboardCard key={index} title={item.title} description={item.description} buttonText="View More" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

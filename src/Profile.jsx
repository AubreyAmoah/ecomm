import React from "react";

const Profile = () => {
  // Simulated user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123 456 7890",
    address: "1234 Elm Street, Springfield, USA",
  };

  // Simulated purchase history
  const purchaseHistory = [
    {
      id: 1,
      product: "Recycle Boucle Knit Cardigan",
      date: "2024-08-21",
      price: 120,
    },
    {
      id: 2,
      product: "Reversible Angora Cardigan",
      date: "2024-07-15",
      price: 140,
    },
    {
      id: 3,
      product: "Classic Leather Bag",
      date: "2024-06-30",
      price: 220,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      {/* User Information */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-bold mb-2">User Information</h3>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
      </div>

      {/* Purchase History */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-2">Purchase History</h3>
        {purchaseHistory.length > 0 ? (
          <ul className="space-y-4">
            {purchaseHistory.map((purchase) => (
              <li key={purchase.id} className="border-b pb-4">
                <p>
                  <strong>Product:</strong> {purchase.product}
                </p>
                <p>
                  <strong>Date of Purchase:</strong> {purchase.date}
                </p>
                <p>
                  <strong>Price:</strong> ${purchase.price}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No purchases yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;

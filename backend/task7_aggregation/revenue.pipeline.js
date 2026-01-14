/**
 * Task 7 – Data Aggregation Pipeline
 *
 * This pipeline calculates total revenue for each category
 * where the quantity sold is greater than 5.
 *
 * Collection: Orders
 * Fields: productName, price, quantity, category
 */

db.orders.aggregate([
  // Step 1: Filter only orders with quantity > 5
  { $match: { quantity: { $gt: 5 } } },

  // Step 2: Group by category and calculate total revenue
  {
    $group: {
      _id: "$category", // group by category
      totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
    }
  },

  // Step 3: Optional – sort by total revenue descending
  { $sort: { totalRevenue: -1 } }
]);

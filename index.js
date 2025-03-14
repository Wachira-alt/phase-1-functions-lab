// Code your solution in this file!
// Function to calculate distance from Scuber HQ (42nd Street) in blocks
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

// Function to convert distance from blocks to feet (1 block = 264 feet)
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

// Function to calculate distance traveled in feet between two locations
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function to calculate fare price based on the distance traveled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // Free ride for the first 400 feet
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate of $25 for distances over 2000 feet but within 2500 feet
  } else {
    return 'cannot travel that far'; // Reject rides over 2500 feet
  }
}
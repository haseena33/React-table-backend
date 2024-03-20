const User = require("../models/usermodel")
exports.getAllEmployees = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


exports.updateEmployeeEmail = async (req, res) => {
  const { employeeId } = req.params;
  const { email } = req.body;

  try {
    // Find the user by employeeId
    const user = await User.findOne({ where: { employeeId } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the email
    user.email = email;
    await user.save();

    res.status(200).json({ message: 'Email updated successfully' });
  } catch (error) {
    console.error("Error updating email:", error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

exports.updateEmployeeDetails = async (req, res) => {
  const { employeeId } = req.params;
  const { firstName, lastName, email, phone } = req.body;

  try {
    // Find the user by employeeId
    const user = await User.findOne({ where: { employeeId } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user details
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.phone = phone;
    
    await user.save();

    res.status(200).json({ message: 'User details updated successfully' });
  } catch (error) {
    console.error("Error updating user details:", error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


exports.updateEmployeeStatus = async (req, res) => {
  const { employeeId } = req.params;
  const { status } = req.body;

  try {
    // Find the user by employeeId
    const user = await User.findOne({ where: { employeeId } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the status
    user.status = status;
    await user.save();

    res.status(200).json({ message: 'Status updated successfully' });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

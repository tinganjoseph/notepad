const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: "get Goals"})
  
  })
// @desc    Set goal
// @route   POST /api/goals
// @access  Private
  const setGoal= asyncHandler (async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
      }
    res.status(200).json({message: "set Goal"})
  
  })

  // @desc    Update goal
// @route   PUT /api/goals
// @access  Private

  const updateGoal= asyncHandler (async (req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
  })
  // @desc    Delete goals
// @route   DELETE /api/goals
// @access  Private
  const deleteGoal= asyncHandler (async (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
  })
  module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
  }
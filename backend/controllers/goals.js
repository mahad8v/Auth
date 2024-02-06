exports.getGoalCtrl = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data: "fetch successfully"
        })
    } catch (error) {
        
    }
}

exports.createGoal = async(req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data: "create successfully"
        })
    } catch (error) {
        
    }
}
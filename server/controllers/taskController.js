const User = require('../../database/model/user.model')
const Task = require('../../database/model/task.model')


const addTask = async (req, res) => {
   console.log(req.body);
    const { task, id } = req.body;
    try {
        if (!task) return res.status(400).send('Please enter the task');
        if (task.length < 10) res.status(400).send('add minimum 10 char');

        const taskDetail = await new Task({
            task,
            createBy: id,
        });

        await taskDetail.save();
        return res.status(200).send(taskDetail);
    } catch (error) {
        console.error('Error adding task:', error);
        return res.status(400).send('task addition failed');

    }
};

module.exports = {
    addTask,
};
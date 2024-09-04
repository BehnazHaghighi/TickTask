
import React from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClipboardList, faCheckCircle, faClock, faPercentage } from '@fortawesome/free-solid-svg-icons';

const TaskReport = ({ tasks }) => {
    const currentDate = new Date();
    const dateFormat1 = format(currentDate, 'M/d/yyyy'); // 9/4/2024 format
    const dateFormat2 = format(currentDate, 'EEEE, MMMM yyyy'); // Wednesday, August 2024 format

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const activeTasks = totalTasks - completedTasks;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    return (
        <div className="task-report">
            <h2>Task Report</h2>

            {/* Current Date */}
            <div className="date-section">
                <p><FontAwesomeIcon icon={faCalendarAlt} /> {dateFormat1}</p>
                <p><FontAwesomeIcon icon={faCalendarAlt} /> {dateFormat2}</p>
            </div>

            {/* Task Stats */}
            <div className="task-stats">
                <p><FontAwesomeIcon icon={faClipboardList} /> Total tasks: {totalTasks} tasks</p>
                <p><FontAwesomeIcon icon={faCheckCircle} /> Completed tasks: {completedTasks} tasks were done</p>
                <p><FontAwesomeIcon icon={faClock} /> Active tasks: {activeTasks} tasks remain</p>
            </div>

            {/* Completion Rate */}
            <div className="completion-report">
                <p><FontAwesomeIcon icon={faPercentage} /> You have completed {completionRate}% of your tasks</p>
            </div>
        </div>
    );
};

export default TaskReport;

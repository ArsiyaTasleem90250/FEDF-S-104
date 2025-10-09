import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskText, setTaskText] = useState("")
  const [taskDate, setDate] = useState("")
  const [taskTime, setTime] = useState("")

  // Load tasks from localStorage on first render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || []
    setTasks(savedTasks)
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (e) => {
    e.preventDefault()
    if (taskText.trim() === "" || taskDate.trim() === "" || taskTime.trim() === "")
      return

    const newTask = {
      id: Date.now(),
      task: taskText,
      date: taskDate,
      time: taskTime,
      completed: false,
    }
    

    setTasks([...tasks, newTask])
    setTaskText("")
    setDate("")
    setTime("")
  }

  return (
    <div>
      <h1>To-Do Tasks List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="enter the new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={taskTime}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.task} — {t.date} {t.time}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

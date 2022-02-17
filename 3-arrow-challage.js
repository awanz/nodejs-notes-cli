const tasks ={
    tasks: [
        {
            text: 'Grocery Shopping',
            completed: true
        },
        {
            text: 'Clean yard',
            completed: false
        },
        {
            text: 'Film course',
            completed: false
        },
    ],
    getTasksToDo(){
        const dataFilter = this.tasks.filter((task)=>task.completed === false)
        return dataFilter.map(({text})=>{
            return {
                text: text
            }
        })
    }
}

console.log(tasks.getTasksToDo());
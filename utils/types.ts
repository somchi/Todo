export type TaskData = {
    id: number
    backgroundColor?: string,
    text?: string,
    dateCreated?: number,
}

export type CategoryTask={
    category: string,
    task: TaskData
}

export type Data = {
    id: number
    backgroundColor?: string,
    starred?: boolean,
    text?: string,
    dateCreated?: number,
}

export type StoreState={
    tasks: CategoryTask[],
    categories: Category[]
}

export type Category={
    name: string,
    icon: string,
}

export const Colors = [
    'gray',
    '#fff',
    'red',
    'purple',
    'yellow',
    'green',
    'blue',
    'orange'

]

export type Actions ={
    add: boolean,
    view: boolean,
    viewStar: boolean
}

export enum Icon{
    WORK= 'fas fa-briefcase',
    SPORT = 'fas fa-running',
    HOME = 'fas fa-home',
    TRAVEL = 'fas fa-route',
    CALLS = 'fas fa-phone'
}
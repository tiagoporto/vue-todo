export enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}

export interface Comment {
  author: string
  date: string
  message: string
}

export interface Task {
  id: string
  done: boolean
  title: string
  description: string
  priority: Priority
  date: string
  comments: Comment[]
}

export interface RootState {
  tasks: { [key: string]: Task }
}

export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
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

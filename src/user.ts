export interface User {
    name: string
}

export const getUser = () : User => ({
    name: 'Sarah'
})
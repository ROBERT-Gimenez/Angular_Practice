export interface User {
    first_name?: string,
    last_name?: string,
    email: string,
    password: string,
    roleId?: number,
    points?: number,
    contacts?: Contact[] | undefined,
}
 
export interface Contact {
    name: string,
    userId: number
  }
import { FormControl } from "@angular/forms"

export const samePasswords = ( password:string,password2:string )=>{
  const mainPassword = password;
  const newPassword = password2;

  console.log('entro')

   return mainPassword !== newPassword ? {notSamePassword : true }: null

}
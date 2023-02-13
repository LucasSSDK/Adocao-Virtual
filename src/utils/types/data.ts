export type User = {
    cpf: string;
    createdAt: string;
    email: string;
    id: string;
    name: string;
    role: string;
  };
  
  export type LoginResponse = {
    token: string;
    user: User;
  };
  
  export type Petshop = {
    id: string;
    name: string;
    subject: string;
    theme: string;
   

  };
  
 
//Exercício 1

//a)Sempre que uma classe ou struct é criada, o construtor é chamado. Os construtores permitem que o programador defina valores
// padrão, limite a instanciação e grave códigos flexíveis e fáceis de ler.

//b) 1 vez

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

}

//c) Através do método `get` e passamos como parâmetro o nome da propriedade.



//Exercício 2

// type Transaction = {
//   description: string,
//   value: number,
//   date: string
// }

class Transaction {
    private description: string;
    private value: number;
    private date: string;
  
    constructor(
      description: string,
      value: number,
      date: string
    ) {
      this.description = description;
      this.value = value;
      this.date = date;
    }
  
    public getDescription(): string {
      return this.description;
    }
  
    public getValue(): number {
      return this.value;
    }
  
    public getDate(): string {
      return this.date;
    }
  }
  
  //Exercício 3
  
  class Bank {
    private accounts: UserAccount[] = [];
  
    public getAccounts(): UserAccount[] {
      return this.accounts;
    }
  
    public addAccount(account: UserAccount): void {
      this.accounts.push(account);
    }
  }
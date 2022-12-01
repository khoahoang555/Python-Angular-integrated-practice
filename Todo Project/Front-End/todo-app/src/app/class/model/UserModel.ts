export class UserModel {
    public email: string
        public password: string
        public fullName: string
        public age: number
        public gender: boolean
    
    constructor(
    ) {}

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    public toString = (): string => {
        return `Email: ${this.email}, 
                password: ${this.password}, 
                fullname: ${this.fullName},
                age: ${this.age},
                gender: ${this.gender}`
    }
}
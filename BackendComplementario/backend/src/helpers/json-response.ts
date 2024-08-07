// class AuthResponse<T> {
//     constructor(
//       public ok: boolean,
//       public data: T,
//       public token?: string
//     ) {}

//     toJSON() {
//       const response: any = {
//         ok: this.ok,
//         [this.getDataKey()]: this.data,
//       };
//       if (this.token) {
//         response.token = this.token;
//       }
//       return response;
//     }

//     private getDataKey(): string {
//       return this.data instanceof User ? 'usuario' : 'data';
//     }
//   }

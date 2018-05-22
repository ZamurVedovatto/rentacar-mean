/* User data model class */
/* ? set this to optional */

export class Cliente {
    fullName: String;
    email: String;
    endereco?: {
        logradouro?: String,
        numero?: String,
        cidade?: String,
        cep?: String
    };
    fixo?: String;
    celular?: String;
    linkedin?: String;
    idade?: Number;
}

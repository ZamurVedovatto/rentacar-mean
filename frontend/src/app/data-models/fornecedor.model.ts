/* Fornecedor data model class */
/* ? set this to optional */

export class Fornecedor {

    tipo: String;
    nomeFantasia: String;
    email: String;
    endereco?: {
        logradouro?: String,
        numero?: String,
        cidade?: String,
        cep?: String
    };
    fixo?: String;
}


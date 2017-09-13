export class Produto {
    $key: string;
    descricao: string;
    valorunitario: string;
    promocao: boolean;

    static newInstance($key: string,
        descricao: string,
        valorunitario: string,
        promocao: boolean): Produto {
        const obj = new Produto()
        obj.$key = $key;
        obj.descricao = descricao;
        obj.valorunitario = valorunitario;
        obj.promocao = promocao;
        return obj;
    }


    static parseResponse(response: any): Produto {
        const obj = new Produto()
        Object.keys(response).forEach(key => {
            obj[key] = response[key]
        })
        return obj;
    }
}

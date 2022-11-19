import { Model } from "sequelize"

export namespace BaseTypes {
    export type BaseType = {
        id?: number
        dataCriacao?: Date
        dataAtualizacao?: Date
    }
    export type Ingrediente = BaseType & {
        nome: string
        quantidade: number
        valor_unidade: number 
    }

    export type Ingrediente_lanches = BaseType & {
        lanche_id?: number
        ingrediente_id?: number
        valor?: number
        acrescimos: boolean
        quantidade: number
        Ingrediente?: Ingrediente
    }

    export type Lanches = BaseType & {
        foto: string
        descricao: string
        valor: number
        nome: string
        Ingrediente_lanches?: Ingrediente_lanches[]
    }
    export type Pedido = BaseType & {
        data_entrega: DataTransfer
        delivery: boolean
        valor: number
        status_id?: number
        cliente_id?: number
        endereco_id?: number
        cancelamento_id?: number
    }

    export type Endereco = BaseType & {
        CEP: string
        rua: string
        bairro: string
        cidade : string
        estado: string
        numero?: string
        cliente_id?: number
    }

    export type Cliente = BaseType & {
        nome: string
        telefone: string
        email: string
        senha: string
    }

    export type Cancelamento = BaseType & {
        motivo: string
    }

    
    export type Status = BaseType & {
        descricao: string
    }

    export type Colaboradores = BaseType & {
        nome: string
        usuario: string
        senha: string
        departamento_id?: number
    }

    export type Pedido_has_colaboradores = {
        pedido_id?: number
        colaboradores_id?: number
    }
    
    export type Pedido_has_lanches = BaseType & {
        pedido_id?: number
        lanche_id?: number
    }
    export type ingredientes_lanche_pedido =  {
        pedido_has_lanches?: number
        ingredientes_has_lanches?: number
        quantidade: number
    }
    export type Departamento = BaseType & {
        nome: string
    }

}

export namespace Instance{
    export type Ingrediente = Model<BaseTypes.Ingrediente> & BaseTypes.Ingrediente
    export type Ingrediente_lanches = Model<BaseTypes.Ingrediente_lanches> & BaseTypes.Ingrediente_lanches
    export type Lanches = Model<BaseTypes.Lanches> & BaseTypes.Lanches
    export type Endereco = Model<BaseTypes.Endereco> & BaseTypes.Endereco
    export type Cliente = Model<BaseTypes.Cliente> & BaseTypes.Cliente
    export type Cancelamento = Model<BaseTypes.Cancelamento> & BaseTypes.Cancelamento
    export type Status = Model<BaseTypes.Status> & BaseTypes.Status
    export type Colaboradores = Model<BaseTypes.Colaboradores> & BaseTypes.Colaboradores
    export type Departamento = Model<BaseTypes.Departamento> & BaseTypes.Departamento
    export type Pedido = Model<BaseTypes.Pedido> & BaseTypes.Pedido
    export type Pedido_has_colaboradores = Model<BaseTypes.Pedido_has_colaboradores> & BaseTypes.Pedido_has_colaboradores
    export type Pedido_has_lanches = Model<BaseTypes.Pedido_has_lanches> & BaseTypes.Pedido_has_lanches
    export type ingredientes_lanche_pedido = Model<BaseTypes.ingredientes_lanche_pedido> & BaseTypes.ingredientes_lanche_pedido
}
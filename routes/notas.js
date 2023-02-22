const express = require('express');
const router = express.Router();
const mysql = require('./mysql').pool;

//retorna todas segmentacoes (/clientes_segmentacao)
router.get('/', (req, res, next)=>{

    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error:error})}
        conn.query(
            'select * from notas_mentais;',
            (error, resultado, fields) =>{
                conn.release();
                if(error){return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado})
            }
        )
    })
});


//insere um produto
router.post('/', (req, res, next) => {


    mysql.getConnection((error, conn)=> {
        if(error){return res.status(500).send({error:error})}
        conn.query(
            /* 'insert into tb_clientes (cd_cliente, nome) values (?, ?)',
            [req.body.cd_cliente,req.body.nome], */
            /* 'insert into clientes (nome, cpf, renda, data_nascimento, idade, justificativa, matricula) values (?,?,?,?,?,?,?)',
            [req.body.nome, req.body.cpf, req.body.renda, req.body.data_nascimento, req.body.idade, req.body.justificativa, req.body.matricula],
             */
            /* 'insert into clientes_investimentos (perfil_cliente, nome_investimento) values (?,?)',
            [req.body.perfil_cliente, req.body.nome_investimento], */
            /* 'insert into notas_mentais (numero_siga, nome_nota, data_inclusao, data_agendamento, data_ultima_edicao, nome_interveniente,observacao) values (?,?,?,?+)', */
            'insert into notas_mentais (numero_siga, nome_nota, data_inclusao, data_agendamento, data_ultima_edicao, nome_interveniente,observacao, situacao_nota) values (?,?,?,?,?,?,?,?)',
            [req.body.numero_siga, 
             req.body.nome_nota,
             req.body.data_inclusao, 
             req.body.data_agendamento, 
             req.body.data_ultima_edicao, 
             req.body.nome_interveniente, 
             req.body.observacao,
             req.body.situacao_nota
            ],
            (error, resultado, field)=>{
                conn.release();
                if(error){
                    return res.status(500).send({
                        error: error,
                        response: null
                    })
                } 
                res.status(201).send({
                    mensaegm: 'Produto inserido com sucesso',
                    id_produto: resultado.insertId
                })
            }
        )
    })

});

//retorna os dados de um produto específico
router.get('/:id_produto', (req, res, next)=>{

    const id = req.params.id_produto;


    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error:error})}
        conn.query(
            'select * from criterios_segmentacao where id_segmentacao = ?;',[id],
            (error, resultado, fields) =>{
                conn.release();
                if(error){return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado})
            }
        )
    })




    /* if(id ==='especial'){
        res.status(200).send({
            mensagem: 'você descobriu o akuma',
            id: id
        });
    }else {
        res.status(200).send({
            mensgem:'você passou um id'
        });
    }; */

    

})

//altera um produto
router.patch('/', (req, res, next) =>{
/*     res.status(201).send({
        mensagem: 'usando o patch dentro da rota de produtos'
    }) */
    mysql.getConnection((error, conn)=> {
        if(error){return res.status(500).send({error:error})}
        conn.query(
            /* 'insert into clientes (nome, cpf, renda, data_nascimento, idade, justificativa, matricula) values (?,?,?,?,?,?,?)', */
            /* 'UPDATE clientes SET nome = ?, cpf = ?, justificativa = ? where cd_cliente =?', */
            'UPDATE notas_mentais SET numero_siga = ?, nome_nota = ?, data_agendamento = ?, data_ultima_edicao = ?, nome_interveniente = ?, observacao = ? where id_notas_mentais =?',
            /* [req.body.nome, req.body.cpf, req.body.renda, req.body.data_nascimento, req.body.idade, req.body.justificativa, req.body.matricula], */
            [req.body.numero_siga, req.body.nome_nota,req.body.data_agendamento, req.body.data_ultima_edicao, req.body.nome_interveniente, req.body.observacao, req.body.id_notas_mentais],
            (error, resultado, field)=>{
                conn.release();
                if(error){
                    return res.status(500).send({
                        error: error,
                        response: null
                    })
                } 
                res.status(201).send({
                    mensaegm: 'Produto inserido com sucesso',
                    id_produto: resultado.insertId
                })
            }
        )
    })
})



router.patch('/finaliza_nota', (req, res, next) =>{
    /*     res.status(201).send({
            mensagem: 'usando o patch dentro da rota de produtos'
        }) */
        mysql.getConnection((error, conn)=> {
            if(error){return res.status(500).send({error:error})}
            conn.query(
                /* 'insert into clientes (nome, cpf, renda, data_nascimento, idade, justificativa, matricula) values (?,?,?,?,?,?,?)', */
                /* 'UPDATE clientes SET nome = ?, cpf = ?, justificativa = ? where cd_cliente =?', */
                'UPDATE notas_mentais SET data_ultima_edicao = ?, observacao = ?, situacao_nota = ? where id_notas_mentais =?',
                /* [req.body.nome, req.body.cpf, req.body.renda, req.body.data_nascimento, req.body.idade, req.body.justificativa, req.body.matricula], */
                [req.body.data_ultima_edicao, req.body.observacao,req.body.situacao_nota, req.body.id_notas_mentais],
                (error, resultado, field)=>{
                    conn.release();
                    if(error){
                        return res.status(500).send({
                            error: error,
                            response: null
                        })
                    } 
                    res.status(201).send({
                        mensaegm: 'Produto inserido com sucesso',
                        id_produto: resultado.insertId
                    })
                }
            )
        })
    })

//exclui um produto
router.delete('/', (req, res, next) =>{
/*     res.status(201).send({
        mensagem: 'usando o delete dentro da rota de produtos'
    }) */

    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error:error})}
        conn.query(
            'delete from clientes where cd_cliente = ?;',
            [req.body.id_produto],
            (error, resultado, fields) =>{
                conn.release();
                if(error){return res.status(500).send({error:error})}
                return res.status(202).send({response: resultado})
            }
        )
    })
})


module.exports = router;
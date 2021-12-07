

const usuariosGet = (req, res) => {
    // const query = req.query;

    // res.status(200).json({
    //     msg: "Hola from usuarios.controller get",
    //     query
    // });

    const { id, nombre , edad = 1 } = req.query;

    res.status(200).json({
        msg: "Hola from usuarios.controller get",
        id,
        nombre,
        edad
    });
}

const usuariosPost = (req, res) => {
    let { name, age }  = req.body;
    res.status(200).json({
        msg: "Hola from  usuarios.controller Post",
        name,
        age
    });
}

const usuariosPut = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        msg: "Hola From usuarios.controller Put",
        id
    });
};

const usuariosDelete = (req,res) => {
    res.json({
        msg: "Hola from usuarios.controller Delete"
    });
}
 
const usuariosPatch = (req,res) => {
    res.json({
        msg: "Hola from usuarios.controller Patch"
    });
} 

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}
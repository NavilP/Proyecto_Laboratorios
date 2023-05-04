import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin1',
    password: '12345',
    database: 'controllabs',
});

app.use(bodyParser.urlencoded({ extended:true}));

app.use(express.json());
//middleware 
app.use(express.static('public'));

app.use(cors());

app.get("/", (req, res) => {
    res.json("hello there");
});

app.get("/usuario", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    )
    const q = "SELECT * FROM usuario;"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.get("/usertype/:correo", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    )
    console.log(req.params.correo);
    const correo = req.params.correo;
    const q = `SELECT * FROM usuario WHERE correo ='${correo}' and  tipo= 'admin';`
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        else{
            return res.json(data)
        }
    })
});

app.post('/login', (req, res) => {
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;
    db.query('SELECT * FROM usuario WHERE correo = ? AND contraseña = ?', [usuario, contraseña], (error, results) => {
      if (error) {
        throw error;
      }
      if (results.length > 0) {
        res.send('Usuario ingresado correctamente');
      } else {
        res.send('Usuario o contraseña incorrectos');
      }
    });
});

app.get("/reservas", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    )
    const q = "SELECT * FROM reserva;"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});


app.get("/reserva/:s", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    )
    console.log(req.params.s);
    const date = req.params.s;
    const q = `SELECT idreserva, 
                startDateTime,
                DATE_FORMAT(startDateTime, '%H:%i') AS startTime, 
                endDateTime,
                DATE_FORMAT(endDateTime, '%H:%i') AS endTime,
                descripcion,
                tipo, 
                usuario, numLab
                FROM reserva
                WHERE DATE(startDateTime) = '${date}'  ORDER BY startDateTime;`
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});


app.post("/personas", (req, res) => {
    console.log('si pero no');
    console.log(req.body)
    const q = "INSERT INTO usuario (`correo`, `contraseña`, `tipo`, `numFaltas`) VALUES (?)"
    const values = [
        req.body.correo,
        req.body.contraseña,
        req.body.tipo, 
        req.body.numFaltas
    ]
    console.log(values);
    db.query(q, [values],(err, data) => {
        if (err) return res.json(err)
        console.log('se guardo con exito')
        return res.json(data)
    })
});

app.post("/addEvento", (req, res) => {
    console.log('si pero no');
    console.log(req.body)
    const q = "INSERT INTO reserva (`startDateTime`, `endDateTime`, `descripcion`,`tipo`, `usuario`, `numLab`) VALUES (?)"
    const values = [
        req.body.start,
        req.body.end,
        req.body.descripcion, 
        req.body.tipo,
        req.body.usuario, 
        req.body.numLab
    ]
    console.log(values);
    db.query(q, [values],(err, data) => {
        if (err) return res.json(err)
        console.log('se guardo con exito')
        return res.json(data)
    })
})

app.delete('/registro/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const q = 'DELETE FROM reserva WHERE idreserva = ?';
    db.query(q, [id],(err, data) => {
        if (err) {
            res.status(500).send('Error al cancelar la reservación');
          } else {
            res.send(`Reserva cancelada con exito`);
          }
    })
});


app.post('/guardar-datos', (req, res) => {
    console.log("si entro, no hago nada")
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header('Allow', 'POST')
    //const datosFormulario = req.body;
    const correo = req.body.correo;
    const contraseña = req.body.contraseña;
    const tipo = req.body.tipo;
    const numFaltas = req.body.numFaltas;

    const sql = 'INSERT INTO usuario (`correo`, `contraseña`, `tipo`, `numFaltas`) VALUES (`${correo}`, `${contraseña}`,  `${tipo}`, `${numFaltas}`)';

    conexion.query(sql, (error, resultado) => {
        if (error) {
          console.log(error);
          res.sendStatus(500); // Devuelve un error HTTP 500 al cliente si hay un error en la base de datos
        } else {
          console.log(resultado);
          res.sendStatus(200); // Devuelve un éxito HTTP 200 al cliente si los datos se almacenan correctamente en la base de datos
        }
      });

    /*connection.query('INSERT INTO usuario (`correo`, `contraseña`, `tipo`, `numFaltas`)', datosFormulario, function(error, results, fields) {
      if (error) throw error;
      console.log('si se pudo burro')
    });*/
});

app.listen(8080, ()=>{
    console.log("CONNECTEED");
});
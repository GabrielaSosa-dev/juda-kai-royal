const colaboradores = [
  { nombre: "Abel Prozapas", correo: "aprozapas@royalseguros.com.py", departamento: "Auxiliar de Agencia Hohenau", categoria: "tranquilo" },
  { nombre: "Adrian Barreto", correo: "abarreto@royalseguros.com.py", departamento: "Técnico", categoria: "normal" },
  { nombre: "Adrian Galeano", correo: "agaleano@royalseguros.com.py", departamento: "Cobranzas", categoria: "popular" },
  { nombre: "Agustina Nizza", correo: "anizza@royalseguros.com.py", departamento: "Comercial", categoria: "normal" },
  { nombre: "Alan Gimenez", correo: "agimenez@royalseguros.com.py", departamento: "Agencia Encarncacion", categoria: "normal" },
  { nombre: "Alejandro Lopez", correo: "aflopez@royalseguros.com.py", departamento: "Dpto. de T.I.", categoria: "normal" },
  { nombre: "Alejandro Mongelos", correo: "amongelos@royalseguros.com.py", departamento: "Jefe de Tesorería", categoria: "autoridad" },
  { nombre: "Alessandro Larramendia", correo: "alarramendia@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Alvaro Acosta", correo: "aacosta@royalseguros.com.py", departamento: "Recepcion", categoria: "normal" },
  { nombre: "Alvaro Garcia", correo: "agarcia@royalseguros.com.py", departamento: "Agencia de Ciudad del Este", categoria: "normal" },
  { nombre: "Alvaro Yaluk", correo: "ayaluk@royalseguros.com.py", departamento: "Comercial", categoria: "normal" },
  { nombre: "Andres Vera Ruiz Diaz", correo: "avera@royalseguros.com.py", departamento: "Asesor Juridico Interno", categoria: "normal" },
  { nombre: "Angel Castelli", correo: "acastelli@royalseguros.com.py", departamento: "Agencia Encarnacion", categoria: "normal" },
  { nombre: "Angel Meza", correo: "ameza@royalseguros.com.py", departamento: "Comercial", categoria: "normal" },
  { nombre: "Ariel Beltran", correo: "abeltran@royalseguros.com.py", departamento: "Comercial", categoria: "popular" },
  { nombre: "Augusto Benitez", correo: "abenitez@royalseguros.com.py", departamento: "Jefe de Reaseguros", categoria: "tranquilo" },
  { nombre: "Camila Liseras", correo: "cliseras@royalseguros.com.py", departamento: "Suscripción", categoria: "normal" },
  { nombre: "Carina Perez", correo: "cperez@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Cesar Bustamante", correo: "cbustamante@royalseguros.com.py", departamento: "Comercial", categoria: "normal" },
  { nombre: "Cesar Larrea", correo: "clarrea@royalseguros.com.py", departamento: "Comercial", categoria: "normal" },
  { nombre: "Cesar Marsal", correo: "cmarsal@royalseguros.com.py", departamento: "Director", categoria: "autoridad" },
  { nombre: "Julio Sanchez", correo: "cobradores@royalseguros.com.py", departamento: "Cobranzas", categoria: "normal" },
  { nombre: "Cristian Cocco", correo: "ccocco@royalseguros.com.py", departamento: "Gerente de Siniestros", categoria: "autoridad" },
  { nombre: "David Melgarejo", correo: "dmelgarejo@royalseguros.com.py", departamento: "Comercial", categoria: "tranquilo" },
  { nombre: "Derlis De la Cruz", correo: "ddelacruz@royalseguros.com.py", departamento: "Gerente de Técnico", categoria: "autoridad" },
  { nombre: "Diego  Zacarias", correo: "dzacarias@royalseguros.com.py", departamento: "Suscripción", categoria: "normal" },
  { nombre: "Diego Alcaraz", correo: "dalcaraz@royalseguros.com.py", departamento: "Cobranzas", categoria: "normal" },
  { nombre: "Diego Gomez", correo: "dgomez@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Diego Gonzalez Carvallo", correo: "dgonzalez@royalseguros.com.py", departamento: "Técnico - Caución", categoria: "normal" },
  { nombre: "Diego Vaccaro", correo: "dvaccaro@royalseguros.com.py", departamento: "Jefe de cobranzas", categoria: "autoridad" },
  { nombre: "Edgar Lopez", correo: "elopez@royalseguros.com.py", departamento: "Agencia Ciudad del Este", categoria: "normal" },
  { nombre: "Eduardo Bernal", correo: "ebernal@royalseguros.com.py", departamento: "Técnico", categoria: "normal" },
  { nombre: "Eduardo Heisecke", correo: "eheisecke@royalseguros.com.py", departamento: "Director", categoria: "autoridad" },
  { nombre: "Egon Lafuente", correo: "elafuente@royalseguros.com.py", departamento: "Caución", categoria: "normal" },
  { nombre: "Enmanuel Fernandez", correo: "efernandez@royalseguros.com.py", departamento: "DO", categoria: "tranquilo" },
  { nombre: "Ernesto Cabanas", correo: "ecabanas@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Esteban Moreno", correo: "emoreno@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Federico Almeida", correo: "falmeida@royalseguros.com.py", departamento: "Comercial", categoria: "normal" },
  { nombre: "Federico Duarte", correo: "fduarte@royalseguros.com.py", departamento: "Caución", categoria: "normal" },
  { nombre: "Gabriel Molinas", correo: "gmolinas@royalseguros.com.py", departamento: "Jefe de Técnico", categoria: "normal" },
  { nombre: "Gabriela Alfonso Lopez", correo: "galfonso@royalseguros.com.py", departamento: "Recepcion", categoria: "tranquilo" },
  { nombre: "Gabriela Caballero", correo: "gcaballero@royalseguros.com.py", departamento: "Comercial", categoria: "normal" },
  { nombre: "Gabriela Ramirez", correo: "gramirez@royalseguros.com.py", departamento: "Reaseguros", categoria: "normal" },
  { nombre: "Gabriela Sosa", correo: "gsosa@royalseguros.com.py", departamento: "Dpto. de T.I.", categoria: "normal" },
  { nombre: "Gaston Lopez Moreira", correo: "glopezmoreira@royalseguros.com.py", departamento: "Paraguay Asistencia", categoria: "normal" },
  { nombre: "Gerardo Gomez", correo: "ggomez@royalseguros.com.py", departamento: "Administración", categoria: "normal" },
  { nombre: "Giovanni Rosales Mendieta", correo: "grosales@royalseguros.com.py", departamento: "Call Center", categoria: "normal" },
  { nombre: "Giuliano Franco", correo: "gfranco@royalseguros.com.py", departamento: "Tesorería", categoria: "popular" },
  { nombre: "Guillermo Gomez Aveiro", correo: "gaveiro@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Gustavo Duarte", correo: "gduarte@royalseguros.com.py", departamento: "Marketing", categoria: "normal" },
  { nombre: "Henri Dominguez", correo: "hdominguez@royalseguros.com.py", departamento: "Suscripción", categoria: "normal" },
  { nombre: "Ivonne Gill", correo: "igill@royalseguros.com.py", departamento: "Gerente Comercial", categoria: "autoridad" },
  { nombre: "Javier Acosta", correo: "jacosta@royalseguros.com.py", departamento: "Comercial", categoria: "normal" },
  { nombre: "Jesus Alejandro Montiel", correo: "amontiel@royalseguros.com.py", departamento: "Sub Gerente Comercial", categoria: "autoridad" },
  { nombre: "Joaquina Scavone", correo: "jscavone@royalseguros.com.py", departamento: "Gerente Administrativa", categoria: "autoridad" },
  { nombre: "Jonathan Gomez", correo: "jgomez@royalseguros.com.py", departamento: "Cobranzas", categoria: "normal" },
  { nombre: "Jonathan Insfran", correo: "jinsfran@royalseguros.com.py", departamento: "Cobranzas", categoria: "normal" },
  { nombre: "Jose Ibarra", correo: "jibarra@royalseguros.com.py", departamento: "Call Center", categoria: "normal" },
  { nombre: "Jose Lopez", correo: "jlopez@royalseguros.com.py", departamento: "Dpto. de T.I.", categoria: "tranquilo" },
  { nombre: "Josias Mendieta", correo: "jmendieta@royalseguros.com.py", departamento: "Jefe de Auditoria", categoria: "normal" },
  { nombre: "Juan Carlos Lopez Moreira", correo: "jclopezmoreira@royalseguros.com.py", departamento: "Director", categoria: "autoridad" },
  { nombre: "Juan Sebastian Amarilla", correo: "jamarilla@royalseguros.com.py", departamento: "Tesorería", categoria: "popular" },
  { nombre: "Julio Delvalle", correo: "jdelvalle@royalseguros.com.py", departamento: "Caución", categoria: "normal" },
  { nombre: "Karen Villamayor", correo: "kvillamayor@royalseguros.com.py", departamento: "Contabilidad", categoria: "normal" },
  { nombre: "Karina Ruiz", correo: "kruiz@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Larissa Gonzalez", correo: "lgonzalez@royalseguros.com.py", departamento: "Agencia Encarnacion", categoria: "normal" },
  { nombre: "Leonardo Arevalo", correo: "larevalo@royalseguros.com.py", departamento: "Agencia Encarnacion", categoria: "normal" },
  { nombre: "Lilian Molinas", correo: "lmolinas@royalseguros.com.py", departamento: "Suscripción", categoria: "normal" },
  { nombre: "Lorena Rojas", correo: "lrojas@royalseguros.com.py", departamento: "DO", categoria: "tranquilo" },
  { nombre: "Lorena Subeldia", correo: "lsubeldia@royalseguros.com.py", departamento: "Dpto. de Cumplimiento", categoria: "tranquilo" },
  { nombre: "Luana Sanchez", correo: "lsanchez@royalseguros.com.py", departamento: "Caución", categoria: "normal" },
  { nombre: "Luis Baccon", correo: "lbaccon@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Luis Estigarribia", correo: "lestigarribia@royalseguros.com.py", departamento: "Técnico", categoria: "popular" },
  { nombre: "Luis Galeano", correo: "lgaleano@royalseguros.com.py", departamento: "Dpto. de T.I.", categoria: "normal" },
  { nombre: "Luis Medina", correo: "lmedina@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Luis Sanabria", correo: "lsanabria@royalseguros.com.py", departamento: "Agencia Ciudad del Este", categoria: "normal" },
  { nombre: "Marcelo Sebastian Villalba", correo: "svillalba@royalseguros.com.py", departamento: "Tesorería", categoria: "normal" },
  { nombre: "Maria Del Mar Lopez Moreira", correo: "mlopezmoreira@royalseguros.com.py", departamento: "Gerente de Marketing", categoria: "normal" },
  { nombre: "Maria Lujan Orrego", correo: "mlorrego@royalseguros.com.py", departamento: "Caución", categoria: "normal" },
  { nombre: "Maria Parra", correo: "mparra@royalseguros.com.py", departamento: "Jefa de contabilidad", categoria: "autoridad" },
  { nombre: "Mariano Segovia", correo: "msegovia@royalseguros.com.py", departamento: "Técnico", categoria: "normal" },
  { nombre: "Marta Zarza", correo: "mzarza@royalseguros.com.py", departamento: "Jefa de Tecnico", categoria: "autoridad" },
  { nombre: "Mathias Bustos", correo: "mbustos@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Matias Caballero", correo: "mcaballero@royalseguros.com.py", departamento: "Jefe de Siniestros", categoria: "autoridad" },
  { nombre: "Matias Garma", correo: "mgarma@royalseguros.com.py", departamento: "Técnico", categoria: "normal" },
  { nombre: "Mauricio Riveros", correo: "mriveros@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Mauro Colman", correo: "mcolman@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Máximo Smith", correo: "msmith@royalseguros.com.py", departamento: "Director", categoria: "autoridad" },
  { nombre: "Mirta Miranda", correo: "mmiranda@royalseguros.com.py", departamento: "Agencia de Ciudad del Este", categoria: "normal" },
  { nombre: "Mirtha Barreto", correo: "mbarreto@royalseguros.com.py", departamento: "Agencia Encarnacion", categoria: "normal" },
  { nombre: "Miryan Villalba", correo: "mvillalba@royalseguros.com.py", departamento: "Call Center", categoria: "normal" },
  { nombre: "Narciso Chamorro", correo: "nchamorro@royalseguros.com.py", departamento: "Cobranzas", categoria: "normal" },
  { nombre: "Nelson Talavera", correo: "ntalavera@royalseguros.com.py", departamento: "Agencia Ciudad del Este", categoria: "normal" },
  { nombre: "Nicolas María Allo Selzer", correo: "nallo@royalseguros.com.py", departamento: "Comercial", categoria: "normal" },
  { nombre: "Octavio Garcia", correo: "ogarcia@royalseguros.com.py", departamento: "Auditoria", categoria: "normal" },
  { nombre: "Osmar Meza", correo: "omeza@royalseguros.com.py", departamento: "Jefe de Administración", categoria: "autoridad" },
  { nombre: "Paula Rambaldi", correo: "prambaldi@royalseguros.com.py", departamento: "Siniestros", categoria: "popular" },
  { nombre: "Pedro Acosta", correo: "pacosta@royalseguros.com.py", departamento: "Agencia Hohenau", categoria: "normal" },
  { nombre: "Ramon Brozzon", correo: "rbrozzon@royalseguros.com.py", departamento: "Director", categoria: "autoridad" },
  { nombre: "Ramon Peralta", correo: "rperalta@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Ricardo Pereira", correo: "rpereira@royalseguros.com.py", departamento: "Agencia Luque", categoria: "normal" },
  { nombre: "Richart Insaurralde", correo: "rinsaurralde@royalseguros.com.py", departamento: "Dpto. de Cumplimiento", categoria: "normal" },
  { nombre: "Rodrigo Baez", correo: "rbaez@royalseguros.com.py", departamento: "Técnico", categoria: "normal" },
  { nombre: "Rodrigo Gonzalez", correo: "rgonzalez@royalseguros.com.py", departamento: "Caución", categoria: "normal" },
  { nombre: "Rodrigo Ojeda", correo: "rojeda@royalseguros.com.py", departamento: "Emisión", categoria: "normal" },
  { nombre: "Rodrigo Rojas Fretes", correo: "rrojas@royalseguros.com.py", departamento: "Comercial", categoria: "normal" },
  { nombre: "Roger Almada", correo: "ralmada@royalseguros.com.py", departamento: "Dpto. de T.I.", categoria: "popular" },
  { nombre: "Roman Cazal", correo: "rcazal@royalseguros.com.py", departamento: "Comercial", categoria: "normal" },
  { nombre: "Ruth Analia Frickelo", correo: "rfrickelo@royalseguros.com.py", departamento: "Encargada de Agencia Hohenau", categoria: "normal" },
  { nombre: "Sandra Fernandez", correo: "sfernandez@royalseguros.com.py", departamento: "Cobranzas", categoria: "normal" },
  { nombre: "Santiago Insfran", correo: "sinsfran@royalseguros.com.py", departamento: "Paraguay Asistencia", categoria: "normal" },
  { nombre: "Santiago Pedrozo", correo: "spedrozo@royalseguros.com.py", departamento: "Técnico", categoria: "normal" },
  { nombre: "Scherill Szwarcbart", correo: "sszwarcbart@royalseguros.com.py", departamento: "Gerente de DO", categoria: "autoridad" },
  { nombre: "Sergio Rolon", correo: "srolon@royalseguros.com.py", departamento: "Gerente de T.I.", categoria: "autoridad" },
  { nombre: "Victor Olmedo", correo: "volmedo@royalseguros.com.py", departamento: "Caución", categoria: "normal" },
  { nombre: "William Marcial Echeverria", correo: "wecheverria@royalseguros.com.py", departamento: "Comercial", categoria: "normal" },
  { nombre: "Eduardo Morinigo", correo: "emorinigo@royalseguros.com.py", departamento: "Siniestros", categoria: "normal" },
  { nombre: "Gustavo Herrera", correo: "gherrera@royalseguros.com.py", departamento: "Paraguay Asistencia", categoria: "normal" },
  { nombre: "Marcelo Gomez", correo: "mgomez@royalseguros.com.py", departamento: "Paraguay Asistencia", categoria: "normal" },
  { nombre: "Fredy Galeano", correo: "fgaleano@royalseguros.com.py", departamento: "Cobranzas", categoria: "normal"},
  { nombre: "Gustavo Ozorio", correo: "gozorio@royalseguros.com.py", departamento: "Cobranzas", categoria: "normal"},
  { nombre: "Pablo Almada", correo: "palmada@royalseguros.com.py", departamento: "Cobranzas", categoria: "normal"},
];

const dominioCorporativo = "@royalseguros.com.py";

const reaccionesJudaKai = {
  tranquilo: {
    imagen: "img/juda-kai-confundido.png",
    clase: "confundido",
    mensajes: [
      "¿Esa persona? No me lo esperaba... parecía libre de toda sospecha.",
      "Tan tranquila que parecía invisible para el Judas Kái, pero alguien la nominó.",
      "Mirá vos... el silencio también acumula votos.",
      "Parece tranquila, pero algo habrá hecho para llegar hasta acá.",
      "El muñeco está confundido. Esta persona parecía inocente.",
      "No se me ocurre una razón, pero el voto es el voto.",
      "Capaz no habla mucho, pero claramente alguien tenía algo pendiente.",
      "El Judas Kái pensó que esta persona se salvaba este año.",
      "Qué raro... este candidato parecía de bajo riesgo.",
      "Persona tranquila, voto inesperado. San Juan no perdona."
    ]
  },

  autoridad: {
  imagen: "img/juda-kai-sorprendido.png",
  clase: "sorprendido",
  mensajes: [
    "¡Epa! Este voto viene con firma importante.",
    "Mirá vos... fuiste directo por un peso pesado de la oficina.",
    "El Judas Kái levantó las cejas con esta elección.",
    "Voto de alto nivel detectado. Esto se puso interesante.",
    "Esta nominación viene con cargo incluido.",
    "El muñeco quedó sorprendido... pero anota igual.",
    "Fuerte elección. Se nota que viniste a votar sin miedo al chisme.",
    "Este nombre tiene jerarquía... y ahora también un voto.",
    "San Juan se puso elegante con esta nominación.",
    "El Judas Kái no esperaba ir tan arriba en el organigrama.",
    "Voto importante. El muñeco ya lo puso en observación.",
    "Esta elección tiene energía de reunión directiva, pero con humor.",
    "No cualquiera se anima a votar así... interesante.",
    "Este candidato entró con presencia propia.",
    "El muñeco quedó con cara de 'apa la papa'."
  ]
},

  popular: {
    imagen: "img/juda-kai-feliz.png",
    clase: "feliz",
    mensajes: [
      "Se veía venir. Este candidato ya venía sonando fuerte.",
      "El favorito del pasillo apareció en la lista.",
      "Esta elección tiene olor a mbejú, payaguá y chisme interno.",
      "El Judas Kái ya sospechaba que alguien iba a votar por esta persona.",
      "Candidato fuerte. La gente habló.",
      "Este nombre ya venía circulando antes de abrir la votación.",
      "No sorprende, pero igual emociona.",
      "El muñeco sonríe. Este voto tiene respaldo popular.",
      "Candidato con hinchada propia.",
      "Este voto viene con aplausos imaginarios.",
      "El Judas Kái dice: era cuestión de tiempo.",
      "La candidatura más comentada acaba de recibir otro empujón.",
      "Este nombre ya estaba calentando motores para San Juan.",
      "Popularidad detectada. El muñeco toma nota.",
      "Este candidato no necesita campaña, ya tiene fama."
    ]
  },

  normal: {
    imagen: "img/juda-kai-normal.png",
    clase: "",
    mensajes: [
      "Interesante elección. El muñeco ya está tomando nota.",
      "San Juan se acerca y alguien tenía que ser elegido.",
      "No juzgo... solo registro para el muñeco.",
      "El voto es secreto, pero la sospecha queda.",
      "El Judas Kái escuchó, anotó y no hizo preguntas.",
      "Este nombre acaba de entrar a la lista sanjuanina.",
      "La democracia del muñeco ha hablado.",
      "Una elección inesperada, pero válida.",
      "El muñeco no pregunta motivos, solo recibe votos.",
      "Alguien tenía que caer en la lista.",
      "Tu voto acaba de mover el ranking del Judas Kái.",
      "El muñeco sintió una energía extraña con esta elección.",
      "Este candidato acaba de ganar protagonismo.",
      "Voto registrado mentalmente por el muñeco.",
      "El Judas Kái no confirma ni niega, pero anota.",
      "Esta elección tiene algo de misterio.",
      "El muñeco ya está mirando diferente a esta persona.",
      "No sabemos qué hizo, pero alguien lo sabe.",
      "El voto fue recibido con respeto y un poquito de sospecha.",
      "San Juan todavía no llegó, pero la lista ya se está armando.",
      "El muñeco agradece tu aporte a la tradición.",
      "Candidato agregado al radar.",
      "El Judas Kái siente que acá hay historia.",
      "Voto silencioso, impacto directo.",
      "Esta elección queda en acta sanjuanina."
    ]
  }
};

let correoVotanteActual = "";
let candidatoSeleccionado = "";

const mensajeJudaKai = document.getElementById("mensajeJudaKai");
const selectPersona = document.getElementById("personaElegida");
const imagenJudaKai = document.getElementById("imagenJudaKai");

function cargarColaboradores() {
  colaboradores.sort((a, b) => a.nombre.localeCompare(b.nombre));

  colaboradores.forEach(persona => {
    const option = document.createElement("option");
    option.value = persona.correo;
    option.textContent = persona.nombre;
    selectPersona.appendChild(option);
  });
}

function cambiarPantalla(idPantalla) {
  const pantallas = document.querySelectorAll(".pantalla");

  pantallas.forEach(pantalla => {
    pantalla.classList.remove("activa");
  });

  document.getElementById(idPantalla).classList.add("activa");
}

function decirMensaje(texto) {
  mensajeJudaKai.textContent = texto;
}

function cambiarImagenJudaKai(imagen, clase) {
  imagenJudaKai.src = imagen;

  imagenJudaKai.classList.remove(
    "asustado",
    "confundido",
    "feliz",
    "sorprendido"
  );

  if (clase !== "") {
    imagenJudaKai.classList.add(clase);
  }
}

function obtenerMensajeAleatorio(lista) {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

function reaccionarSegunCategoria(categoria) {
  const reaccion = reaccionesJudaKai[categoria] || reaccionesJudaKai.normal;

  cambiarImagenJudaKai(reaccion.imagen, reaccion.clase);
  decirMensaje(obtenerMensajeAleatorio(reaccion.mensajes));
}

function validarCorreo() {
  const correo = document.getElementById("correoVotante").value.trim().toLowerCase();

  if (correo === "") {
    cambiarImagenJudaKai("img/juda-kai-confundido.png", "confundido");
    decirMensaje("Tenés que ingresar tu correo corporativo para participar.");
    return;
  }

  if (!correo.includes("@")) {
    cambiarImagenJudaKai("img/juda-kai-confundido.png", "confundido");
    decirMensaje("Ese correo no parece válido. Revisalo antes de continuar.");
    return;
  }

  if (!correo.endsWith(dominioCorporativo)) {
    cambiarImagenJudaKai("img/juda-kai-sorprendido.png", "sorprendido");
    decirMensaje("Ese correo no pertenece a Royal Seguros. El muñeco no lo puede registrar.");
    return;
  }

  const yaVoto = localStorage.getItem(`voto_${correo}`);

  if (yaVoto) {
    cambiarImagenJudaKai("img/juda-kai-asustado.png", "asustado");
    decirMensaje("Ya votaste. El Judas Kái acepta una sola acusación por persona.");
    cambiarPantalla("pantallaFinal");
    return;
  }

  correoVotanteActual = correo;

  cambiarImagenJudaKai("img/juda-kai-feliz.png", "feliz");
  decirMensaje("Correo confirmado. Ya podés elegir al candidato para el Judas Kái.");
  cambiarPantalla("pantallaVotacion");
}

function prepararVoto() {
  const correoElegido = selectPersona.value;

  if (correoElegido === "") {
    cambiarImagenJudaKai("img/juda-kai-confundido.png", "confundido");
    decirMensaje("Primero tenés que elegir a una persona. El muñeco todavía no sabe a quién mirar.");
    return;
  }

  candidatoSeleccionado = correoElegido;

  const persona = colaboradores.find(p => p.correo === correoElegido);

  reaccionarSegunCategoria(persona.categoria);

  document.getElementById("textoConfirmacion").textContent =
    `¿Confirmás tu voto por ${persona.nombre}? Una vez registrado, no podrás cambiar tu elección.`;

  cambiarPantalla("pantallaConfirmacion");
}

function volverAElegir() {
  cambiarImagenJudaKai("img/juda-kai-normal.png", "");
  decirMensaje("Podés pensarlo mejor. El muñeco todavía no prendió la mecha.");
  cambiarPantalla("pantallaVotacion");
}

function confirmarVoto() {
  const persona = colaboradores.find(p => p.correo === candidatoSeleccionado);

  const voto = {
    votante: correoVotanteActual,
    elegido: candidatoSeleccionado,
    nombreElegido: persona.nombre,
    departamento: persona.departamento,
    categoria: persona.categoria,
    fecha: new Date().toLocaleString()
  };

  localStorage.setItem(`voto_${correoVotanteActual}`, JSON.stringify(voto));

  cambiarImagenJudaKai("img/juda-kai-feliz.png", "feliz");
  decirMensaje("Voto registrado. El Judas Kái ya tiene un nombre más en la lista.");
  cambiarPantalla("pantallaFinal");

  console.log("Voto registrado:", voto);
}

function reiniciarVista() {
  document.getElementById("correoVotante").value = "";
  selectPersona.value = "";

  correoVotanteActual = "";
  candidatoSeleccionado = "";

  cambiarImagenJudaKai("img/juda-kai-normal.png", "");
  decirMensaje("Bienvenido a la elección del Judas Kái Royal. Ingresá tu correo corporativo para votar.");
  cambiarPantalla("pantallaCorreo");
}

cargarColaboradores();
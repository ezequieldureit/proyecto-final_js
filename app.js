const solicitar = document.getElementById('solicitar');
const container_id = document.getElementById('container_id');
const cerrar = document.getElementById('cerrar');
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let peso = document.getElementById("peso");
let text = document.getElementById("resultado");

// FETCH DE NUTRICIONISTA A JSON A CONSOLE LOG
function cargarNutricionistas(){
    fetch("data.json")
    .then(res => res.json())
    .then(nutricionistas => {
        nutricionistas.forEach(nutricionistas => {
            console.log(nutricionistas);
        });

    })
}

// PLANES
function plan1(){
    swal({
        title: "Bienvenido " + nombre.value + " te recomendamos el PLAN 1 !",
        text:" Te recomendamos comer cada 3 horas ya que es muy importante para aumentar el consumo de calorías a lo largo del día y favorecer la ganancia de peso, debido a que se deben ingerir más calorías que las que el organismo gasta. Asimismo, se debe mantener un buen balance diario tanto de las calorías provenientes de los carbohidratos como de las proteínas y las grasas, esto también favorecerá el aumento de la masa muscular.",
        icon: "success",
    });
}
function plan2(){
    swal({
        title: "Bienvenido " + nombre.value + " te recomendamos el PLAN 2 !",        
        text: "Una de las recomendaciones que dan los expertos para mantener el peso equilibrado es seguir una dieta rica en nutrientes de estilo mediterráneo. Esta se encuentra integrada por 50% de carbohidratos, 35% de grasas y lípidos y 15% de proteínas.",
        icon: "success",
    });
}
function plan3(){
    swal({
        title: "Bienvenido " + nombre.value + " te recomendamos el PLAN 3 !",
        text: "Para este plan te recomenado la dieta cetogenica. Esta dieta implica reducir los carbohidratos de forma drástica y reemplazarlos por grasas. Esta disminución expone al cuerpo a un estado metabólico llamado cetosis.",
        icon: "success",
    });
}
function plan4(){
    swal({
        title: "Bienvenido " + nombre.value + " te recomendamos el PLAN 4 !",
        text: "La dieta que te recomendamos es baja en carbohidratos (o Low carb, como se la conoce en inglés) restringe los carbohidratos. Los carbohidratos se encuentran mayormente en los alimentos azucarados, la pasta y el pan. En su lugar se consume comida a base de ingredientes naturales, enfocándose en proteínas y verduras y grasas naturales.",
        icon: "success",
    });
}

solicitar.addEventListener('click', () => {

    if (peso.value >= 45 && peso.value <= 60 ) {
        plan1();
    }   
    else if (peso.value >= 61 && peso.value  <= 75) {
        plan2();
    }
    else if (peso.value >= 76 && peso.value  <= 98) {
        plan3();
    }
    else if (peso.value >= 99 && peso.value  <= 150) {
        plan4();
    }
    
    else{
        swal({
            title: "Datos errones!",
            text: "Por favor ingrese datos legibles",
            icon: "warning",
        });
    }


});
    // CARGO JSON DE NUTRICIONISTAS
    cargarNutricionistas();








const d = document
const $inputs = d.querySelectorAll(".form-input")
const $form = d.querySelector(".form")

$form.addEventListener("submit", e => {
    
    for (var i = 0; i < $inputs.length; i ++){
        if ($inputs[i].value == "" || $inputs[i].value == null){44
            e.preventDefault()
            alert("Por favor completa todos los campos")
            $inputs[i].focus();
            break
        }
    }
})

// Data
function mask_date() {
    var n_char = document.getElementById("txtdate").value.length;
    if (n_char == 2) {
        document.getElementById("txtdate").value = document.getElementById("txtdate").value + "/";
    } else if (n_char == 5) {
        document.getElementById("txtdate").value = document.getElementById("txtdate").value + "/";

    }
}
// Cep
function mask_cep() {
    var n_char = document.getElementById("txtcep").value.length;
    if (n_char == 5) {
        document.getElementById("txtcep").value = document.getElementById("txtcep").value + "-";
    }
}
// Telefone
function mask_fone() {
    var n_char = document.getElementById("txtfone").value.length;
    if (n_char == 2) {
        document.getElementById("txtfone").value = "(" + document.getElementById("txtfone").value + ") ";
    } else if (n_char == 9) {
        document.getElementById("txtfone").value = document.getElementById("txtfone").value + "-";
    }


}
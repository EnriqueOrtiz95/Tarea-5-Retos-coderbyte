function validarUsuario(str) {
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
    return str.length >= 4 && str.length <= 25 && regex.test(str)
  }

  console.log(validarUsuario(["aaba"]));
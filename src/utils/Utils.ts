class Utils {
  public static validarPassword = (password: string) => {
    const passwordRe =
      /^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

    return passwordRe.test(password);
  };
}

export default Utils;

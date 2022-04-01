export class CPF {
  public valor: string;

  constructor(valor: string) {
    this.valor = valor?.replace(".", "").replace("-", "");
  }

  formatarCPF(): string {
    const cpf = this.valor.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
}

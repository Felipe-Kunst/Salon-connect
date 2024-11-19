import axiosInstance from "../AxiosInstance";

export class ReservaService {
    constructor(http = axiosInstance) {
        this.http = http
    }

    async getServicosByFuncionarioId(fucionarioId){
        try{
            const response = await this.http.get(`servico/${funcionarioId}`)
            return response;
        } catch (error) {
            if (error.response && error.response.status !== 200) {
                throw new Error('Erro ao buscar serviços. Verifique os dados enviados');
            } else {
                throw new Error('Erro no servidor: Tente novamente mais tarde');
            }
        }
    }
}
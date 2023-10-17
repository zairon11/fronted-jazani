import axios, { type AxiosResponse } from 'axios';
import { type PersonaResponse } from '../domain';

export const findAll = async (): Promise<AxiosResponse<PersonaResponse[]>> =>
	await axios.get<PersonaResponse[]>('https://localhost:7047/api/Persona');

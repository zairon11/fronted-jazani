import axios, { type AxiosResponse } from 'axios';
import { API_BASE_URL } from '@/core/constants/env';
import { type MineralTypeResponse } from '../domain';

export const findAll = async (): Promise<MineralTypeResponse[]> => {
	// const response: MineralTypeResponse[] = await fetch('https://localhost:7014/api/mineraltype')
	// 	.then(async res => await res.json())
	// 	.then((res: MineralTypeResponse[]) => res);

	// return response;

	const response: AxiosResponse<MineralTypeResponse[]> = await axios.get<MineralTypeResponse[]>(
		`${API_BASE_URL}/api/mineraltype`,
	);

	return response.data;
};

import { useEffect, useState } from 'react';
import styled from 'styled-components';

type WeatherData = {
  temperature: number;
  city: string;
  region: string; // Estado
  icon: string;
};

const WidgetContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  background-color: rgba(18, 0, 18, 0.7);
  color: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  font-size: 0.875rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  backdrop-filter: blur(8px);
`;

const WeatherIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const EstadosBrasil: Record<string, string> = {
  Acre: 'AC',
  Alagoas: 'AL',
  Amapa: 'AP',
  Amazonas: 'AM',
  Bahia: 'BA',
  Ceara: 'CE',
  'Distrito Federal': 'DF',
  'Espirito Santo': 'ES',
  Goias: 'GO',
  Maranhao: 'MA',
  'Mato Grosso': 'MT',
  'Mato Grosso do Sul': 'MS',
  'Minas Gerais': 'MG',
  Para: 'PA',
  Paraiba: 'PB',
  Parana: 'PR',
  Pernambuco: 'PE',
  Piaui: 'PI',
  'Rio de Janeiro': 'RJ',
  'Rio Grande do Norte': 'RN',
  'Rio Grande do Sul': 'RS',
  Rondonia: 'RO',
  Roraima: 'RR',
  'Santa Catarina': 'SC',
  'Sao Paulo': 'SP',
  Sergipe: 'SE',
  Tocantins: 'TO',
};

export const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const apiKey = import.meta.env.VITE_OPENWEATHER_KEY; // <-- Substitua pela sua API key da WeatherAPI

        try {
          const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&lang=pt`
          );
          if (!res.ok) {
            console.error('Falha na requisição', res.status);
            return;
          }
          const data = await res.json();

          const stateName = data.location.region;
          const stateUF = EstadosBrasil[stateName] || stateName;

          const weatherData: WeatherData = {
            temperature: data.current.temp_c,
            city: data.location.name,
            region: stateUF, // <- Aqui vem o estado!
            icon: `https:${data.current.condition.icon}`,
          };
          setWeather(weatherData);
        } catch (error) {
          console.error('Erro ao buscar clima', error);
        }
      },
      (error) => {
        console.warn('Usuário negou localização ou falhou', error);
      }
    );
  }, []);

  if (!weather) return null;

  return (
    <WidgetContainer aria-label="Informações do clima">
      <WeatherIcon src={weather.icon} alt="Ícone do clima atual" />
      <div>
        <div>
          {weather.city} - {weather.region}
        </div>
        <div>{weather.temperature.toFixed(0)}°C</div>
      </div>
    </WidgetContainer>
  );
};

// importa del package che mi rende disponibili le variabili d'ambiente
// import dotenv from 'dotenv';

// carica le variabili d'ambiente dal file .env 
// dotenv.config();

const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBlODVlMmI0NmQyM2U5Yjk2ZDhhNjkyZTRhOWZhNiIsInN1YiI6IjY1ZTg2YWQ5ZTMyOTQzMDE0YTliZmM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvD5_Y8GpE9vO1T8LMEoGvsO28K9dWlz1jLWrchTWbE'

export const BASE_URL = 'https://api.themoviedb.org/3/';

export const OPTIONS = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: 
            `Bearer ${apiKey}`
    },
};



import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="36cbea2ef594a725354e534a4cb8f9ea";

    let getWeatherInfo=async()=>{
        try
        { 
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json(); 
        let result={
            city: city,
            temp:jsonResponse.main.temp,
            temMin:jsonResponse.main.temp_min,
            temMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;
    } catch(error){
        setError("No such place in our API")
    }
    };

    
    let handleCityChange=(event)=>{
    setCity(event.target.value);
};

let handleSubmit= async (event)=>{
    try{
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
     } catch(err){
            setError(true)
        }
    };    
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="Search for cities" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleCityChange}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            background: '#202b3c',
                            color: '#ffffff',
                            border: 'none',
                            '& fieldset': {
                                border: 'none',
                            },
                            '&:hover fieldset': {
                                border: 'none',
                            },
                            '&.Mui-focused fieldset': {
                                border: 'none',
                            }
                        },
                        '& .MuiInputLabel-root': {
                            color: '#8b92a8',
                            fontWeight: 400,
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#8b92a8',
                        }
                    }}
                />
                <Button 
                    variant="contained" 
                    type="submit"
                    sx={{
                        ml: 1,
                        px: 3,
                        py: 1.8,
                        borderRadius: '12px',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        background: '#1e90ff',
                        color: '#ffffff',
                        border: 'none',
                        boxShadow: 'none',
                        '&:hover': {
                            background: '#4da6ff',
                            boxShadow: 'none',
                        }
                    }}
                >
                    Search
                </Button>
                {error && 
                    <p className="error-message">
                        ⚠️ No such place exists!
                    </p>
                }
            </form>
        </div>
    );
}
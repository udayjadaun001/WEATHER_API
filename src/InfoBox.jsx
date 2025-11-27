import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({info}) {
    // Weather-specific images from Unsplash
    const getWeatherImage = () => {
        if (!info.weather) {
            return "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=800&auto=format&fit=crop&q=60";
        }
        
        const weather = info.weather.toLowerCase();
        
        // Smoke/Pollution conditions (man-made)
        if (weather.includes('smoke') || weather.includes('pollution') || weather.includes('dust') || weather.includes('ash')) {
            return "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&auto=format&fit=crop&q=60";
        }
        // Rain conditions
        else if (weather.includes('rain') || weather.includes('drizzle')) {
            return "https://images.unsplash.com/photo-1519692933481-0d8015159bd7?w=800&auto=format&fit=crop&q=60";
        }
        // Snow conditions
        else if (weather.includes('snow')) {
            return "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&auto=format&fit=crop&q=60";
        }
        // Cloudy conditions
        else if (weather.includes('cloud')) {
            return "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&auto=format&fit=crop&q=60";
        }
        // Clear/Sunny conditions
        else if (weather.includes('clear') || weather.includes('sun')) {
            return "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=800&auto=format&fit=crop&q=60";
        }
        // Thunderstorm
        else if (weather.includes('thunder') || weather.includes('storm')) {
            return "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&auto=format&fit=crop&q=60";
        }
        // Mist/Fog/Haze
        else if (weather.includes('mist') || weather.includes('fog') || weather.includes('haze')) {
            return "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=800&auto=format&fit=crop&q=60";
        }
        // Default
        else {
            return "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=800&auto=format&fit=crop&q=60";
        }
    };
    
    // Get weather icon
    const getWeatherIcon = () => {
        if (!info.weather) return "🌤️";
        
        const weather = info.weather.toLowerCase();
        if (weather.includes('smoke') || weather.includes('pollution') || weather.includes('dust') || weather.includes('ash')) return "💨";
        if (weather.includes('rain')) return "🌧️";
        if (weather.includes('snow')) return "❄️";
        if (weather.includes('cloud')) return "☁️";
        if (weather.includes('clear') || weather.includes('sun')) return "☀️";
        if (weather.includes('thunder') || weather.includes('storm')) return "⛈️";
        if (weather.includes('mist') || weather.includes('fog')) return "🌫️";
        if (weather.includes('drizzle')) return "🌦️";
        if (weather.includes('haze')) return "😶‍🌫️";
        return "🌤️";
    };

    return ( 
    <div className="InfoBox" key={info.city}>
        <div className='cardContainer'>
            <Card className="weather-card" sx={{ 
                // maxWidth: 1100,
                width: '100%',
                borderRadius: '24px',
                overflow: 'visible',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                    transform: 'translateY(-15px) rotateX(5deg)',
                    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)'
                }
            }}>
                <div style={{ position: 'relative' }}>
                    <CardMedia
                        sx={{ 
                            height: 240,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)'
                            }
                        }}
                        image={getWeatherImage()}
                        title={info.weather || "Weather"}
                    />
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        fontSize: '4rem',
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                        animation: 'float 3s ease-in-out infinite'
                    }}>
                        {getWeatherIcon()}
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '24px',
                        color: 'white',
                        textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
                    }}>
                        <Typography variant="h3" sx={{ fontWeight: 900, mb: 0.5 }}>
                            {info.temp ? `${Math.round(info.temp)}°` : '--°'}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600, opacity: 0.9 }}>
                            {info.city || "Search a City"}
                        </Typography>
                    </div>
                </div>
                
                <CardContent sx={{ p: 3 }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '16px',
                        marginBottom: '16px'
                    }}>
                        <div className="info-box" style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            padding: '16px',
                            borderRadius: '16px',
                            color: 'white',
                            textAlign: 'center',
                            boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
                            transition: 'transform 0.3s ease',
                            animation: 'slideInUp 0.6s ease-out',
                            animationDelay: '0.1s',
                            opacity: 0,
                            animationFillMode: 'forwards'
                        }}>
                            <Typography variant="caption" sx={{ opacity: 0.9, fontWeight: 600 }}>
                                Feels Like
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5 }}>
                                {info.feelsLike ? `${Math.round(info.feelsLike)}°C` : '--'}
                            </Typography>
                        </div>
                        
                        <div className="info-box" style={{
                            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            padding: '16px',
                            borderRadius: '16px',
                            color: 'white',
                            textAlign: 'center',
                            boxShadow: '0 8px 16px rgba(245, 87, 108, 0.3)',
                            transition: 'transform 0.3s ease',
                            animation: 'slideInUp 0.6s ease-out',
                            animationDelay: '0.2s',
                            opacity: 0,
                            animationFillMode: 'forwards'
                        }}>
                            <Typography variant="caption" sx={{ opacity: 0.9, fontWeight: 600 }}>
                                Humidity
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5 }}>
                                {info.humidity ? `${info.humidity}%` : '--'}
                            </Typography>
                        </div>
                        
                        <div className="info-box" style={{
                            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                            padding: '16px',
                            borderRadius: '16px',
                            color: 'white',
                            textAlign: 'center',
                            boxShadow: '0 8px 16px rgba(79, 172, 254, 0.3)',
                            transition: 'transform 0.3s ease',
                            animation: 'slideInUp 0.6s ease-out',
                            animationDelay: '0.3s',
                            opacity: 0,
                            animationFillMode: 'forwards'
                        }}>
                            <Typography variant="caption" sx={{ opacity: 0.9, fontWeight: 600 }}>
                                Min Temp
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5 }}>
                                {info.temMin ? `${Math.round(info.temMin)}°C` : '--'}
                            </Typography>
                        </div>
                        
                        <div className="info-box" style={{
                            background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                            padding: '16px',
                            borderRadius: '16px',
                            color: 'white',
                            textAlign: 'center',
                            boxShadow: '0 8px 16px rgba(250, 112, 154, 0.3)',
                            transition: 'transform 0.3s ease',
                            animation: 'slideInUp 0.6s ease-out',
                            animationDelay: '0.4s',
                            opacity: 0,
                            animationFillMode: 'forwards'
                        }}>
                            <Typography variant="caption" sx={{ opacity: 0.9, fontWeight: 600 }}>
                                Max Temp
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5 }}>
                                {info.temMax ? `${Math.round(info.temMax)}°C` : '--'}
                            </Typography>
                        </div>
                    </div>
                    
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                        padding: '16px',
                        borderRadius: '16px',
                        textAlign: 'center',
                        animation: 'slideInUp 0.6s ease-out',
                        animationDelay: '0.5s',
                        opacity: 0,
                        animationFillMode: 'forwards'
                    }}>
                        <Typography variant="body1" sx={{ 
                            fontStyle: 'italic',
                            color: '#667eea',
                            fontWeight: 600,
                            textTransform: 'capitalize'
                        }}>
                            {info.weather || 'Waiting for weather data...'}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
    );
}
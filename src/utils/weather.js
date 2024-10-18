const weatherCodeDescriptions = [
    'Cloud development not observed or not observable',
    'Cloud generally dissolving or becoming less developed',
    'State of sky on the whole unchanged',
    'Clouds generally forming or developing',
    'Visibility reduced by smoke, e.g. veldt or forest fires, industrial smoke',
    'Haze',
    'Widespread dust in suspension in the air, not raised by wind at or near the station',
    'Dust or sand raised by wind at or near the station at the time of observation',
    'Well-developed dust or sand whirl(s) seen at or near the station',
    'Duststorm or sandstorm within sight at the time of observation, or at the',
    'Mist',
    'Patches of shallow fog or ice fog at the station, whether on land',
    'More or less continuous shallow fog or ice fog at the station',
    'Lightning visible, no thunder heard ',
    'Precipitation within sight, not reaching the ground or the surface of the sea',
    'Precipitation within sight, reaching the ground or the surface of the sea',
    'Precipitation within sight, reaching the ground or the surface of the sea',
    'Thunderstorm, but no precipitation at the time of observation',
    'Squalls at or within sight of the station or at the time of observation',
    'Squalls at or within sight of the station or at the time of observation',
    'Squalls at or within sight of the station or at the time of observation',
    'Rain (not freezing), not falling as showers, not at the time of ob',
    'Snow, not falling as showers, but not at the time of observation',
    'Rain and snow or ice pellets, not falling as showers;',
    'Freezing drizzle or freezing rain; but not at the time of observation',
    'Shower(s) of rain but not at the time of observation',
    'Shower(s) of rain but not at the time of observation',
    'Shower(s) of hail, or of rain and hail but not at the time of observation',
    'Fog or ice fog but not at the time of observation',
    'Thunderstorm (with or without precipitation) but not at the time of ob',
    'Slight or moderate duststorm or sandstorm - has decreased',
    'Slight or moderate duststorm or sandstorm - no appreciable change',
    ' Slight or moderate duststorm or sandstorm - has begun or has increased',
    'Severe duststorm or sandstorm - has decreased',
    'Severe duststorm or sandstorm - no appreciable change',
    'Severe duststorm or sandstorm - has begun or has increased ',
    'Slight/moderate drifting snow - generally low (below eye level)',
    'Heavy drifting snow - generally low (below eye level)',
    'Slight/moderate blowing snow - generally high (above eye level)',
    'Heavy blowing snow - generally high (above eye level)',
    'Fog or ice fog at a a distance at the time of observation, but not at station',
    'Fog or ice fog in patches',
    'Fog or ice fog in patches ',
    'Fog/ice fog, sky invisible, has become thinner',
    'Fog or ice fog, sky visible, no appreciable change during the past hour',
    'Fog or ice fog, sky invisible, no appreciable change',
    'Fog or ice fog, sky visible, has begun or has become thicker during preceding hour',
    'Fog or ice fog, sky invisible, has begun or has become thicker',
    'Fog, depositing rime, sky visible ',
    'Fog, depositing rime, sky invisible',
    'Drizzle, not freezing, intermittent, slight at time of ob.',
    "Drizzle, not freezing, continuous, slight at time of ob.",
    "Drizzle, not freezing, intermittent, moderate at time of ob.",
    "Drizzle, not freezing, continuous, moderate at time of ob.",
    "Drizzle, not freezing, intermittent, heavy at time of ob.",
    "Drizzle, not freezing, continuous, heavy at time of ob.",
    "Drizzle, freezing, slight",
    "Drizzle, freezing, moderate or heavy (dense)",
    "Rain and drizzle, slight",
    "Rain and drizzle, moderate or heavy",
    "Rain, not freezing, intermittent, slight at time of ob.",
    "Rain, not freezing, continuous, slight at time of ob.",
    "Rain, not freezing, intermittent, moderate at time of ob.",
    "Rain, not freezing, continuous, moderate at time of ob.",
    "Rain, not freezing, intermittent, heavy at time of ob.",
    "Rain, not freezing, continuous, heavy at time of ob.",
    "Rain, freezing, slight",
    "Rain, freezing, moderate or heavy",
    "Rain or drizzle and snow, slight",
    "Rain or drizzle and snow, moderate or heavy",
    "Intermittent fall of snowflakes, slight at time of ob.",
    "Continuous fall of snowflakes, slight at time of ob.",
    "Intermittent fall of snowflakes, moderate at time of ob.",
    "Continuous fall of snowflakes, moderate at time of ob.",
    "Intermittent fall of snowflakes, heavy at time of ob.",
    "Continuous fall of snowflakes, heavy at time of ob.",
    "Diamond dust (with or without fog)",
    "Snow grains (with or without fog)",
    "Isolated star-like snow crystals (with or without fog)",
    "Ice pellets",
    "Rain shower(s), slight",
    "Rain shower(s), moderate or heavy",
    "Rain shower(s), violent",
    "Shower(s) of rain and snow, slight",
    "Shower(s) of rain and snow, moderate or heavy",
    "Snow shower(s), slight",
    "Snow shower(s), moderate or heavy",
    "Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed - slight",
    "Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed - moderate or heavy",
    "Shower(s) of hail, with or without rain or rain and snow mixed, not associated with thunder - slight",
    "Shower(s) of hail, with or without rain or rain and snow mixed, not associated with thunder - moderate or heavy",
    "Slight rain at time of observation - Thunderstorm but not at time of observation",
    "Moderate or heavy rain at time of observation - Thunderstorm but not at time of observation",
    "Slight snow, or rain and snow mixed or hail at time of observation - Thunderstorm but not at time of observation",
    "Moderate or heavy snow, or rain and snow mixed or hail at time of observation - Thunderstorm but not at time of observation",
    "Thunderstorm, slight or moderate, without hail, but with rain and/or snow at time of observation",
    "Thunderstorm, slight or moderate, with hail at time of ob.",
    "Thunderstorm, heavy, without hail, but with rain and/or snow at time of observation",
    "Thunderstorm combined with dust/sandstorm at time of observation",
    "Thunderstorm, heavy with hail at time of observation"
]

export function getWeatherUniCode(weatherCode) {
    if (weatherCode <= 2) return '☀️'
    if (weatherCode <= 12) return '⛅'
    if (weatherCode <= 20) return '🌦️'
    if (weatherCode <= 36) return '🌧️'
    if (weatherCode <= 39) return '🌨️'
    if (weatherCode <= 89) return '🌧️'
    if (weatherCode <= 99) return '⛈️'
}

export function getWeatherDescription(weatherCode) {
    return weatherCodeDescriptions[weatherCode]
}
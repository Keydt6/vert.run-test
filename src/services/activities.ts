import { get } from './http'

const URL_BASE = `https://www.strava.com/api/v3`
const ENDPOINT_ATHLETE_ACTIVITIES_URL = `/athlete/activities`


// before: number, after: number, page: number, per_page: number
export const fetchActivities = async () => {
    console.log('fetchActivities')
    try {
        const resp = await get(`${URL_BASE}${ENDPOINT_ATHLETE_ACTIVITIES_URL}?before=&after=&page=&per_page=`)
        const data = await resp.json()

        // .then(data => {
        //     console.log('Datos recibidos:', data)
        // })
        // .catch(error => {
        //     console.error('Error al obtener los datos:', error)
        // })

        // const resp = await fetch(`${URL_BASE}${ENDPOINT_ATHLETE_ACTIVITIES_URL}?before=&after=&page=&per_page=`)
        // const data = await resp.json()

        return data

        // if (data.Response === 'True') {
        //   return data.Search.map((e) => {
        //     return {
        //       title: e.Title,
        //       year: e.Year,
        //       id: e.imdbID,
        //       type: e.Type,
        //       poster: e.Poster !== 'N/A' ? e.Poster : '/movie-na.jpeg'
        //     }
        //   })
        // }

        // return []
    } catch (err) {
        throw new Error('Error searching activities')
    }
}
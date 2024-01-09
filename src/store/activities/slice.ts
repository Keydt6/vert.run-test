import { createSlice } from '@reduxjs/toolkit'

export interface Activity {
    resource_state: number
    athlete: Athlete
    name: string
    distance: number
    moving_time: number
    elapsed_time: number
    total_elevation_gain: number
    type: string
    sport_type: string
    workout_type: any
    external_id: string
    upload_id: number
    start_date: string
    start_date_local: string
    timezone: string
    utc_offset: number
    start_latlng: any
    end_latlng: any
    location_city: any
    location_state: any
    location_country: string
    achievement_count: number
    kudos_count: number
    comment_count: number
    athlete_count: number
    photo_count: number
    map: Map
    trainer: boolean
    commute: boolean
    manual: boolean
    private: boolean
    flagged: boolean
    gear_id: string
    from_accepted_tag: boolean
    average_speed: number
    max_speed: number
    average_cadence: number
    average_watts: number
    weighted_average_watts: number
    kilojoules: number
    device_watts: boolean
    has_heartrate: boolean
    average_heartrate: number
    max_heartrate: number
    max_watts: number
    pr_count: number
    total_photo_count: number
    has_kudoed: boolean
    suffer_score: number
}

export interface ActivityWihtId extends Activity {
    id: number
}

export interface Athlete {
    id: number
    resource_state: number
}

export interface Map {
    id: string
    summary_polyline: any
    resource_state: number
}


const DEFAULT_STATE = [
    {
        "resource_state": 2,
        "athlete": {
            "id": 134815,
            "resource_state": 1
        },
        "name": "Happy Friday",
        "distance": 24931.4,
        "moving_time": 4500,
        "elapsed_time": 4500,
        "total_elevation_gain": 0,
        "type": "Ride",
        "sport_type": "MountainBikeRide",
        "workout_type": null,
        "id": 154504250376823,
        "external_id": "garmin_push_12345678987654321",
        "upload_id": 987654321234567891234,
        "start_date": "2018-05-02T12:15:09Z",
        "start_date_local": "2018-05-02T05:15:09Z",
        "timezone": "(GMT-08:00) America/Los_Angeles",
        "utc_offset": -25200,
        "start_latlng": null,
        "end_latlng": null,
        "location_city": null,
        "location_state": null,
        "location_country": "United States",
        "achievement_count": 0,
        "kudos_count": 3,
        "comment_count": 1,
        "athlete_count": 1,
        "photo_count": 0,
        "map": {
            "id": "a12345678987654321",
            "summary_polyline": null,
            "resource_state": 2
        },
        "trainer": true,
        "commute": false,
        "manual": false,
        "private": false,
        "flagged": false,
        "gear_id": "b12345678987654321",
        "from_accepted_tag": false,
        "average_speed": 5.54,
        "max_speed": 11,
        "average_cadence": 67.1,
        "average_watts": 175.3,
        "weighted_average_watts": 210,
        "kilojoules": 788.7,
        "device_watts": true,
        "has_heartrate": true,
        "average_heartrate": 140.3,
        "max_heartrate": 178,
        "max_watts": 406,
        "pr_count": 0,
        "total_photo_count": 1,
        "has_kudoed": false,
        "suffer_score": 82
    },
    {
        "resource_state": 2,
        "athlete": {
            "id": 167560,
            "resource_state": 1
        },
        "name": "Bondcliff",
        "distance": 23676.5,
        "moving_time": 5400,
        "elapsed_time": 5400,
        "total_elevation_gain": 0,
        "type": "Ride",
        "sport_type": "MountainBikeRide",
        "workout_type": null,
        "id": 1234567809,
        "external_id": "garmin_push_12345678987654321",
        "upload_id": 1234567819,
        "start_date": "2018-04-30T12:35:51Z",
        "start_date_local": "2018-04-30T05:35:51Z",
        "timezone": "(GMT-08:00) America/Los_Angeles",
        "utc_offset": -25200,
        "start_latlng": null,
        "end_latlng": null,
        "location_city": null,
        "location_state": null,
        "location_country": "United States",
        "achievement_count": 0,
        "kudos_count": 4,
        "comment_count": 0,
        "athlete_count": 1,
        "photo_count": 0,
        "map": {
            "id": "a12345689",
            "summary_polyline": null,
            "resource_state": 2
        },
        "trainer": true,
        "commute": false,
        "manual": false,
        "private": false,
        "flagged": false,
        "gear_id": "b12345678912343",
        "from_accepted_tag": false,
        "average_speed": 4.385,
        "max_speed": 8.8,
        "average_cadence": 69.8,
        "average_watts": 200,
        "weighted_average_watts": 214,
        "kilojoules": 1080,
        "device_watts": true,
        "has_heartrate": true,
        "average_heartrate": 152.4,
        "max_heartrate": 183,
        "max_watts": 403,
        "pr_count": 0,
        "total_photo_count": 1,
        "has_kudoed": false,
        "suffer_score": 162
    }
]

const initialState: ActivityWihtId[] = (() => {
    const persistedState = localStorage.getItem('redux_state')
    if (persistedState) return JSON.parse(persistedState).activities

    return []
})()

export const activitiesSlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {}
})

export default activitiesSlice.reducer
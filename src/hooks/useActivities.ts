import { useEffect, useState, useMemo } from 'react'
import { useAppSelector } from '../hooks/useStore'
import { fetchActivities } from '../services/activities'

const useActivities = () => {
    const activitiesState = useAppSelector((state) => state.activities)
    const [activities, setActivities] = useState(activitiesState)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!activitiesState.length) {
            getActivities()
        }
    }, [])

    const getActivities = useMemo(() => {
        console.log('getActivities')
        return async () => {
            try {
                setLoading(true)
                setError(null)
                const data = await fetchActivities()
                console.log('data', data)
                setActivities(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
    }, [])

    return {
        activities,
        error,

        getActivities,
    }
}

export default useActivities
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Title
} from '@tremor/react'
import useActivities from '../hooks/useActivities'

export default function AthleteActivitiesList() {
  const { activities } = useActivities()
  return (
    <Card>
      <Title className='flex px-4'>
        Activities
        <Badge style={{ marginLeft: '8px' }} color={'blue'}>
          {activities.length}
        </Badge>
        <button className='ml-auto'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
            />
          </svg>
        </button>
      </Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className='text-right'>Date</TableHeaderCell>
            <TableHeaderCell className='text-right'>Distance</TableHeaderCell>
            <TableHeaderCell className='text-right'>time</TableHeaderCell>
            <TableHeaderCell className='text-right'>
              Elevation Gain
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell className='text-right'>{item.start_date}</TableCell>
              <TableCell className='text-right'>{item.distance}</TableCell>
              <TableCell className='text-right'>{item.elapsed_time}</TableCell>
              <TableCell className='text-right'>
                {item.total_elevation_gain}
              </TableCell>
              {/* <TableCell className='text-right'>
                <Badge deltaType={item.deltaType} size='xs'>
                  {item.delta}
                </Badge>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

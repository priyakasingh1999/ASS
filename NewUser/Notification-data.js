import { Box, Stack, Typography } from "@mui/material"

const data = [

    {
        id: 1,
        name: ' Receive external emails for New Discussions',
        date: '',
    },
    {
        id: 2,
        name: 'Select time to receive notification',
        date: '',
    },
    {
        id: 3,
        name: 'Receive external emails for Project Tasks files or photos',
        date: <Box>
            <Stack gap={1} direction='row' sx={{ justifyContent: 'space-between' }}>
                <Typography>From</Typography>
                <input type="time" />
                <Typography>To</Typography>
                <input type="time" />
            </Stack>
        </Box>,
    },
    {
        id: 4,
        name: 'Receive external emails for Project Tasks assignments',
        date: '',
    },
    {
        id: 5,
        name: ' Receive external emails for Project Tasks comments',
    },
    {
        id: 6,
        name: ' Receive external emails for Project Tasks tags',
        date: '',
    },
    {
        id: 7,
        name: ' Receive external emails for project Tasks milestones or criticalities',
        date: '',
    },
    {
        id: 8,
        name: ' Receive external emails for Project Tasks',
        date: '',
    },

    {
        id: 9,
        name: ' Receive external emails for Project Links',
        date: '',
    }
    ,

    {
        id: 10,
        name: ' Receive external emails for Posts on Project Boards',
        date: '',
    }
    ,

    {
        id: 11,
        name: 'Receive external emails for Files on Stations',
        date: '',
    }
    ,

    {
        id: 12,
        name: 'Receive external emails for being invited as a member to a Project Board',
        date: '',
    }
    ,

    {
        id: 13,
        name: ' Receive external emails for Request to join a Station',
        date: '',
    }
    ,

    {
        id: 14,
        name: 'Receive external emails for Assignments on Project Boards',
        date: '',
    }
    ,

    {
        id: 15,
        name: 'Receive external emails for comments on photos (Stations, Associate Photos, Project Boards)',
        date: '',
    }
    ,

    {
        id: 16,
        name: ' Receive external emails for comments or Likes on Huddle',
        date: '',
    }
    ,

    {
        id: 17,
        name: 'Receive external emails for Project Boards Milestones',
        date: '',
    }
    ,

    {
        id: 18,
        name: 'Receive external emails for Station Updates',
        date: '',
    }
    ,

    {
        id: 19,
        name: ' Receive external emails for Text Alerts',
        date: '',
    },

    {
        id: 20,
        name: 'Receive external emails for Comments on Shared Files Video, logs, Documents',
        date: '',
    }
]
export default data
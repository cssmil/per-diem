import React from 'react'
import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { NoteView } from '../views/NoteView'
import { AddOutlined } from '@mui/icons-material'


export const JournalPage = () => {
  return (
    <>
      <JournalLayout>

        {/* <Typography variant='p'>JournalPage Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit impedit, deserunt commodi veniam nihil sint alias culpa quibusdam, ea cum voluptate soluta exercitationem molestiae tempora quaerat reiciendis quod repudiandae? Totam?</Typography> */}
        
        {/* <NothingSelectedView /> */}
        <NoteView />

        <IconButton
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>

      
      </JournalLayout>
    </>
  )
}

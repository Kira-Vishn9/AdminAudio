import React from 'react'
import { AddIcon, Apps, Home, List, ListItem, ListItemButton, ListItemDecorator } from '@components/index'
import './style.css'
import { Link } from 'react-router-dom'

export function Aside (): JSX.Element {
  return (
    <div className="aside">
      <List
         sx = {{
           maxWidth: 320
         }}
      >
        <ListItem>
          <ListItemButton selected>
            <ListItemDecorator>
              <Home />
            </ListItemDecorator>
            <Link to={'/main'}>
             Home
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator>
              <Apps />
            </ListItemDecorator>
            <Link to={'/songs'}>
            Songs
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator>
              <AddIcon />
            </ListItemDecorator>
            <Link to={'/newsong'}>
              Add
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator />
            Settings
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  )
}

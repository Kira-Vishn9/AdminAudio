import React from 'react'
import { Apps, Home, List, ListItem, ListItemButton, ListItemDecorator } from '@components/index'
import './style.css'

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
             Home
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator>
              <Apps />
            </ListItemDecorator>
            Songs
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

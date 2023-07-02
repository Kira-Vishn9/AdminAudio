import React from 'react'
import { Apps, List, ListItem, ListItemButton, ListItemDecorator } from '@components/index'
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
        <Link to={'/songs'}>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Apps />
              </ListItemDecorator>
              Songs
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  )
}

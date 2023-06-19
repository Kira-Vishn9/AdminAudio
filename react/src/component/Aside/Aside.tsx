import { Apps, Home, List, ListItem, ListItemButton, ListItemDecorator } from '../index'
import './style.css'

export function Aside () {
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

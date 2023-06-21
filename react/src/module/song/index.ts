import type { ISong } from './song.model.ts'
import { type getSongs } from '@/module/song/song.service.ts'

// page
import { Songs } from './views/Songs.tsx'

export { type ISong, getSongs, Songs }

import React from 'react'
import { ModalContext } from '@context/modalContext.ts'
import { Modal } from '@/components/index.ts'

// edit modal
import { ArtistsModal } from '@module/song/components/ModalWindow/ArtistsModal.tsx'
import { GenresModal } from '@module/song/components/ModalWindow/GenresModal.tsx'

export const Combiner = (): JSX.Element => {
  const { modal, close, payload } = React.useContext(ModalContext)

  return (
    <Modal
      open={modal !== ''}
      onClose={() => { close() }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        {modal === 'artists' && <ArtistsModal payload={payload} />}
        {modal === 'genres' && <GenresModal payload={payload} />}
      </div>
    </Modal>
  )
}

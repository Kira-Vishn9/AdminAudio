import React from 'react'
import { ModalContext } from '@context/modalContext.ts'
import { Modal } from '@/components/index.ts'

// edit modal
import { ArtistsModal } from '@module/song/components/ModalWindow/ArtistsModal.tsx'

export const Combiner = (): JSX.Element => {
  const { modal, close, payload } = React.useContext(ModalContext)

  return (
    <Modal
      open={modal !== ''}
      onClose={() => { close() }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>Genres
        {modal === 'artists' && <ArtistsModal payload={payload} />}
      </div>
    </Modal>
  )
}

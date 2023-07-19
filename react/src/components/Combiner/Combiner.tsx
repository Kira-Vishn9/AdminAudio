import React from 'react'
import { ModalContext } from '@/context'
import { Modal } from '@/components'

// edit modal
import { ArtistsModal } from '@/module/song'

export const Combiner = () => {
  const { modal, close, payload } = React.useContext(ModalContext)

  return (
    <Modal
      open={modal !== ''}
      onClose={() => { close() }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        {modal === 'edit' && <ArtistsModal payload={payload} />}
        {modal === 'edit' && <ArtistsModal payload={payload} />}
      </div>
    </Modal>
  )
}

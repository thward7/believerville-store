import {
  CardBody,
  CardFooter,
  Card as Game,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import React from 'react'
import { ICard } from '../types'

interface Props {
  card: ICard
}

const Card = ({ card }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [backdrop, setBackdrop] = React.useState('opaque')

  const handleOpen = () => {
    setBackdrop(backdrop)
    onOpen()
  }

  return (
    <>
      <Game
        onClick={handleOpen}
        shadow='lg'
        key={card?.gameId}
        isPressable
        isHoverable
        isBlurred
        onPress={() => console.log('item pressed')}
      >
        <CardBody className='overflow-visible p-0'>
          <Image
            shadow='md'
            radius='lg'
            width='100%'
            alt={card?.gameName}
            className='h-[220px] w-full object-cover'
            src={card?.logoPicture}
          />
        </CardBody>
        <CardFooter className='flex flex-col items-start justify-between space-y-2 text-small'>
          <div className='line-clamp-1 text-left'>
            <b>{card?.gameName}</b>
          </div>
          <div>
            <p className='text-default-500'>{card?.minPrice} руб.</p>
          </div>
        </CardFooter>
      </Game>
      <Modal
        className='p-2 pb-8'
        backdrop='opaque'
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className=''>
                <p>{card?.gameName}</p>
              </ModalHeader>
              <ModalBody>
                <img
                  className='h-[300px] w-full rounded-2xl object-cover'
                  src={card?.logoPicture}
                />
                <p className='pt-2 text-right font-bold'>
                  Цена: {card?.minPrice} руб.
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Card

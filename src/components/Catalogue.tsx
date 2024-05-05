import { Input, Select, SelectItem } from '@nextui-org/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ICard } from '../types'
import Card from './Card'

const Catalogue = () => {
  const [cards, setCards] = useState<ICard[]>([])
  const [filteredCards, setFilteredCards] = useState<ICard[]>([])

  const [searchInputName, setSearchInputName] = useState('')
  const [searchInputPriceFrom, setSearchInputPriceFrom] = useState('')
  const [searchInputPriceTo, setSearchInputPriceTo] = useState('')

  useEffect(() => {
    axios.get(import.meta.env.VITE_REQUEST_MOCKAPI_URL).then((response) => {
      setCards(response.data)
      setFilteredCards(response.data)
    })
  }, [])

  useEffect(() => {
    const result = cards.filter(
      (card) =>
        card.gameName.toLowerCase().includes(searchInputName.toLowerCase()) &&
        card.minPrice >=
          (searchInputPriceFrom ? parseInt(searchInputPriceFrom) : 0) &&
        card.minPrice <=
          (searchInputPriceTo ? parseInt(searchInputPriceTo) : Infinity),
    )
    setFilteredCards(result)
  }, [searchInputName, searchInputPriceFrom, searchInputPriceTo])

  return (
    <div className='mx-auto my-4 flex max-w-[1280px] flex-col p-4'>
      <div>
        <h1 className='text-4xl font-bold'>Каталог игр</h1>
      </div>
      <div className='grid grid-cols-7 gap-2 py-4 max-lg:grid-cols-5'>
        <div className='col-span-2 flex items-center'>
          <p className='text-base'>Найдено {filteredCards.length} игр</p>
        </div>
        <div className='col-span-3 flex justify-end'>
          <Select label='Сортировка' className='max-w-xs'>
            <SelectItem key={1} value='for-name'>
              По имени
            </SelectItem>
          </Select>
        </div>
      </div>
      <div className='grid grid-cols-7 gap-6 py-4'>
        <div className='col-span-4 lg:col-span-5'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {filteredCards.length > 0 ? (
              filteredCards.map((card) => <Card card={card} />)
            ) : (
              <div className='col-span-4 text-2xl font-bold'>
                По вашему запросу ничего не нашлось.
              </div>
            )}
          </div>
        </div>
        <div className='sticky top-2 col-span-3 flex h-screen flex-col space-y-4 lg:col-span-2'>
          <div className='mb-3 text-3xl font-bold'>Поиск</div>
          <div>
            <Input
              onChange={(e) => setSearchInputName(e.target.value)}
              value={searchInputName}
              size='md'
              type='text'
              label='Название'
              placeholder='Mortal Kombat X'
            />
          </div>
          <div className='text-base'>Стоимость</div>
          <div className='flex space-x-4'>
            <Input
              size='md'
              type='text'
              label='От (руб.)'
              onChange={(e) => setSearchInputPriceFrom(e.target.value)}
              value={searchInputPriceFrom}
            />
            <Input
              size='md'
              type='text'
              label='До (руб.)'
              onChange={(e) => setSearchInputPriceTo(e.target.value)}
              value={searchInputPriceTo}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogue

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react'
import IconVK from '../assets/icon-vk.svg'

const Header = () => (
  <Navbar position='static' maxWidth='xl' className='bg-zinc-900 py-4'>
    <NavbarBrand className='cursor-pointer'>
      <a
        className='text-2xl font-bold text-white max-sm:hidden'
        href={import.meta.env.BASE_URL}
      >
        Believerville Store
      </a>
      <a
        className='hidden text-2xl font-bold text-white max-sm:block'
        href={import.meta.env.BASE_URL}
      >
        BS
      </a>
    </NavbarBrand>
    <NavbarContent justify='end'>
      <NavbarItem>
        <Popover
          placement='bottom-end'
          showArrow={true}
          shadow='lg'
          backdrop='opaque'
        >
          <PopoverTrigger>
            <Button
              as={Link}
              size='lg'
              color='default'
              href='#'
              variant='solid'
            >
              Как заказать?
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className='px-1 py-2'>
              <div className='text-small font-bold'>Привет!</div>
              <div className='text-tiny'>
                Чтобы оформить заказ, нужно перейти в нашу группу Вконтакте и
                написать нам в сообщения сообщества.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </NavbarItem>
      <NavbarItem>
        <Button
          as={Link}
          isIconOnly
          size='lg'
          color='default'
          href='#'
          variant='bordered'
        >
          <img className='p-2' src={IconVK} />
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
)

export default Header

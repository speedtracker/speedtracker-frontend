import React from 'react'

class LogoTitle extends React.Component {
  render () {
    return (
      <svg className='c-LogoTitle'
        version='1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 654.000000 115.000000'
        width={this.props.width || 872}
        height={
          this.props.width
            ? this.props.width * (24 / 140)
            : 153.333
        }>
        <path d='M457.2 31.2c-16.4 1.8-25.2 13.6-24 32.2C434.3 80.1 444.3 89 462 89c7.6 0 16.6-1.6 17.6-3.1.3-.6.3-3.7-.1-6.9l-.7-6-9.5.2c-9 .1-9.5 0-12.1-2.6-2.5-2.5-2.7-3.2-2.7-12 0-12.5.1-12.6 13-12.6h10.3l.7-6.5c.4-3.6.5-6.8.3-7-1-1.1-15.8-2-21.6-1.3zM29.5 32.5c-5.6 1.5-8.9 4.7-10.4 10.3-2.2 7.8-.7 14.5 4.2 19.1 1.4 1.3 6.3 3.8 10.9 5.7 6 2.4 8.3 3.8 8.3 5.1 0 1.6-.8 1.8-7.5 1.3-15.1-.9-15.3-.9-16.1 2.5-.4 1.6-.9 4.6-1.2 6.6l-.5 3.7 8 1.2c4.4.7 11.7 1 16.3.8C55.9 87.9 62 82.4 62 70.3c0-9.5-4.2-14.2-15.5-17.9-5.9-1.9-9.5-4-9.5-5.5 0-.8 3.3-1 10.3-.8l10.2.4.9-6.3c.5-3.4.6-6.5.3-6.9-2.4-2.3-21.4-2.9-29.2-.8zM68 59.4V88h20V70.3l10.5-.5c11.8-.5 13.4-1.3 16.6-8.3 2.4-5.2 2.5-16.4.3-21.1-1-2.1-3.5-4.5-6.3-6.2-4.5-2.6-5.1-2.7-22.8-3L68 30.8v28.6zm27.8-13.8c1.7 1.2 2.2 2.5 2.2 5.8 0 4.1-.2 4.4-3.1 5-6.8 1.3-6.9 1.2-6.9-5.9 0-6.4 0-6.5 2.8-6.5 1.5 0 3.8.7 5 1.6zM121 59.5V88h42V74h-23.1l.3-4.3.3-4.2 9.3-.3 9.2-.3V53.1l-9.2-.3-9.3-.3-.3-3.8-.3-3.7H163V31h-42v28.5zM167 59.5V88h42V74h-22.1l.3-4.3.3-4.2 9.3-.3 9.2-.3V53.1l-9.2-.3-9.3-.3-.3-3.8-.3-3.7H210V31h-43v28.5zM214 59.6v28.6l18.3-.3c17.9-.4 18.3-.5 24.2-3.4 4.7-2.4 6.6-4.1 9-7.9 2.9-4.8 3-5.4 3-17.1 0-11.8-.1-12.3-3-17-5.5-8.9-14-11.4-38.2-11.5H214v28.6zm28.5-14.1c4.6 1.9 5.8 5.1 5.7 15.7-.1 11.8-.7 12.8-8.2 12.8h-6V44h2.5c1.4 0 4.1.7 6 1.5zM270 38v7h15v43h20l.2-21.3.3-21.2 7.3-.3 7.2-.3V31h-50v7zM325.8 31.6c-1.7.5-1.8 2.7-1.8 28.5V88h19V68h7.9l2.2 10 2.2 10h39.4l1.2-6 1.2-6.1 7.1.3c7.9.3 7-.6 9.2 9.1l.6 2.7h10c5.5 0 10-.3 10-.8 0-.6-3.2-11.2-14.1-46.5l-3-9.7h-24.5L384 57.4c-4.7 14.6-8.8 25.9-9.1 25.3-.4-.7-1.4-4.6-2.4-8.7-1.2-4.8-2.7-8.3-4.2-9.8-2-1.9-2.2-2.7-1.1-3.3.7-.5 1.7-.9 2.1-.9.4 0 1.7-2.1 2.9-4.7 3.7-8.3.9-17.6-6.5-21.5-3.8-2-5.8-2.3-21.2-2.5-9.3-.1-17.8.1-18.7.3zM352.1 45c1.3.7 1.9 2.1 1.9 4.5 0 4-2.4 5.8-7.3 5.3-3.1-.3-3.2-.4-3.5-5.6l-.3-5.2h3.6c2 0 4.5.5 5.6 1zm55.3 14.8c.8 3.2.7 3.2-3.2 3.2h-4.1l2-6.7c1-3.8 1.9-7 2-7.3.1-.7 2.5 6.9 3.3 10.8zM484 59.5V88h19.9l.3-11.6.3-11.6 6 11.6 6 11.6h10.8c5.9 0 10.7-.2 10.7-.4 0-.3-3.8-7.1-8.5-15.2-7.4-12.7-8.3-14.9-7.2-16.3 1.7-2 14.7-23.7 14.7-24.5 0-.3-4.6-.6-10.3-.6h-10.2l-6 10.7-6 10.8-.3-10.8-.3-10.7H484v28.5zM539 59.5V88h42V74.1l-11.2-.3-11.3-.3v-8l9.3-.3 9.2-.3V53.1l-9.2-.3-9.3-.3v-7l11.3-.3 11.2-.3V31h-42v28.5zM587.8 31.6c-1.7.5-1.8 2.7-1.8 28.5V88h20V68h3.4c3.6 0 4.2.9 6.1 9.5.3 1.6 1.1 4.7 1.6 6.7l1 3.8h20.6l-2.8-10.6c-1.7-6.5-3.6-11.6-5-13l-2.1-2.2 3.3-3c3-2.7 3.4-3.5 3.7-9.8.3-6 0-7.4-2-10.4-4.3-6.4-8-7.5-27.3-7.7-9.3-.1-17.8.1-18.7.3zm27.2 14c1.4 1.5 1.8 6.9.7 8-.3.4-2.6.9-5.2 1.1l-4.5.6V44h3.9c2.3 0 4.4.6 5.1 1.6z' />
      </svg>
    )
  }
}

export default LogoTitle

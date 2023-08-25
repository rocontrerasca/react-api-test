import { render, screen } from '@testing-library/react'
import LandingPage from '../layouts/LandingPage'

describe('LandingPage', () => {
  it('renders a heading', () => {
    render(<LandingPage />)

    const heading = screen.getByRole('heading', {
      name: /La música que amas, al alcance de tu mano/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
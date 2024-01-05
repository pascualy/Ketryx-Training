/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home @tests:KDG-3', () => {
  it('renders the best heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

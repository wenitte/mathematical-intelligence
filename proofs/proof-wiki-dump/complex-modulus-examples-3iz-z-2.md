theorem Complex_Modulus_Example() {
  assert(
    ∀z ∈ ℂ, let w = 3iz - z² →
    |w|² = x⁴ + y⁴ + 2x²y² - 6x²y - 6y³ + 9x² + 9y²
  )
} ↔

proof Complex_Modulus_Example() {
  setVar(z: ℂ, w: ℂ, x: ℝ, y: ℝ) →
  assert(z = x + iy) →
  assert(w = 3iz - z²) →
  
  calc_steps {
    |w|² →
    |3iz - z²|² →
    |3i(x + iy) - (x + iy)²|² →
    |3ix - 3y - x² + y² - 2ixy|² →
    [by_def_complex_modulus: (-x² + y² - 3y)² + (3x - 2xy)²] →
    [(x⁴ - 2x²y² + 6x²y + y⁴ - 6y³ + 9y²) + (9x² - 12x²y + 4x²y²)] →
    x⁴ + y⁴ - 2x²y² + 4x²y² + 6x²y - 12x²y - 6y³ + 9x² + 9y² →
    x⁴ + y⁴ + 2x²y² - 6x²y - 6y³ + 9x² + 9y²
  }
}
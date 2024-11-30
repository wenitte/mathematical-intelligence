∀r(Circle(r) → (
  Area(r) = ∫_{-r}^r 2√(r²-x²)dx ∧
  (∀x(-r ≤ x ≤ r → y = ±√(r²-x²))) ∧
  (Let x = r*sin(θ) where θ ∈ [-π/2,π/2]) →
    (dx = r*cos(θ)dθ ∧
    Area(r) = ∫_{-π/2}^{π/2} 2r²√(1-sin²(θ))cos(θ)dθ) ∧
  Area(r) = ∫_{-π/2}^{π/2} 2r²cos²(θ)dθ ∧
  (∀θ(2cos²(θ) = 1 + cos(2θ))) →
    Area(r) = r²∫_{-π/2}^{π/2} (1+cos(2θ))dθ ∧
  Area(r) = r²[θ + (1/2)sin(2θ)]_{-π/2}^{π/2} ∧
  Area(r) = πr²
))

theorem Annulus_Area() {
  assert(
    ∀A: Annulus, ∃r,R,w ∈ ℝ⁺ where (
      r = inner_radius(A) ∧
      R = outer_radius(A) ∧
      w = R - r
    ) ⇒
    Area(A) = 2π(r + w/2)w
  )
} ↔

proof Annulus_Area() {
  setVar(A: Annulus) →
  setVar(r,R,w: ℝ⁺) →
  
  assert(Area(A) = π(R² - r²)) →   // Area of annulus formula
  
  assert(R = r + w) →              // Definition of width
  substitute(R) →
  
  assert(
    Area(A) = π((r + w)² - r²)
  ) →
  
  assert(
    Area(A) = π(r² + 2rw + w² - r²)  // Expand (r + w)²
  ) →
  
  assert(
    Area(A) = π(2rw + w²)           // Cancel r²
  ) →
  
  assert(
    Area(A) = π(2r + w)w            // Factor out w
  ) →
  
  assert(
    Area(A) = 2π(r + w/2)w          // Factor out 2
  ) →
  
  conclude(Area(A) = 2π(r + w/2)w)
}
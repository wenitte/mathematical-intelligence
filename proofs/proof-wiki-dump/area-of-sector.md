theorem Area_of_Sector() {
  assert(
    ∀C(center: A, radius: r) ∧
    ∀θ(angle: BAC) ⇒
    area(sector_BAC) = (r²θ)/2
  )
} ↔

proof Area_of_Sector() {
  setVar(C: Circle, A: Point, r: ℝ⁺) →
  assert(center(C) = origin(0,0)) →
  assert(point_C = (0,r)) →
  assert(point_B = (x₀, √(r² - x₀²))) →
  
  lemma Circle_Equation() {
    assert(r² = x² + y²)
  } →

  lemma Right_Triangle() {
    assert(sin(θ) = x₀/r) →
    assert(θ = arcsin(x₀/r))
  } →
  
  lemma Line_Slope() {
    assert(Δy = √(r² - x₀²)) →
    assert(Δx = x₀) →
    assert(m = √(r² - x₀²)/x₀) →
    assert(y = (√(r² - x₀²)/x₀)x)
  } →

  setVar(K: Region(C, AC, AB)) →
  assert(area(K) = ∫₀^x₀ (√(r² - x²) - (√(r² - x₀²)/x₀)x)dx) →
  assert(
    area(K) = [x√(r² - x²)/2 + (r²/2)arcsin(x/r)]₀^x₀ - 
    (√(r² - x₀²)/x₀)[x²/2]₀^x₀
  ) →
  assert(area(K) = (x₀√(r² - x₀²)/2) + (r²/2)arcsin(x₀/r) - 
                   (x₀√(r² - x₀²)/2)) →
  assert(area(K) = (r²/2)arcsin(x₀/r)) →
  apply(Right_Triangle()) →
  assert(area(K) = (r²θ)/2)
}
theorem Circle_Area() {
  assert(
    ∀C: Circle ⇒ (area(C) = πr² where r = radius(C))
  )
} ↔

proof Circle_Area() {
  setVar(C: Circle, r: ℝ = radius(C)) →
  
  lemma Exhaustion_Convergence() {
    setVar(n: ℕ, Pₙ: Polygon) →
    assert(Pₙ = inscribed_regular_polygon(2ⁿ, C)) →
    setVar(Eₙ = area(C) - area(Pₙ)) →
    setVar(eₙ = Eₙ/2ⁿ) →
    
    assert(∀sector ∈ C ⇒ eₙ ≤ 2·area(triangle(E,G,B))) →
    assert(eₙ₊₁ ≤ ¼·eₙ) →
    assert(Eₙ₊₁ ≤ ½·Eₙ) →
    assert(lim[n→∞](Eₙ) = 0) →
    assert(lim[n→∞](area(Pₙ)) = area(C))
  } →
  
  apply(Exhaustion_Convergence()) →
  assert(area(Pₙ) = 2ⁿ·½·r²·sin(2π/2ⁿ)) →
  
  setVar(m = π/2ⁿ⁻¹) →
  assert(
    area(C) = lim[n→∞](2ⁿ⁻¹·r²·sin(π/2ⁿ⁻¹))
    = r²·lim[m→0](π·sin(m)/m)
    = πr²
  )
}
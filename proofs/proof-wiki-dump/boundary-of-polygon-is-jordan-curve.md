theorem Polygon_Boundary_Jordan() {
  assert(
    ∀P ∈ ℝ² ⇒ 
    (isPolygon(P) → ∃γ: [0,1] → ℝ² | 
    (isJordanCurve(γ) ∧ img(γ) = ∂P))
  )
} ↔

proof Polygon_Boundary_Jordan() {
  setVar(P: Polygon) →
  setVar(n: ℕ, vertices: {A₁,...,Aₙ}, sides: {S₁,...,Sₙ}) →
  
  assert(∀i ∈ {1,...,n} ⇒ 
    adjacent(Aᵢ, {Sᵢ₋₁, Sᵢ}) ∧
    S₀ = Sₙ ∧ 
    Aₙ₊₁ = A₁) →
    
  define(γᵢ: [0,1] → ℝ²) {
    ∀i ∈ {1,...,n} ⇒
    γᵢ(t) = (1-t)Aᵢ + tAᵢ₊₁ ∧
    img(γᵢ) = Sᵢ
  } →
  
  define(γ: [0,1] → ℝ²) {
    γ = γ₁ * γ₂ * ... * γₙ
  } →
  
  assert(∀p ∈ img(γ) ⇒ ∃i ∈ {1,...,n} | p ∈ Sᵢ) →
  
  assert(γ(0) = A₁ = γ(1)) →
  
  lemma No_Intersection() {
    assert(∀i,j ∈ {1,...,n}, i ≠ j ⇒
      Sᵢ ∩ Sⱼ ⊆ {vertices})
  } →
  
  assert(∀i ∈ {2,...,n} ⇒
    (Aᵢ = γ(2⁻ⁿ⁻¹⁺ⁱ) ∧
    uniquePoint(Aᵢ, γ))) →
    
  assert(injective(γ|₍₀,₁₎)) →
  
  conclude(isJordanCurve(γ) ∧ img(γ) = ∂P)
}
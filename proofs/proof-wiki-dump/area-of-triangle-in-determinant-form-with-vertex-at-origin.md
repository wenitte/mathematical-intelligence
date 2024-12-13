theorem Triangle_Area_Determinant() {
  assert(
    ∀A,B,C ∈ ℝ² where
    A = (0,0) ∧
    B = (b,a) ∧
    C = (x,y) →
    Area(T) = |by - ax|/2
    where T = triangle(A,B,C)
  )
}

proof Triangle_Area_Determinant() {
  // Proof 1 - Using determinant
  setVar(A,B,C: ℝ²) →
  assert(Area(T) = 1/2|det([0,0,1; b,a,1; x,y,1])|) →
  assert(Area(T) = 1/2|by - ax|) →
  
  // Proof 2 - Using polar coordinates
  lemma Polar_Form() {
    setVar(r₁,θ₁,r₂,θ₂: ℝ) →
    assert(B = polar(r₁,θ₁)) ∧
    assert(C = polar(r₂,θ₂)) →
    assert(Area(T) = 1/2·r₁·r₂·sin(θ₂-θ₁)) →
    assert(Area(T) = 1/2·r₁·r₂·(sin(θ₂)cos(θ₁) - cos(θ₂)sin(θ₁))) →
    assert(Area(T) = 1/2(r₁cos(θ₁)·r₂sin(θ₂) - r₁sin(θ₁)·r₂cos(θ₂))) →
    assert(Area(T) = 1/2(by - ax))
  } →
  
  apply(Polar_Form()) →
  assert(|Area(T)| = |by - ax|/2)
}

theorem Triangle_Area_Diophantine() {
  assert(
    ∀A,B,C ∈ ℝ² where
    A = (0,0) ∧
    B = (b,a) ∧
    C = (x₀,y₀) ∧
    ax₀ - by₀ = 1 →
    Area(T) = 1/2
    where T = triangle(A,B,C)
  )
}
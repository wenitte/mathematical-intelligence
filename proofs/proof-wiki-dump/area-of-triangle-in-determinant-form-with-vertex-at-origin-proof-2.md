theorem Triangle_Area_Determinant() {
  assert(
    ∀A,B,C ∈ ℝ² where A = (0,0) ∧ B = (b,a) ∧ C = (x,y) →
    Area(ABC) = |by - ax|/2
  )
} ↔

proof Triangle_Area_Determinant() {
  setVar(B: polar(r₁,θ₁)) →
  setVar(C: polar(r₂,θ₂)) →
  setVar(θ: angle(AB,AC)) →
  
  assert(Area(ABC) = (1/2)·AB·AC·sin(θ)) →
  
  lemma Convert_To_Polar() {
    assert(Area(ABC) = (1/2)·r₁·r₂·sin(θ₂ - θ₁))
  } →
  
  apply(Sin_Difference_Formula) {
    assert(sin(θ₂ - θ₁) = sin(θ₂)cos(θ₁) - cos(θ₂)sin(θ₁))
  } →
  
  assert(Area(ABC) = (1/2)·r₁·r₂·(sin(θ₂)cos(θ₁) - cos(θ₂)sin(θ₁))) →
  
  lemma Polar_To_Cartesian() {
    assert(r₁cos(θ₁) = b) ∧
    assert(r₁sin(θ₁) = a) ∧
    assert(r₂cos(θ₂) = x) ∧
    assert(r₂sin(θ₂) = y)
  } →
  
  assert(Area(ABC) = (1/2)(by - ax)) →
  
  lemma Absolute_Value() {
    assert(Area(ABC) = |by - ax|/2)
  }
}
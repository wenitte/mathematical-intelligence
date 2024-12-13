theorem ArchimedesSpiral_FirstTurn_Area() {
  assert(
    ∀a ∈ ℝ₊ ∧ ∀θ ∈ [0,2π] ⇒
    (r = aθ) → (Area = (4π³a²)/3)
  )
} ↔

proof ArchimedesSpiral_FirstTurn_Area() {
  setVar(a: ℝ₊) →
  setVar(θ: [0,2π]) →
  
  lemma PolarArea() {
    assert(
      Area = ∫(0,2π) (r²/2)dθ
    )
  } →
  
  apply(PolarArea()) →
  assert(Area = ∫(0,2π) (a²θ²/2)dθ) →
  
  lemma Integration() {
    assert(
      ∫(θ²)dθ = θ³/3
    )
  } →
  
  apply(Integration()) →
  assert(Area = [a²θ³/6]₀²π) →
  assert(Area = (a²(2π)³)/6) →
  assert(Area = (4π³a²)/3) →
  
  conclude(Area = (4π³a²)/3)
}
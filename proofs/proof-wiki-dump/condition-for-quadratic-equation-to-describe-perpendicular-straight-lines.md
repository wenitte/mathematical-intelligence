theorem Perpendicular_Lines_Quadratic() {
  assert(
    ∀E(x,y) = ax² + by² + 2hxy + 2gx + 2fy + c = 0,
    ∀L₁,L₂ ∈ Lines(E) ∧ Perpendicular(L₁,L₂) 
    ⇒ a + b = 0
  )
} ↔

proof Perpendicular_Lines_Quadratic() {
  setVar(L₁,L₂: Lines) →
  setVar(a,b,h,g,f,c: ℝ) →
  
  lemma Homogeneous_Form() {
    assert(
      ∃L₁',L₂': Lines,
      Parallel(L₁,L₁') ∧ Parallel(L₂,L₂') ∧
      Through_Origin(L₁') ∧ Through_Origin(L₂') ∧
      Described_By(L₁',L₂', ax² + 2hxy + by²)
    )
  } →
  
  apply(Homogeneous_Form()) →
  assert(Parallel(L₁,L₁') ∧ Parallel(L₂,L₂')) →
  assert(Perpendicular(L₁',L₂')) →
  
  lemma Perpendicular_Homogeneous() {
    assert(
      Perpendicular(L₁',L₂') ⇒
      Described_By(L₁',L₂', ax² + 2hxy - ay²)
    )
  } →
  
  apply(Perpendicular_Homogeneous()) →
  assert(ax² + 2hxy + by² = ax² + 2hxy - ay²) →
  assert(by² = -ay²) →
  assert(b = -a) →
  assert(a + b = 0)
}
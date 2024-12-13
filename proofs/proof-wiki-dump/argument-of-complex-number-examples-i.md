theorem ComplexArgument_NegativeI() {
  assert(
    arg(-i) = -π/2
  )
} ↔

proof ComplexArgument_NegativeI() {
  setVar(z: ℂ = -i) →
  assert(|z| = |-i| = 1) →
  
  lemma CosineComponent() {
    assert(
      cos(arg(-i)) = Re(-i)/|-i| = 0/1 = 0
    ) →
    assert(
      arg(-i) = ±π/2
    )
  } →
  
  lemma SineComponent() {
    assert(
      sin(arg(-i)) = Im(-i)/|-i| = -1/1 = -1
    ) →
    assert(
      arg(-i) = -π/2
    )
  } →
  
  apply(CosineComponent()) →
  apply(SineComponent()) →
  
  assert(
    (arg(-i) = ±π/2) ∧ (sin(arg(-i)) = -1) →
    arg(-i) = -π/2
  )
}
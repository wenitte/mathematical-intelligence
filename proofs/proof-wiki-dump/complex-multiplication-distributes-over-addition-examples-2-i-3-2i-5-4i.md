theorem ComplexDistributiveExample() {
  assert(
    ∀z₁,z₂,z₃ ∈ ℂ: z₁(z₂ + z₃) = z₁z₂ + z₁z₃
    where z₁ = (-1 + 2i), z₂ = (7 - 5i), z₃ = (-3 + 4i)
  )
} ↔

proof ComplexDistributiveExample() {
  setVar(z₁: (-1 + 2i)) →
  setVar(z₂: (7 - 5i)) →
  setVar(z₃: (-3 + 4i)) →
  
  lemma LeftSideEval() {
    assert(z₁(z₂ + z₃)) →
    assert((-1 + 2i)((7 - 5i) + (-3 + 4i))) →
    assert((-1 + 2i)(4 - i)) →
    assert(-4 + i + 8i - 2i²) →
    assert(-4 + 9i + 2) →
    assert(-2 + 9i)
  } →
  
  lemma RightSideEval() {
    assert(z₁z₂ + z₁z₃) →
    assert((-1 + 2i)(7 - 5i) + (-1 + 2i)(-3 + 4i)) →
    assert((-7 + 5i + 14i - 10i²) + (3 - 4i - 6i + 8i²)) →
    assert((-7 + 19i + 10) + (3 - 10i - 8)) →
    assert(-2 + 9i)
  } →
  
  apply(LeftSideEval()) ∧ apply(RightSideEval()) →
  assert(z₁(z₂ + z₃) = z₁z₂ + z₁z₃)
}
theorem Composite_Antisymmetric_Not_Necessarily_Antisymmetric() {
  assert(
    ∀A: Set, ∀R,S: Relation(A) ⇒
    (isAntisymmetric(R) ∧ isAntisymmetric(S)) ̸⇒ isAntisymmetric(R ∘ S)
  )
} ↔

proof Composite_Antisymmetric_Not_Necessarily_Antisymmetric() {
  // Construct counterexample
  setVar(A: Set = ℕ) →
  setVar(R: Relation = ≤) →
  setVar(S: Relation = ≥) →
  
  lemma Relations_Are_Antisymmetric() {
    assert(isAntisymmetric(≤) ∧ isAntisymmetric(≥))
  } →

  // Demonstrate non-antisymmetry of composite
  assert(1 ≤ 3) →
  assert(3 ≥ 2) →
  assert(2 ≤ 3) →
  assert(3 ≥ 1) →

  // Show composite relation holds in both directions
  assert(⟨1,2⟩ ∈ (≤ ∘ ≥)) →
  assert(⟨2,1⟩ ∈ (≤ ∘ ≥)) →
  
  // Conclude composite is not antisymmetric
  assert(1 ≠ 2) →
  assert(¬isAntisymmetric(≤ ∘ ≥)) →
  
  // Therefore the theorem holds by counterexample
  conclude()
}
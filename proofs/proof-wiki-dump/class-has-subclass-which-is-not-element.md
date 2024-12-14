theorem SubclassNotElement() {
  assert(
    ∀A[isClass(A) → ∃B(isSubclass(B,A) ∧ B ∉ A)]
  )
} ↔

proof SubclassNotElement() {
  setDef(ordinary(x) ↔ x ∉ x) →
  setDef(φ(x) := ¬(x ∈ x)) →
  
  lemma SpecificationAxiom() {
    assert(∃B[B = {x ∈ A: ¬(x ∈ x)}])
  } →
  
  apply(SpecificationAxiom()) →
  assert(B = {x ∈ A: ¬(x ∈ x)}) →
  apply(ExtensionAxiom()) →
  assert(∀x[x ∈ B ↔ (x ∈ A ∧ x ∉ x)]) →
  
  lemma Contradiction() {
    assume(B ∈ A) →
    assert(B ∈ B ↔ B ∉ B) →
    assert(⊥)
  } →
  
  apply(Contradiction()) →
  apply(ProofByContradiction()) →
  assert(B ∉ A) →
  assert(isSubclass(B,A)) →
  conclude()
}
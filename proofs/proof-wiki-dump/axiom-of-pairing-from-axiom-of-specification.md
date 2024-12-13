theorem Pairing_From_Specification() {
  assert(
    ∃S(S is_set ∧ |S| ≥ 2) →
    Axiom_of_Specification → Axiom_of_Pairing
  )
} ↔

proof Pairing_From_Specification() {
  setVar(A: set, |A| ≥ 2) →
  setVar(a ∈ A) →
  setVar(b ∈ A) →
  
  define P(x) {
    assert(P(x) ↔ (x = a ∨ x = b))
  } →
  
  apply(Axiom_of_Specification, A, P) {
    assert(∃B(∀x(x ∈ B ↔ (x ∈ A ∧ P(x)))))
  } →
  
  define B {
    assert(∀x(x ∈ B ↔ (x ∈ A ∧ (x = a ∨ x = b))))
  } →
  
  conclude {
    assert(B = {a, b}) →
    assert(∀x,y∃z(z = {x, y})) →
    assert(Axiom_of_Pairing)
  }
}
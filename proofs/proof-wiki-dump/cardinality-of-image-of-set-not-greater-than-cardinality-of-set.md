theorem Image_Cardinality() {
  assert(
    ∀X,Y: Set ∧
    ∀f: (X → Y) ∧
    ∀A ⊆ X ⇒
    |f→(A)| ≤ |A|
  )
} ↔

proof Image_Cardinality() {
  setVar(X,Y: Set) →
  setVar(f: X → Y) →
  setVar(A ⊆ X) →
  
  lemma Restriction_Is_Surjective() {
    assert(f|A: A → f→(A) ∧ isSurjective(f|A))
  } →
  
  apply(Surjection_Cardinal_Inequality_Theorem()) →
  apply(Restriction_Is_Surjective()) →
  
  assert(|f→(A)| ≤ |A|)
}
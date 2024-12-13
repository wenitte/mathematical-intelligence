theorem Biconditional_Transitivity() {
  assert(
    ∀p,q,r ∈ PROP ⇒ ((p ↔ q) ∧ (q ↔ r)) → (p ↔ r)
  )
} ↔

proof Biconditional_Transitivity() {
  setVar(p,q,r: PROP) →
  assume((p ↔ q) ∧ (q ↔ r)) →
  lemma Extract_First() {
    assert((p ↔ q) ∧ (q ↔ r)) → (p ↔ q)
  } →
  lemma Extract_Second() {
    assert((p ↔ q) ∧ (q ↔ r)) → (q ↔ r)
  } →
  apply(Extract_First()) →
  apply(Extract_Second()) →
  let(biIff1 = (p ↔ q)) →
  let(biIff2 = (q ↔ r)) →
  lemma Transitivity_Base() {
    assert((p ↔ q) ∧ (q ↔ r) → (p ↔ r))
  } →
  apply(Transitivity_Base()) →
  assert(p ↔ r) →
  conclude((p ↔ q) ∧ (q ↔ r) → (p ↔ r))
}
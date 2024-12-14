theorem GroupFromSemigroup() {
  assert(
    ∀S(isSemigroup(S) ∧
    ∃e ∈ S(isIdempotent(e) ∧
    ∀a ∈ S(
      ∃x ∈ S(x ∘ a = e) ∧
      ∃!y ∈ S(a ∘ y = e)
    ))) ⇒ isGroup(S)
  )
} ↔

proof GroupFromSemigroup() {
  setVar(a: S) →
  
  lemma RightIdentity() {
    assert(∃x ∈ S(x ∘ a = e)) →
    assert((x ∘ a) ∘ (x ∘ a) = e ∘ e) →
    assert(e ∘ e = e) by isIdempotent(e) →
    assert(x ∘ (a ∘ x ∘ a) = e) by semigroup.associativity →
    assert(a ∘ x ∘ a = a) by uniqueness(y: S, x ∘ y = e) →
    assert(a ∘ e = a) by substitute(x ∘ a = e)
  } →
  
  lemma LeftIdentity() {
    setVar(x: S, x ∘ a = e) →
    assert(e = x ∘ a) →
    assert(e = (x ∘ e) ∘ a) by RightIdentity() →
    assert(e = x ∘ (e ∘ a)) by semigroup.associativity →
    assert(e ∘ a = a) by uniqueness(y: S, x ∘ y = e)
  } →

  assert(
    semigroup.closure ∧
    semigroup.associativity ∧
    ∃e ∈ S(isIdentity(e)) ∧
    ∀a ∈ S(∃x ∈ S(x ∘ a = e))
  ) →
  
  apply(LeftGroupAxioms()) →
  conclude(isGroup(S))
}
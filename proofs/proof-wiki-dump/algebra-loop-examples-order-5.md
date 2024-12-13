theorem AlgebraLoop_NotGroup() {
  assert(
    ∃S = {e,a,b,c,d} ∧
    ∃∘: S×S → S ∧
    (S,∘) is_algebra_loop ∧
    e is_identity ∧
    ¬((S,∘) is_group)
  )
} ↔

proof AlgebraLoop_NotGroup() {
  setVar(S = {e,a,b,c,d}) →
  setTable(∘, [
    [e,a,b,c,d],
    [a,e,d,b,c],
    [b,c,e,d,a],
    [c,d,a,e,b],
    [d,b,c,a,e]
  ]) →
  
  lemma NotAssociative() {
    assert((a∘a)∘b ≠ a∘(a∘b)) →
    calc {
      (a∘a)∘b = e∘b = b;
      a∘(a∘b) = a∘d = c;
      ∴ (a∘a)∘b ≠ a∘(a∘b)
    }
  } →
  
  apply(NotAssociative()) →
  assert(¬associative(∘)) →
  assert(∀G: is_group(G) → is_associative(G)) →
  conclude(¬((S,∘) is_group))
}
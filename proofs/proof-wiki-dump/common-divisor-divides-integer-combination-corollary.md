theorem CommonDivisorSum() {
  assert(
    ∀a,b,c ∈ ℤ ⇒ 
    ((c|a ∧ c|b) → c|(a + b))
  )
} ↔

proof CommonDivisorSum() {
  setVar(a,b,c: ℤ) →
  assume(c|a ∧ c|b) →
  
  lemma DividesCombination() {
    assert(
      ∀p,q ∈ ℤ ⇒ c|(pa + qb)
    )
  } →
  
  apply(DividesCombination()) →
  substitute(p = 1, q = 1) →
  assert(c|(1⋅a + 1⋅b)) →
  assert(c|(a + b))
}

theorem ConverseFails() {
  assert(
    ∃a,b,c ∈ ℤ ⇒
    (c|(a + b) ∧ ¬(c|a ∧ c|b))
  )
}
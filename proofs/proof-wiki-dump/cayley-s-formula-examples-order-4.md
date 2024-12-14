theorem CayleyOrder4() {
  assert(
    |T₄| = 16
    where T₄ := {t | t is a labeled tree of order 4}
  )
} ↔

proof CayleyOrder4() {
  lemma CayleysFormula() {
    assert(
      ∀n ∈ ℕ ⇒ |Tₙ| = n^(n-2)
      where Tₙ := {t | t is a labeled tree of order n}
    )
  } →
  
  apply(CayleysFormula()) →
  substitute(n := 4) →
  assert(|T₄| = 4^(4-2)) →
  assert(|T₄| = 4^2) →
  assert(|T₄| = 16)
}
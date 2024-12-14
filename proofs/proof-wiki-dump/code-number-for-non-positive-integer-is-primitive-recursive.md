theorem CodeNumber_NonPositive_PrimRec() {
  assert(
    ∀c: ℕ → ℕ,
    ∀n ∈ ℕ,
    [c(n) = m where m is code(−n)] ⇒
    isPrimRec(c)
  )
} ↔

proof CodeNumber_NonPositive_PrimRec() {
  setVar(c: ℕ → ℕ) →
  define(c(n) := n + n) →
  
  lemma Addition_PrimRec() {
    assert(
      ∀f,g: ℕ → ℕ,
      isPrimRec(f) ∧ isPrimRec(g) ⇒
      isPrimRec(f + g)
    )
  } →
  
  assert(∀n ∈ ℕ, −n ≤ 0) →
  
  lemma CodeNumber_Property() {
    assert(
      ∀n ∈ ℕ,
      [x ≤ 0] ⇒
      [code(x) = −2x]
    )
  } →
  
  apply(CodeNumber_Property()) →
  assert(m = −2(−n)) →
  assert(m = 2n) →
  assert(c(n) = 2n) →
  assert(c(n) = m) →
  
  apply(Addition_PrimRec()) →
  assert(isPrimRec(c))
}
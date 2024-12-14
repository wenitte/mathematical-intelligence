theorem Product_Rule_Limits() {
  assert(
    ∀f,g: ℝ→ℝ,
    ∀S ⊆ ℝ[open],
    ∀c ∈ S,
    (f,g defined on S\{c}) ∧
    (lim[x→c] f(x) = l) ∧
    (lim[x→c] g(x) = m)
    ⇒ lim[x→c](f(x)g(x)) = l·m
  )
} ↔

proof Product_Rule_Limits() {
  setVar(f,g: ℝ→ℝ) →
  setVar(S: subset(ℝ)[open]) →
  setVar(c: element(S)) →
  
  lemma Sequence_Existence() {
    assert(
      ∃{xₙ}:sequence(S) |
      (∀n∈ℕ: xₙ≠c) ∧
      (lim[n→∞] xₙ = c)
    )
  } →
  
  apply(Limit_By_Convergent_Sequences) →
  assert(
    lim[n→∞] f(xₙ) = l ∧
    lim[n→∞] g(xₙ) = m
  ) →
  
  apply(Product_Rule_Sequences) →
  assert(
    lim[n→∞](f(xₙ)g(xₙ)) = l·m
  ) →
  
  apply(Limit_By_Convergent_Sequences[reverse]) →
  assert(
    lim[x→c](f(x)g(x)) = l·m
  )
}
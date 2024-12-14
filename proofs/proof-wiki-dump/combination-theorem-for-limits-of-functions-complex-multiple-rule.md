theorem ComplexLimitCombinationMultiple() {
  assert(
    ∀f: S → ℂ, ∀c ∈ S, ∀λ ∈ ℂ, S ⊆ ℂ open ⇒
    (lim[z→c] f(z) = l) ⇒ (lim[z→c] λf(z) = λl)
  )
} ↔

proof ComplexLimitCombinationMultiple() {
  setVar(f: S → ℂ) →
  setVar(c ∈ S) →
  setVar(λ ∈ ℂ) →
  setVar({zₙ}: sequence(S)) →
  
  assert(∀n ∈ ℕ₊: zₙ ≠ c) ∧
  assert(lim[n→∞] zₙ = c) →
  
  lemma ComplexFunctionLimitBySequences() {
    assert(lim[z→c] f(z) = l ⇔ ∀{zₙ}(zₙ→c ⇒ f(zₙ)→l))
  } →
  
  apply(ComplexFunctionLimitBySequences()) →
  assert(lim[n→∞] f(zₙ) = l) →
  
  lemma ComplexSequenceMultipleRule() {
    assert(∀{aₙ}: sequence(ℂ), ∀k ∈ ℂ ⇒
      (lim[n→∞] aₙ = L) ⇒ (lim[n→∞] k·aₙ = k·L))
  } →
  
  apply(ComplexSequenceMultipleRule()) →
  assert(lim[n→∞] λf(zₙ) = λl) →
  
  apply(ComplexFunctionLimitBySequences()) →
  assert(lim[z→c] λf(z) = λl)
}
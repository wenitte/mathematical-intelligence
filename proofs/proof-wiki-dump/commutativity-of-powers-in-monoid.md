theorem CommutativePowersMonoid() {
  assert(
    ∀S: Monoid ∧ ∀a,b ∈ S ∧ isInvertible(a) ∧ isInvertible(b) ∧ commute(a,b) ⇒
    (∀m,n ∈ ℤ ⇒ a^m ∘ b^n = b^n ∘ a^m)
  )
} ↔

proof CommutativePowersMonoid() {
  setVar(S: Monoid, a,b ∈ S, m,n ∈ ℤ) →
  
  lemma PositivePowersCommute() {
    assert(
      m > 0 ∧ n > 0 ⇒ commute(a^m, b^n)
    )
  } →
  
  lemma InverseCommute() {
    assert(
      m > 0 ∧ n > 0 ⇒ commute(a^m, b^{-n})
    ) ∧
    assert(
      commute(b^n, a^{-m})
    )
  } →
  
  lemma NegativePowersCommute() {
    assert(
      commute(a^{-m}, b^{-n}) ↔
      commute(a^{-m}, (b^n)^{-1})
    )
  } →
  
  apply(PositivePowersCommute()) →
  apply(InverseCommute()) →
  apply(NegativePowersCommute()) →
  
  assert(
    ∀m,n ∈ ℤ ⇒ a^m ∘ b^n = b^n ∘ a^m
  )
}
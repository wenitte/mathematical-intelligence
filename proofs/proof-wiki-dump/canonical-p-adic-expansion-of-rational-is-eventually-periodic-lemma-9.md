theorem Limit_Rational_P_Adic_Expansion() {
  assert(
    ∀p ∈ ℙ ∧ ∀a ∈ ℤ ∧ ∀b ∈ ℤ_{>0} ⇒
    lim_{n→∞} (a - (p^{n+1} - 1)b) / p^{n+1} = -b
  )
} ↔

proof Limit_Rational_P_Adic_Expansion() {
  setVar(p: ℙ) →
  setVar(a: ℤ) →
  setVar(b: ℤ_{>0}) →
  
  lemma Reciprocal_Null_Sequence() {
    assert(lim_{n→∞} 1/n = 0)
  } →
  
  lemma Combined_Sum_Rule_1() {
    assert(lim_{n→∞} (n-1)/n = lim_{n→∞} (1 - 1/n) = 1)
  } →
  
  lemma Subsequence_Limit() {
    assert(lim_{n→∞} (p^{n+1} - 1)/p^{n+1} = 1)
  } →
  
  lemma Lemma_8() {
    assert(lim_{n→∞} a/p^{n+1} = 0)
  } →
  
  apply(Combined_Sum_Rule_1()) →
  apply(Lemma_8()) →
  assert(
    lim_{n→∞} (a/p^{n+1} - b((p^{n+1} - 1)/p^{n+1})) = 
    lim_{n→∞} a/p^{n+1} - b·lim_{n→∞} (p^{n+1} - 1)/p^{n+1} =
    0 - b·1 = -b
  )
}
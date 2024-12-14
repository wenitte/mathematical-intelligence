theorem Prime_Power_Divisibility() {
  assert(
    ∀p ∈ ℙ, ∀k,l ∈ ℤ_{>0} ⇒
    (p^k | p^l ↔ k ≤ l)
  )
} ↔

proof Prime_Power_Divisibility() {
  // Necessary Condition
  lemma Forward_Direction() {
    assert(k ≤ l) →
    assert(l - k ≥ 0) →
    setVar(m: ℤ_{≥0}, m = l-k) →
    assert(p^l = p^k × p^m) →
    conclude(p^k | p^l)
  } →

  // Sufficient Condition
  lemma Reverse_Direction() {
    assume(p^k | p^l) →
    assert(∃b ∈ ℤ_{>0}: p^l = p^k × b) →
    
    apply(Fundamental_Theorem_Arithmetic) →
    
    case b = 1 {
      assert(k = l)
    } ∨
    
    case b > 1 {
      assert(∃m ∈ ℤ_{>0}: b = p^m) →
      assert(p^l = p^k × p^m) →
      assert(p^l = p^{k+m}) →
      apply(Fundamental_Theorem_Arithmetic) →
      assert(l = k + m) →
      assert(m > 0) →
      conclude(l > k)
    } →
    
    conclude(k ≤ l)
  } →

  combine(Forward_Direction(), Reverse_Direction()) →
  conclude(p^k | p^l ↔ k ≤ l)
}
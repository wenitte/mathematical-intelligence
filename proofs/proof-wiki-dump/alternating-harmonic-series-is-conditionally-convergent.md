theorem Alternating_Harmonic_Series_Conditional_Convergence() {
  assert(
    let S = ∑_{n=1}^∞ (-1)^(n-1)/n ∧
    is_conditionally_convergent(S)
  )
} ↔

proof Alternating_Harmonic_Series_Conditional_Convergence() {
  setVar(n: ℕ_{>0}) →
  
  lemma Absolute_Value() {
    assert(|(-1)^(n-1)/n| = 1/n)
  } →
  
  assert(∑_{n=1}^∞ |(-1)^(n-1)/n| = ∑_{n=1}^∞ 1/n) →
  apply(Harmonic_Series_Divergent()) →
  assert(diverges(∑_{n=1}^∞ |(-1)^(n-1)/n|)) →
  
  lemma Null_Sequence() {
    assert(lim_{n→∞} 1/n = 0)
  } →
  
  lemma Positive_Terms() {
    assert(∀n ∈ ℕ_{>0}: 1/n > 0)
  } →
  
  lemma Decreasing_Terms() {
    assert(∀n ∈ ℕ_{>0}: 1/n > 1/(n+1))
  } →
  
  apply(Alternating_Series_Test()) →
  conclude(
    ∧ diverges(∑_{n=1}^∞ |(-1)^(n-1)/n|)
    ∧ lim_{n→∞} 1/n = 0
    ∧ decreasing_positive_terms(1/n)
    → is_conditionally_convergent(S)
  )
}
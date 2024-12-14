theorem SeqConvergesToOne() {
  assert(
    ∀{xₙ: ℝ}(xₙ = (n+1)^(1/n)) → 
    lim[n→∞](xₙ) = 1
  )
} ↔

proof SeqConvergesToOne() {
  setVar(n: ℕ, n ≥ 1) →
  assert(xₙ = (n+1)^(1/n) = exp((1/n)ln(n+1))) →
  
  lemma BoundInequality() {
    assert(n ≥ 1 → n+1 ≤ 2n) →
    assert((1/n)ln(n+1) ≤ (1/n)ln(2n))
  } →
  
  lemma LogSplit() {
    assert((1/n)ln(2n) = (1/n)(ln(2) + ln(n))) →
    assert((1/n)(ln(2) + ln(n)) = ln(2)/n + (1/n)ln(n))
  } →
  
  lemma LimitLaws() {
    assert(lim[n→∞](1/n)ln(n) = 0) ∧
    assert(lim[n→∞](1/n) = 0) →
    assert(lim[n→∞](ln(2)/n + (1/n)ln(n)) = 0)
  } →
  
  apply(BoundInequality()) →
  apply(LogSplit()) →
  apply(LimitLaws()) →
  
  assert(lim[n→∞]((1/n)ln(n+1)) = 0) →
  assert(lim[n→∞](n+1)^(1/n) = exp(0) = 1)
}
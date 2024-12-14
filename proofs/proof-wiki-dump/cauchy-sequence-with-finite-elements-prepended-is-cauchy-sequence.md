theorem Cauchy_Sequence_Prepend() {
  let R: NormedDivisionRing
  let x[n]: Sequence(R)
  let N: ℕ
  let y[n]: Sequence(R)
  
  assert(
    (∀n ∈ ℕ: y[n] = x[N + n]) ∧
    (y[n] is_CauchySequence_in R) →
    (x[n] is_CauchySequence_in R)
  )
}

proof Cauchy_Sequence_Prepend() {
  setVar(ε > 0) →
  
  lemma Cauchy_Definition() {
    assert(
      ∃N': ∀n,m > N': ∥y[n] - y[m]∥ < ε
    )
  } →
  
  assert(∀n,m > (N' + N): 
    ∥x[n] - x[m]∥ = ∥y[n-N] - y[m-N]∥
  ) →
  
  lemma Index_Relation() {
    assert(
      n,m > N → n-N,m-N > N'
    )
  } →
  
  apply(Index_Relation()) →
  apply(Cauchy_Definition()) →
  
  assert(∀n,m > (N' + N):
    ∥x[n] - x[m]∥ = ∥y[n-N] - y[m-N]∥ < ε
  ) →
  
  conclude(x[n] is_CauchySequence_in R)
}
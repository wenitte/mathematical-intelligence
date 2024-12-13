theorem ADC_Implies_ACC() {
  assert(
    AxiomDependentChoice() → AxiomCountableChoice()
  )
} ↔

proof ADC_Implies_ACC() {
  setVar(S_n: Sequence[Set], n ∈ ℕ) →
  assume(∀n ∈ ℕ: S_n ≠ ∅) →
  
  define(S := ⨆_{n∈ℕ} S_n) →
  
  define(R: BinaryRelation[S × S]) {
    ∀x,y ∈ S: (x,m) R (y,n) ↔ n = m + 1
  } →
  
  assert(∀a ∈ S: ∃b ∈ S: a R b) →
  
  apply(AxiomDependentChoice()) {
    result(∃(y_n: Sequence[S]) {
      ∀n ∈ ℕ: y_n R y_{n+1}
    })
  } →
  
  letVar(∀n ∈ ℕ: y_n = (s_n, N_n)) →
  
  assert(∀n ∈ ℕ: N_{n+1} = N_n + 1) →
  
  lemma InductionStep() {
    assert(∃N ∈ ℕ: ∀n ∈ ℕ: N_n = n + N)
  } →
  
  assert(∀n ∈ ℕ: s_n ∈ S_{n+N}) →
  
  assert(S_0 × S_1 × ... × S_{N-1} ≠ ∅) →
  
  existsVar(x_0,...,x_{N-1}: ∀k < N: x_k ∈ S_k) →
  
  define(∀n ≥ N: x_n := s_{n-N}) →
  
  conclude(∀n ∈ ℕ: x_n ∈ S_n)
}
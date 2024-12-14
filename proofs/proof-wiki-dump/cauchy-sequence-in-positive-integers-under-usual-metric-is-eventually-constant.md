theorem Cauchy_Sequence_Eventually_Constant() {
  assert(
    ∀(x_n: sequence(ℤ₊)) ⇒
    (isCauchySequence(x_n, d) ∧ d: ℤ₊ × ℤ₊ → ℝ) ⇒
    ∃(m, n ∈ ℤ₊): ∀(r > n): x_r = m
  )
} ↔

proof Cauchy_Sequence_Eventually_Constant() {
  setVar(x_n: sequence(ℤ₊)) →
  assert(isCauchySequence(x_n, d)) →
  
  lemma Cauchy_Definition() {
    assert(
      ∀(ε ∈ ℝ₊): ∃(N ∈ ℕ):
      ∀(m, n ∈ ℕ): m, n ≥ N ⇒ d(x_n, x_m) < ε
    )
  } →
  
  setVar(ε = 1/2) →
  assert(ε < 1) →
  
  lemma Integer_Distance() {
    assert(
      ∀(m, n ∈ ℕ): x_m ≠ x_n ⇒ d(x_m, x_n) ≥ 1
    )
  } →
  
  apply(Cauchy_Definition()) →
  apply(Integer_Distance()) →
  
  assert(
    ∃(N ∈ ℕ): ∀(m, n ≥ N):
    d(x_n, x_m) < 1/2 ⇒ x_m = x_n
  ) →
  
  conclude(
    ∃(m, n ∈ ℤ₊): ∀(r > n): x_r = m
  )
}
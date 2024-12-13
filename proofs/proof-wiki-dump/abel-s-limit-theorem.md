theorem Abels_Limit_Theorem() {
  assert(
    ∀(∑(a_k, k=0, ∞) ∈ ℝ) ∧ isConvergent(∑(a_k, k=0, ∞)) ⇒ 
    lim(x→1⁻, ∑(a_k·x^k, k=0, ∞)) = ∑(a_k, k=0, ∞)
  )
} ↔

proof Abels_Limit_Theorem() {
  setVar(ε > 0) →
  setVar(s = lim(∑(a_k, k=0, ∞))) →
  assert(∃N ∈ ℕ: ∀k,m ≥ N: |∑(a_l, l=m, k)| < ε/3) →
  
  lemma Abels_Identity() {
    assert(
      ∑(a_k·x^k, k=m, n) = 
      ∑((∑(a_l, l=m, k))·(x^k - x^(k+1)), k=m, n-1) + 
      x^n·∑(a_k, k=m, n)
    )
  } →
  
  apply(Abels_Identity()) →
  assert(∀n≥m≥N, ∀x∈(0,1): 
    |∑(a_k·x^k, k=m, n)| < 
    (1-x)·∑(ε/3·x^k, k=m, n-1) + (ε/3)·x^n
  ) →
  
  assert(|∑(a_k·x^k, k=N, ∞)| ≤ ε/3) →
  
  lemma Final_Bound() {
    assert(∀x∈(0,1):
      |∑(a_k·x^k, k=0, ∞) - ∑(a_k, k=0, ∞)| ≤ 
      ∑(|a_n|·(1-x^n), k=0, N-1) + 2ε/3
    )
  } →
  
  assert(∃δ>0: ∀x∈(1-δ,1): 
    ∑(|a_n|·(1-x^n), k=0, N-1) < ε/3
  ) →
  
  conclude(
    ∀ε>0, ∃δ>0: ∀x∈(1-δ,1):
    |∑(a_k·x^k, k=0, ∞) - ∑(a_k, k=0, ∞)| < ε
  )
}
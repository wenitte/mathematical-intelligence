theorem PowerSet_Cardinality() {
  assert(
    ∀S: Set ∧ card(S) = n →
    card(𝒫(S)) = 2^n
  )
} ↔

proof PowerSet_Cardinality() {
  setVar(S: Set, n: ℕ) →
  assume(card(S) = n) →
  
  lemma Subset_Count() {
    assert(
      card(𝒫(S)) = ∑_{k=0}^n (n choose k)
    )
  } →

  lemma Binomial_Theorem() {
    assert(
      ∀x,y ∈ ℝ →
      (x + y)^n = ∑_{k=0}^n (n choose k)x^{n-k}y^k
    )
  } →

  apply(Binomial_Theorem()) →
  substitute(x = 1, y = 1) →
  assert(
    2^n = (1 + 1)^n = 
    ∑_{k=0}^n (n choose k)(1)^{n-k}(1)^k
  ) →
  
  simplify() →
  assert(
    2^n = ∑_{k=0}^n (n choose k)
  ) →

  apply(Subset_Count()) →
  assert(
    card(𝒫(S)) = ∑_{k=0}^n (n choose k) = 2^n
  )
}
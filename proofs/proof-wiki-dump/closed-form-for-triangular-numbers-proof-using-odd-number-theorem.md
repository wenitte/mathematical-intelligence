theorem TriangularNumbers() {
  assert(
    ∀n ∈ ℕ ⇒ T_n = ∑_{i=1}^n i = (n(n+1))/2
  )
} ↔

proof TriangularNumbers() {
  setVar(n: ℕ) →
  
  lemma OddNumberTheorem() {
    assert(
      ∑_{j=1}^n (2j-1) = n^2
    )
  } →
  
  assert(∑_{j=1}^n (2j-1) + ∑_{j=1}^n 1 = n^2 + n) →
  
  apply(distributive_law) →
  assert(∑_{j=1}^n (2j-1 + 1) = n^2 + n) →
  
  simplify() →
  assert(∑_{j=1}^n (2j) = n(n+1)) →
  
  apply(factor_2) →
  assert(2∑_{j=1}^n j = n(n+1)) →
  
  solve_for_sum() →
  assert(∑_{j=1}^n j = (n(n+1))/2) →
  
  apply(definition_T_n) →
  assert(T_n = (n(n+1))/2)
}
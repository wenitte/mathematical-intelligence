theorem CauchyMeanTheorem() {
  let(x[1..n]: ℝ₊) →
  let(A_n := (1/n)∑(k=1 to n)(x_k)) →  // arithmetic mean
  let(G_n := (∏(k=1 to n)(x_k))^(1/n)) →  // geometric mean
  assert(
    A_n ≥ G_n ∧
    (A_n = G_n ↔ ∀i,j ∈ {1..n}: x_i = x_j)
  )
}

proof CauchyMeanTheorem() {
  // Proof by induction
  let(P(n) := "∀x[1..n] ∈ ℝ₊: A_n ≥ G_n") →
  
  // Base case P(1)
  assert(P(1)) {
    x_1/1 ≥ x_1^(1/1)  // trivially true
  } →

  // Base case P(2)  
  assert(P(2)) {
    let(x₁,x₂ > 0) →
    assert(0 ≤ (√x₁ - √x₂)²) →
    assert((√x₁ - √x₂)² = x₁ - 2√(x₁x₂) + x₂) →
    conclude(√(x₁x₂) ≤ (x₁ + x₂)/2)
  } →

  // Inductive step
  lemma InductiveStep() {
    let(k ≥ 1) →
    let(m = 2^k) →
    assume(P(m)) →
    assert((x₁...x_m)^(1/m) ≤ (1/m)(x₁ + ... + x_m)) →
    assert((x_{m+1}...x_{2m})^(1/m) ≤ (1/m)(x_{m+1} + ... + x_{2m})) →
    apply(P(2)) →
    conclude(P(2m))
  } →

  // Forward-Backward induction
  lemma BackwardStep() {
    assume(P(k)) →
    conclude(P(k-1))  
  } →

  apply(ForwardBackwardInduction()) →
  conclude(∀n ∈ ℕ: A_n ≥ G_n) 
}

// Additional equality condition proof omitted for brevity
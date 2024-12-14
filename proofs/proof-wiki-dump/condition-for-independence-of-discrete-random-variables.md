theorem Independence_Discrete_RV() {
  let(Ω,Σ,Pr: ProbabilitySpace) →
  let(X,Y: DiscreteRandomVariable(Ω,Σ,Pr)) →
  assert(
    Independence(X,Y) ↔ 
    ∃f,g: ℝ→ℝ ⋅ ∀x,y∈ℝ ⋅ pₓᵧ(x,y) = f(x)g(y)
  )
}

proof Independence_Discrete_RV() {
  lemma Domain_Restriction() {
    assert(
      ∀x∉Ωₓ ⋅ pₓᵧ(x,y) = 0 ∧
      ∀y∉Ωᵧ ⋅ pₓᵧ(x,y) = 0
    )
  } →

  // Necessary Condition
  proof_forward() {
    assume(∃f,g: ℝ→ℝ ⋅ ∀x,y∈ℝ ⋅ pₓᵧ(x,y) = f(x)g(y)) →
    assert(pₓ(x) = f(x)∑ᵧg(y)) →
    assert(pᵧ(y) = g(y)∑ₓf(x)) →
    
    chain_equality() {
      1 = 
      ∑ₓ,ᵧpₓᵧ(x,y) →  // Definition of Joint PMF
      ∑ₓ,ᵧf(x)g(y) →   // By hypothesis
      ∑ₓf(x)∑ᵧg(y)     // Rearrangement
    } →

    chain_equality() {
      pₓᵧ(x,y) =
      f(x)g(y) →                         // By hypothesis
      f(x)g(y)∑ₓf(x)∑ᵧg(y) →           // From above
      (f(x)∑ᵧg(y))(g(y)∑ₓf(x)) →       // Regrouping
      pₓ(x)pᵧ(y)                         // From marginal definitions
    } →
    conclude(Independence(X,Y))
  } →

  // Sufficient Condition
  proof_backward() {
    assume(Independence(X,Y)) →
    let(f(x) = pₓ(x)) →
    let(g(y) = pᵧ(y)) →
    conclude(pₓᵧ(x,y) = f(x)g(y))
  }
}
theorem Borel_Sigma_Algebra_Euclidean_Space() {
  let(X := ℝⁿ)
  let(τ := topology(X))
  assert(
    𝔅(X,τ) = 𝔪(τ)
  )
} ↔

proof Borel_Sigma_Algebra_Euclidean_Space() {
  setVar(U ∈ τ) →
  let(C := X∖U) →
  
  lemma Open_Ball_Sequence() {
    setVar(n ∈ ℕ) →
    let(Cₙ := ⋃{B(c,1/n) : c ∈ C}) →
    assert(Cₙ ∈ τ) ∧
    assert(∀n∈ℕ: C ⊆ Cₙ)
  } →
  
  lemma Point_Outside_Ball() {
    setVar(u ∈ U) →
    assert(∃n∈ℕ: B(u,1/n) ⊆ U) →
    assert(∀c∈C: d(u,c) ≥ 1/n) →
    assert(u ∉ Cₙ)
  } →
  
  apply(Open_Ball_Sequence()) →
  apply(Point_Outside_Ball()) →
  
  assert(
    ∀c∈X: (c ∈ C ↔ ∀n∈ℕ: c ∈ Cₙ)
  ) →
  
  assert(C = ⋂{Cₙ : n∈ℕ}) →
  assert(Cₙ ∈ τ ⊆ 𝔪(τ)) →
  assert(C ∈ 𝔪(τ)) →
  
  let(τᶜ := {X∖U : U ∈ τ}) →
  
  assert(𝔪(τ ∪ τᶜ) ⊆ 𝔪(τ)) →
  apply(Generated_Monotone_Class_Preserves_Subset()) →
  apply(Generated_Sigma_Algebra_by_Monotone_Class()) →
  
  assert(σ(τ) = 𝔪(τ ∪ τᶜ)) →
  assert(𝔅(X,τ) = σ(τ) = 𝔪(τ))
}
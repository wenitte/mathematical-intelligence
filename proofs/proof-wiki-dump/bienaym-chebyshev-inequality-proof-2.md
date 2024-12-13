theorem BienaymeChebyshev() {
  let(X: RandomVariable) ∧
  let(μ: ℝ) ∧
  let(σ²: ℝ_{>0}) ∧
  assume(E[X] = μ) ∧
  assume(Var[X] = σ²) →
  assert(
    ∀k > 0 → P(|X - μ| ≥ kσ) ≤ 1/k²
  )
}

proof BienaymeChebyshev() {
  setVar(k: ℝ_{>0}) ∧
  setVar(σ: ℝ_{>0}) →
  assert(kσ > 0) →
  
  equate(
    P(|X - μ| ≥ kσ) = 
    P((X - μ)² ≥ (kσ)²)
  ) →

  lemma MarkovInequality() {
    assert(
      ∀Y(Y ≥ 0 ∧ a > 0 → P(Y ≥ a) ≤ E[Y]/a)
    )
  } →

  apply(MarkovInequality(), Y := (X - μ)², a := (kσ)²) →
  assert(P((X - μ)² ≥ (kσ)²) ≤ E[(X - μ)²]/(kσ)²) →
  
  lemma VarianceDefinition() {
    assert(E[(X - μ)²] = Var[X] = σ²)
  } →

  apply(VarianceDefinition()) →
  equate(
    E[(X - μ)²]/(kσ)² = 
    σ²/(k²σ²) = 
    1/k²
  ) →
  
  conclude(P(|X - μ| ≥ kσ) ≤ 1/k²)
}
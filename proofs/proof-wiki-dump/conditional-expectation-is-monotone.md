theorem Conditional_Expectation_Monotone() {
  assert(
    ∀(Ω,Σ,Pr: ProbabilitySpace) ∧
    ∀(X,Y: IntegrableRandomVariable[Ω,Σ,Pr]) ∧
    ∀(𝔾: SubσAlgebra[Σ]) ∧
    (X ≤ Y a.e.) ⇒
    (𝔼[X|𝔾] ≤ 𝔼[Y|𝔾] a.e.)
  )
} ↔

proof Conditional_Expectation_Monotone() {
  setVar(Z := Y - X) →
  assert(Z ≥ 0 a.e.) →
  
  lemma Indicator_Product() {
    assert(
      ∀(A ∈ 𝔾) ⇒ (Z·1_A ≥ 0 a.e.)
    )
  } →
  
  apply(Expectation_Monotone()) →
  assert(
    ∀(A ∈ 𝔾) ⇒ (𝔼[Z·1_A] ≥ 0)
  ) →
  
  apply(Conditional_Expectation_NonNegative()) →
  assert(𝔼[Z|𝔾] ≥ 0 a.e.) →
  
  apply(Conditional_Expectation_Linear()) →
  assert(𝔼[Y|𝔾] - 𝔼[X|𝔾] ≥ 0 a.e.) →
  
  assert(𝔼[X|𝔾] ≤ 𝔼[Y|𝔾] a.e.)
}
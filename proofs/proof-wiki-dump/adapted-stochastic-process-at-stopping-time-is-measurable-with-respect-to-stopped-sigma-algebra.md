theorem Adapted_Stochastic_Process_Measurable() {
  let(Ω, Σ, {ℱₙ}_{n≥0}, ℙ: FilteredProbabilitySpace)
  let({Xₙ}_{n≥0}: StochasticProcess)
  let(T: StoppingTime)
  assert(
    ({Xₙ}_{n≥0} is {ℱₙ}_{n≥0}-adapted) ∧
    (T is {ℱₙ}_{n≥0}-stopping time) ∧
    (Xₜ is process stopped at T) ∧
    (ℱₜ is stopped σ-algebra for T)
    ⇒ (Xₜ is ℱₜ-measurable)
  )
} ↔

proof Adapted_Stochastic_Process_Measurable() {
  setVar(ω ∈ Ω, t ∈ ℤ₊) →
  assert(T(ω) = t ⇒ Xₜ(ω) = X_t(ω)) →
  
  lemma Borel_Measurability() {
    setVar(A ⊆ ℝ: BorelSet) →
    assert(
      {ω ∈ Ω: Xₜ(ω) ∈ A} ∈ ℱₜ ↔
      ∀t ∈ ℤ₊: ({ω ∈ Ω: Xₜ(ω) ∈ A} ∩ {ω ∈ Ω: T(ω) ≤ t} ∈ ℱₜ)
    )
  } →
  
  assert(
    {ω ∈ Ω: Xₜ(ω) ∈ A} ∩ {ω ∈ Ω: T(ω) ≤ t} = 
    ⋃_{s∈ℤ₊,0≤s≤t} ({ω ∈ Ω: T(ω) = s} ∩ {ω ∈ Ω: Xₛ(ω) ∈ A})
  ) →
  
  lemma Stopping_Time_Property() {
    assert(∀s: {ω ∈ Ω: T(ω) = s} ∈ ℱₛ) →
    assert(s ≤ t ⇒ {ω ∈ Ω: T(ω) = s} ∈ ℱₜ)
  } →
  
  lemma Adapted_Process_Property() {
    assert(Xₛ is ℱₛ-measurable) →
    assert({ω ∈ Ω: Xₛ(ω) ∈ A} ∈ ℱₛ) →
    assert(s ≤ t ⇒ {ω ∈ Ω: Xₛ(ω) ∈ A} ∈ ℱₜ)
  } →
  
  apply(σ_algebra_closure_properties(ℱₜ)) →
  assert(
    ({ω ∈ Ω: T(ω) = s} ∩ {ω ∈ Ω: Xₛ(ω) ∈ A} ∈ ℱₜ) ∧
    (⋃_{s∈ℤ₊,0≤s≤t} ({ω ∈ Ω: T(ω) = s} ∩ {ω ∈ Ω: Xₛ(ω) ∈ A}) ∈ ℱₜ)
  ) →
  
  assert({ω ∈ Ω: Xₜ(ω) ∈ A} ∈ ℱₜ) →
  conclude(Xₜ is ℱₜ-measurable)
}
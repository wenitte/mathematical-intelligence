theorem Absolute_Continuity_Transitive() {
  assert(
    ∀(X,Σ): MeasurableSpace,
    ∀μ,ν,λ: Measure(X,Σ),
    (μ ≪ ν ∧ ν ≪ λ) ⇒ μ ≪ λ
  )
}

proof Absolute_Continuity_Transitive() {
  setVar(X,Σ: MeasurableSpace) →
  setVar(μ,ν,λ: Measure(X,Σ)) →
  assume(μ ≪ ν ∧ ν ≪ λ) →
  
  lemma AbsCont_Definition() {
    assert(
      ∀η,ξ: Measure(X,Σ),
      η ≪ ξ ↔ (∀A ∈ Σ, ξ(A) = 0 ⇒ η(A) = 0)
    )
  } →

  setVar(A: Σ) →
  assume(λ(A) = 0) →
  
  apply(AbsCont_Definition(), [ν,λ]) →
  assert(λ(A) = 0 ⇒ ν(A) = 0) →
  assert(ν(A) = 0) →
  
  apply(AbsCont_Definition(), [μ,ν]) →
  assert(ν(A) = 0 ⇒ μ(A) = 0) →
  assert(μ(A) = 0) →
  
  conclude(
    ∀A ∈ Σ, λ(A) = 0 ⇒ μ(A) = 0
  ) →
  
  apply(AbsCont_Definition(), [μ,λ]) →
  assert(μ ≪ λ)
}
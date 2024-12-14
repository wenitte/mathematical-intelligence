theorem LinearDependenceFunctionals() {
  assert(
    ∀V: VectorSpace(𝔽) ∧
    ∀f,f₁,...,fₙ: LinearFunctional(V → 𝔽) ∧
    (⋂ᵢ₌₁ⁿ ker(fᵢ) ⊆ ker(f)) →
    ∃α₁,...,αₙ ∈ 𝔽: 
      ∀v ∈ V: f(v) = Σᵢ₌₁ⁿ αᵢfᵢ(v)
  )
}

proof LinearDependenceFunctionals() {
  lemma ConstructBasis() {
    assert(
      ∀i ∈ {1,...,n}: ∃wᵢ ∈ V:
        wᵢ ∉ ker(fᵢ) ∧
        ∀j≠i: wᵢ ∈ ker(fⱼ)
    )
  } →

  setVar(vᵢ = wᵢ/fᵢ(wᵢ)) →
  assert(
    fᵢ(vᵢ) = 1 ∧
    ∀j≠i: fⱼ(vᵢ) = 0
  ) →

  setVar(w = v - Σᵢ₌₁ⁿ fᵢ(v)vᵢ) →
  assert(
    ∀j: fⱼ(w) = fⱼ(v) - Σᵢ₌₁ⁿ fᵢ(v)fⱼ(vᵢ) = 0
  ) →

  apply(MainHypothesis: ⋂ᵢ₌₁ⁿ ker(fᵢ) ⊆ ker(f)) →
  assert(f(w) = 0) →
  assert(
    0 = f(v) - Σᵢ₌₁ⁿ fᵢ(v)f(vᵢ)
  ) →
  
  setVar(αᵢ = f(vᵢ)) →
  conclude(
    f(v) = Σᵢ₌₁ⁿ αᵢfᵢ(v)
  )

  lemma SpecialCase() {
    assert(
      ¬∃wᵢ →
      ⋂ᵢ₌₁ⁿ ker(fᵢ) = ⋂ⱼ≠ᵢ ker(fⱼ) →
      αᵢ = 0
    )
  }
}
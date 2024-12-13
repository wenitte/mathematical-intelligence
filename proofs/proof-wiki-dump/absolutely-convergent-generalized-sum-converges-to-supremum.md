theorem AbsolutelyConvergentSum() {
  assert(
    ∀V: BanachSpace,
    ∀{vᵢ}ᵢ∈I: IndexedFamily(V),
    ∀𝔽: FiniteSubsets(I),
    ∀c ∈ ℝ,
    (∑ᵢ∈I vᵢ converges_absolutely_to c) ⇒
    (c = sup{∑ᵢ∈F ∥vᵢ∥ : F ∈ 𝔽})
  )
}

proof AbsolutelyConvergentSum() {
  byContradiction() {
    assume(∃E ∈ 𝔽: ∑ᵢ∈E ∥vᵢ∥ > c) →
    setVar(ε: ℝ₊, ε < ∑ᵢ∈E ∥vᵢ∥ - c) →
    
    lemma SumOverUnion() {
      ∀F ∈ 𝔽: 
      let(E' = F ∪ E) →
      assert(∑ᵢ∈E' ∥vᵢ∥ = ∑ᵢ∈F ∥vᵢ∥ + ∑ᵢ∈E'∖F ∥vᵢ∥) →
      assert(∑ᵢ∈E' ∥vᵢ∥ ≥ ∑ᵢ∈F ∥vᵢ∥) →
      assert(∑ᵢ∈E' ∥vᵢ∥ > c + ε)
    } →

    conclude(∀F ∈ 𝔽: ∃E' ∈ 𝔽: 
      (E' ⊇ F) ∧ (|∑ᵢ∈E' ∥vᵢ∥ - c| > ε)
    ) →
    
    contradicts(absoluteConvergence(∑ᵢ∈I vᵢ, c))
  } →
  
  assert(∀E ∈ 𝔽: ∑ᵢ∈E ∥vᵢ∥ ≤ c) →
  
  lemma AbsoluteNetConvergence() {
    assert(
      ∀ε > 0: ∃F ∈ 𝔽: ∀E ∈ 𝔽:
      (E ⊇ F) ⇒ (∑ᵢ∈E ∥vᵢ∥ ∈ [c-ε,c])
    )
  } →
  
  apply(SupremumCharacterization()) →
  conclude(c = sup{∑ᵢ∈F ∥vᵢ∥ : F ∈ 𝔽})
}
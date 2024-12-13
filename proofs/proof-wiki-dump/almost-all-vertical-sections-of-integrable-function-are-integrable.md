theorem AlmostAllVerticalSectionsIntegrable() {
  assert(
    ∀X,Y[
      (σ_finite(X,Σ_X,μ) ∧ σ_finite(Y,Σ_Y,ν)) ∧
      f: X×Y → ℝ̄₊ ∧ 
      integrable(f,μ×ν)
    ] ⇒
    ∀x∈X[integrable(f_x,ν)] except_on μ_null_set
  )
} ↔

proof AlmostAllVerticalSectionsIntegrable() {
  lemma VerticalSectionMeasurable() {
    assert(∀x∈X[measurable(f_x,Σ_Y)])
  } →
  
  lemma PositiveNegativeParts() {
    assert(∀x∈X[
      measurable((f_x)⁺,Σ_Y) ∧ 
      measurable((f_x)⁻,Σ_Y)
    ])
  } →
  
  setDef(g(x) = ∫(f_x)⁺dν) →
  setDef(h(x) = ∫(f_x)⁻dν) →
  
  assert(measurable(g,Σ_X) ∧ measurable(h,Σ_X)) →
  
  lemma VerticalSectionParts() {
    assert(
      (f_x)⁺ = (f⁺)_x ∧
      (f_x)⁻ = (f⁻)_x
    )
  } →
  
  apply(TonelliTheorem()) →
  assert(
    ∫g dμ = ∫∫(f_x)⁺dνdμ = ∫∫(f⁺)_x dνdμ = ∫∫f⁺d(μ×ν) ∧
    ∫h dμ = ∫∫(f_x)⁻dνdμ = ∫∫(f⁻)_x dνdμ = ∫∫f⁻d(μ×ν)
  ) →
  
  assert(integrable(f,μ×ν) ⇒ 
    ∫∫f⁺d(μ×ν) < ∞ ∧ ∫∫f⁻d(μ×ν) < ∞
  ) →
  
  apply(IntegrableFunctionAEFinite()) →
  setVar(N₁: μ_null_set where ∫(f_x)⁺dν = ∞) →
  setVar(N₂: μ_null_set where ∫(f_x)⁻dν = ∞) →
  
  assert(
    ¬integrable(f_x,ν) ⇒ x∈N₁ ∪ N₂
  ) →
  
  apply(NullSetUnionClosed()) →
  assert(μ_null(N₁ ∪ N₂)) →
  
  conclude(∀x∈X[integrable(f_x,ν)] except_on N₁ ∪ N₂)
}
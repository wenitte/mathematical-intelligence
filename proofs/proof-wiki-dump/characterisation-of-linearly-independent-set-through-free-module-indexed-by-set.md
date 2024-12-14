theorem Linear_Independence_Characterization() {
  let(M: UnityRModule) ∧
  let(S: Family[M], S = {m_i | i ∈ I}) ∧
  let(Ψ: R^I → M) ∧
  assert(
    isModuleHomomorphism(Ψ) ∧
    satisfies(Ψ, UniversalPropertyFreeModule(I))
  ) →
  assert(
    isLinearlyIndependent(S) ↔ isInjective(Ψ)
  )
}

proof Linear_Independence_Characterization() {
  lemma Kernel_Characterization() {
    assert(
      ∀{r_i | i ∈ I} ∈ R^I →
      (Ψ({r_i}) = 0 ↔ Σ(i∈I)(r_i * m_i) = 0)
    )
  } →

  assert(isInjective(Ψ) ↔ ker(Ψ) = {0}) →
  assert(ker(Ψ) = {0} ↔ 
    (∀{r_i | i ∈ I} ∈ R^I → 
      (Σ(i∈I)(r_i * m_i) = 0 → ∀i∈I(r_i = 0))
    )
  ) →
  
  assert(isLinearlyIndependent(S) ↔ 
    (∀{r_i | i ∈ I} ∈ R^I → 
      (Σ(i∈I)(r_i * m_i) = 0 → ∀i∈I(r_i = 0))
    )
  ) →

  conclude(isLinearlyIndependent(S) ↔ isInjective(Ψ))
}
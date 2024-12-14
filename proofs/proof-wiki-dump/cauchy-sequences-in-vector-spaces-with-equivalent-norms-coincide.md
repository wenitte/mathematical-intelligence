theorem Cauchy_Sequences_Equivalent_Norms() {
  assert(
    ∀X,∀a,∀b ∈ Norms(X),∀{xₙ} ∈ Seq(X) ⇒
    (isCauchy({xₙ}, ∥·∥ₐ) ∧ isEquivalent(∥·∥ₐ, ∥·∥_b)) →
    isCauchy({xₙ}, ∥·∥_b)
  )
} ↔

proof Cauchy_Sequences_Equivalent_Norms() {
  setVar(X: VectorSpace) →
  setVar({xₙ}: Sequence(X)) →
  setVar(∥·∥ₐ, ∥·∥_b: Norm(X)) →
  
  assert(isCauchy({xₙ}, ∥·∥ₐ)) →
  expandDef(isCauchy) {
    ∀ϵₐ>0,∃N∈ℕ,∀n,m>N: ∥xₙ-xₘ∥ₐ < ϵₐ
  } →

  assert(isEquivalent(∥·∥ₐ, ∥·∥_b)) →
  apply(NormEquivalence) {
    ∃M>0: ∥xₙ-xₘ∥_b ≤ M∥xₙ-xₘ∥ₐ
  } →
  
  setVar(ϵ_b := Mϵₐ) →
  assert(
    ∥xₙ-xₘ∥_b ≤ M∥xₙ-xₘ∥ₐ < Mϵₐ = ϵ_b
  ) →
  
  conclude(
    ∀ϵ_b>0,∃N∈ℕ,∀n,m>N: ∥xₙ-xₘ∥_b < ϵ_b
  ) →
  
  assert(isCauchy({xₙ}, ∥·∥_b))
}
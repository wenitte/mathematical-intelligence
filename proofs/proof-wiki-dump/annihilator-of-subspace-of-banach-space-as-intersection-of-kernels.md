theorem Annihilator_Subspace_Banach() {
  let(GF: {ℝ, ℂ})
  let(X: BanachSpace(GF))
  let(M: VectorSubspace(X))
  let(X*: NormedDualSpace(X))
  let(M⊥: Annihilator(M))
  assert(
    M⊥ = ⋂_{x ∈ M} ker(x^∧)
  )
} ↔

proof Annihilator_Subspace_Banach() {
  step1: {
    assert(M⊥ = {g ∈ X* : g(x) = 0 ∀x ∈ M}) →
    apply(Def_Annihilator_Subspace())
  } →
  
  step2: {
    assert({g ∈ X* : g(x) = 0 ∀x ∈ M} = ⋂_{x ∈ M} {g ∈ X* : g(x) = 0}) →
    apply(Set_Theory_Intersection())
  } →
  
  step3: {
    assert(⋂_{x ∈ M} {g ∈ X* : g(x) = 0} = ⋂_{x ∈ M} {g ∈ X* : x^∧(g) = 0}) →
    apply(Def_Evaluation_Linear_Transform())
  } →
  
  step4: {
    assert(⋂_{x ∈ M} {g ∈ X* : x^∧(g) = 0} = ⋂_{x ∈ M} ker(x^∧)) →
    apply(Def_Kernel_Linear_Transform())
  } →
  
  conclude(M⊥ = ⋂_{x ∈ M} ker(x^∧))
}
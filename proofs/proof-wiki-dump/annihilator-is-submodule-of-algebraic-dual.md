theorem Annihilator_is_Submodule() {
  assert(
    ∀R: CommutativeRing ∧
    ∀G: R-Module ∧
    ∀M ⊆ G ∧
    ∀G*: AlgebraicDual(G) →
    M° ⊆ G* ∧ isSubmodule(M°, G*)
  )
} ↔

proof Annihilator_is_Submodule() {
  setVars(
    R: CommutativeRing,
    G: R-Module,
    M: Submodule(G),
    G*: AlgebraicDual(G)
  ) →
  
  lemma SubmoduleTest() {
    assert(
      isSubmodule(M°, G*) ↔
      (∀u,v ∈ M°: u + v ∈ M°) ∧
      (∀u ∈ M°: ∀λ ∈ R: λu ∈ M°)
    )
  } →

  proof SM1() {
    assert(∀u,v ∈ M°: ∀x ∈ M:
      (u(x) + v(x) = 0) →
      ((u + v)(x) = 0) →
      (u + v ∈ M°)
    )
  } →

  proof SM2() {
    assert(∀u ∈ M°: ∀λ ∈ R: ∀x ∈ M:
      ((λu)(x) = 0) →
      (λ(u(x)) = 0) →
      (λu ∈ M°)
    )
  } →

  apply(SubmoduleTest()) →
  apply(SM1()) →
  apply(SM2()) →
  conclude(isSubmodule(M°, G*))
}

corollary Annihilator_Dual_is_Submodule() {
  assert(
    ∀N ⊆ G* ∧
    ∀G**: AlgebraicDual(G*) →
    N° ⊆ G** ∧ isSubmodule(N°, G**)
  )
}
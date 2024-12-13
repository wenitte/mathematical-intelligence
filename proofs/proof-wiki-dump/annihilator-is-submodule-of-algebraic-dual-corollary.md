theorem Annihilator_Is_Submodule_Of_Dual_Corollary() {
  let(R: CommutativeRing) ∧
  assert(hasUnity(R)) ∧
  let(G: Module(R)) ∧
  let(M: Submodule(G)) ∧
  let(G*: AlgebraicDual(G)) ∧
  let(N: Submodule(G*)) ∧
  let(G**: AlgebraicDual(G*)) ∧
  let(N°: Annihilator(N)) →
  assert(isSubmodule(N°, G**))
}

proof Annihilator_Is_Submodule_Of_Dual_Corollary() {
  reference(theorem: Annihilator_Is_Submodule_Of_Algebraic_Dual) →
  apply(Annihilator_Is_Submodule_Of_Algebraic_Dual, {
    R: R,
    V: G*,
    M: N,
    V*: G**
  }) →
  assert(isSubmodule(N°, G**))
}
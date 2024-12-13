theorem Brouwerian_Lattice_Equivalence() {
  assert(
    ∀𝒮(𝒮 = (S,∨,∧,⪯) ∧ CompleteLattice(𝒮)) ⇒
    (BrouwerianLattice(𝒮) ↔ (MeetContinuous(𝒮) ∧ Distributive(𝒮)))
  )
}

proof Brouwerian_Lattice_Equivalence() {
  // Sufficient condition
  branch SufficientCondition() {
    assume(BrouwerianLattice(𝒮)) →
    ∀x∈S [
      setVar(f: S→S) →
      assert(∀y∈S: f(y) = x∧y) →
      apply(RelativePseudocomplement_GaloisConnection) →
      assert(LowerAdjoint(f))
    ] →
    apply(ShiftMapping_LowerAdjoint_Distributive) →
    assert(∀x∈S,X⊆S: x∧sup(X) = sup({x∧y | y∈X})) →
    apply(CompleteLattice_Definition) →
    assert(UpComplete(𝒮)) →
    assert(∀x∈S,D⊆S: DirectedSet(D) ⇒ x∧sup(D) = sup({x∧d | d∈D})) →
    assert(MeetContinuous(𝒮)) →
    apply(Brouwerian_Implies_Distributive) →
    assert(Distributive(𝒮))
  }

  // Necessary condition
  branch NecessaryCondition() {
    assume(MeetContinuous(𝒮) ∧ Distributive(𝒮)) →
    setVar(x: S) →
    define(f: S→S, ∀y∈S: f(y) = x∧y) →
    apply(MeetContinuous_Distributive_PreservesFiniteSuprema) →
    assert(PreservesFiniteSuprema(f)) →
    apply(MeetContinuous_PreservesDirectedSuprema) →
    assert(PreservesDirectedSuprema(f)) →
    apply(PreservesFiniteAndDirected_ImpliesAllSuprema) →
    assert(PreservesAllSuprema(f)) →
    apply(AllSuprema_ImpliesLowerAdjoint) →
    assert(LowerAdjoint(f)) →
    apply(Brouwerian_Iff_ShiftMapping_LowerAdjoint) →
    assert(BrouwerianLattice(𝒮))
  }
}
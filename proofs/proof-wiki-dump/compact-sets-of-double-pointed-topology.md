theorem CompactSetsDoublePointedTopology() {
  assert(
    ∀S,τ_S,D,X(
      TopologicalSpace(S,τ_S) ∧
      Doubleton(D) ∧ 
      HasIndiscreteTopology(D) ∧
      DoublePointedTopology(S×D,τ) →
      (Compact(X,τ) ↔ ∃C(
        Compact(C,τ_S) ∧
        pr₁(X) = C
      ))
    )
  )
}

proof CompactSetsDoublePointedTopology() {
  // Necessary Condition
  lemma NecessaryCondition() {
    assume(Compact(X,τ)) →
    setVar(C := pr₁(X)) →
    apply(CompactnessPreservedUnderProjection()) →
    assert(Compact(C,τ_S))
  }

  // Sufficient Condition
  lemma SufficientCondition() {
    assume(∃C(Compact(C,τ_S) ∧ pr₁(X) = C)) →
    setVar(𝓤: OpenCover(X)) →
    assert(∀U∈𝓤(∃U'(U = U'×D ∧ Open(U',τ_S)))) →
    assert(⋃𝓤 = (⋃{pr₁(U): U∈𝓤})×D) →
    
    setVar(𝓥 := {pr₁(U): U∈𝓤}) →
    assert(OpenCover(𝓥,C)) →
    
    // By compactness of C
    apply(CompactDef(C)) →
    assert(∃𝓥'⊆𝓥(Finite(𝓥') ∧ C ⊆ ⋃𝓥')) →
    
    setVar(𝓤' := {V×D: V∈𝓥'}) →
    assert(Finite(𝓤') ∧ 𝓤'⊆𝓤) →
    
    // Show 𝓤' is subcover
    ∀(s,d)∈X(
      assert(s ∈ C) →
      assert(∃V∈𝓥'(s∈V)) →
      assert((s,d) ∈ V×D) →
      assert((s,d) ∈ ⋃𝓤')
    ) →
    
    assert(X ⊆ ⋃𝓤') →
    assert(Compact(X,τ))
  }

  apply(NecessaryCondition()) ∧ apply(SufficientCondition())
}

corollary CompactDoublePointedSpaceEquivalence() {
  assert(
    ∀S,τ_S,D(
      TopologicalSpace(S,τ_S) ∧
      Doubleton(D) ∧
      HasIndiscreteTopology(D) ∧
      DoublePointedTopology(S×D,τ) →
      (Compact(S×D,τ) ↔ Compact(S,τ_S))
    )
  )
}
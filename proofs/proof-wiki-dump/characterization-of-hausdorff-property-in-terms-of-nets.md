theorem Hausdorff_Net_Characterization() {
  assert(
    ∀X,τ[TopologicalSpace(X,τ) →
    (Hausdorff(X,τ) ↔ 
    ∀Λ,≼,x,y,{xλ}[
      (DirectedSet(Λ,≼) ∧ x,y∈X ∧ 
      NetConverges({xλ},x) ∧ NetConverges({xλ},y)) → 
      x=y])]
  )
}

proof Hausdorff_Net_Characterization() {
  // Necessary Condition
  proof_part Forward() {
    setVar(X,τ: TopologicalSpace) →
    assume(Hausdorff(X,τ)) →
    setVar(Λ,≼: DirectedSet) →
    setVar(x,y: X) →
    setVar({xλ}: Net(Λ)) →
    assume(NetConverges({xλ},x) ∧ NetConverges({xλ},y)) →
    assume(x≠y) →
    apply(HausdorffDef) →
    assert(∃U,V[OpenSet(U) ∧ OpenSet(V) ∧ x∈U ∧ y∈V ∧ U∩V=∅]) →
    assert(∃λx∈Λ[∀λ≽λx → xλ∈U]) →
    assert(∃λy∈Λ[∀λ≽λy → xλ∈V]) →
    apply(DirectedSetDef) →
    assert(∃λ*∈Λ[λx≼λ* ∧ λy≼λ*]) →
    assert(xλ*∈U ∧ xλ*∈V) →
    assert(xλ*∈U∩V) →
    assert(xλ*∈∅) →
    contradiction() →
    conclude(x=y)
  }

  // Sufficient Condition
  proof_part Backward() {
    assume(¬Hausdorff(X,τ)) →
    assert(∃x,y∈X[x≠y ∧ ∀U,V[OpenNeighborhood(U,x) ∧ OpenNeighborhood(V,y) → 
      U∩V≠∅]]) →
    define(F := {(U,V) | OpenNeighborhood(U,x) ∧ OpenNeighborhood(V,y)}) →
    define(⊑ := {((U,V),(U',V')) | U⊇U' ∧ V⊇V'}) →
    assert(DirectedSet(F,⊑)) →
    setVar(x(U,V)∈U∩V: ∀(U,V)∈F) →
    assert(NetConverges({x(U,V)},x)) →
    assert(NetConverges({x(U,V)},y)) →
    assert(x≠y) →
    apply(Contraposition) →
    conclude(¬[∀nets[Convergent→UniqueLimits]] → ¬Hausdorff(X,τ))
  }
}
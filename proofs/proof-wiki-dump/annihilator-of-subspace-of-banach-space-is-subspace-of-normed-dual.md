theorem Annihilator_Is_Subspace() {
  assert(
    ∀GF ∈ {ℝ,ℂ},
    ∀X: BanachSpace(GF),
    ∀M ⊆ X,
    let X* = NormedDual(X),
    let w* = WeakStarTopology(X*),
    let M⊥ = Annihilator(M) ⊆ X*
    ⇒ IsLinearSubspace(M⊥, X*)
  )
} ↔

proof Annihilator_Is_Subspace() {
  setVar(GF ∈ {ℝ,ℂ}) →
  setVar(X: BanachSpace(GF)) →
  setVar(M ⊆ X) →
  
  lemma Zero_In_Annihilator() {
    assert(∀x ∈ X: map(0_{X*}, x) = 0) →
    assert(∀x ∈ M: map(0_{X*}, x) = 0) →
    conclude(0_{X*} ∈ M⊥)
  } →
  
  apply(Zero_In_Annihilator()) →
  assert(M⊥ ≠ ∅) →
  
  lemma Closed_Under_Operations() {
    setVar(f,g ∈ M⊥) →
    setVar(λ ∈ GF) →
    assert(∀x ∈ M: map(f,x) = 0 ∧ map(g,x) = 0) →
    assert(∀x ∈ M: map(f,x) + λ·map(g,x) = 0) →
    assert(∀x ∈ M: map(f + λg, x) = 0) →
    conclude(f + λg ∈ M⊥)
  } →
  
  apply(Closed_Under_Operations()) →
  apply(One_Step_Vector_Subspace_Test(M⊥, X*)) →
  conclude(IsLinearSubspace(M⊥, X*))
}
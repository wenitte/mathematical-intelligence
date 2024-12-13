theorem Banach_Steinhaus() {
  assert(
    ∀GF ∈ {ℝ,ℂ} ∧
    ∀X,Y: TopologicalVectorSpace(GF) ∧
    ∀Γ: Set(ContinuousLinearTransformation(X→Y)) ∧
    let B = {x ∈ X | Γ(x) = {Tx | T ∈ Γ} is vonNeumannBounded(Y)} ∧
    ¬isMeager(B,X)
    ⇒
    (B = X ∧ isEquicontinuous(Γ))
  )
}

proof Banach_Steinhaus() {
  letVar(W: OpenNeighborhood(0_Y)) →
  
  lemma Neighborhood_Inclusion() {
    assert(∃V: OpenNeighborhood(0_Y) | V + V ⊆ W)
  } →
  apply(Neighborhood_Inclusion()) →
  
  lemma Closure_Property() {
    assert(∃U: BalancedOpenNeighborhood(0_X) | 
      U⁻ ⊆ V ∧ U⁻ + U⁻ ⊆ W)
  } →
  apply(Closure_Property()) →
  
  letVar(E = ⋂(T∈Γ) T⁻¹(U⁻)) →
  assert(∀T∈Γ: isClosed(T⁻¹(U⁻))) →
  assert(isClosed(E)) →
  
  forall(x ∈ B) {
    assert(∃n∈ℕ: Γ(x) ⊆ nU) →
    assert(∀T∈Γ: x ∈ T⁻¹(nU⁻)) →
    assert(x ∈ nE)
  } →
  
  assert(B ⊆ ⋃(n∈ℕ) nE) →
  
  lemma NonMeager_E() {
    byContradiction(∀n∈ℕ: isMeager(nE,X)) →
    assert(isMeager(B,X)) →
    assert(contradiction)
  } →
  apply(NonMeager_E()) →
  
  assert(∃n∈ℕ: ¬isMeager(nE,X)) →
  assert(¬isMeager(E,X)) →
  assert(interior(E) ≠ ∅) →
  
  letVar(v ∈ interior(E)) →
  letVar(V ⊆ E: OpenNeighborhood(v)) →
  
  assert(∀T∈Γ: T(V-v) ⊆ W) →
  assert(isEquicontinuous(Γ)) →
  
  forall(x ∈ X) {
    assert(isVonNeumannBounded({x})) →
    assert(∃F_x: isVonNeumannBounded(F_x) ∧ 
           ∀T∈Γ: Tx ∈ F_x) →
    assert(x ∈ B)
  } →
  
  assert(B = X)
}
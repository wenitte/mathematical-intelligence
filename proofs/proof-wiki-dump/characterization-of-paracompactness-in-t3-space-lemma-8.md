theorem Paracompactness_Characterization() {
  assert(
    ∀T(T = ⟨X,τ⟩ ∧ isTopologicalSpace(T) ∧ isEven(∀U∈OpenCovers(T)) ∧ U∈OpenCovers(T)) →
    ∃A(isσDiscreteRefinement(A,U))
  )
} ↔

proof Paracompactness_Characterization() {
  setVar(τ_X×X: ProductTopology(X×X)) →
  setVar(Δ_X: Diagonal(X)) →
  assert(∃V(isNeighborhood(V,Δ_X) ∧ {V(x):x∈X} refines U)) →
  
  lemma Sequence_Construction() {
    assert(∃{V_n}_{n∈ℕ}(
      V_0 = V ∧
      ∀n∈ℕ₊(isSymmetric(V_n)) ∧
      ∀n∈ℕ₊(V_n∘V_n ⊆ V_{n-1})
    ))
  } →

  setVar(U_n: ∀n∈ℕ₊(V_n∘V_{n-1}∘...∘V_1)) →
  assert(∀n∈ℕ₊(U_{n+1} = V_{n+1}∘U_n)) →

  lemma Refinement_Property() {
    assert(∀n∈ℕ₊(U_n ⊆ V_0))
  } →

  lemma Cover_Refinement() {
    assert(∀n∈ℕ₊({U_n(x):x∈X} refines {V_0(x):x∈X}))
  } →

  apply(WellOrderingTheorem(X)) →
  setVar(≺: WellOrder(X)) →
  
  setVar(A_n: λx.U_n(x)∖(⋃_{y≺x,y≠x}U_{n+1}(y))) →

  lemma Discreteness() {
    assert(∀n∈ℕ₊,∀y,z∈X(y≠z → A_n(z)∩V_{n+1}[A_n(y)]=∅))
  } →

  setVar(𝔸_n: {A_n(x):x∈X}) →
  setVar(𝔸: ⋃_{n∈ℕ₊}𝔸_n) →

  lemma Cover_Property() {
    assert(iscover(𝔸,X))
  } →

  assert(∀x∈X,∀n∈ℕ₊(A_n(x)⊆U_n(x))) →
  assert(∀x∈X,∀n∈ℕ₊(∃U∈U(U_n(x)⊆U))) →
  assert(∀x∈X,∀n∈ℕ₊(∃U∈U(A_n(x)⊆U))) →
  
  conclude(isσDiscreteRefinement(𝔸,U))
}
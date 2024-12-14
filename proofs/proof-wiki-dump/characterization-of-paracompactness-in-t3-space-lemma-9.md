theorem Paracompactness_Characterization() {
  let(T = ⟨X, τ⟩: TopologicalSpace) →
  assert(
    (∀O ∈ OpenCovers(T) → isEven(O)) ∧
    (∃B: DiscreteSet(P(X))) →
    ∃W ∈ OpenNeighborhoods(ΔX, T×T) : 
      ∀x ∈ X → |{B ∈ B : W(x) ∩ W[B] ≠ ∅}| ≤ 1
  )
} ↔

proof Paracompactness_Characterization() {
  let(U = {U ∈ τ : |{B ∈ B : U ∩ B ≠ ∅}| ≤ 1}) →
  
  lemma L19() {
    assert(U ∈ OpenCovers(X, T))
  } →
  
  assert(isEven(U)) →
  let(τX×X: ProductTopology(X×X)) →
  assert(∃V ∈ Neighborhoods(ΔX, ⟨X×X, τX×X⟩) : 
    {V(x) : x ∈ X} refines U) →
  
  lemma L20() {
    assert(∀N ∈ Neighborhoods(ΔX, ⟨X×X, τX×X⟩) →
      ∃W ∈ OpenNeighborhoods(ΔX, ⟨X×X, τX×X⟩) : 
        (W = W⁻¹ ∧ W∘W ⊆ N))
  } →
  
  apply(L20()) →
  assert(∃W: (W = W⁻¹ ∧ W∘W ⊆ V)) →
  
  lemma L21() {
    assert(∀B ∈ B, x ∈ X → 
      (W(x) ∩ W[B] ≠ ∅ → (W∘W)(x) ∩ B ≠ ∅))
  } →
  
  setVar(x: X) →
  assert(∃U ∈ U: V(x) ⊆ U) →
  assert((W∘W)(x) ⊆ V(x)) →
  assert((W∘W)(x) ⊆ U) →
  assert({B ∈ B : W(x) ∩ W[B] ≠ ∅} ⊆ 
         {B ∈ B : (W∘W)(x) ∩ B ≠ ∅} ⊆
         {B ∈ B : U ∩ B ≠ ∅}) →
  assert(|{B ∈ B : U ∩ B ≠ ∅}| ≤ 1) →
  assert(|{B ∈ B : W(x) ∩ W[B] ≠ ∅}| ≤ 1) →
  conclude(∀x ∈ X → |{B ∈ B : W(x) ∩ W[B] ≠ ∅}| ≤ 1)
}
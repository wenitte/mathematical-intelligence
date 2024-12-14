theorem Completely_Hausdorff_Hereditary() {
  assert(
    ∀T(S: Set, τ: Topology) ∧
    IsCompletelyHausdorff(T) ∧
    ∀H(H ⊆ S) ∧
    ∀TH(H: Set, τH: Topology) ∧
    IsSubspace(TH, T) →
    IsCompletelyHausdorff(TH)
  )
} ↔

proof Completely_Hausdorff_Hereditary() {
  setVar(T(S: Set, τ: Topology)) →
  assert(IsCompletelyHausdorff(T) ↔
    ∀x,y ∈ S(x ≠ y → ∃U,V ∈ τ(
      x ∈ U ∧ y ∈ V ∧ U⁻ ∩ V⁻ = ∅
    ))
  ) →
  
  define(τH := {U ∩ H: U ∈ τ}) →
  
  setVar(x,y ∈ H) →
  assume(x ≠ y) →
  assert(x,y ∈ S) →
  
  apply(IsCompletelyHausdorff(T)) →
  obtain(U,V ∈ τ: 
    x ∈ U ∧ y ∈ V ∧ U⁻ ∩ V⁻ = ∅
  ) →
  
  assert(x ∈ U ∩ H ∧ y ∈ V ∩ H) →
  
  lemma Closure_Subset() {
    assert(
      ∀W ∈ τ((W ∩ H)⁻ ⊆ W⁻ ∩ H)
    )
  } →
  
  apply(Closure_Subset()) →
  assert(
    (U ∩ H)⁻ ⊆ U⁻ ∩ H ∧
    (V ∩ H)⁻ ⊆ V⁻ ∩ H
  ) →
  
  conclude(
    (U ∩ H)⁻ ∩ (V ∩ H)⁻ = ∅
  ) →
  
  assert(IsCompletelyHausdorff(TH))
}
theorem Compact_Complement_Topology_First_Countable() {
  let(T = ⟨ℝ,τ⟩: TopologicalSpace) →
  assert(
    isCompactComplementTopology(T) →
    isFirstCountable(T)
  )
}

proof Compact_Complement_Topology_First_Countable() {
  let(T = ⟨ℝ,τ⟩: TopologicalSpace) →
  assume(isCompactComplementTopology(T)) →
  
  setVar(p: ℝ) →
  
  let(Bₚ = {(-∞,-n)∪(p-1/n,p+1/n)∪(n,∞) | n ∈ ℕ}) →
  
  lemma Local_Basis_Property() {
    assert(
      ∀p ∈ ℝ → isCountableLocalBasis(Bₚ,T,p)
    )
  } →
  
  apply(Local_Basis_Property()) →
  
  assert(
    (∀p ∈ ℝ → ∃B: isCountableLocalBasis(B,T,p)) →
    isFirstCountable(T)
  ) →
  
  conclude(isFirstCountable(T))
}
theorem AccumulationPoint_OmegaAccumulation() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T is_topological_space) ∧
    ∀{xₙ}(sequence_of_distinct_terms(S)) ∧
    ∀α(α is_accumulation_point_of({xₙ})) →
    α is_omega_accumulation_point_of({xₙ: n ∈ ℕ})
  )
} ↔

proof AccumulationPoint_OmegaAccumulation() {
  setVar(T: topological_space) →
  setVar({xₙ}: sequence) →
  setVar(α: point) →
  
  ∀U(U is_open_set(T) ∧ α ∈ U) → {
    assert(
      α is_accumulation_point_of({xₙ}) →
      |{k ∈ ℕ: xₖ ∈ U}| = ∞
    ) →
    
    lemma DistinctTerms() {
      assert(
        sequence_of_distinct_terms({xₙ}) →
        |{xₖ: k ∈ ℕ ∧ xₖ ∈ U}| = ∞
      )
    } →
    
    apply(DistinctTerms()) →
    
    assert(
      |{xₖ: k ∈ ℕ ∧ xₖ ∈ U}| = ∞ →
      α is_omega_accumulation_point_of({xₙ: n ∈ ℕ})
    )
  }
}
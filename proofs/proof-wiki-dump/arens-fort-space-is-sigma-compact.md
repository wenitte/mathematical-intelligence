theorem Arens_Fort_Space_is_Sigma_Compact() {
  let T = (S, τ) be ArensForSpace
  assert(
    T is σ-compact
  )
} ↔

proof Arens_Fort_Space_is_Sigma_Compact_1() {
  apply(Arens_Fort_Space_is_Countable()) →
  assert(S is countably_infinite) →
  setVar(τ_d: DiscreteTopology(S)) →
  setVar(I_S: Function(S,τ_d) → (S,τ)) →
  assert(I_S is identity_function) →
  
  apply(Mapping_from_Discrete_Space_is_Continuous()) →
  assert(I_S is continuous) →
  
  apply(Identity_Mapping_is_Surjection()) →
  assert(I_S is surjection) →
  
  apply(Countable_Discrete_Space_is_Sigma_Compact()) →
  apply(Sigma_Compactness_is_Preserved_under_Continuous_Surjection()) →
  conclude(T is σ-compact)
}

proof Arens_Fort_Space_is_Sigma_Compact_2() {
  apply(Arens_Fort_Space_is_Countable()) →
  apply(Countable_Space_is_Sigma_Compact()) →
  conclude(T is σ-compact)
}
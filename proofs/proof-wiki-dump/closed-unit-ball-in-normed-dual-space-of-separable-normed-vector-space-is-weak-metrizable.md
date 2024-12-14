theorem Closed_Unit_Ball_Weak_Star_Metrizable() {
  setDef(X: separable_normed_vector_space) ∧
  setDef(X*: normed_dual_space(X)) ∧
  setDef(B_X*: closed_unit_ball(X*)) ∧
  setDef(w*: weak_star_topology(B_X*)) →
  assert(is_metrizable(⟨B_X*, w*⟩))
} ↔

proof Closed_Unit_Ball_Weak_Star_Metrizable() {
  setVar({x_n}_{n∈ℕ}: countable_dense_subset(X)) →
  setVar({x_n^∧}_{n∈ℕ}: evaluation_maps({x_n})) →
  
  lemma Points_Separation() {
    ∀f,g ∈ X* : (
      (∀n ∈ ℕ : x_n^∧(f) = x_n^∧(g)) →
      (∀n ∈ ℕ : f(x_n) = g(x_n)) →
      (by_density_and_continuity(): f = g)
    )
  } →
  
  setVar(σ: initial_topology({x_n^∧|_{B_X*}}_{n∈ℕ})) →
  apply(Initial_Topology_Countable_Separation_Metrizable()) →
  assert(is_metrizable(σ)) →
  
  assert(w* = generated_topology({y^∧|_{B_X*} : y ∈ X})) →
  assert(σ ⊆ w*) →
  
  setVar(ι: identity_map(⟨B_X*, w*⟩ → ⟨B_X*, σ⟩)) →
  assert(is_continuous(ι)) →
  
  apply(Banach_Alaoglu_Theorem()) →
  assert(is_compact(⟨B_X*, w*⟩)) →
  
  apply(Metric_Space_Is_Hausdorff()) →
  assert(is_hausdorff(σ)) →
  
  apply(Continuous_Bijection_Compact_Hausdorff()) →
  assert(is_homeomorphism(ι)) →
  
  assert(σ = w*) →
  assert(is_metrizable(⟨B_X*, w*⟩))
}
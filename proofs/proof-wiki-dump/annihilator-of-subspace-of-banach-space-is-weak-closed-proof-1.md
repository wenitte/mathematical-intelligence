theorem Annihilator_Subspace_Closed() {
  let(X: BanachSpace,
      M: VectorSubspace(X),
      X*: NormedDualSpace(X),
      w*: WeakStarTopology(X*),
      M⊥: Annihilator(M)) →
  assert(
    IsClosed(M⊥, ⟨X*, w*⟩)
  )
} ↔

proof Annihilator_Subspace_Closed() {
  apply(Set_Closed_iff_Equals_Closure()) →
  assert(GoalState: M⊥ = cl[w*](M⊥)) →
  
  apply(Set_Subset_of_Closure()) →
  assert(M⊥ ⊆ cl[w*](M⊥)) →
  
  setVar(f ∈ cl[w*](M⊥)) →
  
  lemma Net_Convergence() {
    apply(Point_in_Closure_iff_Net_Limit()) →
    assert(∃⟨Λ,≼⟩: DirectedSet ∧ ∃{fλ}λ∈Λ: Net(M⊥) →
           NetConverges({fλ}, f, ⟨X*, w*⟩))
  } →
  
  apply(Net_Convergence()) →
  apply(Weak_Star_Net_Convergence_Char()) →
  assert(∀x ∈ X → NetConverges({fλ(x)}, f(x), 𝔽)) →
  
  assert(∀λ ∈ Λ, ∀x ∈ M → fλ(x) = 0) →
  
  apply(Constant_Net_Convergent()) →
  assert(∀x ∈ M → NetConverges({fλ(x)}, f(x), 𝔽) ∧ NetConverges({fλ(x)}, 0, 𝔽)) →
  
  apply(Metric_Space_is_Hausdorff(𝔽)) →
  apply(Hausdorff_Net_Characterization()) →
  assert(∀x ∈ M → f(x) = 0) →
  
  assert(f ∈ M⊥) →
  
  assert(cl[w*](M⊥) ⊆ M⊥) →
  
  assert(M⊥ = cl[w*](M⊥)) →
  
  apply(Set_Closed_iff_Equals_Closure()) →
  assert(IsClosed(M⊥, ⟨X*, w*⟩))
}
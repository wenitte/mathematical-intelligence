theorem Closed_Image_Closure_Equals_Closure_Image() {
  let(T₁ = ⟨S₁,τ₁⟩: TopologicalSpace) ∧
  let(T₂ = ⟨S₂,τ₂⟩: TopologicalSpace) ∧
  let(H ⊆ S₁) ∧
  let(cl(H): Closure) ∧
  let(f: T₁ → T₂, continuous) ∧
  assert(f[cl(H)] is_closed_in T₂) →
  assert(f[cl(H)] = cl(f[H]))
}

proof Closed_Image_Closure_Equals_Closure_Image() {
  # First direction: f[cl(H)] ⊆ cl(f[H])
  lemma Continuity_By_Closure() {
    assert(f[cl(H)] ⊆ cl(f[H]))
  } →
  apply(Continuity_By_Closure()) →

  # Second direction: cl(f[H]) ⊆ f[cl(H)]
  assert(H ⊆ cl(H)) by(Set_Subset_Of_Closure) →
  assert(f[H] ⊆ f[cl(H)]) by(Image_Of_Subset) →
  assert(f[cl(H)] is_closed_in T₂) by(hypothesis) →
  assert(cl(f[H]) ⊆ f[cl(H)]) by(Closure_Subset_Of_Closed_Set) →

  # Conclusion
  assert(f[cl(H)] = cl(f[H])) by(
    SetEquality(
      subset1: f[cl(H)] ⊆ cl(f[H]),
      subset2: cl(f[H]) ⊆ f[cl(H)]
    )
  )
}
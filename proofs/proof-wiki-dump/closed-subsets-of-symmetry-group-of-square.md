theorem Closed_Subsets_Square_Group() {
  assert(
    let S = {e, r, r², r³, tₓ, tᵧ, t_AC, t_BD} ∧
    S is_symmetry_group_of_square ⇒
    closed_subsets(S) = {
      ∅,
      {e},
      {e, r²},
      {e, tₓ},
      {e, tᵧ},
      {e, t_AC},
      {e, t_BD},
      {e, r, r², r³},
      {e, r², tₓ, tᵧ},
      {e, r², t_AC, t_BD},
      S
    }
  )
} ↔

proof Closed_Subsets_Square_Group() {
  setVar(S: SymmetryGroup) →
  setVar(X: Set[Set[Element]]) where X = submagmas(S) →
  
  lemma Empty_Submagma() {
    assert(∅ ∈ X)
  } →
  
  lemma Identity_Submagma() {
    assert({e} ∈ X)
  } →
  
  lemma Composition_Closure() {
    assert(
      tₓ ∘ tₓ = e ∧
      tᵧ ∘ tᵧ = e ∧
      t_AC ∘ t_AC = e ∧
      t_BD ∘ t_BD = e ∧
      r² ∘ r² = e ∧
      r ∘ r = r² ∧
      r ∘ r² = r³ ∧
      r ∘ r³ = e ∧
      r³ ∘ r³ = r² ∧
      r³ ∘ r² = r ∧
      r³ ∘ r = e
    )
  } →
  
  apply(Composition_Closure()) →
  assert({e, r²} ∈ X) →
  assert({e, tₓ} ∈ X) →
  assert({e, tᵧ} ∈ X) →
  assert({e, t_AC} ∈ X) →
  assert({e, t_BD} ∈ X) →
  assert({e, r, r², r³} ∈ X) →
  assert({e, r², tₓ, tᵧ} ∈ X) →
  assert({e, r², t_AC, t_BD} ∈ X) →
  
  lemma No_Other_Subsets() {
    assert(
      ∀H ⊂ S: (r ∈ H ∧ is_reflection(t) ∧ t ∈ H) ⇒ H = S ∧
      ∀H ⊂ S: (r³ ∈ H ∧ is_reflection(t) ∧ t ∈ H) ⇒ H = S
    )
  } →
  
  apply(No_Other_Subsets()) →
  assert(closed_subsets(S) = listed_subsets)
}
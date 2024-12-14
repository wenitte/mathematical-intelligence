theorem Paracompactness_Lemma_5() {
  let(X: Set) ∧
  let(𝔸, 𝕍: Set[Set[X]]) ∧
  def(V*[V ∈ 𝕍] := X \ ⋃{A ∈ 𝔸 | A ∩ V = ∅}) →
  assert(
    ∀V ∈ 𝕍 ⇒ V ⊆ V*
  )
}

proof Paracompactness_Lemma_5() {
  setVar(V: 𝕍) →
  def(𝔸_V := {A ∈ 𝔸 | A ∩ V = ∅}) →
  
  lemma Disjoint_Set_Difference() {
    assert(∀A ∈ 𝔸_V ⇒ V ⊆ X \ A)
  } →

  assert(
    V ⊆ ⋂{X \ A | A ∈ 𝔸_V}
  ) by(Set_is_Subset_of_Intersection_of_Supersets) →

  assert(
    ⋂{X \ A | A ∈ 𝔸_V} = X \ ⋃{A | A ∈ 𝔸_V}
  ) by(DeMorgans_Laws_Set_Difference) →

  assert(
    X \ ⋃{A | A ∈ 𝔸_V} = V*
  ) by(definition_V*) →

  conclude(V ⊆ V*)
}
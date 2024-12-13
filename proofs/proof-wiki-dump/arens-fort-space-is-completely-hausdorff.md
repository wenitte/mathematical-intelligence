theorem Arens_Fort_Is_Completely_Hausdorff() {
  let T = (S, τ) be Arens_Fort_Space
  assert(
    T is T_{2.5}-space
  )
} ↔

proof Arens_Fort_Is_Completely_Hausdorff() {
  lemma Fort_Space_Properties() {
    assert(Fort_Space is Completely_Normal) ∧
    assert(Arens_Fort_Space is_expansion_of Fort_Space)
  } →
  
  apply(Separation_Axioms_Implications()) →
  assert(Fort_Space is T_{2.5}-space) →
  
  lemma Expansion_Preservation() {
    assert(
      ∀X,Y: TopologicalSpaces ⇒
      (X is_expansion_of Y ∧ Y is T_{2.5}-space) →
      X is T_{2.5}-space
    )
  } →
  
  apply(Expansion_Preservation()) →
  conclude(
    Fort_Space is T_{2.5}-space ∧
    Arens_Fort_Space is_expansion_of Fort_Space →
    Arens_Fort_Space is T_{2.5}-space
  )
}
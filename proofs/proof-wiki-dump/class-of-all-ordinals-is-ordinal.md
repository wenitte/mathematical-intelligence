theorem Ordinals_Class_Is_Ordinal() {
  assert(
    ∀x[x ∈ ON → x ⊂ ON] ∧
    ON = {x: x ∈ ON ∧ x ⊂ ON} →
    ON is_ordinal
  )
} ↔

proof Ordinals_Class_Is_Ordinal() {
  lemma Epsilon_Subset_Equivalence() {
    assert(
      ∀x,y[x,y ∈ ON → (x ∈ y ↔ x ⊂ y)]
    )
  } →

  apply(Epsilon_Subset_Equivalence()) →
  assert(∀x[x ∈ ON → x ⊂ ON]) →

  lemma Initial_Segment() {
    assert(
      {x: x ∈ ON ∧ x ⊂ ON} = ON
    )
  } →

  apply(Initial_Segment()) →
  
  lemma Ordinal_Definition() {
    assert(
      ∀X[
        (X = {x: x ∈ X ∧ x ⊂ X}) →
        X is_ordinal
      ]
    )
  } →

  apply(Ordinal_Definition()) →
  assert(ON is_ordinal)
}
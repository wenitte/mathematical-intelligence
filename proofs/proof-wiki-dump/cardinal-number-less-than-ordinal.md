theorem Cardinal_Number_Less_Than_Ordinal() {
  let(S: Set) ∧
  let(x: Ordinal) ∧
  assert(S ∼ x) →
  assert(card(S) ≤ x)
} ↔

proof Cardinal_Number_Less_Than_Ordinal() {
  setVar(S: Set) →
  setVar(x: Ordinal) →
  assume(S ∼ x) →
  assert(x ∈ {y ∈ On : S ∼ y}) →
  
  lemma Intersection_Is_Subset() {
    assert(∀A,B: Set ⇒ (A ∩ B ⊆ A))
  } →
  
  apply(Intersection_Is_Subset()) →
  assert(⋂{y ∈ On: S ∼ y} ⊆ x) →
  assert(card(S) = ⋂{y ∈ On: S ∼ y}) →
  assert(card(S) ≤ x)
}

corollary Cardinal_Number_Less_Than_Self() {
  let(x: Ordinal) →
  assert(card(x) ≤ x)
} ↔

proof Cardinal_Number_Less_Than_Self() {
  setVar(x: Ordinal) →
  apply(Cardinal_Number_Less_Than_Ordinal(S := x)) →
  assert(card(x) ≤ x)
}
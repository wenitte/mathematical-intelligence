theorem Class_Difference_With_Difference() {
  assert(
    ∀A,B[classes] ⇒ (A ∖ (A ∖ B) = A ∩ B)
  )
} ↔

proof Class_Difference_With_Difference() {
  setVar(A,B: classes) →
  setVar(x: element) →
  
  assert(x ∈ A ∖ (A ∖ B)) ↔
  
  assert(x ∈ A ∧ x ∉ (A ∖ B)) →
  apply(def_class_difference) →
  
  assert(x ∈ A ∧ ¬(x ∈ A ∧ x ∉ B)) →
  apply(def_class_difference) →
  
  assert(x ∈ A ∧ (x ∉ A ∨ x ∈ B)) →
  apply(DeMorgans_Laws) →
  
  assert((x ∈ A ∧ x ∉ A) ∨ (x ∈ A ∧ x ∈ B)) →
  apply(conjunction_distributive_over_disjunction) →
  
  assert(⊥ ∨ (x ∈ A ∧ x ∈ B)) →
  apply(def_contradiction) →
  
  assert(x ∈ A ∧ x ∈ B) →
  apply(disjunction_with_contradiction) →
  
  assert(x ∈ (A ∩ B)) →
  apply(def_class_intersection) →
  
  assert(A ∖ (A ∖ B) = (A ∩ B)) →
  apply(def_class_equality)
}
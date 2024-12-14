theorem ChoiceFunction_Singletons() {
  assert(
    ∀F: Set(Set) ∧ (∀S ∈ F → |S| = 1) →
    ∃f: F → ∪F | (∀A ∈ F → f(A) ∈ A)
  )
} ↔

proof ChoiceFunction_Singletons() {
  setVar(F: Set(Set)) →
  assume(∀S ∈ F → |S| = 1) →
  
  lemma SingletonProperty() {
    assert(∀S ∈ F → ∃!a | S = {a})
  } →
  
  construct(f: F → ∪F) {
    define(∀{a} ∈ F → f({a}) = a)
  } →
  
  verify_choice_function() {
    assert(∀A ∈ F → 
      (∃!a | A = {a}) ∧
      f(A) = a ∧
      a ∈ A
    )
  } →
  
  conclude(f is_choice_function_on F)
}
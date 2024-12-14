theorem Code_Number_Is_Primitive_Recursive() {
  assert(
    ∀n ∈ ℕ → ∃c: ℕ → ℕ ∧ 
    c(n) = m where m is_code_number_for(n) ∧
    is_primitive_recursive(c)
  )
} ↔

proof Code_Number_Is_Primitive_Recursive() {
  define(c: ℕ → ℕ) →
  assert(
    c(n) = {
      pred(n + n) if n > 0
      0 if n = 0
    }
  ) →
  
  lemma Components_Are_Primitive_Recursive() {
    assert(is_primitive_recursive(definition_by_cases)) ∧
    assert(is_primitive_recursive(pred)) ∧
    assert(is_primitive_recursive(addition)) ∧
    assert(is_primitive_recursive(ordering_relations)) ∧
    assert(is_primitive_recursive(equality_relation))
  } →

  case n = 0 {
    assert(m = -2n = 0) →
    assert(c(0) = 0 = m)
  } →

  case n > 0 {
    assert(m = 2n - 1) →
    assert(n + n ≥ 1) →
    assert(c(n) = pred(n + n) = 2n - 1 = m)
  } →

  conclude(∀n ∈ ℕ → c(n) = m) →
  apply(Components_Are_Primitive_Recursive()) →
  assert(is_primitive_recursive(c))
}
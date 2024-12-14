theorem Complex_Arithmetic_Example() {
  assert(
    ∀z ∈ ℂ ⇒ (1/2)(4 - 3i) + (3/2)(5 + 2i) = 19/2 + (3/2)i
  )
}

proof Complex_Arithmetic_Example() {
  step1() {
    assert((1/2)(4 - 3i) + (3/2)(5 + 2i)) →
    assert(distributive_property()) →
    assert((2 - (3/2)i) + (15/2 + 3i))
  } →
  
  step2() {
    assert((2 - (3/2)i) + (15/2 + 3i)) →
    assert(combine_like_terms()) →
    assert((2 + 15/2) + (-3/2 + 3)i)
  } →
  
  step3() {
    assert((2 + 15/2) + (-3/2 + 3)i) →
    assert(arithmetic_simplification()) →
    assert(19/2 + (3/2)i)
  } →
  
  conclude() {
    assert(19/2 + (3/2)i)
  }
}
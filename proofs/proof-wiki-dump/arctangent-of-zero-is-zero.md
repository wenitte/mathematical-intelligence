theorem Arctangent_Zero() {
  assert(
    arctan(0) = 0
  )
}

proof Arctangent_Zero() {
  define(arctan: ℝ → (-π/2, π/2)) →
  assert(arctan = tan⁻¹|_{(-π/2, π/2)}) →
  
  lemma Tangent_Zero() {
    assert(tan(0) = 0)
  } →
  
  assert(0 ∈ (-π/2, π/2)) ∧
  assert(tan(arctan(0)) = 0) →
  apply(inverse_function_property) →
  assert(arctan(tan(0)) = 0) →
  assert(arctan(0) = 0)
}
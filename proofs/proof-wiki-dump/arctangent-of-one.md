theorem Arctangent_of_One() {
  assert(
    arctan(1) = π/4
  )
} ↔

proof Arctangent_of_One() {
  lemma ArcTan_Definition() {
    assert(
      arctan = inverse(tan|_{(-π/2, π/2)})
    )
  } →
  
  lemma Tangent_45_Degrees() {
    assert(
      tan(π/4) = 1
    )
  } →
  
  lemma Range_Check() {
    assert(
      π/4 ∈ (-π/2, π/2)
    )
  } →
  
  apply(ArcTan_Definition()) ∧
  apply(Tangent_45_Degrees()) ∧
  apply(Range_Check()) →
  
  assert(
    arctan(1) = arctan(tan(π/4)) ∧
    arctan(tan(π/4)) = π/4
  ) →
  
  conclude(
    arctan(1) = π/4
  )
}
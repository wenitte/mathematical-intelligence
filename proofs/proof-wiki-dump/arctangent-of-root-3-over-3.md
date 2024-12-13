theorem Arctangent_Root3_Over3() {
  assert(
    arctan(√3/3) = π/6
  )
} ↔

proof Arctangent_Root3_Over3() {
  lemma ArcTan_Definition() {
    assert(
      arctan = tan⁻¹|(-π/2, π/2)
    )
  } →
  
  lemma Tangent_30_Degrees() {
    assert(
      tan(π/6) = √3/3
    )
  } →
  
  lemma Range_Check() {
    assert(
      π/6 ∈ (-π/2, π/2)
    )
  } →
  
  apply(ArcTan_Definition()) ∧
  apply(Tangent_30_Degrees()) ∧
  apply(Range_Check()) →
  
  assert(
    arctan(√3/3) = arctan(tan(π/6)) →
    arctan(√3/3) = π/6
  )
}
theorem Exterior_Angle_Bisector() {
  assert(
    ∀triangle(ABC) ∧
    ∀line(AB_extended_to_D) ∧
    ∀angle_bisector(AE_of_CAD) ∧
    BE_is_BC_extended →
    ratio(BE, EC) = ratio(AB, AC)
  )
} ↔

proof Exterior_Angle_Bisector() {
  construct(CF_parallel_to_AE) →
  
  lemma Parallel_Corresponding_Angles() {
    assert(∠AFC = ∠DAE)
  } →
  
  lemma Parallel_Alternate_Angles() {
    assert(∠ACF = ∠CAE)
  } →
  
  given(∠DAE = ∠CAE) →
  
  apply(transitivity) →
  assert(∠AFC = ∠ACF) →
  
  lemma Isosceles_Triangle_Equal_Angles() {
    assert(∠AFC = ∠ACF → triangle(AFC).isIsosceles())
  } →
  
  apply(Isosceles_Triangle_Equal_Angles()) →
  assert(AF = AC) →
  
  lemma Similar_Triangles() {
    assert(∠BAE = ∠BFC) ∧
    assert(∠ABC.shared) →
    assert(triangle(BFC) ∼ triangle(BAE))
  } →
  
  apply(Similar_Triangles()) →
  assert(ratio(AB, BE) = ratio(AF, CE)) →
  
  substitute(AF = AC) →
  assert(ratio(AB, BE) = ratio(AC, CE)) →
  
  rearrange() →
  assert(ratio(BE, EC) = ratio(AB, AC))
}
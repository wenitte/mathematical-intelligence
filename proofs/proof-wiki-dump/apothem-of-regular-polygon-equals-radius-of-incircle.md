theorem Apothem_Equals_Incircle_Radius() {
  let(P: RegularPolygon, C: Circle) →
  assert(
    isIncircle(C, P) →
    apothem(P) = radius(C)
  )
} ↔

proof Apothem_Equals_Incircle_Radius() {
  let(P: RegularPolygon, C: Circle) →
  
  lemma Incircle_Definition() {
    assert(
      isIncircle(C, P) ↔
      ∀s ∈ sides(P) → isTangent(s, C)
    )
  } →

  lemma Center_Coincidence() {
    assert(
      isIncircle(C, P) →
      center(P) = center(C)
    )
  } →

  apply(Incircle_Definition()) →
  apply(Center_Coincidence()) →
  
  assert(
    radius(C) = perpendicularDistance(center(C), sides(P))
  ) →
  
  assert(
    perpendicularDistance(center(P), sides(P)) = apothem(P)
  ) →
  
  assert(
    radius(C) = apothem(P)
  )
}
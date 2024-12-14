theorem ConvexPolyhedraClassification() {
  assert(
    RegularFacedConvexPolyhedra = PlatonicSolids ∪ UniformPrisms ∪ UniformAntiprisms ∪ ArchimedeanSolids ∪ JohnsonPolyhedra ∧
    |PlatonicSolids| = 5 ∧
    |UniformPrisms| = ℵ₀ ∧
    |UniformAntiprisms| = ℵ₀ ∧
    |ArchimedeanSolids| = 13 ∧
    |JohnsonPolyhedra| = 92
  )
}

proof ConvexPolyhedraClassification() {
  lemma PlatonicDefinition() {
    assert(
      PlatonicSolids = {P | P is convex ∧ faces(P) are congruent ∧ vertices(P) are regular}
    )
  } →
  
  apply(FivePlatonicSolids()) →
  assert(|PlatonicSolids| = 5) →
  
  lemma UniformPrismDefinition() {
    assert(
      ∀n ∈ ℕ, n ≥ 3 → ∃P ∈ UniformPrisms: (
        bases(P) = {two regular n-gons} ∧
        lateralFaces(P) = {n squares}
      )
    )
  } →
  
  lemma UniformAntiprismDefinition() {
    assert(
      ∀n ∈ ℕ, n ≥ 3 → ∃P ∈ UniformAntiprisms: (
        bases(P) = {two regular n-gons} ∧
        lateralFaces(P) = {2n equilateral triangles}
      )
    )
  } →
  
  lemma ArchimedeanDefinition() {
    assert(
      ArchimedeanSolids = {P | P is convex ∧ isogonal(P) ∧ 
        faces(P) are regular polygons ∧
        P ∉ (PlatonicSolids ∪ UniformPrisms ∪ UniformAntiprisms)}
    )
  } →
  
  apply(ThirteenArchimedeanPolyhedra()) →
  assert(|ArchimedeanSolids| = 13) →
  
  lemma JohnsonDefinition() {
    assert(
      JohnsonPolyhedra = {P | P is convex ∧ 
        faces(P) are regular polygons ∧
        P ∉ (PlatonicSolids ∪ UniformPrisms ∪ UniformAntiprisms ∪ ArchimedeanSolids)}
    )
  } →
  
  apply(NinetyTwoJohnsonPolyhedra()) →
  assert(|JohnsonPolyhedra| = 92)
}
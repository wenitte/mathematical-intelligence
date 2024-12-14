theorem Centroid_Medial_Triangle() {
  assert(
    ∀ triangle ABC ∧
    ∀ triangle DEF [medialOf(ABC)] ∧
    ∃G [centroid(ABC)] →
    centroid(DEF, G)
  )
} ↔

proof Centroid_Medial_Triangle() {
  setVar(ABC: Triangle) →
  setVar(DEF: Triangle[medialOf(ABC)]) →
  setVar(G: Point[centroid(ABC)]) →
  
  assert(intersect(AE ∧ BF ∧ CD, G)) →
  
  lemma Medial_Properties() {
    assert(
      parallel(DE, AF) ∧
      parallel(EF, AD) →
      isParallelogram(ADEF)
    )
  } →
  
  setVar(H: Point[intersect(AE, DF)]) →
  
  lemma Parallelogram_Diagonals() {
    assert(
      isParallelogram(ADEF) ∧
      isDiagonal(AE, ADEF) ∧
      isDiagonal(DF, ADEF) →
      bisects(AE, DF)
    )
  } →
  
  apply(Parallelogram_Diagonals()) →
  assert(bisects(AE, DF)) →
  assert(bisects(BF, DE)) →
  assert(bisects(DC, EF)) →
  
  therefore(
    bisects(AE, DF) ∧
    bisects(BF, DE) ∧
    bisects(DC, EF) →
    centroid(DEF, G)
  )
}
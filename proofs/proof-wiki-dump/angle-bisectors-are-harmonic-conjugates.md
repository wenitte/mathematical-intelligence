theorem AngleBisectorsHarmonicConjugates() {
  let(L₁, L₂: Line, O: Point) →
  let(L₃, L₄: Line) →
  assert(intersect(L₁, L₂, O)) ∧
  assert(L₃ = angleBisector(L₁, L₂, first)) ∧
  assert(L₄ = angleBisector(L₁, L₂, second)) →
  assert(harmonicConjugate(L₃, L₄, L₁, L₂))
} ↔

proof AngleBisectorsHarmonicConjugates() {
  let(L, M, N: Point) →
  let(parallel_L₄: Line) →
  assert(parallel(parallel_L₄, L₄)) ∧
  assert(intersect(parallel_L₄, L₁, L)) ∧
  assert(intersect(parallel_L₄, L₂, M)) ∧
  assert(intersect(parallel_L₄, L₃, N)) →
  
  lemma BisectorsPerpendicular() {
    assert(perpendicular(L₃, L₄))
  } →
  
  apply(BisectorsPerpendicular()) →
  assert(perpendicular(parallel_L₄, L₃)) →
  
  let(triangle_OLM: Triangle) →
  assert(
    angle(N,O,L) = angle(N,O,M) ∧
    angle(O,N,L) = angle(O,N,M) ∧
    segment(O,N) = segment(O,N)
  ) →
  
  assert(congruent(triangle(O,N,L), triangle(O,N,M))) →
  assert(midpoint(N, segment(L,M))) →
  
  lemma HarmonicRangeUnityRatio() {
    assert(harmonicRange(L, N, M, ∞))
  } →
  
  lemma HarmonicPencilCut() {
    assert(harmonicRange(points) → harmonicPencil(lines))
  } →
  
  apply(HarmonicRangeUnityRatio()) →
  apply(HarmonicPencilCut()) →
  
  assert(harmonicConjugate(L₃, L₄, L₁, L₂))
}
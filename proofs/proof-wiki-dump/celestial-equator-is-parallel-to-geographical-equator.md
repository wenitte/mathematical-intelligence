theorem Celestial_Equator_Parallel() {
  assert(
    ∀O ∈ CelestialSphere ⇒
    (PlaneOf(CelestialEquator) ∥ PlaneOf(GeographicalEquator))
  )
} ↔

proof Celestial_Equator_Parallel() {
  setVar(P: Point, "North celestial pole") →
  assert(CelestialEquator ⊥ OP) →
  assert(OP ∥ EarthAxis) →
  assert(EarthAxis ⊥ GeographicalEquator) →
  assert(OP ⊥ GeographicalEquator) →
  lemma Planes_Perpendicular_Parallel() {
    assert(
      ∀L,P1,P2 ∈ Space ⇒
      (L ⊥ P1 ∧ L ⊥ P2) → (P1 ∥ P2)
    )
  } →
  apply(Planes_Perpendicular_Parallel(), 
    L: OP, 
    P1: PlaneOf(CelestialEquator),
    P2: PlaneOf(GeographicalEquator)
  ) →
  assert(PlaneOf(CelestialEquator) ∥ PlaneOf(GeographicalEquator))
}
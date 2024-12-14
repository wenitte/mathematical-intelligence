theorem HausdorffTVSCharacterization() {
  define(K: TopologicalField) ∧
  define(X: TopologicalVectorSpace, τ) ∧
  assert(
    (1) isHausdorff(X, τ) ↔
    (2) (∩{U: U ∈ OpenNeighborhoods(0_X)}) = {0_X} ↔
    (3) isClosed({0_X}, τ)
  )
}

proof HausdorffTVSCharacterization_1to2() {
  assume(isHausdorff(X, τ)) →
  setVar(F: OpenNeighborhoods(0_X)) →
  apply(TVS_Hausdorff_iff_T1) →
  assert(isT1(X, τ)) →
  assert({0_X} ⊆ ∩F) ∧
  forall(x ∈ X \ {0_X}) {
    exists(U ∈ F: x ∉ U) →
    assert(x ∉ ∩F)
  } →
  conclude(∩F = {0_X})
}

proof HausdorffTVSCharacterization_2to3() {
  setVar(F: OpenNeighborhoods(0_X)) →
  assume((∩F = {0_X})) →
  forall(x ∈ cl({0_X})) {
    apply(ClosurePointCondition) →
    forall(U_x ∈ OpenNeighborhoods(x)) {
      assert(0_X ∈ U_x)
    } →
    apply(TVS_OpenNeighborhood_Classification) →
    assert(∀U ∈ F: 0_X ∈ U + x) →
    assert(∀U ∈ F: x ∈ -U) →
    apply(TVS_Dilation_Open) →
    assert(x ∈ ∩F) →
    assert(x = 0_X)
  } →
  assert(cl({0_X}) ⊆ {0_X}) →
  assert({0_X} ⊆ cl({0_X})) →
  apply(Closed_iff_Equals_Closure) →
  conclude(isClosed({0_X}, τ))
}

proof HausdorffTVSCharacterization_3to1() {
  assume(isClosed({0_X}, τ)) →
  forall(x ∈ X) {
    assert({x} = x + {0_X}) →
    apply(TVS_Translation_Closed) →
    assert(isClosed({x}, τ))
  } →
  apply(T1_Definition2) →
  assert(isT1(X, τ)) →
  apply(TVS_Hausdorff_iff_T1) →
  conclude(isHausdorff(X, τ))
}
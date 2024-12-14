theorem Closed_Unit_Interval_Homeomorphic_L() {
  let(ℝ: MetricSpace[Euclidean]) →
  let(𝕀 := [0,1]) →
  let(L := ([0,1] × {0}) ∪ ({0} × [0,1])) →
  assert(
    ∃f: 𝕀 → L | isHomeomorphism(f)
  )
} ↔

proof Closed_Unit_Interval_Homeomorphic_L() {
  define(f: 𝕀 → L) {
    f(x) := {
      (0, 1-2x) if x ∈ [0,1/2]
      (2x-1, 0) if x ∈ [1/2,1]
    }
  } →
  
  lemma Image_Properties() {
    assert(f([0,1/2]) = {0} × [0,1]) ∧
    assert(f([1/2,1]) = [0,1] × {0}) ∧
    assert(f(1/2) = (0,0))
  } →
  
  lemma Bijective() {
    assert(isBijection(f)) {
      verify(∀x₁,x₂ ∈ 𝕀: f(x₁) = f(x₂) → x₁ = x₂) ∧
      verify(∀y ∈ L: ∃x ∈ 𝕀: f(x) = y)
    }
  } →
  
  lemma Continuous() {
    apply(CombinationTheoremContinuousRealFunctions) →
    assert(isContinuous(f))
  } →
  
  apply(Image_Properties()) →
  apply(Bijective()) →
  apply(Continuous()) →
  conclude(isHomeomorphism(f))
}
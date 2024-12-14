theorem Discrete_Set_Cover() {
  require(
    T = struct(X, τ): TopologicalSpace,
    𝔹: Set[Set[X]] ∧ isDiscrete(𝔹),
    𝕌 = {U ∈ τ : |{B ∈ 𝔹 : U ∩ B ≠ ∅}| ≤ 1}
  )
  assert(
    isOpenCover(𝕌, X)
  )
} ↔

proof Discrete_Set_Cover() {
  setVar(s: X) →
  assert(
    ∃U ∈ τ: (s ∈ U ∧ |{B ∈ 𝔹 : U ∩ B ≠ ∅}| ≤ 1)
  ) by(defDiscrete) →
  
  assert(
    U ∈ 𝕌
  ) by(def𝕌) →
  
  generalize(s) →
  assert(
    ∀x ∈ X: ∃U ∈ 𝕌: x ∈ U
  ) →
  
  assert(
    isOpenCover(𝕌, X)
  ) by(defOpenCover)
}
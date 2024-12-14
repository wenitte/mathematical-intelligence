theorem CharacterizationOfErgodicity() {
  let(X, ℬ, μ: ProbabilitySpace)
  let(T: X → X, MeasurePreserving)
  let(ℳ: Set(X → ℝ), ℬ-measurable)
  let(L²: LebesgueSpace(μ, 2))
  let(U_T: ℳ → ℳ, KoopmanOperator)
  assert(
    equivalent(
      (1) := isErgodic(T),
      (2) := ∀f ∈ ℳ → [U_T(f) = f ⇒ isConstant(f, μ-a.e.)],
      (3) := ∀f ∈ ℳ → [U_T(f) = f μ-a.e. ⇒ isConstant(f, μ-a.e.)],
      (4) := ∀f ∈ L² → [U_T(f) = f ⇒ isConstant(f, μ-a.e.)],
      (5) := ∀f ∈ L² → [U_T(f) = f μ-a.e. ⇒ isConstant(f, μ-a.e.)]
    )
  )
} ↔

proof CharacterizationOfErgodicity() {
  // (1) ⇒ (3)
  assert((1) → (3)) → {
    apply(ergodicity.definition)
  } →

  // (3) ⇒ (2) and (5) ⇒ (4)
  assert((3) → (2) ∧ (5) → (4)) → {
    apply(almostEverywhere.definition) →
    assert(μ({x ∈ X: U_T(f)(x) ≠ f(x)}) = μ(∅) = 0)
  } →

  // (2) ⇒ (4) and (3) ⇒ (5)
  assert((2) → (4) ∧ (3) → (5)) → {
    assert(L² ⊆ ℳ) →
    apply(subset.properties)
  } →

  // (4) ⇒ (1)
  assert((4) → (1)) → {
    let(A ∈ ℬ: T⁻¹(A) = A) →
    let(χ_A: X → {0,1}, CharacteristicFunction) →
    assert(χ_A² = χ_A) →
    assert(χ_A ∈ L²) → {
      prove(∫χ_A² dμ = μ(A) < +∞)
    } →
    assert(χ_A ∘ T = χ_A) → {
      ∀x ∈ X →
      prove(χ_A(T(x)) = 1 ↔ T(x) ∈ A ↔ x ∈ T⁻¹(A) ↔ x ∈ A ↔ χ_A(x) = 1)
    } →
    apply(KoopmanOperator.definition) →
    assert(isConstant(χ_A, μ-a.e.)) →
    conclude(isErgodic(T))
  }
}
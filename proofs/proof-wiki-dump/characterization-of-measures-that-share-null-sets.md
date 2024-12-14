theorem CharacterizationMeasuresNullSets() {
  let(X: MeasurableSpace, Σ: σ-algebra) →
  let(μ: σ-finite_measure, ν: σ-finite_measure) →
  assert(
    (1): (ν≪μ ∧ μ≪ν) ↔
    (2): (∀A∈Σ)(μ(A)=0 ↔ ν(A)=0) ↔
    (3): (∃g:X→ℝ>0)(∀A∈Σ)(ν(A) = ∫_A g dμ)
  )
}

proof OneImpliesTwo() {
  assume(ν≪μ ∧ μ≪ν) →
  let(A∈Σ) →
  case(μ(A)=0) {
    apply(absoluteContinuity(ν≪μ)) →
    assert(ν(A)=0)
  } →
  case(ν(A)=0) {
    apply(absoluteContinuity(μ≪ν)) →
    assert(μ(A)=0)
  } →
  conclude((μ(A)=0 ↔ ν(A)=0))
}

proof TwoImpliesOne() {
  assume(∀A∈Σ)(μ(A)=0 ↔ ν(A)=0) →
  assert(ν≪μ) {
    let(A∈Σ) →
    assume(μ(A)=0) →
    conclude(ν(A)=0)
  } →
  assert(μ≪ν) {
    let(A∈Σ) →
    assume(ν(A)=0) →
    conclude(μ(A)=0)
  } →
  conclude(ν≪μ ∧ μ≪ν)
}

proof ThreeImpliesTwo() {
  assume(∃g:X→ℝ>0)(∀A∈Σ)(ν(A) = ∫_A g dμ) →
  let(A∈Σ) →
  case(μ(A)=0) {
    apply(IntegralOverNullSet) →
    assert(∫_A g dμ = 0) →
    conclude(ν(A)=0)
  } →
  case(ν(A)=0) {
    assume(μ(A)>0) →
    assert(∫_A g dμ = 0) →
    assert(∫ g·χ_A dμ = 0) →
    apply(MeasurableFunctionZeroAE) →
    assert(g(x)·χ_A(x) = 0 for μ-a.e. x∈X) →
    assert(g(x) = 0 for x∈A) →
    contradict(g>0)
  } →
  conclude(μ(A)=0)
}

proof TwoImpliesThree() {
  assume(∀A∈Σ)(μ(A)=0 ↔ ν(A)=0) →
  apply(RadonNikodymTheorem) →
  obtain(g:X→[0,∞)) →
  assert(∀A∈Σ)(ν(A) = ∫_A g dμ) →
  let(N = {x∈X: g(x)=0}) →
  define(g*:X→(0,∞)) {
    g*(x) = g(x) + χ_N(x)
  } →
  assert(g* is Σ-measurable) →
  assert(g* = g μ-a.e.) →
  conclude(∀A∈Σ)(ν(A) = ∫_A g* dμ)
}
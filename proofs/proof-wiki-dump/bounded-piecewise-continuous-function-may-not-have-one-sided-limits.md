theorem BoundedPiecewiseContinuousNoLimits() {
  assert(
    ∀f: ℝ → ℝ ∧ ∀[a,b] ⊂ ℝ ∧ a < b ⇒
    (isBoundedPiecewiseContinuous(f,[a,b]) ↛ hasOneSidedLimits(f,[a,b]))
  )
} ↔

proof BoundedPiecewiseContinuousNoLimits() {
  setVar(f: ℝ → ℝ) →
  define(f(x) = {
    0: x = a,
    sin(1/(x-a)): x ∈ (a,b]
  }) →
  
  setVar(subdivision = {a,b}) →
  
  lemma ContinuityOnOpenInterval() {
    assert(isContinuous(sin(1/(x-a)), (a,b))) →
    assert(f(x) = sin(1/(x-a)) ∀x ∈ (a,b)) →
    conclude(isContinuous(f, (a,b)))
  } →
  
  lemma Boundedness() {
    assert(|f(x)| ≤ 1 ∀x ∈ [a,b]) →
    conclude(isBounded(f, [a,b]))
  } →
  
  apply(ContinuityOnOpenInterval()) ∧
  apply(Boundedness()) →
  conclude(isBoundedPiecewiseContinuous(f,[a,b])) →
  
  lemma NoRightLimitAtA() {
    assert(∀ε>0 ∃δ>0: |x-a|<δ ⇒ sin(1/(x-a)) oscillates [-1,1]) →
    assert(lim(x→a⁺) f(x) DNE) →
    conclude(¬hasOneSidedLimits(f,[a,b]))
  } →
  
  apply(NoRightLimitAtA()) →
  conclude(isBoundedPiecewiseContinuous(f,[a,b]) ∧ ¬hasOneSidedLimits(f,[a,b]))
}
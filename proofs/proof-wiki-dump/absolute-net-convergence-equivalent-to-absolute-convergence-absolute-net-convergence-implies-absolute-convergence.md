theorem AbsoluteNetConvergenceImpliesAbsoluteConvergence() {
  let(V: BanachSpace) ∧
  let(v[n]: Sequence(V)) ∧
  let(r: ℝ_≥0) ∧
  assert(
    isAbsolutelyNetConvergent(∑{v[n]: n ∈ ℕ}, r) →
    isAbsolutelyConvergent(∑[n=1]^∞ v[n], r)
  )
} ↔

proof AbsoluteNetConvergenceImpliesAbsoluteConvergence() {
  let(ε: ℝ_>0) →
  
  lemma MetricSpaceConvergence() {
    assert(
      ∃F ⊂ ℕ: (isFinite(F) ∧
      ∀E ⊆ ℕ: (E ⊇ F ∧ isFinite(E)) →
      |∑[n∈E] ∥v[n]∥ - r| < ε)
    )
  } →
  
  let(N = max{n: v[n] ∈ F}) →
  assert(F ⊆ [0,N]) →
  
  forall(m ≥ N) {
    assert([0,m] ⊇ [0,N] ⊇ F) →
    apply(MetricSpaceConvergence()) →
    assert(|∑[n∈[0,m]] ∥v[n]∥ - r| < ε) →
    assert(|∑[n=0]^m ∥v[n]∥ - r| < ε)
  } →
  
  assert(∀m ≥ N: |∑[n=0]^m ∥v[n]∥ - r| < ε) →
  
  forall(ε: ℝ_>0) {
    conclude(isAbsolutelyConvergent(∑[n=1]^∞ v[n], r))
  }
}
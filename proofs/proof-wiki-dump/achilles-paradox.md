theorem AchillesParadoxResolution() {
  assert(
    ∀a,b ∈ ℝ+ ∧ a > b ∧ h > 0 ⇒
    ∃t ∈ ℝ+ : Achilles_catches_tortoise(t)
  )
} ↔

proof AchillesParadoxResolution() {
  setVar(a: ℝ+, b: ℝ+, h: ℝ+) →
  assume(a > b) →
  
  lemma DistanceSequence() {
    define(d_n: ℕ → ℝ+) →
    assert(
      d_0 = h ∧
      ∀n ∈ ℕ+ : d_n = d_{n-1}(b/a)
    )
  } →

  lemma GeometricSeries() {
    assert(
      d_n = h(b/a)^n ∧
      |b/a| < 1 →
      S = Σ_{i=0}^∞ h(b/a)^i = h/(1-b/a)
    )
  } →

  apply(GeometricSeries()) →
  assert(
    t = S/a →
    t = h/(a(1-b/a)) →
    t = h/(a-b)
  ) →

  lemma VerifyOvertake() {
    assert(
      S - h = h/(1-b/a) - h →
      = (h - h(1-b/a))/(1-b/a) →
      = (hb/a)/(1-b/a) →
      = hb/(a(1-b/a)) →
      = bh/(a-b) →
      = bt
    )
  } →

  conclude(
    t = h/(a-b) ∧ 
    S - h = bt ⇒
    Achilles_catches_tortoise(t)
  )
}
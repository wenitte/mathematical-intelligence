theorem BoundedMaximum() {
  let(S: Set, ℝ: RealLine)
  let(f: S → ℝ, g: S → ℝ)
  def(f∨g := λs∈S. max{f(s), g(s)})
  assert(
    (isBounded(f) ∧ isBounded(g)) → isBounded(f∨g)
  )
} ↔

proof BoundedMaximum() {
  assume(isBounded(f) ∧ isBounded(g)) →
  setVar(Mf: ℝ≥0, ∃Mf. ∀s∈S. |f(s)| ≤ Mf) →
  setVar(Mg: ℝ≥0, ∃Mg. ∀s∈S. |g(s)| ≤ Mg) →
  
  lemma NegAbsValue() {
    assert(∀s∈S. f(s) ≤ |f(s)|) ∧
    assert(∀s∈S. g(s) ≤ |g(s)|)
  } →

  setVar(M := max{Mf, Mg}) →
  
  assert(∀s∈S. |(f∨g)(s)| = |max{f(s), g(s)}|) →
  assert(∀s∈S. |max{f(s), g(s)}| = max{|f(s)|, |g(s)|}) →
  assert(∀s∈S. max{|f(s)|, |g(s)|} ≤ max{Mf, Mg}) →
  assert(∀s∈S. max{Mf, Mg} = M) →
  assert(∀s∈S. M = |M|) by(M ≥ 0) →
  
  conclude(∃M∈ℝ≥0. ∀s∈S. |(f∨g)(s)| ≤ M) →
  conclude(isBounded(f∨g))
}
theorem Commensurability_Quadratic_Roots() {
  assert(
    ∀a,b,x ∈ ℝ → (ax - x² = b²/4) ↔
    (Commensurable(x, a-x) ↔ Commensurable(√(a² - b²), a))
  )
}

lemma Parallelogram_Rectangle_Equal() {
  assert(
    ∀p: Parallelogram, s: Line →
    (p.deficientBy(Square) ∧ p.appliedTo(s)) →
    p.area = Rectangle(s.segments).area
  )
}

proof Commensurability_Quadratic_Roots() {
  setVar(a,b,x: ℝ) →
  
  // Identity transformation
  assert(x(a-x) + (a/2 - x)² = ax - x² + a²/4 - ax + x²) →
  assert(4x(a-x) + 4(a/2 - x)² = a²) →
  assert(b² + (a-2x)² = a²) →
  assert(a² - b² = (a-2x)²) →
  assert(√(a² - b²) = a-2x) →

  // Define commensurability notation
  let(Commensurable(p,q) := p∼q) →

  // Necessary condition
  proof NecessaryPart() {
    assume((a-x)∼x) →
    apply(CommensurabilityOfSum) → assert(a∼x) →
    apply(RationalRatioCommensurable) → assert(x∼2x) →
    apply(CommensurabilityTransitive) → assert(a∼2x) →
    apply(CommensurabilityOfSum) → assert(a∼(a-2x)) →
    apply(SubstitutionPrinciple) → assert(a∼√(a² - b²))
  } →

  // Sufficient condition
  proof SufficientPart() {
    assume(a∼√(a² - b²)) →
    apply(SubstitutionPrinciple) → assert(a∼(a-2x)) →
    apply(CommensurabilityOfSum) → assert(a∼2x) →
    apply(RationalRatioCommensurable) → assert(x∼2x) →
    apply(CommensurabilityTransitive) → assert(a∼x) →
    apply(CommensurabilityOfSum) → assert((a-x)∼x)
  }
}
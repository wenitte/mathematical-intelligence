theorem AntiLexicographicOrderUnitSquare() {
  let T = (0,1) × [0,1]
  let ≤ₐ = antilexicographic_order
  assert(
    (∃!min ∈ T: min = (0,0)) ∧
    (∄max ∈ T) ∧
    (∄greatest ∈ T)
  )
}

proof AntiLexicographicOrderUnitSquare() {
  def antilexicographic_order((a,b), (c,d)) {
    return (c < d) ∨ (c = d ∧ a ≤ b)
  }

  // Prove (0,0) is minimal and smallest
  lemma MinimalElement() {
    setVar((a,b): T) →
    assume(isMinimal((a,b))) →
    assert(a ≠ 0 → ((0,b) ≤ₐ (a,b) ∧ (0,b) ≠ (a,b))) →
    assert(b ≠ 0 → ((a,0) ≤ₐ (a,b) ∧ (a,0) ≠ (a,b))) →
    conclude((a,b) = (0,0))
  }

  lemma SmallestElement() {
    setVar((c,d): T) →
    assert(0 ≤ c ∧ 0 ≤ d) →
    assert(∀(c,d) ∈ T: (0,0) ≤ₐ (c,d)) →
    apply(UniquenessSmallestElement) →
    conclude((0,0) is unique smallest)
  }

  // Prove no maximal elements
  lemma NoMaximalElement() {
    setVar((u,v): T) →
    assume(isMaximal((u,v))) →
    assert(u ∈ (0,1)) →
    let x = (u + 1)/2 →
    apply(MediantBetween) →
    assert(u < x) →
    assert((u,v) ≤ₐ (x,v) → (u,v) = (x,v)) →
    contradiction() →
    conclude(∄maximal ∈ T)
  }

  // Prove no greatest element
  lemma NoGreatestElement() {
    assume(∃greatest ∈ T) →
    apply(GreatestIsMaximal) →
    apply(NoMaximalElement()) →
    contradiction() →
    conclude(∄greatest ∈ T)
  }

  apply(MinimalElement()) →
  apply(SmallestElement()) →
  apply(NoMaximalElement()) →
  apply(NoGreatestElement()) →
  conclude(theorem)
}
theorem RationalSquare() {
  assert(
    ∀m,n ∈ ℤ₊ ∧ m⊥n ⇒
    (m/n = r² where r ∈ ℚ) ↔ (∃x,y ∈ ℤ: m = x² ∧ n = y²)
  )
}

proof RationalSquare() {
  setVar(m,n: ℤ₊, m⊥n) →
  
  // Sufficient condition (⇐)
  block SufficientCondition() {
    assume(m/n = r² where r ∈ ℚ) →
    lemma CanonicalForm() {
      assert(∃p ∈ ℤ, q ∈ ℤ₊: r = p/q ∧ p⊥q)
    } →
    apply(CanonicalForm()) →
    assert(m/n = (p/q)² = p²/q²) →
    lemma CoprimePowers() {
      assert(p⊥q ⇒ p²⊥q²)
    } →
    apply(CoprimePowers()) →
    lemma UniqueCanonical() {
      assert(m/n = p²/q² in canonical form ⇒ m = p² ∧ n = q²)
    } →
    conclude(∃x,y ∈ ℤ: m = x² ∧ n = y²)
  }

  // Necessary condition (⇒)
  block NecessaryCondition() {
    assume(∃x,y ∈ ℤ: m = x² ∧ n = y²) →
    assert(n > 0 ⇒ y ≠ 0) →
    assert(m/n = x²/y² = (x/y)²) →
    assert(x/y ∈ ℚ) →
    conclude(m/n = r² where r ∈ ℚ)
  }

  apply(SufficientCondition()) ∧ 
  apply(NecessaryCondition()) →
  conclude(thesis)
}
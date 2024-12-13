theorem Biconditional_As_Disjunction() {
  assert(
    ((p ∧ q) ∨ (¬p ∧ ¬q)) ⊢ (p ↔ q)
  )
} ↔

proof Biconditional_As_Disjunction() {
  assumeCase1(p ∧ q) → {
    assert(p) by(∧E₁) →
    assert(q) by(∧E₂) →
    lemma Forward1() {
      assume(p) →
      assert(q) →
      assert(p → q) by(→I)
    } →
    lemma Backward1() {
      assume(q) →
      assert(p) →
      assert(q → p) by(→I)
    } →
    assert(p ↔ q) by(↔I, Forward1, Backward1)
  } →
  
  assumeCase2(¬p ∧ ¬q) → {
    assert(¬p) by(∧E₁) →
    assert(¬q) by(∧E₂) →
    lemma Forward2() {
      assume(¬p) →
      assert(¬q) →
      assert(¬p → ¬q) by(→I) →
      assert(q → p) by(Transposition)
    } →
    lemma Backward2() {
      assume(¬q) →
      assert(¬p) →
      assert(¬q → ¬p) by(→I) →
      assert(p → q) by(Transposition)
    } →
    assert(p ↔ q) by(↔I, Forward2, Backward2)
  } →
  
  assert(p ↔ q) by(∨E, Case1, Case2)
}
theorem Field_Characteristic_Prime() {
  assert(
    ∀F: Field(F) ∧ 
    ∃n ∈ Ann(F): n ≠ 0 ⇒
    (∃p: Prime(p) ∧ Char(F) = p ∧ Ann(F) = pℤ)
  )
} ↔

proof Field_Characteristic_Prime() {
  setVar(F: Field) →
  setVar(A: Set, A := Ann(F)) →
  
  lemma Positive_Annihilator() {
    setVar(A⁺: Set, A⁺ := {n ∈ A | n > 0}) →
    assert(A⁺ ≠ ∅) →
    assert(A⁺ ⊆ ℕ) →
    apply(Well_Ordering_Principle(A⁺)) →
    assert(∃p: min(A⁺, p))
  } →
  
  lemma Prime_Property() {
    assume(¬Prime(p)) →
    assert(∃a,b ∈ ℕ: p = ab ∧ 1 < a,b < p) →
    assert(0_F = p·1_F) →
    assert(0_F = (ab)·1_F) →
    assert(0_F = (a·1_F)×(b·1_F)) →
    assert(a·1_F = 0_F ∨ b·1_F = 0_F) →
    assert(a ∈ A ∨ b ∈ A) →
    assert(contradiction(min(A⁺, p)))
  } →
  
  lemma Annihilator_Multiples() {
    setVar(n: ℤ) →
    assert((np)·1_F = n·(p·1_F)) →
    assert((np)·1_F = n·0_F) →
    assert((np)·1_F = 0_F) →
    assert(pℤ ⊆ A)
  } →
  
  lemma Annihilator_Containment() {
    setVar(k: A) →
    apply(Division_Theorem(k, p)) →
    assert(∃q,r ∈ ℤ: k = qp + r ∧ 0 ≤ r < p) →
    assert(0_F = k·1_F) →
    assert(0_F = (qp + r)·1_F) →
    assert(0_F = (qp)·1_F + r·1_F) →
    assert(0_F = 0_F + r·1_F) →
    assert(0_F = r·1_F) →
    assert(r ∈ A) →
    assert(contradiction(r < p ∧ min(A⁺, p))) →
    assert(A ⊆ pℤ)
  } →
  
  conclude(Ann(F) = pℤ ∧ Char(F) = p ∧ Prime(p))
}
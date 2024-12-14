theorem Complex_Subfield_Characteristic_Zero() {
  assert(
    ∀K ⊆ ℂ, K is_field ⇒ Char(K) = 0
  )
} ↔

proof Complex_Subfield_Characteristic_Zero() {
  byContradiction() {
    setVar(K: field, n: ℕ) →
    assume(K ⊆ ℂ ∧ Char(K) = n ∧ n > 0) →
    
    lemma Char_Times_Element() {
      assert(∀a ∈ K: n·a = 0)
    } →
    
    assert(K ⊆ ℂ) →
    assert(∀a ∈ K ⇒ a ∈ ℂ) →
    assert(∃a ∈ ℂ: n·a = 0) →
    
    assert(0 < Char(ℂ) ≤ n) →
    
    lemma Complex_Char_Zero() {
      assert(ℂ is_infinite) →
      assert(Char(ℂ) = 0)
    } →
    
    derive(contradiction: 0 < Char(ℂ) ∧ Char(ℂ) = 0)
  } →
  
  conclude(Char(K) = 0)
}
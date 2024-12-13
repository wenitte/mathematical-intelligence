theorem Arens_Fort_Space_is_Countable() {
  assert(
    let T = (S, τ) be_an Arens_Fort_space ⇒
    S is_countably_infinite
  )
} ↔

proof Arens_Fort_Space_is_Countable() {
  lemma Arens_Fort_Definition() {
    assert(
      S = ℤ_≥0 × ℤ_≥0
    )
  } →
  
  lemma Naturals_Countable() {
    assert(
      ℤ_≥0 is_countable
    )
  } →
  
  lemma Cartesian_Product_Countable() {
    assert(
      ∀A,B: (A is_countable ∧ B is_countable) ⇒ 
      (A × B) is_countable
    )
  } →
  
  apply(Arens_Fort_Definition()) →
  apply(Naturals_Countable()) →
  apply(Cartesian_Product_Countable(), {A = ℤ_≥0, B = ℤ_≥0}) →
  
  assert(
    S = ℤ_≥0 × ℤ_≥0 ∧
    ℤ_≥0 is_countable ∧
    (ℤ_≥0 × ℤ_≥0) is_countable ⇒
    S is_countably_infinite
  )
}
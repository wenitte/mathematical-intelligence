theorem Complement_Union_Superset_Universe_Corollary() {
  assert(
    ∀S,T ∈ PowerSet(𝕌) ⇒ (S ∪ T = 𝕌 ↔ 𝒞S ⊆ T)
  )
} ↔

proof Complement_Union_Superset_Universe_Corollary() {
  setVar(S,T: PowerSet(𝕌)) →
  setVar(X: PowerSet(𝕌)) →
  assert(X = 𝒞S) →
  
  lemma Complement_Union_Superset() {
    assert(∀A,B ∈ PowerSet(𝕌) ⇒ (A ⊆ B ↔ 𝒞A ∪ B = 𝕌))
  } →
  
  apply(Complement_Union_Superset()) →
  assert(X ⊆ T ↔ 𝒞X ∪ T = 𝕌) →
  
  substitute(X = 𝒞S) →
  assert(𝒞S ⊆ T ↔ 𝒞(𝒞S) ∪ T = 𝕌) →
  
  lemma Complement_Of_Complement() {
    assert(∀A ∈ PowerSet(𝕌) ⇒ 𝒞(𝒞A) = A)
  } →
  
  apply(Complement_Of_Complement()) →
  assert(𝒞S ⊆ T ↔ S ∪ T = 𝕌)
}
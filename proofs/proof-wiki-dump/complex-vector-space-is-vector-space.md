theorem ComplexVectorSpace() {
  assert(
    ∀n ∈ ℕ ⇒ ⟨ℂ^n, +, ·⟩ is_vector_space
  )
} ↔

proof ComplexVectorSpace() {
  // Construction of Complex Vector Space
  setStruct(ℂ, +_ℂ, ×_ℂ) →
  setStruct(ℂ, +_G) →
  
  define(ℂ^n = ∏_{i=1}^n ⟨ℂ, +_G⟩) →
  
  let(a = ⟨a_1,...,a_n⟩ ∈ ℂ^n) ∧
  let(b = ⟨b_1,...,b_n⟩ ∈ ℂ^n) ∧
  let(λ ∈ ℂ) →
  
  define(+ : ℂ^n × ℂ^n → ℂ^n) {
    a + b = ⟨a_1 +_G b_1,...,a_n +_G b_n⟩
  } ∧
  
  define(· : ℂ × ℂ^n → ℂ^n) {
    λ·a = ⟨λ ×_ℂ a_1,...,λ ×_ℂ a_n⟩
  } →

  // Vector Space Axiom Proofs
  lemma DistributiveAxiom1() {
    assert(
      ∀x,y ∈ ℂ^n, ∀λ ∈ ℂ ⇒
      λ·(x + y) = (λ·x) + (λ·y)
    )
  } →

  lemma DistributiveAxiom2() {
    assert(
      ∀x ∈ ℂ^n, ∀λ,μ ∈ ℂ ⇒
      (λ +_ℂ μ)·x = (λ·x) + (μ·x)
    )
  } →

  lemma ScalarAssociative() {
    assert(
      ∀x ∈ ℂ^n, ∀λ,μ ∈ ℂ ⇒
      (λ ×_ℂ μ)·x = λ·(μ·x)
    )
  } →

  lemma IdentityScalar() {
    assert(
      ∀x ∈ ℂ^n ⇒ 1·x = x
    )
  } →

  apply(DistributiveAxiom1()) ∧
  apply(DistributiveAxiom2()) ∧
  apply(ScalarAssociative()) ∧
  apply(IdentityScalar()) →
  
  assert(⟨ℂ^n, +, ·⟩ is_vector_space)
}
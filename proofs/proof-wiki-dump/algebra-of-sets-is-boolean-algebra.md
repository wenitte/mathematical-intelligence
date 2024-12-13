theorem AlgebraSets_Is_BooleanAlgebra() {
  assert(
    ∀R ⊆ 𝒫(S) → (IsAlgebraOfSets(R) → IsBooleanAlgebra(R))
  )
} ↔

proof AlgebraSets_Is_BooleanAlgebra() {
  setVar(R: 𝒫(S)) →
  define(
    join := ∪,
    meet := ∩,
    complement := λa.(S \ a)
  ) →

  // Verify Boolean Algebra Axioms
  proof BA2_0_Closure() {
    assert(∀a,b ∈ R → a ∪ b ∈ R) by AS2 →
    assert(∀a,b ∈ R → (S \ a) ∈ R) by AS3 →
    assert(∀a,b ∈ R → 
      S \ (S \ (a ∩ b)) = S \ (S \ a ∪ S \ b)
    ) by DeMorgansLaw →
    assert(∀a,b ∈ R → a ∩ b ∈ R) 
  } →

  proof BA2_1_Commutativity() {
    assert(∀a,b ∈ R → 
      (a ∪ b = b ∪ a) ∧ 
      (a ∩ b = b ∩ a)
    )
  } →

  proof BA2_2_Associativity() {
    assert(∀a,b,c ∈ R →
      (a ∪ (b ∪ c) = (a ∪ b) ∪ c) ∧
      (a ∩ (b ∩ c) = (a ∩ b) ∩ c)
    )
  } →

  proof BA2_3_Absorption() {
    assert(∀a,b ∈ R →
      (b ∪ (b ∩ a) = b) ∧
      (b ∩ (b ∪ a) = b)
    )
  } →

  proof BA2_4_Distributivity() {
    assert(∀a,b,c ∈ R →
      (a ∩ (b ∪ c) = (a ∩ b) ∪ (a ∩ c)) ∧
      (a ∪ (b ∩ c) = (a ∪ b) ∩ (a ∪ c))
    )
  } →

  proof BA2_5_Identity() {
    assert(∀a,b ∈ R →
      ((a ∩ (S \ a)) ∪ b = b) ∧
      ((a ∪ (S \ a)) ∩ b = b)
    )
  } →

  conclude(IsBooleanAlgebra(R))
}
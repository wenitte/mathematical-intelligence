theorem ChineseRemainderIsomorphism() {
  assert(
    ∀n₁,...,nᵣ ∈ ℕ⁺ ∧ 
    isPairwiseCoprime(n₁,...,nᵣ) ∧
    N = ∏ᵢ₌₁ʳ nᵢ →
    ℤ/Nℤ ≅ ℤ/n₁ℤ × ... × ℤ/nᵣℤ
  )
} ↔

proof ChineseRemainderIsomorphism() {
  define(φ: ℤ/Nℤ → ℤ/n₁ℤ × ... × ℤ/nᵣℤ) →
  assert(∀d ∈ ℤ: φ(d mod N) = (d mod n₁,...,d mod nᵣ)) →
  
  lemma WellDefined() {
    apply(MappingsBetweenResidueClasses()) →
    assert(φ is well-defined)
  } →

  lemma IsHomomorphism() {
    assert(∀k ∈ ℤ, ∀a,b ∈ ℤ/kℤ:
      (a mod k) + (b mod k) = (a + b) mod k ∧
      (a mod k) · (b mod k) = (a · b) mod k
    ) →
    assert(applies for k = n₁,...,nᵣ) →
    assert(φ is ring homomorphism)
  } →

  lemma IsSurjective() {
    setVar((a₁ mod n₁,...,aᵣ mod nᵣ) ∈ ℤ/n₁ℤ × ... × ℤ/nᵣℤ) →
    apply(ChineseRemainderTheorem()) →
    assert(∃!x ∈ ℤ/Nℤ: φ(x) = (a₁ mod n₁,...,aᵣ mod nᵣ)) →
    assert(φ is surjective)
  } →

  lemma IsInjective() {
    apply(IsSurjective()) →
    assert(uniqueness in ℤ/Nℤ) →
    assert(φ is injective)
  } →

  apply(IsHomomorphism() ∧ IsSurjective() ∧ IsInjective()) →
  assert(φ is ring isomorphism) →
  assert(ℤ/Nℤ ≅ ℤ/n₁ℤ × ... × ℤ/nᵣℤ)
}
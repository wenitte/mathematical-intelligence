theorem Composite_Order_Isomorphisms() {
  let(S1: OrderedSet, S2: OrderedSet, S3: OrderedSet) →
  let(≼1: OrderRelation(S1), ≼2: OrderRelation(S2), ≼3: OrderRelation(S3)) →
  let(φ: OrderIsomorphism(S1→S2), ψ: OrderIsomorphism(S2→S3)) →
  assert(
    ψ∘φ: OrderIsomorphism(S1→S3)
  )
} ↔

proof Composite_Order_Isomorphisms() {
  lemma Bijection_Property() {
    assert(IsOrderIsomorphism(φ) ∧ IsOrderIsomorphism(ψ)) →
    assert(IsBijection(φ) ∧ IsBijection(ψ)) →
    apply(Composite_of_Bijections()) →
    assert(IsBijection(ψ∘φ))
  } →

  lemma Inverse_Property() {
    apply(Inverse_of_Composite()) →
    assert((ψ∘φ)⁻¹ = φ⁻¹∘ψ⁻¹)
  } →

  lemma Increasing_Forward() {
    assert(∀x,y ∈ S1: x ≼1 y → φ(x) ≼2 φ(y)) →
    assert(∀a,b ∈ S2: a ≼2 b → ψ(a) ≼3 ψ(b)) →
    apply(Composite_of_Increasing()) →
    assert(∀x,y ∈ S1: x ≼1 y → (ψ∘φ)(x) ≼3 (ψ∘φ)(y))
  } →

  lemma Increasing_Inverse() {
    assert(∀x,y ∈ S2: x ≼2 y → φ⁻¹(x) ≼1 φ⁻¹(y)) →
    assert(∀x,y ∈ S3: x ≼3 y → ψ⁻¹(x) ≼2 ψ⁻¹(y)) →
    apply(Composite_of_Increasing()) →
    assert(∀x,y ∈ S3: x ≼3 y → (φ⁻¹∘ψ⁻¹)(x) ≼1 (φ⁻¹∘ψ⁻¹)(y))
  } →

  apply(Bijection_Property()) ∧
  apply(Increasing_Forward()) ∧
  apply(Increasing_Inverse()) →
  assert(IsOrderIsomorphism(ψ∘φ))
}
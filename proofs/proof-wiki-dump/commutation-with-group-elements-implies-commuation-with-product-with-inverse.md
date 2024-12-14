theorem Commutation_With_Product_And_Inverse() {
  assert(
    ∀G: Group ∧
    ∀a,b,c ∈ G ∧
    (a·b = b·a) ∧ (a·c = c·a) ⇒
    (a·(b·c⁻¹) = (b·c⁻¹)·a)
  )
} ↔

proof Commutation_With_Product_And_Inverse() {
  setVar(G: Group) →
  setVar(a,b,c: G) →
  assume(a·b = b·a ∧ a·c = c·a) →
  
  assert(a·(b·c⁻¹)) →
  
  lemma Commutes_With_First() {
    apply(a·b = b·a) →
    assert(a·(b·c⁻¹) = (b·a)·c⁻¹)
  } →
  
  lemma Commutes_With_Second() {
    apply(a·c = c·a) →
    assert((b·a)·c⁻¹ = b·(c⁻¹·a))
  } →
  
  lemma Inverse_Commutation() {
    apply(MonoidInverseCommutation) →
    assert(c⁻¹·a = (a·c)⁻¹)
  } →
  
  chainEquality(
    a·(b·c⁻¹) = 
    (b·a)·c⁻¹ =
    b·(c⁻¹·a) =
    (b·c⁻¹)·a
  )
}
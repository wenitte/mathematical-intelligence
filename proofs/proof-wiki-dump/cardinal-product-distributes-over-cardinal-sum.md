theorem Cardinal_Product_Distributes() {
  assert(
    ∀a,b,c ∈ Cardinal ⇒ 
    a(b + c) = ab + ac
  )
} ↔

proof Cardinal_Product_Distributes() {
  setVar(A,B,C: Set) →
  assert(a = |A| ∧ b = |B| ∧ c = |C|) →
  assume(B ∩ C = ∅) →
  
  define(B ⊔ C := B ∪ C) →
  assert(b + c = |B ⊔ C| = |B ∪ C|) →
  
  lemma Disjoint_Products() {
    assert((A × B) ∩ (A × C) = A × (B ∩ C)) →
    assert(B ∩ C = ∅) →
    assert(A × ∅ = ∅) →
    conclude((A × B) ∩ (A × C) = ∅)
  } →
  
  apply(Disjoint_Products()) →
  
  assert(|(A × B) ∪ (A × C)| = |A × B| + |A × C|) →
  assert(|A × B| + |A × C| = ab + ac) →
  
  assert(|(A × B) ∪ (A × C)| = |A × (B ∪ C)|) →
  assert(|A × (B ∪ C)| = a(b + c)) →
  
  conclude(a(b + c) = ab + ac)
}
theorem Groups_Order_15_Classification() {
  assert(
    ∀G(Group(G) ∧ order(G) ≤ 15 → 
      (IsomorphicTo(G, Z₁) ∨ 
       IsomorphicTo(G, Z₂) ∨ 
       IsomorphicTo(G, Z₃) ∨ 
       (IsomorphicTo(G, Z₄) ∨ IsomorphicTo(G, Z₂⊕Z₂)) ∨
       IsomorphicTo(G, Z₅) ∨ 
       (IsomorphicTo(G, Z₆) ∨ IsomorphicTo(G, D₃)) ∨
       IsomorphicTo(G, Z₇) ∨
       (IsomorphicTo(G, Z₈) ∨ IsomorphicTo(G, Z₄⊕Z₂) ∨ IsomorphicTo(G, Z₂⊕Z₂⊕Z₂) ∨ IsomorphicTo(G, D₄) ∨ IsomorphicTo(G, Dic₂)) ∨
       (IsomorphicTo(G, Z₉) ∨ IsomorphicTo(G, Z₃⊕Z₃)) ∨
       (IsomorphicTo(G, Z₁₀) ∨ IsomorphicTo(G, D₅)) ∨
       IsomorphicTo(G, Z₁₁) ∨
       (IsomorphicTo(G, Z₁₂) ∨ IsomorphicTo(G, Z₆⊕Z₂) ∨ IsomorphicTo(G, D₆) ∨ IsomorphicTo(G, A₄) ∨ IsomorphicTo(G, Dic₃)) ∨
       IsomorphicTo(G, Z₁₃) ∨
       (IsomorphicTo(G, Z₁₄) ∨ IsomorphicTo(G, D₇)) ∨
       IsomorphicTo(G, Z₁₅))
  )
} ↔

proof Groups_Order_15_Classification() {
  lemma Abelian_Cases() {
    assert(
      ∀G(IsAbelian(G) → ApplyFTFAG(G))
    )
  } →
  
  lemma NonAbelian_Cases() {
    assert(
      order(G) = 1 → apply(TrivialGroup_Is_Cyclic()) ∧
      isPrime(order(G)) → apply(PrimeGroup_Is_Cyclic()) ∧
      isPrimeSquared(order(G)) → apply(GroupOrderPrimeSquared_Is_Abelian()) ∧
      order(G) = p*q → apply(GroupOrderPQ_Is_Cyclic()) ∧
      order(G) = 2*p → apply(GroupsOrderTwicePrime()) ∧
      order(G) = 8 → apply(GroupsOrder8()) ∧
      order(G) = 12 → apply(GroupsOrder12())
    )
  } →
  
  apply(Abelian_Cases()) →
  apply(NonAbelian_Cases()) →
  assert(AllGroupsCovered())
}
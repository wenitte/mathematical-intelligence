theorem AbelianGroupSemiprimeOrderIsCyclic() {
  let(p: ℙ, q: ℙ) ∧
  let(G: Group) ∧
  assert(p ≠ q) ∧
  assert(isAbelian(G)) ∧
  assert(|G| = p·q) →
  assert(isCyclic(G))
} ↔

proof AbelianGroupSemiprimeOrderIsCyclic() {
  setVar(possibleOrders: {1, p, q, p·q}) →
  assert(∀x ∈ G → order(x) ∈ possibleOrders) →
  assert(|{x ∈ G: order(x) = 1}| = 1) →
  
  lemma ElementsOrderP() {
    assert(|{x ∈ G: order(x) = p}| ≤ p-1) ↔
    proof {
      assume(|{x ∈ G: order(x) = p}| > p-1) →
      apply(OrderWithPPlusElements()) →
      assert(p² | |G|) →
      assert(p² ∤ p·q) →
      assert(contradiction())
    }
  } →
  
  lemma ElementsOrderQ() {
    assert(|{x ∈ G: order(x) = q}| ≤ q-1) ↔
    proof {
      assume(|{x ∈ G: order(x) = q}| > q-1) →
      apply(OrderWithPPlusElements()) →
      assert(q² | |G|) →
      assert(q² ∤ p·q) →
      assert(contradiction())
    }
  } →
  
  let(elementsNotPQ: |{x ∈ G: order(x) ∈ {1,p,q}}|) →
  assert(elementsNotPQ = (p-1) + (q-1) + 1) →
  assert(elementsNotPQ = p + q - 1) →
  
  let(elementsOrderPQ: |{x ∈ G: order(x) = p·q}|) →
  assert(elementsOrderPQ = p·q - (p + q - 1)) →
  assert(elementsOrderPQ = (p-1)(q-1)) →
  assert(elementsOrderPQ > 0) →
  
  apply(GroupOrderEqualsElementOrderIsCyclic()) →
  assert(isCyclic(G))
}
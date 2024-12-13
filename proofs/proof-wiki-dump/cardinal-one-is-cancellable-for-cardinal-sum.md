theorem Cardinal_One_Cancellable() {
  assert(
    ∀a,b ∈ Cardinals ⇒
    (a + 1 = b + 1 → a = b)
  )
} ↔

proof Cardinal_One_Cancellable() {
  setVar(a,b: Cardinals) →
  assume(a + 1 = b + 1) →
  
  lemma Cardinal_Sum_Existence() {
    assert(∃c ∈ Cardinals: a + 1 = b + 1 = c)
  } →
  
  apply(Cardinal_Sum_Existence()) →
  setVar(c: Cardinals) →
  assert(∃C: c = Card(C)) →
  assert(∃A,B ⊆ C, ∃α,β ∈ C: 
    (C\A = {α} ∧ C\B = {β})
  ) →
  
  branch {
    case α = β:
      assert(A = B) →
      assert(a = b)
    
    case α ≠ β:
      assert(α ∈ B ∧ β ∈ A) →
      assert({β} ∪ (A ∩ B) = A) →
      assert({α} ∪ (A ∩ B) = B) →
      assert({β} ∩ A ∩ B = ∅) →
      assert({α} ∩ A ∩ B = ∅) →
      assert(
        a = Card(A) = 
        1 + Card(A ∩ B) = 
        Card(B) = b
      )
  } →
  
  conclude(a = b)
}
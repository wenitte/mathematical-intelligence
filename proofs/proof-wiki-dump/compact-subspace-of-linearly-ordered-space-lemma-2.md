theorem Compact_Subspace_Linearly_Ordered_Space_Lemma_2() {
  assert(
    ∀X,Y,≺,τ: [X is linearly ordered space with order ≺ and topology τ] ∧
    [Y ⊆ X, Y ≠ ∅] ∧
    [∀S ⊆ Y, S ≠ ∅ ⇒ ∃(sup S, inf S) ∈ X] ∧
    [∀S ⊆ Y, S ≠ ∅ ⇒ sup S ∈ Y ∧ inf S ∈ Y] ⇒
    [(Y, ≺', τ') is linearly ordered space]
  )
} ↔

proof Compact_Subspace_Linearly_Ordered_Space_Lemma_2() {
  setVar(X,Y,≺,τ) →
  assert([τ' has sub-basis of upper and lower sections in Y]) →
  
  lemma Prove_Upper_Section_Open() {
    setVar(U: [upper section in Y]) →
    case U = ∅ ∨ U = Y {
      assert([U is open in ≺'-order topology]) 
    } →
    case ∅ ⊂ U ⊂ Y {
      setVar(C = Y\U) →
      assert(C ≠ ∅ ∧ [C is τ'-closed]) →
      setVar(c = supₓ C) →
      assert(c ∈ C) by ClosedSet_LinearlyOrderedSpace() →
      assert(∀u ∈ U: c ≺ u) →
      assert(∀y ∈ Y: c ≺ y ⇒ y ∈ U) →
      assert(U = {c}^≻_Y) →
      assert([U is open in ≺'-order topology])
    }
  } →

  lemma Prove_Lower_Section_Open() {
    assert([symmetric argument to upper section case])
  } →
  
  apply(Prove_Upper_Section_Open()) →
  apply(Prove_Lower_Section_Open()) →
  assert(τ' = [≺'-order topology]) →
  assert([(Y, ≺', τ') is linearly ordered space])
}
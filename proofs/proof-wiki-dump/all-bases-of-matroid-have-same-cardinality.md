theorem Base_Cardinality_Equal() {
  let M = (S, I) be matroid
  let ρ: P(S) → ℤ be rank_function(M)
  let B ⊆ S be base(M)
  assert(
    |B| = ρ(S)
  )
}

corollary Independent_Set_Size() {
  let X ⊆ S where X ∈ I
  assert(
    |X| ≤ |B|
  )
}

proof Base_Cardinality_Equal() {
  define(ρ(S) = max{|X| : X ⊆ S ∧ X ∈ I}) →
  setVar(B₁ ⊆ S where B₁ ∈ I ∧ |B₁| = ρ(S)) →
  
  lemma B₁_Is_Base() {
    setVar(X where X ⊇ B₁ ∧ X ∈ I) →
    assert(|B₁| ≤ |X|) by Cardinality_Subset_Finite() →
    assert(|X| ≤ |B₁|) by definition(B₁) →
    assert(|X| = |B₁|) →
    assert(X = B₁) by Cardinality_Proper_Subset_Finite() →
    assert(B₁ is maximal_independent)
  } →
  
  lemma Equal_Cardinality() {
    setVar(B₂ be base(M)) →
    assert(|B₂| ≤ |B₁|) by definition(B₁) →
    
    proof by contradiction {
      assume(|B₂| < |B₁|) →
      apply(Independent_Set_Augmentation()) {
        assert(∃Z ⊆ B₁\B₂: 
          B₂ ∪ Z ∈ I ∧ 
          |B₂ ∪ Z| = |B₁|
        )
      } →
      assert(contradicts(B₂ is maximal))
    } →
    
    assert(|B₂| = |B₁| = ρ(S))
  } →
  
  conclude(|B| = ρ(S))
}
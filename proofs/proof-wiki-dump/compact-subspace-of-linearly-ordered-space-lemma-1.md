theorem CompactSubspaceLinearlySordered() {
  let X: OrderedTopologicalSpace
  let Y: Set
  assert(
    Y ⊆ X ∧
    Y ≠ ∅ ∧
    isCompact(Y) ∧
    isLinearOrder(X.≤)
  ) ⇒ isCompleteLattice(Y, ≤|Y)
} ↔

proof CompactSubspaceLinearlySorded() {
  byContradiction() {
    assume(¬isCompleteLattice(Y, ≤|Y)) →
    assert(∃S ⊆ Y: ¬∃lub(S,Y)) →
    
    let U = {b ∈ Y | ∀s ∈ S: s ≤ b} →
    let 𝕌 = {u↑ | u ∈ U} →
    let ℒ = {s↓ | s ∈ S} →
    
    lemma CoverY() {
      ∀y ∈ Y: (
        (isUpperBound(y,S) ⇒ ∃y'∈U: y'<y ∧ y∈y'↑) ∨
        (¬isUpperBound(y,S) ⇒ ∃s∈S: y<s ∧ y∈s↓)
      ) →
      assert(Y ⊆ ⋃𝕌 ∪ ⋃ℒ)
    } →
    
    lemma NoFiniteSubcover() {
      ∀FU⊆U, FL⊆S: |FU|<∞ ∧ |FL|<∞ → {
        let 𝔽U = {u↑ | u ∈ FU} →
        let 𝔽L = {s↓ | s ∈ FL} →
        
        case FL≠∅ {
          let m = max(FL) →
          assert(∃s∈S: m<s ∧ s∉⋃𝔽L ∧ s∉⋃𝔽U)
        } →
        
        case FU≠∅ {
          let m = min(FU) →
          assert(∃u∈U: u<m ∧ u∉⋃𝔽U ∧ u∉⋃𝔽L)
        } →
        
        assert(Y ⊈ ⋃𝔽U ∪ ⋃𝔽L)
      }
    } →
    
    apply(CoverY()) →
    apply(NoFiniteSubcover()) →
    assert(¬isCompact(Y)) →
    contradiction()
  } →
  conclude(isCompleteLattice(Y, ≤|Y))
}
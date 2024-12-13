theorem NotIsomorphicLeftRightOps() {
  assert(
    ∀S: Set ∧ 
    ∀(←,→): Operation ∧ 
    card(S) > 1 ⇒
    ¬isomorphic(⟨S,←⟩, ⟨S,→⟩)
  )
} ↔

proof NotIsomorphicLeftRightOps() {
  assume(∃φ: isomorphic(⟨S,←⟩, ⟨S,→⟩)) →
  
  assert(card(S) > 1) →
  setVar(x,y ∈ S: x ≠ y) →
  
  assert(φ(x ← y) = φ(x)) {
    φ(x ← y) = φ(x) →
    φ(x → φ(y)) {
      by(defLeftOperation) →
      by(isomorphismProperty) →
      by(defRightOperation)
    }
  } →
  
  conclude(φ(x) = φ(y)) →
  assert(¬injective(φ)) →
  assert(¬bijective(φ)) →
  assert(¬isomorphic(⟨S,←⟩, ⟨S,→⟩)) →
  
  contradiction() →
  QED()
}
theorem Complement_Bounded_Set_Complex_Plane() {
  assert(
    ∀S ⊆ ℂ, bounded(S) ⇒ 
    hasAtMostOne(unboundedComponents(ℂ ∖ S))
  )
} ↔

proof Complement_Bounded_Set_Complex_Plane() {
  setVar(S: bounded(S) ∧ S ⊆ ℂ) →
  
  case1() {
    assert(unboundedComponents(ℂ ∖ S) = ∅) →
    conclude(hasAtMostOne(unboundedComponents(ℂ ∖ S)))
  } ∨

  case2() {
    assume(∃C: unboundedComponent(C, ℂ ∖ S)) →
    
    lemma Bounded_Radius() {
      assert(∃R ∈ ℝ⁺: ∀z ∈ S, |z| ≤ R)
    } →
    apply(Bounded_Radius()) →
    
    assert(∃z₀ ∈ C: |z₀| > R) →
    assert(z₀ ∈ C ∩ {z ∈ ℂ: |z| > R}) →
    
    lemma Exterior_Disk_Properties() {
      assert(pathConnected({z ∈ ℂ: |z| > R})) →
      assert(connected({z ∈ ℂ: |z| > R}))
    } →
    
    apply(Exterior_Disk_Properties()) →
    assert(connected(C ∪ {z ∈ ℂ: |z| > R})) →
    assert(maximalConnected(C)) →
    assert(C ⊆ C ∪ {z ∈ ℂ: |z| > R}) →
    conclude(C = C ∪ {z ∈ ℂ: |z| > R}) →
    assert({z ∈ ℂ: |z| > R} ⊆ C) →
    
    forall(C': component(C', ℂ ∖ S) ∧ C' ≠ C) {
      assert(C' ∩ C = ∅) →
      assert(C' ∩ {z ∈ ℂ: |z| > R} = ∅) →
      assert(C' ⊆ {z ∈ ℂ: |z| ≤ R}) →
      conclude(bounded(C'))
    } →
    
    conclude(hasAtMostOne(unboundedComponents(ℂ ∖ S)))
  }
}
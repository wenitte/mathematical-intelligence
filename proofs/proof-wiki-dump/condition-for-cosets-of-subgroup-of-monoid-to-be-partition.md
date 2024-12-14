theorem Cosets_Form_Partition() {
  assert(
    (S: Monoid) ∧ (H: Subgroup(S)) ∧ (e: Identity(S)) →
    (LeftCosets(H,S): Partition(S)) ∧ (RightCosets(H,S): Partition(S))
  )
} ↔

proof Cosets_Form_Partition() {
  setDef(LeftCoset(x,H) ≔ {y ∈ S | ∃h ∈ H: y = x ∘ h}) →
  setDef(RightCoset(x,H) ≔ {y ∈ S | ∃h ∈ H: y = h ∘ x}) →
  
  lemma NonEmpty_And_Contains() {
    assert(∀k ∈ S: k ∘ e = k) →
    assert(e ∈ H) →
    assert(∀k ∈ S: k ∈ k ∘ H) ∧ (k ∈ H ∘ k) →
    assert(∀x ∈ S: (x ∘ H ≠ ∅) ∧ (H ∘ x ≠ ∅))
  } →

  lemma UniqueCoset() {
    setVar(r,s: S) →
    assert(r ∈ s ∘ H) →
    assert(∃h ∈ H: r = s ∘ h) →
    assert(r ∘ h⁻¹ = s ∘ (h ∘ h⁻¹)) →
    assert(r ∘ h⁻¹ = s) →
    assert(s ∈ r ∘ H) →
    assert(r ∘ H = s ∘ H) →
    
    assert(∀x,y ∈ S: (x ∈ y ∘ H) → (x ∘ H = y ∘ H)) ∧
          (∀x,y ∈ S: (x ∈ H ∘ y) → (H ∘ x = H ∘ y))
  } →

  apply(NonEmpty_And_Contains()) →
  apply(UniqueCoset()) →
  
  assert(
    (LeftCosets(H,S): Partition(S)) ∧ 
    (RightCosets(H,S): Partition(S))
  )
}
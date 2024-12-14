theorem Cartesian_Product_Semirings() {
  assert(
    ∀S,T[IsSemiring(S) ∧ IsSemiring(T) → IsSemiring(S × T)]
  )
} ↔

proof Cartesian_Product_Semirings() {
  setVar(S,T: Set) →
  assume(IsSemiring(S) ∧ IsSemiring(T)) →
  
  # Proof of condition 1: ∅ ∈ S × T
  lemma Empty_Set_Condition() {
    assert(∅ ∈ S ∧ ∅ ∈ T) →
    assert(∅ × ∅ ∈ S × T) →
    apply(CartesianProduct_Empty()) →
    assert(∅ × ∅ = ∅) →
    conclude(∅ ∈ S × T)
  } →

  # Proof of condition 2: Intersection stability
  lemma Intersection_Stability() {
    setVar(S₁,S₂: S, T₁,T₂: T) →
    assume((S₁ × T₁) ∈ (S × T) ∧ (S₂ × T₂) ∈ (S × T)) →
    apply(CartesianProduct_Intersection()) →
    assert((S₁ × T₁) ∩ (S₂ × T₂) = (S₁ ∩ S₂) × (T₁ ∩ T₂)) →
    assert(S₁ ∩ S₂ ∈ S ∧ T₁ ∩ T₂ ∈ T) →
    conclude((S₁ × T₁) ∩ (S₂ × T₂) ∈ S × T)
  } →

  # Proof of condition 3: Set difference decomposition
  lemma Set_Difference_Decomposition() {
    setVar(S₁,S₂: S, T₁,T₂: T) →
    assume((S₁ × T₁) ∈ (S × T) ∧ (S₂ × T₂) ∈ (S × T)) →
    apply(CartesianProduct_Difference()) →
    assert((S₁ × T₁) \ (S₂ × T₂) = 
           (S₁ × (T₁ \ T₂)) ∪ ((S₁ \ S₂) × T₁)) →
    apply(Set_Difference_Union_Intersection()) →
    assert(S₁ = (S₁ \ S₂) ⊔ (S₁ ∩ S₂)) →
    assert(T₁ = (T₁ ∩ T₂) ⊔ (T₁ \ T₂)) →
    apply(CartesianProduct_Distributes_Union()) →
    conclude(∃{A₁,...,Aₙ}[(S₁ × T₁) \ (S₂ × T₂) = ⊔ᵢ₌₁ⁿ Aᵢ ∧ ∀i(Aᵢ ∈ S × T)])
  } →
  
  # Main conclusion
  apply(Empty_Set_Condition()) →
  apply(Intersection_Stability()) →
  apply(Set_Difference_Decomposition()) →
  conclude(IsSemiring(S × T))
}
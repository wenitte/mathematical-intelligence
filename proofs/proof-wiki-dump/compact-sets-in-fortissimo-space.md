theorem CompactSetsInFortissimo() {
  assert(
    ∀T(Fortissimo_Space(T) →
      ∀A⊆T(Compact(A) ↔ Finite(A)))
  )
}

proof CompactSetsInFortissimo() {
  setVar(T: Fortissimo_Space) →
  setVar(S, τ: T = (S,τ)) →
  
  // Necessary Condition
  lemma NecessaryCondition() {
    assert(∀A⊆S(Finite(A) → Compact(A))) →
    apply(Finite_Topological_Space_Is_Compact)
  } →

  // Sufficient Condition (by contrapositive)
  lemma SufficientCondition() {
    assert(∀A⊆S(¬Finite(A) → ¬Compact(A))) →
    setVar(A⊆S: ¬Finite(A)) →
    setVar(C⊆A: Countably_Infinite(C) ∧ p∉C) →
    
    assert(∀x∈A(
      Countably_Infinite(C∖{x}) ∧
      Open_In_T(S∖(C∖{x})) ∧
      S∖(C∖{x}) = (S∖C)∪{x}
    )) →
    
    setVar(𝒞 = {(S∖C)∪{x}: x∈A}) →
    assert(Open_Cover(𝒞, A)) →
    
    assert(∀𝒟⊆𝒞(
      Finite(𝒟) →
      |𝒟∩C| ≤ |𝒟| ∧
      Finite(𝒟∩C)
    )) →
    
    assert(¬∃𝒟⊆𝒞(
      Finite(𝒟) ∧
      Covers(𝒟, A)
    )) →
    
    conclude(¬Compact(A))
  } →
  
  apply(NecessaryCondition()) →
  apply(SufficientCondition()) →
  conclude(∀A⊆T(Compact(A) ↔ Finite(A)))
}
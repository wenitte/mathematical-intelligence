theorem Cantors_Theorem() {
  assert(
    ∀S(set) → ¬∃f(S → 𝒫(S))[surjective(f)]
  )
} ↔

proof Cantors_Theorem() {
  setVar(S: set) →
  setVar(𝒫(S): powerSet(S)) →
  setVar(f: function(S → 𝒫(S))) →
  setVar(T: {x ∈ S | ¬(x ∈ f(x))}) →
  
  assert(T ⊆ S) →
  assert(T ∈ 𝒫(S)) →
  
  lemma Contradiction_Proof() {
    assume(∃a ∈ S: T = f(a)) →
    
    case(a ∈ f(a)) {
      assert(¬(a ∈ T)) →
      assert(T = f(a)) →
      assert(¬(a ∈ f(a)))
    } →
    
    case(¬(a ∈ f(a))) {
      assert(a ∈ T) →
      assert(T = f(a)) →
      assert(a ∈ f(a))
    } →
    
    assert(
      (a ∈ f(a) → ¬(a ∈ f(a))) ∧
      (¬(a ∈ f(a)) → a ∈ f(a))
    ) →
    apply(NonEquivalence_Proposition_Negation)
  } →
  
  apply(Contradiction_Proof()) →
  assert(¬∃a ∈ S: T = f(a)) →
  assert(¬surjective(f)) →
  conclude()
}
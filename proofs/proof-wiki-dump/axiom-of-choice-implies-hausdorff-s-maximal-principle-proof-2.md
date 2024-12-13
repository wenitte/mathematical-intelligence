theorem Hausdorff_Maximal_Principle() {
  assert(
    ∀P(Axiom_of_Choice() → ∃≤(partial_ordering(P)) → 
    ∀X(chain(X,P) → ∃M(maximal_chain(M,P) ∧ X⊆M)))
  )
} ↔

proof Hausdorff_Maximal_Principle() {
  setVar(P: Set, ≤: Relation, X: Set) →
  assume(partial_ordering(≤,P)) →
  assume(chain(X,P)) →
  
  define(C := {Y | chain(Y,P) ∧ X⊆Y}) →
  
  lemma Chain_Maximal_Equivalence() {
    assert(
      ∀Y(maximal_chain(Y,P) ∧ X⊆Y ↔ maximal_element(Y,C))
    )
  } →

  lemma Upper_Bound_Exists() {
    setVar(W: chain(C)) →
    let(Z := ⋃W) →
    
    assert(∀a,b∈Z → 
      ∃A,B∈W(a∈A ∧ b∈B) →
      (A⊆B ∨ B⊆A) →
      (a≤b ∨ b≤a)
    ) →
    
    assert(chain(Z,P)) →
    assert(∀A∈W(A⊆Z)) →
    assert(∀A∈W(X⊆A → X⊆Z)) →
    assert(Z∈C)
  } →

  apply(Zorns_Lemma(C)) →
  apply(Chain_Maximal_Equivalence()) →
  
  assert(∃M(maximal_chain(M,P) ∧ X⊆M))
}
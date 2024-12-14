theorem Compact_Element_iff_Finite_Subset() {
  let(X: Set, E: Set) →
  let(P: OrderedSet(powerSet(X), ⊆)) →
  let(L: ContinuousLattice(S, ⪯)) →
  assert(
    isCompactElement(E, L) ↔ 
    ∃F ∈ Fin(X): (E = ⋂{I ∈ S: F ⊆ I} ∧ F ⊆ E)
  )
}

proof Compact_Element_iff_Finite_Subset() {
  lemma PowerSet_Complete() {
    assert(isCompleteLattice(P))
  } →
  
  lemma Infima_Inheritance() {
    apply(PowerSet_Complete()) →
    assert(isCompleteLattice(L))
  } →
  
  let(operator_L = operator(L)) →
  assert(operator_L(powerSet(X)) = S) →
  
  lemma Preserves_Directed_Suprema() {
    assert(preservesDirectedSuprema(operator_L))
  } →
  
  assert(operator_L(K(P)) = K(operator_L(powerSet(X), ⪯'))) →
  assert(operator_L(K(P)) = K(L)) →
  
  // Sufficient Condition
  proof Forward() {
    assume(isCompactElement(E, L)) →
    assert(E ∈ K(L)) →
    assert(∃x ∈ K(P): E = operator_L(x)) →
    assert(x ⊆ E) →
    assert(isFinite(x)) →
    
    lemma Upper_Closure() {
      assert(∀y ∈ powerSet(X):
        (y ∈ x↑ ∩ S ↔ y ∈ {I ∈ S: x ⊆ I})
      )
    } →
    
    assert(operator_L(x) = inf_P(x↑ ∩ S)) →
    assert(E = ⋂{I ∈ S: x ⊆ I}) →
    conclude(∃F ∈ Fin(X): E = ⋂{I ∈ S: F ⊆ I} ∧ F ⊆ E)
  }

  // Necessary Condition
  proof Backward() {
    assume(∃F ∈ Fin(X): E = ⋂{I ∈ S: F ⊆ I} ∧ F ⊆ E) →
    assert(isCompactElement(F, P)) →
    assert(F ∈ K(P)) →
    assert(F↑ ∩ S = {I ∈ S: F ⊆ I}) →
    assert(operator_L(F) = inf_P(F↑ ∩ S)) →
    assert(operator_L(F) = E) →
    assert(E ∈ K(L)) →
    conclude(isCompactElement(E, L))
  }
}
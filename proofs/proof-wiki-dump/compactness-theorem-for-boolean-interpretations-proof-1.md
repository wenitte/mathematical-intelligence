theorem Compactness_Boolean_Interpretations() {
  assert(
    ∀H[countable_set_WFF] ∧
    (∀H'[H' ⊆ H ∧ finite(H')] → satisfiable_boolean(H')) →
    ∃model(H)
  )
} ↔

proof Compactness_Boolean_Interpretations() {
  proof_by_contradiction() {
    assume(¬∃model(H)) →
    lemma Main_Lemma_Propositional_Tableaux() {
      assert(¬∃model(H) → ∃T[tableau_confutation(T, H)])
    } →
    apply(Main_Lemma_Propositional_Tableaux()) →
    setVar(T: tableau_confutation(T, H)) →
    
    lemma Finite_Tableau_Confutation() {
      assert(∃T[tableau_confutation(T, H)] → 
        ∃T'[tableau_confutation(T', H) ∧ finite(T')])
    } →
    apply(Finite_Tableau_Confutation()) →
    
    setVar(H': {x ∈ H | used_in_tableau(x, T)}) →
    assert(finite(H')) →
    
    construct(T'': labeled_tree) {
      assert(structure(T'') = structure(T)) ∧
      assert(root(T'') = H') ∧
      assert(tableau_confutation(T'', H'))
    } →
    
    lemma Tableau_Confutation_Implies_Unsatisfiable() {
      assert(tableau_confutation(T'', H') → ¬∃model(H'))
    } →
    apply(Tableau_Confutation_Implies_Unsatisfiable()) →
    
    assert(¬∃model(H') ∧ H' ⊆ H ∧ finite(H')) →
    assert(contradiction(
      (∀H'[H' ⊆ H ∧ finite(H')] → satisfiable_boolean(H')),
      ¬∃model(H')
    ))
  } →
  conclude(∃model(H))
}
theorem Compactness_Theorem() {
  assert(
    let(L: Language, T: Set[L_Sentences]) ⇒
    satisfiable(T) ↔ finitely_satisfiable(T)
  )
} ↔

proof Compactness_Theorem() {
  setDef(finitely_satisfiable(T) := ∀S⊆T[finite(S) → satisfiable(S)]) →
  
  lemma Trivial_Direction() {
    assert(satisfiable(T) → finitely_satisfiable(T))
  } →

  lemma Main_Direction() {
    assert(
      ∀κ[cardinal(κ) ∧ κ > |L| ⇒
        finitely_satisfiable(T) → 
        ∃M[model(M,T) ∧ |M| ≤ κ]
      ]
    )
  } →

  proof Main_Direction() {
    setVar(κ: Cardinal, κ > |L|) →
    
    lemma Extend_Theory() {
      assert(
        ∃L*,T*[
          |L*| ≤ κ ∧
          L ⊆ L* ∧
          T ⊆ T* ∧
          has_witness_property(T*)
        ]
      )
    } →
    
    lemma Maximal_Extension() {
      assert(
        ∃T'[
          finitely_satisfiable(T') ∧
          T* ⊆ T' ∧
          complete_theory(T') ∧
          has_witness_property(T')
        ]
      )
    } →

    lemma Model_Existence() {
      assert(
        ∀T'[
          (complete_theory(T') ∧ has_witness_property(T')) →
          ∃M[model(M,T') ∧ |M| ≤ |L*|]
        ]
      )
    } →

    apply(Extend_Theory()) →
    apply(Maximal_Extension()) →
    apply(Model_Existence()) →
    assert(∃M[model(M,T) ∧ |M| ≤ κ])
  } →

  apply(Trivial_Direction()) →
  apply(Main_Direction()) →
  assert(satisfiable(T) ↔ finitely_satisfiable(T))
}
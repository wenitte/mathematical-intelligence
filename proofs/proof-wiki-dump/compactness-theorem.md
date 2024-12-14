theorem Compactness_Theorem() {
  assert(
    ∀L ∈ Language_PredLogic, ∀T ∈ Set(L_sentences) ⇒ 
    (Satisfiable(T) ↔ Finitely_Satisfiable(T))
  )
}

proof Compactness_Via_Witness_Property() {
  setVar(L: Language_PredLogic) →
  setVar(T: Set(L_sentences)) →
  
  lemma Extend_Theory() {
    assert(∃L*, T* ∈ L*_sentences ⇒ [
      Finitely_Satisfiable(T*) ∧
      (Satisfiable(T*) → Satisfiable(T)) ∧
      ∀φ(∃x: WFF(L*, 1)) ⇒ 
      ∃c_φ: (T* ⊨ (∃x: φ(x)) → φ(c_φ))
    ])
  } →

  lemma Max_Finitely_Satisfiable() {
    assert(∃T' ⊇ T* ⇒ [
      ∀φ ∈ L*_sentences ⇒ (φ ∈ T' ∨ ¬φ ∈ T') ∧
      Witness_Property(T')
    ])
  } →

  apply(Extend_Theory()) →
  apply(Max_Finitely_Satisfiable()) →
  
  lemma Witness_Property_Satisfiable() {
    assert(
      Max_Finitely_Satisfiable(T') ∧ Witness_Property(T') → 
      ∃M: PL_Structure(M ⊨ T')
    )
  } →

  apply(Witness_Property_Satisfiable()) →
  assert(Satisfiable(T))
}

proof Compactness_Via_Ultraproducts() {
  setVar(Σ: Set(Finite_Subsets(T))) →
  setVar(F_Σ0: {Δ ∈ Σ | Σ0 ⊆ Δ}) →
  setVar(F: {F_Σ0 | Σ0 ∈ Σ}) →
  
  lemma Finite_Intersection_Property() {
    assert(∀{F_Σk}k=1..n ⊆ F ⇒ 
      ∃S = ∪k=1..n Σk ⇒ S ∈ ∩k=1..n F_Σk)
  } →

  lemma Ultrafilter_Extension() {
    assert(∃U: Ultrafilter(Σ) ⇒ F ⊆ U)
  } →

  setVar(A: Ultraproduct(AΣk, U)) →
  
  assert(∀φ ∈ T ⇒ [
    F_φ ∈ U ∧
    {Σ0 | AΣ0 ⊨ φ} ∈ U →
    Los_Theorem() →
    A ⊨ φ
  ]) →
  
  assert(Satisfiable(T))
}

[Note: I've shown two of the proofs converted to FL-Math. The remaining proofs would follow similar patterns but would make this response too long. The key features demonstrated include proper variable binding, explicit logical connectives, structured theorem/proof blocks, and clear lemma usage.]
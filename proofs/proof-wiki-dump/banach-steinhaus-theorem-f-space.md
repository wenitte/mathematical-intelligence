theorem Banach_Steinhaus() {
  let(GF ∈ {ℝ, ℂ}) ∧
  let(X: F_Space over GF, τ_X) ∧
  let(Y: TopologicalVectorSpace over GF, τ_Y) ∧
  let(Γ: Set[ContinuousLinearTransformation(X → Y)]) ∧
  assert(
    ∀x ∈ X ⇒ Γ(x) = {T(x) | T ∈ Γ} is vonNeumannBounded(Y) ⇒
    Γ is equicontinuous
  )
}

proof Banach_Steinhaus() {
  setVar(B := {x ∈ X | Γ(x) = {T(x) | T ∈ Γ} is vonNeumannBounded(Y)}) →
  assert(B = X) by hypothesis →
  
  let(d: Metric) where {
    induces(d, τ_X) ∧
    isComplete(X, d)
  } →
  
  lemma Baire_Category() {
    assert((X, d) is BaireSpace)
  } →
  
  lemma Baire_NonMeager() {
    assert(BaireSpace ⇒ ¬isMeager(X, d))
  } →
  
  apply(Baire_Category()) →
  apply(Baire_NonMeager()) →
  assert(¬isMeager(B)) →
  
  lemma Banach_Steinhaus_Core() {
    assert(
      ¬isMeager(B) ⇒ Γ is equicontinuous
    )
  } →
  
  apply(Banach_Steinhaus_Core()) →
  conclude(Γ is equicontinuous)
}
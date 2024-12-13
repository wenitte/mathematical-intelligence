theorem Baire_Space_iff_Open_Sets_NonMeager() {
  assert(
    ∀T[TopologicalSpace] = ⟨S,τ⟩ ↔ 
    (isBaireSpace(T) ↔ ∀A∈τ(A≠∅ → ¬isMeager(A,T)))
  )
}

proof Baire_Space_iff_Open_Sets_NonMeager() {
  // Prove by contrapositive
  setVar(T: TopologicalSpace) →
  assert(¬isBaireSpace(T) ↔ ∃A∈τ(A≠∅ ∧ isMeager(A,T))) →

  // Definitions
  lemma BaireSpaceDef() {
    assert(isBaireSpace(T) ↔ 
      ∀F[CountableSet](
        (∀Fi∈F(isClosed(Fi) ∧ isNowhereDense(Fi))) → 
        (⋃F)°=∅
      ))
  } →

  lemma MeagerDef() {
    assert(∀A⊆S(
      isMeager(A,T) ↔ 
      ∃{Ai}i∈I[CountableFamily](
        A=⋃i∈IAi ∧ ∀i∈I(isNowhereDense(Ai))
      ))
    )
  } →

  // Sufficient Condition
  proof SufficientCondition() {
    assume(¬isBaireSpace(T)) →
    exists(F: CountableSet, 
      (∀Fi∈F(isClosed(Fi) ∧ isNowhereDense(Fi))) ∧
      (⋃F)°≠∅) →
    setVar(F': {Fi∩(⋃F)° | Fi∈F}) →
    assert(∀i((Fi∩(⋃F)°)⊆Fi)) →
    assert(∀i(isNowhereDense(Fi∩(⋃F)°))) →
    
    // Set equality chain
    assert(⋃F' = ⋃i∈I(Fi∩(⋃F)°)) →
    assert(= (⋃F)°∩⋃i∈IFi) →
    assert(= (⋃F)°∩⋃F) →
    assert(= (⋃F)°) →
    
    conclude(∃A∈τ(A≠∅ ∧ isMeager(A,T)))
  } →

  // Necessary Condition
  proof NecessaryCondition() {
    assume(∃A∈τ(A≠∅ ∧ isMeager(A,T))) →
    exists(A: Set, {Ai}i∈I: CountableFamily,
      A=⋃i∈IAi ∧ ∀i∈I(isNowhereDense(Ai))) →
    assert(∀i∈I((Ai⁻)°=∅)) →
    assert(∀i∈I(isClosed(Ai⁻) ∧ isNowhereDense(Ai⁻))) →
    
    // Set containment chain
    assert(A = A° = (⋃i∈IAi)° ⊆ (⋃i∈IAi⁻)°) →
    
    conclude(¬isBaireSpace(T))
  }
}
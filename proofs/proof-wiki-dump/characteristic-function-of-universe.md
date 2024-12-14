theorem CharFuncUniverse() {
  assert(
    ∀S: Set ∧
    χ_S: S → {0,1} ∧
    isCharacteristicFunction(χ_S, S) ⇒
    χ_S = f₁
    where f₁: S → {0,1} ∧ isConstantMapping(f₁, 1)
  )
} ↔

proof CharFuncUniverse() {
  setVar(S: Set) →
  setVar(χ_S: S → {0,1}) →
  
  lemma CharFuncFiberDef() {
    assert(
      ∀s ∈ S: (χ_S(s) = 1 ↔ s ∈ S)
    )
  } →
  
  apply(CharFuncFiberDef()) →
  
  assert(
    ∀s ∈ S: s ∈ S
  ) →
  
  assert(
    ∀s ∈ S: χ_S(s) = 1
  ) →
  
  lemma ConstantMappingDef() {
    assert(
      (∀s ∈ S: χ_S(s) = 1) ↔ (χ_S = f₁)
    )
  } →
  
  apply(ConstantMappingDef()) →
  
  conclude(χ_S = f₁)
}
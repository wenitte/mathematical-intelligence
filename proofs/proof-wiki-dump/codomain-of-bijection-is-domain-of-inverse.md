theorem Codomain_Of_Bijection_Is_Domain_Of_Inverse() {
  assert(
    ∀S,T: Set ∧
    ∀f: S → T ∧
    isBijection(f) ∧
    ∃f⁻¹: T → S ∧
    isInverse(f, f⁻¹) ⇒
    Dom(f⁻¹) = Cdm(f)
  )
} ↔

proof Codomain_Of_Bijection_Is_Domain_Of_Inverse() {
  setVar(S: Set) →
  setVar(T: Set) →
  setVar(f: S → T) →
  setVar(f⁻¹: T → S) →
  
  assert(Dom(f) = S) →
  assert(Cdm(f) = T) →
  assert(Dom(f⁻¹) = T) →
  assert(Cdm(f⁻¹) = S) →
  
  lemma DomainCodomainsEqual() {
    assert(Dom(f⁻¹) = T ∧ T = Cdm(f)) →
    assert(Dom(f⁻¹) = Cdm(f))
  } →
  
  apply(DomainCodomainsEqual()) →
  assert(Dom(f⁻¹) = Cdm(f))
}
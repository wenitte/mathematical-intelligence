theorem Bijection_Cardinality() {
  assert(
    ∀S,T: Set ∧ 
    |S| = |T| = n ∧ 
    isFinite(S) ∧ isFinite(T) ⇒
    |{f: S → T | isBijection(f)}| = n!
  )
} ↔

proof Bijection_Cardinality() {
  setVar(S,T: Set) →
  assert(|S| = |T| = n) →
  assert(isFinite(S) ∧ isFinite(T)) →
  
  lemma Injection_Cardinality() {
    assert(
      ∀A,B: Set ∧
      |A| ≤ |B| ∧
      isFinite(A) ∧ isFinite(B) ⇒
      |{f: A → B | isInjection(f)}| = |B|!/(|B|-|A|)!
    )
  } →
  
  lemma Finite_Set_Mapping_Equivalence() {
    assert(
      ∀X,Y: Set ∧
      |X| = |Y| ∧
      isFinite(X) ∧ isFinite(Y) ⇒
      (isBijection(f) ↔ isInjection(f))
    )
  } →
  
  apply(Injection_Cardinality()) →
  apply(Finite_Set_Mapping_Equivalence()) →
  assert(|{f: S → T | isBijection(f)}| = n!/(n-n)!) →
  assert(|{f: S → T | isBijection(f)}| = n!)
}
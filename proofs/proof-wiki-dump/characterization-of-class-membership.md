theorem Class_Membership_Characterization() {
  assert(
    ∀A,B [Classes(A) ∧ Classes(B)] ⇒
    (A ∈ B ↔ ∃x[Set(x) ∧ A = x ∧ x ∈ B])
  )
}

proof Class_Membership_Characterization() {
  setVar(V: Class) →
  assert(UniversalClass(V)) →
  
  lemma Universal_Class_Contains() {
    assert(
      ∀C[Class(C) ⇒ C ⊆ V]
    )
  } →
  
  apply(Universal_Class_Contains()) →
  assert(A ⊆ V ∧ B ⊆ V) →
  
  lemma Universal_Class_Elements() {
    assert(
      ∀x[x ∈ V ⇒ Set(x)]
    )
  } →
  
  apply(Universal_Class_Elements()) →
  assert(∀x[x ∈ B ⇒ Set(x)]) →
  
  lemma Element_Membership() {
    assert(
      A ∈ B ⇒ Set(A)
    )
  } →
  
  apply(Element_Membership()) →
  assert(A ∈ B ⇒ ∃x[Set(x) ∧ A = x ∧ x ∈ B]) →
  assert(∃x[Set(x) ∧ A = x ∧ x ∈ B] ⇒ A ∈ B)
}
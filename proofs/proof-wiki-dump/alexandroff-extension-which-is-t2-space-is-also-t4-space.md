theorem Alexandroff_T2_Implies_T4() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T ≠ ∅) ∧
    ∀p(p ∉ S) ∧
    let S* = S ∪ {p} ∧
    let T* = ⟨S*,τ*⟩ ∧
    IsAlexandroffExtension(T*,S) ∧
    IsT2Space(T*) 
    ⇒ 
    IsT4Space(T*)
  )
} ↔

proof Alexandroff_T2_Implies_T4() {
  lemma L1() {
    assert(
      IsAlexandroffExtension(T*,S) ⇒ IsCompact(T*)
    )
  } →
  
  lemma L2() {
    assert(
      IsCompact(T*) ∧ IsT2Space(T*) ⇒ IsT4Space(T*)
    )
  } →
  
  apply(L1()) →
  assert(IsCompact(T*)) →
  apply(L2()) →
  assert(IsT4Space(T*))
}
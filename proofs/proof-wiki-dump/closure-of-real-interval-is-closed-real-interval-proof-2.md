theorem Closure_Real_Interval() {
  assert(
    ∀I ∈ {ℝ-intervals} ⇒
    (I = (a,b) ∨ I = [a,b) ∨ I = (a,b] ∨ I = [a,b]) ∧
    I^- := closure(I) ⇒
    I^- = [a,b]
  )
} ↔

proof Closure_Real_Interval() {
  setVar(I: ℝ-interval) →
  setVar(x: ℝ) →
  
  assert(
    x ∈ I^- ↔ ∀U(open in ℝ ∧ x ∈ U ⇒ U ∩ I ≠ ∅)
  ) →
  
  assert(
    ∀U(open in ℝ) ⇒ ∃{U_i}(U = ∪U_i ∧ each U_i is open interval)
  ) →
  
  assert(
    x ∈ I^- ↔ ∀V(V open interval ∧ x ∈ V ⇒ V ∩ I ≠ ∅)
  ) →
  
  lemma Forward_Inclusion() {
    assert(
      x ∈ [a,b] ⇒ x ∈ I^-
    )
  } →
  
  lemma Reverse_Inclusion() {
    assert(
      x ∉ [a,b] ⇒ x ∉ I^-
    )
  } →
  
  apply(Forward_Inclusion()) →
  apply(Reverse_Inclusion()) →
  
  assert(
    [a,b] ⊆ I^- ∧ I^- ⊆ [a,b] ⇒ I^- = [a,b]
  )
}
theorem Cardinality_Residue_Classes() {
  assert(
    ∀m ∈ ℤ_{>0} ⇒ |ℤ_m| = m
    where ℤ_m := {set of residue classes modulo m}
  )
} ↔

proof Cardinality_Residue_Classes() {
  setVar(m: ℤ_{>0}) →
  
  lemma Residue_Class_Definition() {
    assert(
      ℤ_m = ℤ/ℝ_m ∧
      ℝ_m = {(a,b) ∈ ℤ × ℤ : ∃k ∈ ℤ, a = b + km}
    )
  } →
  
  lemma Residue_Class_Elements() {
    assert(
      ℤ_m = {[0]_m, [1]_m, ..., [m-1]_m}
      where [x]_m := equivalence class of x modulo m
    )
  } →
  
  apply(Residue_Class_Definition()) →
  apply(Residue_Class_Elements()) →
  
  assert(
    |ℤ_m| = |{0, 1, ..., m-1}| ∧
    |{0, 1, ..., m-1}| = m
  ) →
  
  conclude(|ℤ_m| = m)
}
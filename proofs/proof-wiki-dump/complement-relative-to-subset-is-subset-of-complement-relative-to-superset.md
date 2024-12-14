theorem Complement_Relative_Subset() {
  assert(
    ∀A,B,C ∈ Set : (A ⊆ B ∧ B ⊆ C) →
    (B ∖ A) ⊆ (C ∖ A)
  )
} ↔

proof Complement_Relative_Subset() {
  setVar(A,B,C: Set) →
  assume(A ⊆ B ∧ B ⊆ C) →
  
  letVar(x ∈ (B ∖ A)) →
  
  assert(x ∈ B ∧ x ∉ A) by defn(RelativeComplement) →
  
  assert(x ∈ C) by {
    x ∈ B ∧
    B ⊆ C →
    x ∈ C
  } →
  
  assert(x ∈ C ∧ x ∉ A) →
  
  assert(x ∈ (C ∖ A)) by defn(RelativeComplement) →
  
  conclude((B ∖ A) ⊆ (C ∖ A)) by defn(Subset)
}
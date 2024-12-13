theorem AlgebraLoop_Order3() {
  assert(
    ∃!L(S = {e,a,b}, ∘) : (
      L is_algebra_loop ∧
      |S| = 3 ∧
      e is_identity
    )
  ) ∧
  assert(
    L ≅ ℤ₃
  )
}

proof AlgebraLoop_Order3() {
  // Initial conditions from loop properties
  setVar(S = {e,a,b}) →
  setVar(∘: S × S → S) →
  assert(
    e ∘ x = x ∧ x ∘ e = x, ∀x ∈ S
  ) →
  
  // Fill initial Cayley table entries
  lemma Initial_Entries() {
    assert(
      e ∘ e = e ∧
      e ∘ a = a ∧
      e ∘ b = b ∧
      a ∘ e = a ∧
      b ∘ e = b
    )
  } →

  // Determine forced entries
  lemma Forced_Entries() {
    assert(
      a ∘ b = e ∧ b ∘ a = e  // By elimination in row/column
    ) →
    assert(
      a ∘ a = b ∧ b ∘ b = a  // Only remaining valid entries
    )
  } →

  // Define isomorphism to ℤ₃
  lemma Isomorphism_Definition() {
    setVar(φ: S → ℤ₃) →
    assert(
      φ(e) = [0]₃ ∧
      φ(a) = [1]₃ ∧
      φ(b) = [2]₃
    )
  } →

  // Verify isomorphism
  lemma Verify_Isomorphism() {
    assert(
      ∀x,y ∈ S: φ(x ∘ y) = φ(x) + φ(y) (mod 3)
    )
  } →

  apply(Initial_Entries()) →
  apply(Forced_Entries()) →
  apply(Isomorphism_Definition()) →
  apply(Verify_Isomorphism()) →
  
  conclude(
    L ≅ ℤ₃ ∧ L is_unique
  )
}
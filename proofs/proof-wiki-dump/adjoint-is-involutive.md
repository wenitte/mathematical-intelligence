theorem Adjoint_Is_Involutive() {
  assert(
    ∀F ∈ {ℝ, ℂ} ∧
    ∀H = ⟨H, ⟨·,·⟩_H⟩ ∧ ∀K = ⟨K, ⟨·,·⟩_K⟩ [Hilbert spaces over F] ∧
    ∀A: H → K [bounded linear transformation] ⇒
    A** = A
  )
} ↔

proof Adjoint_Is_Involutive() {
  setVar(x: H, y: K) →
  
  lemma Adjoint_Definition() {
    assert(⟨Ay, x⟩_H = ⟨y, A*x⟩_K)
  } →
  
  assert(⟨Ay, x⟩_H = ⟨y, A*x⟩_K) [by Adjoint_Definition] →
  
  assert(conjugate(⟨Ay, x⟩_H) = conjugate(⟨y, A*x⟩_K)) [taking conjugates] →
  
  lemma Inner_Product_Conjugate_Symmetry() {
    assert(
      conjugate(⟨u, v⟩) = ⟨v, u⟩ [∀u,v in Hilbert space]
    )
  } →
  
  apply(Inner_Product_Conjugate_Symmetry()) →
  assert(⟨x, Ay⟩_H = ⟨A*x, y⟩_K) →
  
  lemma Adjoint_Definition_Again() {
    assert(⟨x, Ay⟩_H = ⟨x, (A*)*y⟩_H)
  } →
  
  lemma Adjoint_Uniqueness() {
    assert(
      [If ⟨x, By⟩ = ⟨x, Cy⟩ ∀x,y ⇒ B = C]
    )
  } →
  
  apply(Adjoint_Uniqueness()) →
  assert(A** = A)
}
theorem Adjoint_Direct_Sum() {
  assert(
    ∀(GF ∈ {ℝ,ℂ}) ∧
    ∀(I: Index) ∧
    ∀({Hi,⟨·,·⟩i}i∈I: HilbertSpaceFamily(GF)) ∧
    ∀(Ti: BoundedLinearOp(Hi → Hi))i∈I ∧
    sup{‖Ti‖B(Hi): i∈I} < ∞ ∧
    H = ⊕i∈I Hi ∧
    T = ⊕i∈I Ti
    ⇒
    T* = ⊕i∈I Ti*
  )
} ↔

proof Adjoint_Direct_Sum() {
  lemma Norm_Equality() {
    assert(∀i∈I: ‖Ti‖B(Hi) = ‖Ti*‖B(Hi))
  } →
  
  apply(Norm_Equality()) →
  assert(sup{‖Ti*‖B(Hi): i∈I} < ∞) →
  
  setVar(f,g: H) →
  
  assert(⟨Tf,g⟩ = ∑{⟨Tifi,gi⟩i: i∈I}) →
  
  lemma Adjoint_Definition() {
    assert(∀i∈I: ⟨Tifi,gi⟩i = ⟨fi,Ti*gi⟩i)
  } →
  
  apply(Adjoint_Definition()) →
  assert(∑{⟨Tifi,gi⟩i: i∈I} = ∑{⟨fi,Ti*gi⟩i: i∈I}) →
  
  lemma Direct_Sum_Definition() {
    assert(∑{⟨fi,Ti*gi⟩i: i∈I} = ⟨f,(⊕i∈I Ti*)g⟩)
  } →
  
  apply(Direct_Sum_Definition()) →
  assert(⟨Tf,g⟩ = ⟨f,(⊕i∈I Ti*)g⟩) →
  
  conclude(T* = ⊕i∈I Ti*)
}
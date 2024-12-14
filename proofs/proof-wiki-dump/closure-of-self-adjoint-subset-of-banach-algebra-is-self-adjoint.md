theorem Closure_Self_Adjoint_Set() {
  assert(
    ∀A[struct(A, *): *-algebra(ℂ)] ∧
    ∀S[S ⊆ A ∧ is_self_adjoint(S)] ⇒
    is_self_adjoint(closure(S))
  )
} ↔

proof Closure_Self_Adjoint_Set() {
  setVar(x ∈ closure(S)) →
  
  lemma Point_Closure_Sequence() {
    assert(
      ∃{xₙ}[sequence(xₙ) ∧ xₙ ∈ S ∧ lim(n→∞)xₙ = x]
    )
  } →
  
  assert(xₙ ∈ S ⇒ xₙ* ∈ S) by(is_self_adjoint(S)) →
  
  lemma Star_Convergent_Sequence() {
    assert(
      xₙ → x ⇒ xₙ* → x*
    )
  } →
  
  apply(Star_Convergent_Sequence()) →
  
  lemma Point_Closure_Limit() {
    assert(
      lim(n→∞)xₙ* = x* ⇒ x* ∈ closure(S)
    )
  } →
  
  assert(x ∈ closure(S) ⇒ x* ∈ closure(S)) →
  
  conclude(is_self_adjoint(closure(S)))
}
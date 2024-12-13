theorem Arccsc_Log_Form() {
  assert(
    ∀x ∈ ℝ ∧ x ∈ (-∞,-1] ∪ [1,∞) →
    arccsc(x) = -i⋅Ln(√(1 - 1/x²) + i/x)
  ) where {
    define(Ln: principal_branch(log) | Im(Ln) ∈ [-π,π])
  }
}

proof Arccsc_Log_Form() {
  setVar(x: ℝ | x ∈ (-∞,-1] ∪ [1,∞)) →
  
  assert(arccsc(x) = arcsin(1/x)) by {
    apply(Arccsc_Reciprocal_Identity)
  } →
  
  assert(arcsin(1/x) = -i⋅Ln(√(1-(1/x)²) + i⋅(1/x))) by {
    apply(Arcsin_Log_Form, u=1/x)
  } →
  
  assert(-i⋅Ln(√(1-(1/x)²) + i⋅(1/x)) = -i⋅Ln(√(1-1/x²) + i/x)) by {
    apply(algebraic_simplification)
  } →
  
  conclude(arccsc(x) = -i⋅Ln(√(1-1/x²) + i/x))
}
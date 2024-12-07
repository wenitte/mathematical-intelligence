theorem_definition(Cramer_Rule) ↔
    ∀A ∈ M_n(R), ∀b ∈ R^n,
    A(A.cramer(b)) = det(A)b →

[definitions ↔
    cramer(A,b)ᵢ := det(A_i(b))/det(A) ∧
    A_i(b) := matrix A with ith column replaced by b]

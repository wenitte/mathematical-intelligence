theorem_definition(Desargues) ↔
    ∀A,B,C,A₁,B₁,C₁,S ∈ PO,
    C ≠ C₁ ∧ B ≠ B₁ ∧ C ≠ S ∧ B ≠ S ∧ C₁ ≠ S ∧
    B₁ ≠ S ∧ A₁ ≠ B₁ ∧ A₁ ≠ C₁ ∧ B ≠ C ∧ B₁ ≠ C₁ ∧
    triangle(A,A₁,B) ∧
    triangle(A,A₁,C) ∧
    aligned(A,A₁,S) ∧
    aligned(B,B₁,S) ∧
    aligned(C,C₁,S) ∧
    parallel(line(A,B), line(A₁,B₁)) ∧
    parallel(line(A,C), line(A₁,C₁)) →
    parallel(line(B,C), line(B₁,C₁))

sequence_definition(S) ↔
    {xₙ} sequence in X metric space
    x ∈ X
    xₙ → x ↔ ∀ε > 0, ∃N ∈ ℕ
    n ≥ N → d(xₙ,x) < ε
→

[cauchy_sequence(C) ↔
    ∀ε > 0, ∃N ∈ ℕ
    m,n ≥ N → d(xₘ,xₙ) < ε]
→

[completeness(M) ↔
    {xₙ} Cauchy in X
    → ∃x ∈ X
    xₙ → x]
→

[limit_uniqueness(U) ↔
    X Hausdorff
    xₙ → x ∧ xₙ → y
    → x = y]

tietze_definition(T) ↔
    X normal space
    A ⊆ X closed
    f: A → [a,b] continuous
→

[extension_existence(E) ↔
    ∃F: X → [a,b] continuous
    F|_A = f]
→

[construction(C) ↔
    ∀ε > 0, ∃g: X → [a,b]
    |g(x) - f(x)| < ε ∀x ∈ A
    → F = lim g_n
    where g_n constructed inductively]
→

[corollary(R) ↔
    A ⊆ X closed
    X normal
    → C(A,[a,b]) ≅ {F ∈ C(X,[a,b]): F|_A = f}]

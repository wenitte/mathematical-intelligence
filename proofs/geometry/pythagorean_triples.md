theorem_definition(Pythagorean_triples) ↔
    ∀a, b, c ∈ ℕ:
    a² + b² = c² ↔ ∃m, n ∈ ℕ : gcd(m, n) = 1 ∧ m > n ∧
    a = m² − n², b = 2mn, c = m² + n²
→

[primitive_definition(P) ↔
    (a, b, c) is primitive ↔ gcd(a, b) = gcd(b, c) = gcd(a, c) = 1
    ∧ a² + b² = c²]
→

[scaling_property(S) ↔
    ∀k ∈ ℕ, (ka, kb, kc) is a Pythagorean triple if (a, b, c) is a Pythagorean triple]
→

[triangle_ratio(T) ↔
    Define m/n = (a + c) / b reduced to lowest terms:
    gcd(m, n) = 1, m > n]
→

[relation_from_ratio(R) ↔
    From m/n:
    b(m² − n²) = a(2mn), with m² − n² and 2mn relatively prime]
→

[case_analysis(C) ↔
    Case 1: m ≢ n (mod 2) (opposite parity)
        b = 2mn, a = m² − n², c = m² + n²
    Case 2: m ≡ n (mod 2) (both odd)
        b = mn, a = (m² − n²)/2, c = (m² + n²)/2
        Rewrite using u = (m + n)/2, v = (m − n)/2:
        a = 2uv, b = u² − v², c = u² + v²]
→

[parametric_equivalence(E) ↔
    Parametric equations from both cases are equivalent:
    ∀m, n ∈ ℕ, m > n, gcd(m, n) = 1, opposite parity:
    a = m² − n², b = 2mn, c = m² + n²]
→

[conclusion(C) ↔
    ∀a, b, c ∈ ℕ:
    a² + b² = c² ↔ ∃m, n ∈ ℕ : gcd(m, n) = 1, m > n, opposite parity
    a = m² − n², b = 2mn, c = m² + n²
    ∴ Proved.]

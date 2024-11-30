series_definition(f) ↔
    g(x) = πx⁻²cot(πx)
    poles(g) = {x ∈ ℤ : cot(πx) → ∞}
→

[residue_definition(R) ↔
    residues(g, x) =
        {−π²/3 if x = 0,
         1/n² if x = n ∧ n ≠ 0}]
→

[contour_definition(C) ↔
    C_N = square_contour(vertices = {(±1 ± i)(N + 1/2)})]
→

[residue_identity(I) ↔
    −π²/3 + 2Σ_{n=1}^N 1/n² = (1/2πi) ∮_{C_N} g(z) dz = I_N]
→

[absolute_cotangent(C_abs) ↔
    ∀z ∈ ℂ, |cot(πz)|² = (cos²(Re(z)) + sinh²(Im(z))) / (sin²(Re(z)) + sinh²(Im(z)))]
→

[vertical_edges(V) ↔
    ∀z ∈ vertical_edges(C_N),
        |cot(πz)|² = sinh²(Im(z)) / (1 + sinh²(Im(z))) ∧ |cot(πz)|² < 1]
→

[horizontal_edges(H) ↔
    ∀z ∈ horizontal_edges(C_N),
        |cot(πz)|² ≤ coth²π(N + 1/2) ∧ coth²π(N + 1/2) < coth²(π/2)]
→

[bounded_f(B_f) ↔
    ∀z ∈ C_N,
        |cot(πz)| ≤ K = coth(π/2) ∧ |f(z)| ≤ (πK) / (N + 1/2)²
    ∴ |I_N| ≤ (8πK(N + 1/2)) / (2π(N + 1/2)²)]
→

[zeta_limit(Z) ↔
    lim_{N → ∞} I_N = 0
    ∴ ζ(2) = π²/6]

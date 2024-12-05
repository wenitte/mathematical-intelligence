theorem_definition(Gauss_Bonnet_Triangle) ↔
    The sum of the internal angles of a triangle on a flat plane is π.
→

[gauss_bonnet_formula(GBF) ↔
    For a triangle \( T \) with vertices \( v_i \) and sides \( \gamma_i \):
    ∫ₜ K dA + Σᵢ ∫_{γᵢ} κ ds + Σᵢ αᵢ = 2π χ(T)
    where:
    - \( K \) is the Gaussian curvature
    - \( κ \) is the geodesic curvature
    - \( αᵢ \) are the external angles at vertices \( v_i \)
    - \( χ(T) \) is the Euler characteristic]
→

[flat_plane_conditions(FPC) ↔
    - For a flat plane: \( K ≡ 0 \)
    - For geodesic triangle sides: \( κ ≡ 0 \)
    - For a contractible region: \( χ(T) = 1 \)]
→

[simplified_formula(SF) ↔
    Under these conditions:
    Σᵢ αᵢ = 2π]
→

[internal_angle_relation(IAR) ↔
    The internal angle at vertex \( v_i \) is:
    \( π - αᵢ \)
    → Σᵢ (π - αᵢ) = π]
→

[conclusion(C) ↔
    The sum of the internal angles of the triangle is \( π \).
    ∴ Proved.]
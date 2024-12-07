theorem_definition(Ptolemy_Circle) ↔
    ∀A,B,C,D ∈ ℝ², ∀centre,radius ∈ ℝ, ∀a,b,c,d ∈ ℝ,
    A = centre + radius[cos(a),sin(a)] ∧
    B = centre + radius[cos(b),sin(b)] ∧
    C = centre + radius[cos(c),sin(c)] ∧
    D = centre + radius[cos(d),sin(d)] ∧
    radius ≥ 0 ∧
    0 ≤ a ≤ b ≤ c ≤ d ≤ 2π →
    |AC||BD| = |AB||CD| + |AD||BC|

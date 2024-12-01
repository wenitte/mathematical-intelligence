theorem_definition(FTC2) ↔
    f ∈ C([a, b]) ∧ F'(x) = f(x)
    → ∫_a^b f(t)dt = F(b) − F(a)
→

proof_goal(P) ↔
    To prove: ∫_a^b f(t)dt = F(b) − F(a)
→

[function_definitions(F) ↔
    Define g(x) = ∫_a^x f(t)dt
    Define h(x) = g(x) − F(x)]
→

[derivative_of_h(D_h) ↔
    h'(x) = g'(x) − F'(x) = f(x) − f(x) = 0
    → h(x) is constant]
→

[constant_property(C) ↔
    h(a) = h(b)
    → g(a) − F(a) = g(b) − F(b)]
→

[relation_from_g(R) ↔
    g(a) = 0
    → g(b) = ∫_a^b f(t)dt]
→

[substitute_h(S) ↔
    g(b) − F(b) = −(g(a) − F(a))]
→

[conclude(C) ↔
    ∫_a^b f(t)dt = F(b) − F(a)
    ∴ Proved.]

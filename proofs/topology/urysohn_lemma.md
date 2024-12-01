urysohn_definition(U) ↔
    X normal space
    A,B ⊆ X closed
    A ∩ B = ∅
→

[continuous_function(F) ↔
    ∃f: X → [0,1] continuous
    ∀x ∈ A, f(x) = 0
    ∀x ∈ B, f(x) = 1]
→

[construction(C) ↔
    ∀r ∈ ℚ ∩ [0,1], ∃U_r open
    r < s → U_r ⊆ U_s
    A ⊆ U_r ∧ cl(U_r) ⊆ U_s
    ∩{cl(U_r): r > t} ⊆ U_t
    f(x) = inf{r: x ∈ U_r}]
→

[normality_characterization(N) ↔
    X normal
    ↔ ∀A,B ⊆ X closed, A ∩ B = ∅
    ∃f: X → [0,1] separating A,B]

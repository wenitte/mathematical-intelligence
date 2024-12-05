theorem_definition(Feuerbach_Theorem) ↔
    ∀Δ(Δ = Triangle(A, B, C) →
        NinePointCircle(Δ) Touches Incircle(Δ) ∧ 
        ∀Excircle(Ex)(NinePointCircle(Δ) Touches Ex)).
→

lemma_definition(Orthocenter_Circumcircle) ↔
    ∀Δ(H = Orthocenter(Δ) ∧ O = Circumcenter(Δ) →
        Projection(ON, FE) = r − (1/4)(AH + HK)).
→

lemma_definition(Projection_Relations) ↔
    ∀Δ(A₁ = Midpoint(BC) ∧ Y = Perpendicular(O, AK) →
        Projection(IN, FE) = r − (1/4)(AH + HK) ∧ 
        Projection(IN, BC) = (1/4)(OY²) − r(FG)).
→

lemma_definition(NinePointCircle_Construction) ↔
    ∀Δ(Points(A₁, B₁, C₁) ∧ H = Orthocenter(Δ) →
        NinePointCircle(Δ) PassesThrough Midpoints(BC, AC, AB) ∧ Foots(Perpendiculars)).
→

lemma_definition(Inradius_Circumradius_Relations) ↔
    ∀Δ(I = Incenter(Δ) ∧ r = Inradius(Δ) ∧ R = Circumradius(Δ) →
        IN² = (1/4)(R² − rR + r²)).
→

projection_calculation(Projection_Sum) ↔
    ∀Δ(IN² = Projection(IN, FE) + Projection(IN, BC) →
        IN² = (1/4)(A₁Y² + OY²) − r(FG + GO) + r²).
→

simplification(Projections) ↔
    ∀Δ(IN² = (1/4)(R² − rR + r²)).
→

touch_condition(Incircle_Touch) ↔
    ∀Δ(IN = (1/2)(R − r)).
→

touch_condition(Excircle_Touch) ↔
    ∀Δ(NinePointCircle Touches Excircle(Δ)).
→

proof(Feuerbach_Theorem) ↔
    theorem_definition(Feuerbach_Theorem) →
    (lemma_definition(Orthocenter_Circumcircle) ∧ 
    lemma_definition(Projection_Relations) ∧
    lemma_definition(NinePointCircle_Construction) ∧ 
    lemma_definition(Inradius_Circumradius_Relations)) →
    projection_calculation(Projection_Sum) →
    simplification(Projections) →
    (touch_condition(Incircle_Touch) ∧ 
    touch_condition(Excircle_Touch)) →
    Proved.
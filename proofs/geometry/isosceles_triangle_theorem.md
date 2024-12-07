theorem_definition(isosceles_triangle_theorem) ↔
    ∀∆ABC, AB = AC →
    ∠B = ∠C →

proof(isosceles_triangle_theorem) ↔
    given(AB = AC) ∧ ∆ABC is isosceles →
    construct(AD ⊥ BC at D) ↔ AD is the altitude from A to BC →
    properties_of_altitudes ↔
        ∠ADB = ∠ADC = 90° →
        BD = DC (AD is a perpendicular bisector) →
    consider(∆ADB and ∆ADC) →
        AB = AC (given) ∧ AD = AD (common side) ∧ BD = DC (from bisector property) →
        by(SSS_congruence), ∆ADB ≅ ∆ADC →
        by(CPCT), ∠B = ∠C →

conclusion ↔ ∠B = ∠C ∴ Proved.
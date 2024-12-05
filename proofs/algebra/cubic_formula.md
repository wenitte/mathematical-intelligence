theorem_definition(Cubic_Formula) ↔
∀a, b, c, d (Cubic(a, b, c, d) →
Roots(x³ + ax² + bx + c = 0) ↔
Substitution(x = y - a/3 →
Transform(y³ + (b - a²/3)y + (c - ab/3 + 2a³/27) = 0) →
Rewrite(y³ + dy + e = 0 where d = b - a²/3 and e = c - ab/3 + 2a³/27) →
Substitution(y = ³√u - ³√v →
Expand((³√u - ³√v)³ + d(³√u - ³√v) + e = 0) →
Define(u*v = -e/3 ∧ u+v = -d/3) →
Solve(u = (-e ± √(e² + 4d³/27))/2 ∧ v = (-e ∓ √(e² + 4d³/27))/2) →
Calculate(y = ³√u - ³√v →
Find(x = y - a/3)) →
Conclude(x = (-b/3a ± ³√((…) ± √(…))) / 2))).
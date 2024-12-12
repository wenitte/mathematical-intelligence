# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(x_%2B_y)_dx_%3D_(x_-_y)_dy/Proof_2

Theorem
is a homogeneous differential equation with general solution:

$\arctan \dfrac y x = \ln \sqrt {x^2 + y^2} + C$


Proof
We have:














\(\ds \paren {x + y} \rd x\)

\(=\)







\(\ds \paren {x - y} \rd y\)














\(\ds \leadsto \ \ \)





\(\ds x \rd y - y \rd x\)

\(=\)







\(\ds x \rd x + y \rd y\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \frac {x \rd y - y \rd x} {x^2 + y^2}\)

\(=\)







\(\ds \frac {x \rd x + y \rd y} {x^2 + y^2}\)





dividing through by $x^2 + y^2$








\(\ds \leadsto \ \ \)





\(\ds \frac {x \rd y - y \rd x} {x^2 + y^2}\)

\(=\)







\(\ds \frac {\map \d {x^2 + y^2} } {2 \paren {x^2 + y^2} }\)





Differential of Sum of Squares








\(\ds \leadsto \ \ \)





\(\ds \map \d {\arctan \dfrac y x}\)

\(=\)







\(\ds \frac {\map \d {x^2 + y^2} } {2 \paren {x^2 + y^2} }\)





Differential of Arctangent of Quotient








\(\ds \leadsto \ \ \)





\(\ds \arctan \dfrac y x\)

\(=\)







\(\ds \frac {\map \ln {x^2 + y^2} } 2 + C\)





integrating








\(\ds \leadsto \ \ \)





\(\ds \arctan \dfrac y x\)

\(=\)







\(\ds \ln \sqrt {x^2 + y^2} + C\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.9$: Integrating Factors: Problem $4 \ \text{(d)}$





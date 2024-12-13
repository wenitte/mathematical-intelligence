# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_Root_of_2_a_x_minus_x_squared

Theorem
$\ds \int \dfrac {\d x} {\paren {\sqrt {2 a x - x^2} }^n} = \frac {\paren {x - a} \paren {\sqrt {2 a x - x^2} }^{2 - n} } {\paren {n - 2} a^2} + \frac {n - 3} {\paren {n - 2} a^2} \int \dfrac {\d x} {\paren {\sqrt {2 a x - x^2} }^{n - 2} }$


Proof













\(\ds \int \dfrac {\d x} {\paren {\sqrt {2 a x - x^2} }^{n - 2} }\)

\(=\)







\(\ds \int \paren {\sqrt {2 a x - x^2} }^{2 - n} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {x - a} \paren {\sqrt {2 a x - x^2} }^{2 - n} } {\paren {2 - n} + 1} + \frac {\paren {2 - n} a^2} {\paren {2 - n} + 1} \int \paren {\sqrt {2 a x - x^2} }^{\paren {2 - n} - 2} \rd x\)





Primitive of $\paren {\sqrt {2 a x - x^2} }^{n - 2}$














\(\ds \)

\(=\)







\(\ds \frac {\paren {x - a} \paren {\sqrt {2 a x - x^2} }^{2 - n} } {3 - n} + \frac {\paren {2 - n} a^2} {3 - n} \int \dfrac {\d x} {\paren {\sqrt {2 a x - x^2} }^n} \rd x\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \frac {n - 3} {\paren {n - 2} a^2} \int \dfrac {\d x} {\paren {\sqrt {2 a x - x^2} }^{n - 2} }\)

\(=\)







\(\ds \frac {n - 3} {\paren {n - 2} a^2} \frac {\paren {x - a} \paren {\sqrt {2 a x - x^2} }^{2 - n} } {3 - n} + \int \dfrac {\d x} {\paren {\sqrt {2 a x - x^2} }^n} \rd x\)





multiplying both sides by $\dfrac {n - 3} {\paren {n - 2} a^2}$














\(\ds \)

\(=\)







\(\ds -\frac {\paren {x - a} \paren {\sqrt {2 a x - x^2} }^{2 - n} } {\paren {n - 2} a^2} + \int \dfrac {\d x} {\paren {\sqrt {2 a x - x^2} }^n} \rd x\)





simplifying



from which the result follows immediately.
$\blacksquare$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $50$.





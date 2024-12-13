# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_Root_of_x_squared_plus_a_squared



Theorem
$\ds \int \frac {\d x} {x^2 \sqrt {x^2 + a^2} } = -\frac {\sqrt {x^2 + a^2} } {a^2 x} + C$


Proof
Let:














\(\ds z\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x^2 \sqrt {x^2 + a^2} }\)

\(=\)







\(\ds \int \frac {\d z} {2 z \sqrt z \sqrt {z + a^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {\d z} {z^{3/2} \sqrt {z + a^2} }\)










Using Primitive of $ \dfrac 1 {x^m \sqrt {a x + b} }$:

$\ds \int \frac {\d x} {x^m \sqrt {a x + b} } = -\frac {\sqrt {a x + b} } {\paren {m - 1} b x^{m - 1} } - \frac {\paren {2 m - 3} a} {\paren {2 m - 2} b} \int \frac {\d x} {x^{m - 1} \sqrt {a x + b} }$

Setting:














\(\ds x\)

\(:=\)







\(\ds z\)




















\(\ds m\)

\(:=\)







\(\ds \frac 3 2\)




















\(\ds a\)

\(:=\)







\(\ds 1\)




















\(\ds b\)

\(:=\)







\(\ds a^2\)
























\(\ds \frac 1 2 \int \frac {\d z} {z^{3/2} \sqrt {z + a^2} }\)

\(=\)







\(\ds \frac {-\sqrt{z + a^2} } {2 \paren {\paren {\frac 3 2} - 1} a^2 z^{\paren {3/2} - 1} } - \frac {2 \paren {\frac 3 2} - 3} {2 \paren {2 \paren {\frac 3 2} - 2} a^2} \int \frac {\d z} {z^{\paren {\frac 3 2} - 1} \sqrt {z + a^2} } + C\)





Primitive of $ \dfrac 1 {x^m \sqrt {a x + b} }$














\(\ds \)

\(=\)







\(\ds -\frac {\sqrt {z + a^2} } {a^2 z^{1/2} } - 0 + C\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac {\sqrt {x^2 + a^2} } {a^2 x} + C\)





substituting back for $z$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^2 \sqrt {x^2 - a^2} }$
Primitive of $\dfrac 1 {x^2 \sqrt {a^2 - x^2} }$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.187$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $27$.





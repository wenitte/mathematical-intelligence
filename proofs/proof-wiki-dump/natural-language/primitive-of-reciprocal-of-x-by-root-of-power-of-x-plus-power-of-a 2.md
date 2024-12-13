# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Root_of_Power_of_x_plus_Power_of_a

Theorem
$\ds \int \frac {\d x} {x \sqrt {x^n + a^n} } = \frac 1 {n \sqrt {a^n} } \ln \size {\frac {\sqrt {x^n + a^n} - \sqrt {a^n} } {\sqrt {x^n + a^n} + \sqrt {a^n} } } + C$


Proof













\(\ds u\)

\(=\)







\(\ds \sqrt {x^n + a^n}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {n x^{n - 1} } {2 \sqrt {x^n + a^n} }\)





Derivative of Power, Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x \sqrt {x^n + a^n} }\)

\(=\)







\(\ds \int \frac {2 \sqrt {x^n + a^n} \rd u} {n x^{n - 1} x \sqrt {x^n + a^n} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd u} {n \paren {u^2 - a^n} }\)





completing substitution and simplifying














\(\ds \)

\(=\)







\(\ds \frac 2 n \int \frac {\d u} {\paren {u^2 - \paren {\sqrt {a^n} } ^2} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 2 n \paren {\frac 1 {2 \sqrt {a^n} } \ln \size {\frac {u - \sqrt {a^n} } {u + \sqrt {a^n} } } } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {n \sqrt {a^n} } \ln \size {\frac {\sqrt {x^n + a^n} - \sqrt {a^n} } {\sqrt {x^n + a^n} + \sqrt {a^n} } } + C\)





substituting for $u$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^n \pm a^n$: $14.329$





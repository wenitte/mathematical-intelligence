# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Root_of_Power_of_x_minus_Power_of_a

Theorem
$\ds \int \frac {\d x} {x \sqrt {x^n - a^n} } = \frac 2 {n \sqrt {a^n} } \arccos \sqrt {\frac {a^n} {x^n} }$


Proof













\(\ds u\)

\(=\)







\(\ds \sqrt {x^n - a^n}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {n x^{n - 1} } {2 \sqrt {x^n - a^n} }\)





Derivative of Power, Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x \sqrt {x^n - a^n} }\)

\(=\)







\(\ds \int \frac {2 \sqrt {x^n - a^n} \rd u} {n x^{n - 1} x \sqrt {x^n - a^n} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd u} {n \paren {u^2 + a^n} }\)





completing substitution and simplifying














\(\ds \)

\(=\)







\(\ds \frac 2 n \int \frac {\d u} {\paren {u^2 + \paren {\sqrt {a^n} }^2} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 2 n \paren {\frac 1 {\sqrt {a^n} } \arctan \frac u {\sqrt {a^n} } } + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 2 {n \sqrt {a^n} } \arctan \frac {\sqrt {x^n - a^n} } {\sqrt {a^n} } + C\)





substituting for $u$




Now:














\(\ds y\)

\(=\)







\(\ds \arctan \frac {\sqrt {x^n - a^n} } {\sqrt {a^n} }\)














\(\ds \leadsto \ \ \)





\(\ds \tan y\)

\(=\)







\(\ds \frac {\sqrt {x^n - a^n} } {\sqrt {a^n} }\)





Definition of Real Arctangent








\(\ds \leadsto \ \ \)





\(\ds \tan^2 y\)

\(=\)







\(\ds \frac {x^n - a^n} {a^n}\)





squaring both sides








\(\ds \leadsto \ \ \)





\(\ds \tan^2 y\)

\(=\)







\(\ds \frac {x^n} {a^n} - 1\)














\(\ds \leadsto \ \ \)





\(\ds 1 + \tan^2 y\)

\(=\)







\(\ds \frac {x^n} {a^n}\)














\(\ds \leadsto \ \ \)





\(\ds \sec^2 y\)

\(=\)







\(\ds \frac {x^n} {a^n}\)





Difference of Squares of Secant and Tangent








\(\ds \leadsto \ \ \)





\(\ds \cos^2 y\)

\(=\)







\(\ds \frac {a^n} {x^n}\)





Definition of Secant Function








\(\ds \leadsto \ \ \)





\(\ds \cos y\)

\(=\)







\(\ds \frac {\sqrt {a^n} } {\sqrt {x^n} }\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \arccos \frac {\sqrt {a^n} } {\sqrt {x^n} }\)





Definition of Real Arccosine








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x \sqrt {x^n - a^n} }\)

\(=\)







\(\ds \frac 2 {n \sqrt {a^n} } \arccos \sqrt {\frac {a^n} {x^n} }\)





substituting in $(1)$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^n \pm a^n$: $14.334$





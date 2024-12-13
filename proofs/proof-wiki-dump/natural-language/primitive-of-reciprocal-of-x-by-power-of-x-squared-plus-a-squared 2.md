# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Power_of_x_squared_plus_a_squared

Theorem
$\ds \int \frac {\d x} {x \paren {x^2 + a^2}^n} = \frac 1 {2 \paren {n - 1} a^2 \paren {x^2 + a^2}^{n - 1} } + \frac 1 {a^2} \int \frac {\d x} {x \paren {x^2 + a^2}^{n - 1} }$


Proof
Let:














\(\ds z\)

\(=\)







\(\ds x^2 + a^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x \paren {x^2 + a^2}^n}\)

\(=\)







\(\ds \int \frac {\d z} {2 x^2 z^n}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {\d z} {\paren {z - a^2} z^n}\)





Primitive of Constant Multiple of Function and substituting for $x^2$




From Reduction Formula for Primitive of $x^m \paren {a x + b}^n$: Increment of Power of $x$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {m + 1} b} - \frac {\paren {m + n + 2} a} {\paren {m + 1} b} \int x^{m + 1} \paren {a x + b}^n \rd x$

Let:














\(\ds a\)

\(:=\)







\(\ds 1\)




















\(\ds b\)

\(:=\)







\(\ds -a^2\)




















\(\ds x\)

\(:=\)







\(\ds z\)




















\(\ds m\)

\(:=\)







\(\ds -n\)




















\(\ds n\)

\(:=\)







\(\ds -1\)










Then:














\(\ds \int \frac {\d x} {x \paren {x^2 + a^2}^n}\)

\(=\)







\(\ds \frac 1 2 \int \frac {\d z} {\paren {z - a^2} z^n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {z^{-n + 1} \paren {z - a^2}^{-1 + 1} } {-\paren {-n + 1} a^2} - \frac {\paren {-n + \paren {-1} + 2} } {-\paren {-n + 1} a^2} \int z^{-n + 1} \paren {z - a^2}^{-1} \rd z}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \paren {n - 1} a^2 z^{n-1} } + \frac 1 {2 a^2} \int \frac {\d z} {z^{n - 1} \paren {z - a^2} }\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \paren {n - 1} a^2 \paren {x^2 + a^2}^{n - 1} } + \frac 1 {2 a^2} \int \frac {2 x \rd x} {x^2 \paren {x^2 + a^2}^{n - 1} }\)





substituting for $z$ and $\d z$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \paren {n - 1} a^2 \paren {x^2 + a^2}^{n - 1} } + \frac 1 {a^2} \int \frac {\d x} {x \paren {x^2 + a^2}^{n - 1} }\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 + a^2$: $14.141$





# 

Source: https://proofwiki.org/wiki/Derivative_of_Gaussian_Hypergeometric_Function



Theorem
$\map {\dfrac \d {\d x} } {\map F {a, b; c; x} } = \dfrac {a b} c \map F {a + 1, b + 1; c + 1; x} $
where:

$\map F {a, b; c; x}$ is the Gaussian hypergeometric function of $x$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { a^{\overline k} b^{\overline k} } { c^{\overline k} } \dfrac {x^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$


Proof













\(\ds \map F {a, b; c; x}\)

\(=\)







\(\ds 1 + \dfrac {a b} c x + \dfrac {a \paren {a + 1} b \paren {b + 1} } {c \paren {c + 1} } \dfrac {x^2} {2!} + \cdots + \dfrac {a^{\overline k} b^{\overline k} } {c^{\overline k} } \dfrac {x^k} {k!}\)





Definition of Gaussian Hypergeometric Function








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d x} } {\map F {a, b; c; x} }\)

\(=\)







\(\ds \dfrac {a b} c + \dfrac {a \paren {a + 1} b \paren {b + 1} } {c \paren {c + 1} } x + \cdots + \dfrac {a^{\overline k} b^{\overline k} } {c^{\overline k} } \dfrac {x^{k - 1} } {\paren {k - 1}!}\)





Derivative of Power of Function














\(\ds \)

\(=\)







\(\ds \dfrac {a b} c \paren {1 + \dfrac {\paren {a + 1} \paren {b + 1} } {\paren {c + 1} } x + \cdots + \dfrac {\paren {a + 1}^{\overline k} \paren {b + 1}^{\overline k} } {\paren {c + 1}^{\overline k} } \dfrac {x^k } {k!} }\)





factor out $\dfrac {a b} c$














\(\ds \)

\(=\)







\(\ds \dfrac {a b} c \map F {a + 1, b + 1; c + 1; x}\)









$\blacksquare$


Also see
Gauss's Hypergeometric Theorem


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 31$: Hypergeometric Functions: Miscellaneous Properties: $31.15$





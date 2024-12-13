# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Cosine_of_a_x_over_x



Theorem













\(\ds \int \frac {\cosh a x \rd x} x\)

\(=\)







\(\ds \ln \size x + \sum_{k \mathop \ge 1} \frac {\paren {a x}^{2 k} } {\paren {2 k} \paren {2 k}!} + C\)




















\(\ds \)

\(=\)







\(\ds \ln \size x + \frac {\paren {a x}^2} {2 \times 2!} + \frac {\paren {a x}^4} {4 \times 4!} + \frac {\paren {a x}^6} {6 \times 6!} + \cdots + C\)











Proof













\(\ds \int \frac {\cosh a x \rd x} x\)

\(=\)







\(\ds \int \frac 1 x \paren {\sum_{k \mathop = 0}^\infty \frac {\paren {a x}^{2 k} } {\paren {2 k}!} } \rd x\)





Power Series Expansion for Hyperbolic Cosine Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {a^{2 k} } {\paren {2 k}!} \int \frac 1 x \paren {x^{2 k} } \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} x + \sum_{k \mathop = 1}^\infty \frac {a^{2 k} } {\paren {2 k}!} \int \paren {x^{2 k - 1} } \rd x\)





extracting case for $k = 0$














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} x + \sum_{k \mathop = 1}^\infty \frac {a^{2 k} } {\paren {2 k}!} \frac {x^{2 k} } {2 k} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} x + \sum_{k \mathop \ge 1} \frac {\paren {a x}^{2 k} } {\paren {2 k} \paren {2 k}!} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \ln \size x + \sum_{k \mathop \ge 1} \frac {\paren {a x}^{2 k} } {\paren {2 k} \paren {2 k}!} + C\)





Primitive of Reciprocal



$\blacksquare$


Also see
Primitive of $\dfrac {\sinh a x} x$
Primitive of $\dfrac {\tanh a x} x$
Primitive of $\dfrac {\coth a x} x$
Primitive of $\dfrac {\sech a x} x$
Primitive of $\dfrac {\csch a x} x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.565$





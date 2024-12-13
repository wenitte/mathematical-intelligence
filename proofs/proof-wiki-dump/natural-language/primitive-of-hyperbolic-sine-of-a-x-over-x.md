# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Sine_of_a_x_over_x



Theorem













\(\ds \int \frac {\sinh a x \rd x} x\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \frac {\paren {a x}^{2 k + 1} } {\paren {2 k + 1} \paren {2 k + 1}!} + C\)




















\(\ds \)

\(=\)







\(\ds a x + \frac {\paren {a x}^3} {3 \times 3!} + \frac {\paren {a x}^5} {5 \times 5!} + \cdots\)











Proof













\(\ds \int \frac {\sinh a x \rd x} x\)

\(=\)







\(\ds \int \frac 1 x \paren {\sum_{k \mathop = 0}^\infty \frac {\paren {a x}^{2 k + 1} } {\paren {2 k + 1}!} } \rd x\)





Power Series Expansion for Hyperbolic Sine Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {a^{2 k + 1} } {\paren {2 k + 1}!} \int \frac 1 x \paren {x^{2 k + 1} } \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {a^{2 k + 1} } {\paren {2 k + 1}!} \int x^{2 k} \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {a^{2 k + 1} } {\paren {2 k + 1}!} \frac {x^{2 k + 1} } {2 k + 1} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \frac {\paren {a x}^{2 k + 1} } {\paren {2 k + 1} \paren {2 k + 1}!} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {\cosh a x} x$
Primitive of $\dfrac {\tanh a x} x$
Primitive of $\dfrac {\coth a x} x$
Primitive of $\dfrac {\sech a x} x$
Primitive of $\dfrac {\csch a x} x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$: $14.543$





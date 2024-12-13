# 

Source: https://proofwiki.org/wiki/Primitive_of_Sine_of_a_x_over_x



Theorem













\(\ds \int \frac {\sin a x \d x} x\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \frac {\paren {-1}^k \paren {a x}^{2 k + 1} } {\paren {2 k + 1} \paren {2 k + 1}!} + C\)




















\(\ds \)

\(=\)







\(\ds a x - \frac {\paren {a x}^3} {3 \times 3!} + \frac {\paren {a x}^5} {5 \times 5!} - \cdots\)











Proof













\(\ds \int \frac {\sin a x \rd x} x\)

\(=\)







\(\ds \int \frac 1 x \paren {\sum_{k \mathop = 0}^\infty \paren {-1}^k \frac {\paren {a x}^{2 k + 1} } {\paren {2 k + 1}!} } \rd x\)





Definition of Real Sine Function




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-1}^k a^{2 k + 1} } {\paren {2 k + 1}!} \int \frac 1 x \paren {x^{2 k + 1} } \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-1}^k a^{2 k + 1} } {\paren {2 k + 1}!} \int x^{2 k} \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-1}^k a^{2 k + 1} } {\paren {2 k + 1}!} \frac {x^{2 k + 1} } {2 k + 1} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \frac {\paren {-1}^k \paren {a x}^{2 k + 1} } {\paren {2 k + 1} \paren {2 k + 1}!} + C\)





simplifying



The validity of $(1)$ follows from Sine Function is Absolutely Convergent.
$\blacksquare$


Also see
Primitive of $\dfrac {\cos a x} x$
Primitive of $\dfrac {\tan a x} x$
Primitive of $\dfrac {\cot a x} x$
Primitive of $\dfrac {\sec a x} x$
Primitive of $\dfrac {\csc a x} x$
Primitive of $\dfrac {\sin x} x$ has no Solution in Elementary Functions


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.343$





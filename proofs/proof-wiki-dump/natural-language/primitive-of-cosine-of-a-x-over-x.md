# 

Source: https://proofwiki.org/wiki/Primitive_of_Cosine_of_a_x_over_x



Theorem













\(\ds \int \frac {\cos a x \rd x} x\)

\(=\)







\(\ds \ln \size x + \sum_{k \mathop \ge 1} \frac {\paren {-1}^k \paren {a x}^{2 k} } {\paren {2 k} \paren {2 k}!} + C\)




















\(\ds \)

\(=\)







\(\ds \ln \size x - \frac {\paren {a x}^2} {2 \times 2!} + \frac {\paren {a x}^4} {4 \times 4!} - \frac {\paren {a x}^6} {6 \times 6!} - \cdots + C\)











Proof













\(\ds \int \frac {\cos a x \rd x} x\)

\(=\)







\(\ds \int \frac 1 x \paren {\sum_{k \mathop = 0}^\infty \paren {-1}^k \frac {\paren {a x}^{2 k} }{\paren {2 k}!} } \rd x\)





Definition of Real Cosine Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {-1}^k a^{2 k} } {\paren {2 k}!} \int \frac 1 x \paren {x^{2 k} } \rd x\)





Linear Combination of Primitives




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \int \frac {\rd x} x + \sum_{k \mathop = 1}^\infty \frac {\paren {-1}^k a^{2 k} } {\paren {2 k}!} \int \paren {x^{2 k - 1} } \rd x\)





extracting case for $k = 0$














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} x + \sum_{k \mathop = 1}^\infty \frac {\paren {-1}^k a^{2 k} } {\paren {2 k}!} \frac {x^{2 k} } {2 k} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} x + \sum_{k \mathop \ge 1} \frac {\paren {-1}^k \paren {a x}^{2 k} } {\paren {2 k} \paren {2 k}!} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \ln \size x + \sum_{k \mathop \ge 1} \frac {\paren {-1}^k \paren {a x}^{2 k} } {\paren {2 k} \paren {2 k}!} + C\)





Primitive of Reciprocal



The validity of $(1)$ follows from Cosine Function is Absolutely Convergent.
$\blacksquare$


Also see
Primitive of $\dfrac {\sin a x} x$
Primitive of $\dfrac {\tan a x} x$
Primitive of $\dfrac {\cot a x} x$
Primitive of $\dfrac {\sec a x} x$
Primitive of $\dfrac {\csc a x} x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.373$





# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Tangent_of_a_x_over_x



Theorem













\(\ds \int \frac {\tanh a x \rd x} x\)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \frac {2^{2 k} \paren {2^{2 k} - 1} B_{2 k} \paren {a x}^{2 k - 1} } {\paren {2 k - 1} \paren {2 k}!} + C\)




















\(\ds \)

\(=\)







\(\ds a x - \frac {\paren {a x}^3} 9 + \frac {2 \paren {a x}^5} {75} - \cdots + C\)









where $B_k$ denotes the $k$th Bernoulli number.


Proof













\(\ds \tanh x\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac {2^{2 k} \paren {2^{2 k} - 1} B_{2 k} \, x^{2 k - 1} } {\paren {2 k}!}\)





Power Series Expansion for Hyperbolic Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \frac {\tanh a x} x\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac {2^{2 k} \paren {2^{2 k} - 1} B_{2 k} \paren {a x}^{2 k - 1} } {x \paren {2 k}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac {2^{2 k} \paren {2^{2 k} - 1} B_{2 k} a^{2 k - 1} x^{2 k - 2} } {\paren {2 k}!}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\tanh a x \rd x} x\)

\(=\)







\(\ds \int \paren {\sum_{k \mathop = 1}^\infty \frac {2^{2 k} \paren {2^{2 k} - 1} B_{2 k} a^{2 k - 1} x^{2 k - 2} } {\paren {2 k}!} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \int \frac {2^{2 k} \paren {2^{2 k} - 1} B_{2 k} a^{2 k - 1} x^{2 k - 2} } {\paren {2 k}!} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac {2^{2 k} \paren {2^{2 k} - 1} B_{2 k} a^{2 k - 1} x^{2 k - 1} } {\paren {2 k - 1} \paren {2 k}!} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac {2^{2 k} \paren {2^{2 k} - 1} B_{2 k} \paren {a x}^{2 k - 1} } {\paren {2 k - 1} \paren {2 k}!} + C\)









$\blacksquare$


Also see
Primitive of $\dfrac {\sinh a x} x$
Primitive of $\dfrac {\cosh a x} x$
Primitive of $\dfrac {\coth a x} x$
Primitive of $\dfrac {\sech a x} x$
Primitive of $\dfrac {\csch a x} x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\tanh a x$: $14.612$





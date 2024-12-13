# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Cotangent_of_a_x_over_x



Theorem













\(\ds \int \frac {\coth a x \rd x} x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {2^{2 k} B_{2 k} \paren {a x}^{2 k - 1} } {\paren {2 k}!} + C\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {a x} + \frac {a x} 3 - \frac {\paren {a x}^3} {135} + \cdots + C\)









where $B_k$ denotes the $k$th Bernoulli number.


Proof













\(\ds \coth x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {2^{2 k} B_{2 k} \, x^{2 k - 1} } {\paren {2 k}!}\)





Power Series Expansion for Hyperbolic Cotangent Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 x + \sum_{k \mathop = 1}^\infty \frac {2^{2 k} B_{2 k} \, x^{2 k - 1} } {\paren {2 k}!}\)





extracting the first term, just in case








\(\ds \leadsto \ \ \)





\(\ds \frac {\coth a x} x\)

\(=\)







\(\ds \dfrac 1 {a x^2} + \sum_{k \mathop = 1}^\infty \frac {2^{2 k} B_{2 k} \, \paren {a x}^{2 k - 1} } {x \paren {2 k}!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {a x^2} + \sum_{k \mathop = 1}^\infty \frac {2^{2 k} B_{2 k} a^{2 k - 1} x^{2 k - 2} } {\paren {2 k}!}\)










It is noted that the exponent of $x$ is always even, so there is no need to consider the special case where $x^{-1}$.






\(\ds \leadsto \ \ \)





\(\ds \int \frac {\coth a x \rd x} x\)

\(=\)







\(\ds \int \paren {\dfrac 1 {a x^2} + \sum_{k \mathop = 1}^\infty \frac {2^{2 k} B_{2 k} a^{2 k - 1} x^{2 k - 2} } {\paren {2 k}!} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {a x^2} \rd x + \sum_{k \mathop = 1}^\infty \int \frac {2^{2 k} B_{2 k} a^{2 k - 1} x^{2 k - 2} } {\paren {2 k}!} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 {a x} + \sum_{k \mathop = 1}^\infty \frac {2^{2 k} B_{2 k} a^{2 k - 1} x^{2 k - 1} } {\paren {2 k - 1} \paren {2 k}!} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {2^{2 k} B_{2 k} \paren {a x}^{2 k - 1} } {\paren {2 k}!} + C\)





bringing the first term back inside the summation



$\blacksquare$


Also see
Primitive of $\dfrac {\sinh a x} x$
Primitive of $\dfrac {\cosh a x} x$
Primitive of $\dfrac {\tanh a x} x$
Primitive of $\dfrac {\sech a x} x$
Primitive of $\dfrac {\csch a x} x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\coth a x$: $14.623$





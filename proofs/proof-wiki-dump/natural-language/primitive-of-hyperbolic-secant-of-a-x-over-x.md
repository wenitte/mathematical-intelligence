# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Secant_of_a_x_over_x



Theorem













\(\ds \int \frac {\sech a x \rd x} x\)

\(=\)







\(\ds \ln \size x + \sum_{k \mathop \ge 1} \frac {E_{2 k} \paren {a x}^{2 k} } {\paren {2 k} \paren {2 k}!} + C\)




















\(\ds \)

\(=\)







\(\ds \ln \size x - \frac {\paren {a x}^2} 4 + \frac {\paren {a x}^4} {96} - \frac {\paren {a x}^6} {4320} + \cdots + C\)









where $E_k$ denotes the $k$th Euler number.


Proof













\(\ds \sech x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {E_{2 k} x^{2 k} } {\paren {2 k}!}\)





Power Series Expansion for Hyperbolic Secant Function








\(\ds \leadsto \ \ \)





\(\ds \frac {\sech a x} x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {E_{2 k} \paren {a x}^{2 k} } {x \paren {2 k}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {E_{2 k} a^{2 k} x^{2 k - 1} } {\paren {2 k}!}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x + \sum_{n \mathop = 1}^\infty \frac {E_{2 k} a^{2 k} x^{2 k - 1} } {\paren {2 k}!}\)





extracting the first term, which needs to be handled separately








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\sech a x \rd x} x\)

\(=\)







\(\ds \int \paren {\frac 1 x + \sum_{n \mathop = 1}^\infty \frac {E_{2 k} a^{2 k} x^{2 k - 1} } {\paren {2 k}!} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac 1 x \rd x + \sum_{k \mathop = 1}^\infty \int \frac {E_{2 k} a^{2 k} x^{2 k - 1} } {\paren {2 k}!} \rd x\)




















\(\ds \)

\(=\)







\(\ds \ln \size x + \sum_{k \mathop = 1}^\infty \int \frac {E_{2 k} a^{2 k} x^{2 k - 1} } {\paren {2 k}!} \rd x\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \ln \size x + \sum_{k \mathop = 1}^\infty \frac {E_{2 k} a^{2 k} x^{2 k} } {\paren {2 k} \paren {2 k}!}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \ln \size x + \sum_{k \mathop = 1}^\infty \frac {E_{2 k} \paren {a x}^{2 k} } {\paren {2 k} \paren {2 k}!}\)









$\blacksquare$


Also see
Primitive of $\dfrac {\sinh a x} x$
Primitive of $\dfrac {\cosh a x} x$
Primitive of $\dfrac {\tanh a x} x$
Primitive of $\dfrac {\coth a x} x$
Primitive of $\dfrac {\csch a x} x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sech a x$: $14.633$





# 

Source: https://proofwiki.org/wiki/Primitive_of_Hyperbolic_Cosecant_of_a_x_over_x



Theorem













\(\ds \int \frac {\csch a x \rd x} x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {2 \paren {1 - 2^{2 k - 1} } B_{2 k} \paren {a x}^{2 k - 1} } {\paren {2 k - 1}\paren {2 k}!} + C\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {a x} - \frac {a x} 6 + \frac {7 \paren {a x}^3} {1080} + \cdots + C\)









where $B_{2 k}$ denotes the $2 k$th Bernoulli number.


Proof













\(\ds \csch x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {2 \paren {1 - 2^{2 k - 1} } B_{2 k} x^{2 k - 1} } {\paren {2 k}!}\)





Power Series Expansion for Hyperbolic Cosecant Function








\(\ds \leadsto \ \ \)





\(\ds \frac {\csch a x} x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {2 \paren {1 - 2^{2 k - 1} } B_{2 k} \paren {a x}^{2 k - 1} } {x \paren {2 k}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {2 \paren {1 - 2^{2 k - 1} } B_{2 k} a^{2 k - 1} x^{2 k - 2} } {\paren {2 k}!}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\csch a x \rd x} x\)

\(=\)







\(\ds \int \paren {\sum_{k \mathop = 0}^\infty \dfrac {2 \paren {1 - 2^{2 k - 1} } B_{2 k} a^{2 k - 1} x^{2 k - 2} } {\paren {2 k}!} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \int \dfrac {2 \paren {1 - 2^{2 k - 1} } B_{2 k} a^{2 k - 1} x^{2 k - 2} } {\paren {2 k}!} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {2 \paren {1 - 2^{2 k - 1} } B_{2 k} a^{2 k - 1} x^{2 k - 1} } {\paren {2 k - 1}\paren {2 k}!}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {2 \paren {1 - 2^{2 k - 1} } B_{2 k} \paren {a x}^{2 k - 1} } {\paren {2 k - 1}\paren {2 k}!}\)









$\blacksquare$


Also see
Primitive of $\dfrac {\sinh a x} x$
Primitive of $\dfrac {\cosh a x} x$
Primitive of $\dfrac {\tanh a x} x$
Primitive of $\dfrac {\coth a x} x$
Primitive of $\dfrac {\sech a x} x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\csch a x$: $14.643$





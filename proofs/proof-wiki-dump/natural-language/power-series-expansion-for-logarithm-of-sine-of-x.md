# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Logarithm_of_Sine_of_x

Theorem













\(\ds \ln \size {\sin x}\)

\(=\)







\(\ds \ln \size x - \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n 2^{2 n - 1} B_{2 n} \, x^{2 n} } {n \paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds \ln \size x - \frac {x^2} 6 - \frac {x^4} {180} - \frac {x^6} {2835} + \cdots\)










for all $x \in \R$ such that $0 < \size x < \pi$.


Proof
From Power Series Expansion for Cotangent Function:




\(\text {(1)}: \quad\)









\(\ds \cot x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x - \frac x 3 - \frac {x^3} {45} - \frac {2 x^5} {945} + \cdots\)









for $0 < \size x < \pi$.

From Power Series is Termwise Integrable within Radius of Convergence, $(1)$ can be integrated term by term:














\(\ds \int_0^x \cot x \rd x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \int_0^x \frac {\paren {-1}^{n - 1} 2^{2 n} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^x \frac 1 x \rd x + \sum_{n \mathop = 1}^\infty \int_0^x \frac {\paren {-1}^{n - 1} 2^{2 n} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!} \rd x\)





extracting the zeroth term








\(\ds \leadsto \ \ \)





\(\ds \ln \size {\sin x}\)

\(=\)







\(\ds \ln \size x + \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} B_{2 n} \, x^{2 n} } {\paren {2 n} \paren {2 n}!}\)





Primitive of $\cot x$, Integral of Power, Primitive of Reciprocal








\(\ds \leadsto \ \ \)





\(\ds \ln \size {\sin x}\)

\(=\)







\(\ds \ln \size x - \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n 2^{2 n - 1} B_{2 n} \, x^{2 n} } {n \paren {2 n}!}\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Miscellaneous Series: $20.48$





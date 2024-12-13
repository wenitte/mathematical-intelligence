# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Logarithm_of_Tangent_of_x

Theorem













\(\ds \ln \size {\tan x}\)

\(=\)







\(\ds \ln \size x + \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n - 1} - 1} B_{2 n} \, x^{2 n} } {n \paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds \ln \size x + \frac {x^2} 3 + \frac {7 x^4} {90} + \frac {62 x^6} {2835} + \cdots\)










for all $x \in \R$ such that $0 < \size x < \dfrac \pi 2$.


Proof
From Power Series Expansion for Cosecant Function:














\(\ds 2 \csc 2 x\)

\(=\)







\(\ds 2 \sum_{n \mathop = 0}^\infty \dfrac {\paren {-1}^{n - 1} 2 \paren {2^{2 n - 1} - 1} B_{2 n} \paren {2 x}^{2 n - 1} } {\paren {2 n}!}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 2 \csc 2 x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {\paren {-1}^{n - 1} 2^{2 n + 1} \paren {2^{2 n - 1} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)









for $0 < \size {2 x} < \pi$.

From Power Series is Termwise Integrable within Radius of Convergence, $(1)$ can be integrated term by term:














\(\ds \int 2 \csc 2 x \rd x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \int \dfrac {\paren {-1}^{n - 1} 2^{2 n + 1} \paren {2^{2 n - 1} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!} \rd x\)




















\(\ds \int 2 \csc 2 x \rd x\)

\(=\)







\(\ds \int \frac 1 x \rd x + \sum_{n \mathop = 1}^\infty \int \dfrac {\paren {-1}^{n - 1} 2^{2 n + 1} \paren {2^{2 n - 1} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!} \rd x\)





extracting the zeroth term








\(\ds \leadsto \ \ \)





\(\ds \ln \size {\tan x}\)

\(=\)







\(\ds \ln \size x + \sum_{n \mathop = 1}^\infty \dfrac {\paren {-1}^{n - 1} 2^{2 n + 1} \paren {2^{2 n - 1} - 1} B_{2 n} \, x^{2 n} } {\paren {2 n} \paren {2 n}!}\)





Primitive of $\csc a x$, Integral of Power, Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \ln \size x + \sum_{n \mathop = 1}^\infty \dfrac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n - 1} - 1} B_{2 n} \, x^{2 n} } {n \paren {2 n}!}\)





simplification



for $0 < \size x < \dfrac \pi 2$.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Miscellaneous Series: $20.50$





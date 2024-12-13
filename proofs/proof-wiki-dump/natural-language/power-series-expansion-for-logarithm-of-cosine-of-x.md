# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Logarithm_of_Cosine_of_x

Theorem













\(\ds \ln \size {\cos x}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n 2^{2 n - 1} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n} } {n \paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds -\frac {x^2} 2 - \frac {x^4} {12} - \frac {x^6} {45} - \frac {17 x^8} {2520} - \cdots\)










for all $x \in \R$ such that $\size x < \dfrac \pi 2$.


Proof
From Power Series Expansion for Tangent Function:




\(\text {(1)}: \quad\)









\(\ds \tan x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds x + \frac {x^3} 3 + \frac {2 x^5} {15} + \frac {17 x^7} {315} + \cdots\)









for $\size x < \dfrac \pi 2$.

From Power Series is Termwise Integrable within Radius of Convergence, $(1)$ can be integrated term by term:














\(\ds \int_0^x \tan x \rd x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \int_0^x \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds -\ln \size {\cos x}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n} } {\paren {2 n} \paren {2 n}!}\)





Primitive of $\tan x$: Cosine Form, Integral of Power








\(\ds \leadsto \ \ \)





\(\ds \ln \size {\cos x}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n 2^{2 n - 1} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n} } {n \paren {2 n}!}\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Miscellaneous Series: $20.49$





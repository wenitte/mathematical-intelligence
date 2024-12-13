# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Real_Arcsine_Function



Theorem
The (real) arcsine function has a Taylor series expansion:














\(\ds \arcsin x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n + 1} } {2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds x + \frac {x^3} {2 \times 3} + \frac {\paren {1 \times 3} x^5} {2 \times 4 \times 5} + \frac {\paren {1 \times 3 \times 5} x^7} {2 \times 4 \times 6 \times 7} + \cdots\)









which converges for $-1 \le x \le 1$.


Proof
From the General Binomial Theorem:














\(\ds \paren {1 - x^2}^{-1/2}\)

\(=\)







\(\ds 1 + \frac 1 2 x^2 + \frac {1 \times 3} {2 \times 4} x^4 + \frac {1 \times 3 \times 5} {2 \times 4 \times 6} x^6 + \cdots\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2} x^{2 n}\)









for $-1 < x < 1$.

From Power Series is Termwise Integrable within Radius of Convergence, $(1)$ can be integrated term by term:














\(\ds \int_0^x \frac 1 {\sqrt{1 - t^2} } \rd t\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \int_0^x \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2} t^{2 n} \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \arcsin x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n + 1} } {2 n + 1}\)





Derivative of Arcsine Function




We will now prove that the series converges for $-1 \le x \le 1$.
By Stirling's Formula:














\(\ds \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n + 1} } {2 n + 1}\)

\(\sim\)







\(\ds \frac {\paren {2 n}^{2 n} e^{-2 n} \sqrt {4 \pi n} } {2^{2 n} n^{2 n} e^{-2 n} 2 \pi n} \frac {x^{2 n + 1} } {2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {\pi n} } \frac {x^{2 n + 1} } {2 n + 1}\)










Then:














\(\ds \size {\frac 1 {\sqrt {\pi n} } \frac {x^{2 n + 1} } {2 n + 1} }\)

\(<\)







\(\ds \size {\frac {x^{2 n + 1} } {n^{3/2} } }\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 {n^{3/2} }\)










Hence by Convergence of P-Series:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^{3/2} }$
is convergent.

So by the Comparison Test, the Taylor series is convergent for $-1 \le x \le 1$.
$\blacksquare$


Also see
Power Series Expansion for Real Arccosine Function
Power Series Expansion for Real Arctangent Function
Power Series Expansion for Real Arccotangent Function
Power Series Expansion for Real Arcsecant Function
Power Series Expansion for Real Arccosecant Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Trigonometric Functions: $20.27$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): inverse sine series





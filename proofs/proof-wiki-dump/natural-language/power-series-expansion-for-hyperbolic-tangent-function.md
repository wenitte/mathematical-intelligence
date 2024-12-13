# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Hyperbolic_Tangent_Function



Theorem
The hyperbolic tangent function has a Taylor series expansion:














\(\ds \tanh x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds x - \frac {x^3} 3 + \frac {2 x^5} {15} - \frac {17 x^7} {315} + \frac {62 x^9} {2835} - \cdots\)










where $B_{2 n}$ denotes the Bernoulli numbers.
This converges for $\size x < \dfrac \pi 2$.


Proof
From Power Series Expansion for Hyperbolic Cotangent Function:

$(1): \quad \coth x = \ds \sum_{n \mathop = 0}^\infty \frac {2^{2 n} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}$

Then:














\(\ds \tanh x\)

\(=\)







\(\ds 2 \coth 2 x - \coth x\)





Sum of Hyperbolic Tangent and Cotangent














\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop = 0}^\infty \frac {2^{2 n} B_{2 n} \, \paren {2 x}^{2 n - 1} } {\paren {2 n}!} - \sum_{n \mathop = 0}^\infty \frac {2^{2 n} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)





by $(1)$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)





the term in $n = 0$ vanishes



$\Box$

By Combination Theorem for Limits of Real Functions we can deduce the following.














\(\ds \)

\(\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac {\frac {2^{2 n + 2} \paren {2^{2 n + 2} - 1} B_{2 n + 2} \, x^{2 n + 1} } {\paren {2 n + 2} !} } {\frac {2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {2^{2 n + 2} - 1} } {\paren {2^{2 n} - 1} } \frac 1 {\paren {2 n + 1} \paren {2 n + 2} } \frac {B_{2 n + 2} } {B_{2 n} } } 4 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac {2^{2 n + 2} - 1} {2^{2 n} - 1} } \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {B_{2 n + 2} } {B_{2 n} } } 2 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {4 \frac {2^{2 n} } {2^{2 n} - 1} - \frac 1 {2^{2 n} - 1} } \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {B_{2 n + 2} } {B_{2 n} } } 2 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {4 + \frac 4 {2^{2 n} - 1} - \frac 1 {2^{2 n} - 1} } \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {B_{2 n + 2} } {B_{2 n} } } 2 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {B_{2 n + 2} } { B_{2 n} } } 8 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {\paren {-1}^{n + 2} 4 \sqrt {\pi (n + 1)} \paren {\frac {n + 1} {\pi e} }^{2 n + 2} } {\paren {-1}^{n + 1} 4 \sqrt {\pi n} \paren {\frac n {\pi e} }^{2 n} } } 8 x^2\)





Asymptotic Formula for Bernoulli Numbers














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {n + 1}^2} {\paren {2 n + 1} \paren {n + 1} } \sqrt {\frac {n + 1} n } \paren {\frac {n + 1} n}^{2 n} } \frac 8 {\pi^2 e^2} x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\paren {\frac {n + 1} n}^{2 n} } \frac 4 {\pi^2 e^2} x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\paren {\paren {1 + \frac 1 n}^n}^2} \frac 4 {\pi^2 e^2} x^2\)




















\(\ds \)

\(=\)







\(\ds \frac {4 e^2} {\pi^2 e^2} x^2\)





Definition of Euler's Number as Limit of Sequence














\(\ds \)

\(=\)







\(\ds \frac 4 {\pi^2} x^2\)









This is less than $1$ if and only if:

$\size x < \dfrac \pi 2$
Hence by the Ratio Test, the series converges for $\size x < \dfrac \pi 2$.
$\blacksquare$


Also see
Power Series Expansion for Hyperbolic Sine Function
Power Series Expansion for Hyperbolic Cosine Function
Power Series Expansion for Hyperbolic Cotangent Function
Power Series Expansion for Hyperbolic Secant Function
Power Series Expansion for Hyperbolic Cosecant Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Hyperbolic Functions: $20.35$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions





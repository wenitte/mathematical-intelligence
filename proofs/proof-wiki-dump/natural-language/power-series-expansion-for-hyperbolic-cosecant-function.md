# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Hyperbolic_Cosecant_Function



Theorem
The hyperbolic cosecant function has a Taylor series expansion:














\(\ds \csch x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {2 \paren {1 - 2^{2 n - 1} } B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x - \frac x 6 + \frac {7 x^3} {360} - \frac {31 x^5} {15 \, 120} + \cdots\)










where $B_n$ denotes the Bernoulli numbers.

This converges for $0 < \size x < \pi$.


Proof













\(\ds \sinh x\)

\(=\)







\(\ds 2 \sinh \dfrac x 2 \cosh \dfrac x 2\)





Double Angle Formula for Hyperbolic Sine








\(\ds \leadstoandfrom \ \ \)





\(\ds \dfrac 1 {\sinh x}\)

\(=\)







\(\ds \dfrac 1 {2 \sinh \dfrac x 2 \cosh \dfrac x 2}\)





taking the reciprocal of both sides








\(\ds \leadstoandfrom \ \ \)





\(\ds \csch x\)

\(=\)







\(\ds \dfrac 1 2 \csch \dfrac x 2 \sech \dfrac x 2\)





Cosecant is Reciprocal of Sine, Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \csch \dfrac x 2 \dfrac 2 {e^{\frac x 2} + e^{\frac x 2} }\)





Definition 1 of Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds \csch \dfrac x 2 \dfrac {e^{-\frac x 2} } {1 + e^{-x} }\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \csch x \paren {1 + e^{-x} }\)

\(=\)







\(\ds \csch \dfrac x 2 e^{-\frac x 2}\)





multiplying both sides by $1 + e^{-x}$








\(\ds \leadstoandfrom \ \ \)





\(\ds \csch x\)

\(=\)







\(\ds \csch \dfrac x 2 e^{-\frac x 2} - \csch x e^{-x}\)





subtracting $\csch x e^{-x}$ from both sides














\(\ds \)

\(=\)







\(\ds \dfrac 2 {e^{\frac x 2} - e^{-\frac x 2} } e^{-\frac x 2} - \dfrac 2 {e^x - e^{-x} } e^{-x}\)





Definition 1 of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds 2 \dfrac 1 {e^x - 1} - \dfrac 2 {e^{2 x} - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 x \paren {2 \dfrac x {e^x - 1} - \dfrac {2 x} {e^{2 x} - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 x \sum_{n \mathop = 0}^\infty \paren {2 \dfrac {x^n B_n} {n!} - \dfrac {\paren {2 x}^n B_n} {n!} }\)





Definition of Bernoulli Numbers














\(\ds \)

\(=\)







\(\ds \dfrac 1 x \sum_{n \mathop = 0}^\infty \dfrac {B_n \paren {2 x^n - \paren {2 x}^n} } {n!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {B_n x^{n - 1} 2 \paren {1 - 2^{n - 1} } } {n!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {2 \paren {1 - 2^{2 n - 1} } B_{2 n} x^{2 n - 1} } {\paren {2 n}!}\)





Odd Bernoulli Numbers Vanish and the term $n = 1$ vanishes



$\blacksquare$


Convergence
By Combination Theorem for Limits of Real Functions we can deduce the following.














\(\ds \lim_{n \mathop \to \infty} \size {\frac {\frac {B_{2 n + 2} x^{2 n + 1} 2 \paren {2^{2 n + 1} - 1} } {\paren {2 n + 2}!} } {\frac {B_{2 n} x^{2 n - 1} 2 \paren {2^{2 n - 1} - 1} } {\paren {2 n}!} } }\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac {2^{2 n + 1} - 1} {2^{2 n - 1} - 1} \frac 1 {\paren {2 n + 1} \paren {2 n + 2} } \frac {B_{2 n + 2} } {B_{2 n} } } x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac {2^{2 n + 1} - 1} {2^{2 n - 1} - 1} } \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {B_{2 n + 2} } {B_{2 n} } } \frac 1 2 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac {2^{2 n + 1} } {2^{2 n - 1} - 1} - \frac 1 {2^{2 n - 1} - 1} } \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {B_{2 n + 2} } {B_{2 n} } } \frac 1 2 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {4 \frac {2^{2 n - 1} - 1 + 1} {2^{2 n - 1} - 1} - \frac 1 {2^{2 n - 1} - 1} } \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {B_{2 n + 2} } {B_{2 n} } } \frac 1 2 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {4 + \frac 4 {2^{2 n - 1} - 1} - \frac 1 {2^{2 n - 1} - 1} } \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {B_{2 n + 2} } {B_{2 n} } } \frac 1 2 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {B_{2 n + 2} } {B_{2 n} } } 2 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {B_{2 n + 2} } {B_{2 n} } } 2 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {\paren {-1}^{n + 2} 4 \sqrt {\pi \paren {n + 1} } \paren {\frac {n + 1} {\pi e} }^{2 n + 2} } {\paren {-1}^{n + 1} 4 \sqrt {\pi n} \paren {\frac n {\pi e} }^{2 n} } } 2 x^2\)





Asymptotic Formula for Bernoulli Numbers














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {n + 1}^2} {\paren {2 n + 1} \paren {n + 1} } \sqrt{\frac {n + 1} n} \paren {\frac {n + 1} n}^{2 n} } \frac 2 {\pi^2 e^2} x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\paren {\frac {n + 1} n}^{2 n} } \frac 1 {\pi^2 e^2} x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\paren {\paren {1 + \frac 1 n}^n}^2} \frac 1 {\pi^2 e^2} x^2\)




















\(\ds \)

\(=\)







\(\ds \frac {e^2} {\pi^2 e^2} x^2\)





Definition of Euler's Number as Limit of Sequence














\(\ds \)

\(=\)







\(\ds \frac 1 {\pi^2} x^2\)









This is less than $1$ if $\size x < \pi$.
Hence by the Ratio Test, the outer radius of convergence is $\pi$
The principal part of the Laurent series is finite so converges for $x \ne 0$.
Thus we have the annulus of convergence to be $0 < \size x < \pi$.
$\blacksquare$


Also see
Power Series Expansion for Hyperbolic Sine Function
Power Series Expansion for Hyperbolic Cosine Function
Power Series Expansion for Hyperbolic Tangent Function
Power Series Expansion for Hyperbolic Cotangent Function
Power Series Expansion for Hyperbolic Secant Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Hyperbolic Functions: $20.38$





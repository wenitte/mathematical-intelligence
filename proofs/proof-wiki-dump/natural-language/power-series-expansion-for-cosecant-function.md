# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Cosecant_Function



Theorem
The cosecant function has a Laurent series expansion:














\(\ds \csc x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {\paren {-1}^{n - 1} 2 \paren {2^{2 n - 1} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x + \frac x 6 + \frac {7 x^3} {360} + \frac {31 x^5} {15 \, 120} + \cdots\)










where $B_n$ denotes the Bernoulli numbers.

This converges for $0 < \size x < \pi$.


Proof













\(\ds \sin x\)

\(=\)







\(\ds 2 \sin \dfrac x 2 \cos \dfrac x 2\)





Double Angle Formula for Sine








\(\ds \leadstoandfrom \ \ \)





\(\ds \dfrac 1 {\sin x}\)

\(=\)







\(\ds \dfrac 1 {2 \sin \dfrac x 2 \cos \dfrac x 2}\)





taking the reciprocal of both sides








\(\ds \leadstoandfrom \ \ \)





\(\ds \csc x\)

\(=\)







\(\ds \dfrac 1 2 \csc \dfrac x 2 \sec \dfrac x 2\)





Cosecant is Reciprocal of Sine, Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \csc \dfrac x 2 \dfrac 2 {e^{i \frac x 2} + e^{-i \frac x 2} }\)





Euler's Secant Identity














\(\ds \)

\(=\)







\(\ds \csc \dfrac x 2 \dfrac {e^{-i \frac x 2} } {1 + e^{-i x} }\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \csc x \paren {1 + e^{-i x} }\)

\(=\)







\(\ds \csc \dfrac x 2 e^{-i \frac x 2}\)





multiplying both sides by $1 + e^{-i x}$








\(\ds \leadstoandfrom \ \ \)





\(\ds \csc x\)

\(=\)







\(\ds \csc \dfrac x 2 e^{-i \frac x 2} - \csc x e^{-i x}\)





subtracting $\csc x e^{-i x}$ from both sides














\(\ds \)

\(=\)







\(\ds \dfrac {2 i} {e^{i \frac x 2} - e^{-i \frac x 2} } e^{-i \frac x 2} - \dfrac {2 i} {e^{i x} - e^{-i x} } e^{-i x}\)





Euler's Cosecant Identity














\(\ds \)

\(=\)







\(\ds 2 \dfrac i {e^{i x} - 1} - \dfrac {2 i} {e^{2 i x} - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 x \paren {2 \dfrac {i x} {e^{i x} - 1} - \dfrac {2 i x} {e^{2 i x} - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 x \sum_{n \mathop = 0}^\infty \paren {2 \dfrac {\paren {i x}^n B_n} {n!} - \dfrac {\paren {2 i x}^n B_n} {n!} }\)





Definition of Bernoulli Numbers














\(\ds \)

\(=\)







\(\ds \dfrac 1 x \sum_{n \mathop = 0}^\infty \dfrac {B_n \paren {2 \paren {i x}^n - \paren {2 i x}^n} } {n!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {B_n i^n x^{n - 1} 2 \paren {1 - 2^{n - 1} } } {n!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {B_{2 n} i^{2 n} x^{2 n - 1} 2 \paren {1 - 2^{2 n - 1} } } {\paren {2 n}!}\)





Odd Bernoulli Numbers Vanish and the term $n = 1$ vanishes














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {B_{2 n} \paren {-1}^{n - 1} x^{2 n - 1} 2 \paren {2^{2 n - 1} - 1} } {\paren {2 n}!}\)









$\Box$


Convergence
By Combination Theorem for Limits of Real Functions we can deduce the following.














\(\ds \lim_{n \mathop \to \infty} \size {\frac {\frac {B_{2 n + 2} \paren {-1}^n x^{2 n + 1} 2 \paren {2^{2 n + 1} - 1} } {\paren {2 n + 2}!} } {\frac {B_{2 n} \paren {-1}^{n - 1} x^{2 n - 1} 2 \paren {2^{2 n - 1} - 1} } {\paren {2 n}!} } }\)

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







\(\ds \lim_{n \mathop \to \infty} \size  {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {\paren {-1}^{n + 2} 4 \sqrt {\pi \paren {n + 1} } \paren {\frac {n + 1} {\pi e} }^{2 n + 2} } {\paren {-1}^{n + 1} 4 \sqrt {\pi n} \paren {\frac n {\pi e} }^{2 n} } } 2 x^2\)





Asymptotic Formula for Bernoulli Numbers














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {n + 1}^2} {\paren {2 n + 1} \paren {n + 1} } \sqrt {\frac {n + 1} n} \paren {\frac {n + 1} n}^{2 n} } \frac 2 {\pi^2 e^2} x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\paren {\frac {n + 1} n }^{2 n} } \frac 1 {\pi^2 e^2} x^2\)




















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


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Trigonometric Functions: $20.26$





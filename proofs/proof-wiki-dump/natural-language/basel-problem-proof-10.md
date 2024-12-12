# 

Source: https://proofwiki.org/wiki/Basel_Problem/Proof_10

Theorem
$\ds \map \zeta 2 = \sum_{n \mathop = 1}^\infty {\frac 1 {n^2} } = \frac {\pi^2} 6$
where $\zeta$ denotes the Riemann zeta function.


Proof
For $z \ne 0$, from Mittag-Leffler Expansion for Hyperbolic Cotangent Function, we have: 

$\ds \frac 1 {2 z} \paren {\pi \map \coth {\pi z} - \frac 1 z} = \sum_{n \mathop = 1}^\infty \frac 1 {z^2 + n^2}$
Consider the set:

$A = \set {z \in \C : \size z \le \dfrac 1 2}$.
Then for each $n \in \N$ and $z \in A$, we have: 














\(\ds \size {\frac 1 {z^2 + n^2} }\)

\(\le\)







\(\ds \frac 1 {\size {\size z^2 - n^2} }\)





Reverse Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \frac 1 {n^2 - \frac 1 4}\)









For all $n \in \N$, we have: 

$n^2 - \dfrac 1 4 \ge \dfrac 1 2 n^2$
So that: 

$\dfrac 1 {n^2 - \dfrac 1 4} \le \dfrac 2 {n^2}$
We have: 














\(\ds \int_1^\infty \frac 2 {x^2} \rd x\)

\(=\)







\(\ds 2 \intlimits {-\frac 1 x} 1 \infty\)





Fundamental Theorem of Calculus, Primitive of Power














\(\ds \)

\(=\)







\(\ds 2\)




















\(\ds \)

\(<\)







\(\ds \infty\)









So, from the Cauchy Integral Test, we have: 

$\ds \sum_{n \mathop = 1}^\infty \frac 2 {n^2}$ converges.
So, from the Comparison Test: Corollary, we have: 

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2 - \frac 1 4}$ converges.
So by the Weierstrass M-Test, the series:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {z^2 + n^2}$
converges uniformly on $A$. 
Then from Uniformly Convergent Series of Continuous Functions is Continuous, the function $f : A \to \C$ defined by: 

$\ds \map f z = \sum_{n \mathop = 1}^\infty \frac 1 {z^2 + n^2}$
is continuous.
So:

$\ds \lim_{z \mathop \to 0} \sum_{n \mathop = 1}^\infty \frac 1 {z^2 + n^2} = \sum_{n \mathop = 1}^\infty \frac 1 {n^2}$
We can write: 














\(\ds \frac 1 {2 z} \paren {\pi \map \coth {\pi z} - \frac 1 z}\)

\(=\)







\(\ds \frac 1 {2 z} \paren {\frac {\pi \paren {e^{\pi z} + e^{-\pi z} } } {e^{\pi z} - e^{-\pi z} } - \frac 1 z}\)





Definition of Hyperbolic Cotangent














\(\ds \)

\(=\)







\(\ds \frac 1 {2 z} \paren {\frac {\pi z \paren {e^{2 \pi z} + 1} - e^{2 \pi z} + 1} {z \paren {e^{2 \pi z} - 1} } }\)









so that: 

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2} = \lim_{z \mathop \to 0} \paren {\frac {\pi z \paren {e^{2 \pi z} + 1} - e^{2 \pi z} + 1} {2 z^2 \paren {e^{2 \pi z} - 1} } }$
We have at $z = 0$: 














\(\ds \pi z \paren {e^{2 \pi z} + 1} - e^{2 \pi z} + 1\)

\(=\)







\(\ds \pi \times 0 \times \paren {e^0 + 1} - e^0 + 1\)




















\(\ds \)

\(=\)







\(\ds 1 - e^0\)




















\(\ds \)

\(=\)







\(\ds 0\)





Exponential of Zero



and: 

$2 z^2 \paren {e^{2 \pi z} + 1} = 0$
So by L'Hopital's Rule:














\(\ds \lim_{z \mathop \to 0} \paren {\frac {\pi z \paren {e^{2 \pi z} + 1} - e^{2 \pi z} + 1} {2 z^2 \paren {e^{2 \pi z} - 1} } }\)

\(=\)







\(\ds \lim_{z \mathop \to 0} \paren {\frac {\pi \paren {e^{2 \pi z} + 1} + 2 \pi^2 z e^{2 \pi z} - 2 \pi e^{2 \pi z} } {4 z \paren {e^{2 \pi z} - 1} + 4 \pi z^2 e^{2 \pi z} } }\)





Product Rule for Derivatives, Derivative of Exponential Function, Derivative of Power














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to 0} \paren {\frac {2 \pi^2 e^{2 \pi z} + 2 \pi^2 e^{2 \pi z} + 4 \pi^3 z e^{2 \pi z} - 4 \pi^2 e^{2 \pi z} } {4 \paren {e^{2 \pi z} - 1} + 8 \pi z e^{2 \pi z} + 8 \pi z e^{2 \pi z} + 8 \pi^2 z^2 e^{2 \pi z} } }\)





L'Hopital's Rule














\(\ds \)

\(=\)







\(\ds 4 \pi^3 \lim_{z \mathop \to 0} \paren {\frac {z e^{2 \pi z} } {-4 + e^{2 \pi z} \paren {8 \pi^2 z^2 + 16 \pi z + 4} } }\)




















\(\ds \)

\(=\)







\(\ds 4 \pi^3 \lim_{z \mathop \to 0} \paren {\frac {e^{2 \pi z} + 2 \pi z e^{2 \pi z} } {2 \pi e^{2 \pi z} \paren {8 \pi^2 z^2 + 16 \pi z + 4} + e^{2 \pi z} \paren {16 \pi z + 16 \pi} } }\)





L'Hopital's Rule














\(\ds \)

\(=\)







\(\ds 4 \pi^3 \lim_{z \mathop \to 0} \paren {\frac {1 + 2 \pi z} {16 \pi^3 z^2 + 32 \pi^2 z + 8 \pi + 16 \pi z + 16 \pi} }\)




















\(\ds \)

\(=\)







\(\ds \frac {4 \pi^3} {24 \pi}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^2} 6\)









giving: 

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2} = \frac {\pi^2} 6$
$\blacksquare$






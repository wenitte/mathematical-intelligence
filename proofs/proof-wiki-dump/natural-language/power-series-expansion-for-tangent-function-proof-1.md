# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Tangent_Function/Proof_1

Theorem
The tangent function has a Taylor series expansion:














\(\ds \tan x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds x + \frac {x^3} 3 + \frac {2 x^5} {15} + \frac {17 x^7} {315} + \cdots\)










where $B_{2 n}$ denotes the Bernoulli numbers.
This converges for $\size x < \dfrac \pi 2$.


Proof
From Power Series Expansion for Cotangent Function:

$(1): \quad \cot x = \ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}$

Then:














\(\ds \tan x\)

\(=\)







\(\ds \cot x - 2 \cot 2 x\)





Cotangent Minus Tangent














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!} - 2 \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} \, \paren {2 x}^{2 n - 1} } {\paren {2 n}!}\)





by $(1)$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} \paren {1 - 2^{2 n} } B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)









$\Box$


Proof of Convergence
By Combination Theorem for Limits of Real Functions we can deduce the following.














\(\ds \)

\(\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac {\frac {\paren {-1}^n 2^{2 n + 2} \paren {2^{2 n + 2} - 1} B_{2 n + 2} } {\paren {2 n + 2}!} x^{2 n + 1} } {\frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} } {\paren {2 n}!} x^{2 n - 1} } }\)




















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







\(\ds \lim_{n \mathop \to \infty} \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {\paren {-1}^{n + 2} 4 \sqrt {\pi \paren {n + 1} } \paren {\frac {n + 1} {\pi e} }^{2 n + 2} } {\paren {-1}^{n + 1} 4 \sqrt {\pi n} \paren {\frac n {\pi e} }^{2 n} } } 8 x^2\)





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





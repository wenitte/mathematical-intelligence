# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Tangent_Function/Proof_2



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
We have:














\(\ds \frac x {e^x - 1}\)

\(=\)







\(\ds \frac x 2 \paren {\frac 2 {e^x -  1} }\)




















\(\ds \)

\(=\)







\(\ds \frac x 2 \paren {\frac {e^x - e^x + 2} {e^x - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac x 2 \paren {\frac {\paren {e^x + 1} - \paren {e^x - 1} } {e^x - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac x 2 \paren {\frac {e^x + 1} {e^x - 1} - 1}\)




















\(\ds \)

\(=\)







\(\ds -\frac x 2 + \frac x 2 \paren {\frac {e^x + 1} {e^x - 1} }\)




















\(\ds \)

\(=\)







\(\ds -\frac x 2 + \frac x 2 \paren {\frac {e^{x/2} + e^{-x/2} } {e^{x/2} - e^{-x/2} } }\)





multiplying top and bottom by $e^{-x/2}$




Thus:




\(\text {(1)}: \quad\)









\(\ds \frac x 2 \paren {\frac {e^{x/2} + e^{-x/2} } {e^{x/2} - e^{-x/2} } }\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {B_{2 n} } {\paren {2 n!} } x^{2 n}\)





Definition of Bernoulli numbers




Replacing $x$ with $2 i x$ in the left hand side of $(1)$:














\(\ds \)

\(\)







\(\ds \frac {2 i x} 2 \paren {\frac {e^{2 i x / 2} + e^{-2 i x / 2} } {e^{2 i x / 2} - e^{-2 i x / 2} } }\)




















\(\ds \)

\(=\)







\(\ds i x \paren {\frac {e^{i x} + e^{-i x} } {e^{i x} - e^{-i x} } }\)




















\(\ds \)

\(=\)







\(\ds x \cot x\)





Euler's Cotangent Identity




Replacing $x$ with $2 i x$ in the right hand side of $(1)$:














\(\ds \)

\(\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {B_{2 n} } {\paren {2 n!} } \paren {2 i x}^{2 n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {2^{2 n} B_{2 n} } {\paren {2 n!} } x^{2 n}\)














\(\ds \leadsto \ \ \)





\(\ds x \cot x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {2^{2 n} B_{2 n} } {\paren {2 n!} } x^{2 n}\)














\(\ds \leadsto \ \ \)





\(\ds \cot x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {2^{2 n} B_{2 n} } {\paren {2 n!} } x^{2 n - 1}\)










Then from Cotangent Minus Tangent:

$\tan x = \cot x - 2 \cot 2 x$
from which:














\(\ds \tan x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} } {\paren {2 n}!} x^{2 n - 1} - 2 \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} } {\paren {2 n}!} \paren {2 x}^{2 n - 1}\)





by $(1)$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} (1 - 2^{2 n}) B_{2 n} } {\paren {2 n}!} x^{2 n - 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} (2^{2 n} - 1) B_{2 n} } {\paren {2 n}!} x^{2 n - 1}\)









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

Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.20$: The Bernoulli Numbers and some Wonderful Discoveries of Euler





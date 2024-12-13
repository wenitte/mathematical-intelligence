# 

Source: https://proofwiki.org/wiki/Integral_of_Laplace_Transform



Theorem
Let $f: \R \to \R$ or $\R \to \C$ be a continuous function on any interval of the form $0 \le t \le A$.
Let $\laptrans f = F$ denote the Laplace transform of $f$.

Then:

$\ds \laptrans {\dfrac {\map f t} t} = \int_s^{\to \infty} \map F u \rd u$
wherever $\ds \lim_{t \mathop \to 0} \dfrac {\map f t} t$ and $\laptrans f$ exist.


Proof
Let $\map g t := \dfrac {\map f t} t$.
Then:














\(\ds \map f t\)

\(=\)







\(\ds t \map g t\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \laptrans {t \map g t}\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds -\dfrac \d {\d s} \laptrans {\map g t}\)





Derivative of Laplace Transform








\(\ds \leadsto \ \ \)





\(\ds \map F s\)

\(=\)







\(\ds -\dfrac {\d G} {\d s}\)





$\map F s := \laptrans {\map f t}$, and so on








\(\ds \leadsto \ \ \)





\(\ds \map G s\)

\(=\)







\(\ds -\int_{-\infty}^s \map f u \rd u\)




















\(\ds \)

\(=\)







\(\ds \int_s^\infty \map f u \rd u\)









The result follows.
$\blacksquare$


Examples
Example $1$
Let $\sin$ denote the real sine function.
Let $\laptrans f$ denote the Laplace transform of a real function $f$.

Then:

$\laptrans {\dfrac {\sin t} t} = \arctan \dfrac 1 s$


Also see
Laplace Transform of Integral


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $8$. Division by $t$: Theorem $1 \text{-} 13$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Division by $t$: $21$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.16$





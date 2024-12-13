# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Integral



Theorem
Let $f: \R \to \R$ or $\R \to \C$ be a function.
Let $\laptrans f = F$ denote the Laplace transform of $f$.

Then:

$\ds \laptrans {\int_0^t \map f u \rd u} = \dfrac {\map F s} s$
wherever $\laptrans f$ exists.


Proof
Let $\map g t = \ds \int_0^t \map f u \rd u$.
Then:

$\map {g'} t = \map f t$
and:

$\map g 0 = 0$

Thus:














\(\ds \laptrans {\map {g'} t}\)

\(=\)







\(\ds s \laptrans {\map g t} - \map g 0\)





Laplace Transform of Derivative














\(\ds \)

\(=\)







\(\ds s \laptrans {\map g t}\)




















\(\ds \)

\(=\)







\(\ds \map F s\)





as $\map F s = \laptrans {\map f t}$








\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map g t}\)

\(=\)







\(\ds \dfrac {\map F s} s\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\int_0^t \map f u \rd u}\)

\(=\)







\(\ds \dfrac {\map F s} s\)









$\blacksquare$


Examples
Example $1$
$\ds \laptrans {\int_0^1 \sin 2 u \rd u} = \dfrac 2 {s \paren {s^2 + 4} }$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $6$. Laplace transform of integrals: Theorem $1 \text{-} 11$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transform of Integrals: $17$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.13$





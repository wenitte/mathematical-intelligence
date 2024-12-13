# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Function_over_Argument



Theorem
Let $f: \R \to \R$ or $\R \to \C$ be a continuous function on any interval of the form $0 \le t \le A$.
Let $\laptrans f = F$ denote the Laplace transform of $f$.

Then:

$\ds \int_0^\infty {\dfrac {\map f t} t} = \int_0^{\to \infty} \map F u \rd u$
provided the integrals converge.


Proof













\(\ds \laptrans {\dfrac {\map f t} t}\)

\(=\)







\(\ds \int_s^{\to \infty} \map F u \rd u\)





Integral of Laplace Transform








\(\ds \leadsto \ \ \)





\(\ds \int_0^\infty e^{-s t} {\dfrac {\map f t} t} \rd t\)

\(=\)







\(\ds \int_s^{\to \infty} \map F u \rd u\)





Definition of Laplace Transform








\(\ds \leadsto \ \ \)





\(\ds \lim_{s \mathop \to 0} \int_0^\infty e^{-s t} \dfrac {\map f t} t \rd t\)

\(=\)







\(\ds \lim_{s \mathop \to 0} \int_s^{\to \infty} \map F u \rd u\)














\(\ds \leadsto \ \ \)





\(\ds \int_0^\infty \dfrac {\map f t} t \rd t\)

\(=\)







\(\ds \int_0^{\to \infty} \map F u \rd u\)









$\blacksquare$


Also see
Laplace Transform of Integral


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Division by $t$: $22 \ \text{(a)}$





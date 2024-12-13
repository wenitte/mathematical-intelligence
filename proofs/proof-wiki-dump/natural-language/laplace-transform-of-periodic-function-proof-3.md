# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Periodic_Function/Proof_3

Theorem
Let $f$ be periodic, that is:

$\exists T \in \R_{\ne 0}: \forall x \in \R: \map f x = \map f {x + T}$

Then:

$\laptrans {\map f t} = \dfrac 1 {1 - e^{-s T} } \ds \int_0^T e^{-s t} \map f t \rd t$
where $\laptrans {\map f t}$ denotes the Laplace transform.


Proof













\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \int_0^{\infty} e^{-s t} \map f t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^T e^{-s t} \map f t \rd t + \int_T^{2 T} e^{-s t} \map f t \rd t + \int_{2 T}^{3 T} e^{-s t} \map f t \rd t + \dotsb\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_0^T e^{-s u} \map f u \rd t + \int_T^{2 T} e^{-s \paren {u + T} } \map f {u + T} \rd u + \int_{2 T}^{3 T} e^{-s \paren {u + 2 T} } \map f {u + 2 T} \rd u + \dotsb\)





Integration by Substitution: $t = u$, $t = u + T$, $t = u + 2 T$, $\ldots$














\(\ds \)

\(=\)







\(\ds \int_0^T e^{-s u} \map f u \rd t + e^{-s T} \int_0^T e^{-s u} \map f u \rd u + e^{-2 s T} \int_0^T e^{-s u} \map f u \rd u + \dotsb\)





Laplace Transform of Function of t minus a, and adjusting limits of integration














\(\ds \)

\(=\)







\(\ds \paren {1 + e^{-s T} + e^{-2 s T} + \dotsb} \int_0^T e^{-s u} \map f u \rd u\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {1 - e^{-s T} } \int_0^T e^{-s t} \map f t \rd t\)





Sum of Infinite Geometric Sequence



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Periodic Functions: $23$





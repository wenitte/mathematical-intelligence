# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Periodic_Function



Theorem
Let $f: \R \to \R$ be a real function.
Let $f$ be periodic, that is:

$\exists T \in \R_{\ne 0}: \forall x \in \R: \map f x = \map f {x + T}$

Then:

$\laptrans {\map f t} = \dfrac 1 {1 - e^{-s T} } \ds \int_0^T e^{-s t} \map f t \rd t$
where $\laptrans {\map f t}$ denotes the Laplace transform.


Proof 1













\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \int_0^{\infty} e^{-s t} \map f t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\infty} \int_{k T}^{\paren {k + 1} T} e^{-s t} \map f t \rd t\)





Sum of Integrals on Adjacent Intervals for Integrable Functions: Corollary














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\infty} \int_0^T e^{-s \paren {t + k T} } \map f {t + k T} \rd t\)





Change of Limits of Integration














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\infty} \int_0^T e^{-s \paren {t + k T} } \map f t \rd t\)





General Periodicity Property














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\infty} \int_0^T e^{-s t - s k T} \map f t \rd t\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\infty} \int_0^T e^{-s t} e^{- s k T} \map f t \rd t\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\infty} e^{- s k T} \int_0^T e^{-s t} \map f t \rd t\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \paren {\int_0^T e^{-s t} \map f t \rd t} \sum_{k \mathop = 0}^{\infty} e^{- s k T}\)





Scaling of Summations














\(\ds \)

\(=\)







\(\ds \paren {\int_0^T e^{-s t} \map f t \rd t} \sum_{k \mathop = 0}^{\infty} \paren {e^{- s T} }^k\)





Power of Power














\(\ds \)

\(=\)







\(\ds \paren {\int_0^T e^{-s t} \map f t \rd t} \paren {\frac 1 {1 - e^{-s T} } }\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac 1 {1 - e^{-s T} } \int_0^T e^{-s t} \map f t \rd t\)





Real Multiplication is Commutative



$\blacksquare$


Proof 2













\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \int_0^{\infty} e^{-s t} \map f t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^T e^{-s t} \map f t \rd t + \int_T^{\infty} e^{-s t} \map f t \rd t\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_0^T e^{-s t} \map f t \rd t + \int_0^{\infty} e^{-s \paren {t + T} } \map f {t + T} \rd t\)





Change of Limits of Integration














\(\ds \)

\(=\)







\(\ds \int_0^T e^{-s t} \map f t \rd t + \int_0^{\infty} e^{-s \paren {t + T} } \map f t \rd t\)





Definition of Real Periodic Function














\(\ds \)

\(=\)







\(\ds \int_0^T e^{-s t} \map f t \rd t + \int_0^{\infty} e^{-s t - s T} \map f t \rd t\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \int_0^T e^{-s t} \map f t \rd t + \int_0^{\infty} e^{-s t} e^{-s T} \map f t \rd t\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \int_0^T e^{-s t} \map f t \rd t + e^{-s T} \int_0^{\infty} e^{-s t} \map f t \rd t\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \int_0^T e^{-s t} \map f t \rd t + e^{-s T} \laptrans {\map f t}\)





Definition of Laplace Transform








\(\ds \leadsto \ \ \)





\(\ds \paren {1 - e^{-s T} } \laptrans {\map f t}\)

\(=\)







\(\ds \int_0^T e^{-s t} \map f t \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \frac 1 {1 - e^{-s T} } \int_0^T e^{-s t} \map f t \rd t\)









$\blacksquare$


Proof 3













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
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $9$. Periodic functions: Theorem $1 \text{-} 14$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.17$





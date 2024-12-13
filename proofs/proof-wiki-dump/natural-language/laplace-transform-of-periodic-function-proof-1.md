# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Periodic_Function/Proof_1

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






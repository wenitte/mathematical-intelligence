# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Periodic_Function/Proof_2

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






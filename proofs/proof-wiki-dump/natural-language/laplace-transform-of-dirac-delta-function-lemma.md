# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Dirac_Delta_Function/Lemma

Lemma for Laplace Transform of Dirac Delta Function
Let $F_\epsilon: \R \to \R$ be the real function defined as:

$\map {F_\epsilon} t = \begin{cases} 0 & : x < 0 \\ \dfrac 1 \epsilon & : 0 \le t \le \epsilon \\ 0 & : t > \epsilon \end{cases}$
Then:

$\laptrans {\map {F_\epsilon} t} = \dfrac {1 - e^{-s \epsilon} } {\epsilon s}$


Proof













\(\ds \laptrans {\map {F_\epsilon} t}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \map {F_\epsilon} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\epsilon e^{-s t} \map {F_\epsilon} t \rd t + \int_\epsilon^\infty e^{-s t} \map {F_\epsilon} t \rd t\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_0^\epsilon e^{-s t} \dfrac 1 \epsilon \rd t + \int_\epsilon^\infty  e^{-s t} \times 0 \rd t\)





Definition of $F_\epsilon$














\(\ds \)

\(=\)







\(\ds \dfrac 1 \epsilon \int_0^\epsilon e^{-s t} \rd t\)





simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 \epsilon \intlimits {\dfrac {e^{-s t} } {-s} } 0 \epsilon\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 \epsilon \paren {\dfrac {e^{-s \epsilon} - e^{-s \times 0} } {-s} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 - e^{-s \epsilon} } {\epsilon s}\)





simplification



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Impulse Functions. The Dirac Delta Function: $41$





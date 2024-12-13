# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Function_of_t_minus_a/Examples/Example_2/Proof_2

Example of Use of Laplace Transform of Function of t minus a
Let $\laptrans f$ denote the Laplace transform of the real function $f$.

Let $f: \R \to \R$ be the function defined as:

$\forall t \in \R: \map f t = \begin {cases} \map \cos {t - \dfrac {2 \pi} 3} & : t \ge \dfrac {2 \pi} 3 \\ 0 & : t < \dfrac {2 \pi} 3 \end {cases}$

Then:

$\laptrans {\map f t} = s \exp \dfrac {-2 \pi s} 3 \dfrac 1 {s^2 + 1}$


Proof













\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \map f t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^{\frac {-2 \pi s} 3} e^{-s t} \map f t \rd t + \int_{\frac {-2 \pi s} 3}^\infty e^{-s t} \map f t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^{\frac {-2 \pi s} 3} e^{-s t} \times 0 \rd t + \int_{\frac {-2 \pi s} 3}^\infty e^{-s t} \map \cos {t - \dfrac {2 \pi} 3} \rd t\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \int_0^\infty e^{-s \paren {u + 2 \pi / 3} } \map \cos u \rd u\)





Integration by Substitution: $t = u + \dfrac {2 \pi} 3$














\(\ds \)

\(=\)







\(\ds \exp \dfrac {-2 \pi s} 3 \int_0^\infty e^{-s u} \map \cos u \rd u\)




















\(\ds \)

\(=\)







\(\ds \exp \dfrac {-2 \pi s} 3 \laptrans {\cos u}\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \exp \dfrac {-2 \pi s} 3 \dfrac s {s^2 + 1}\)





Laplace Transform of Cosine



and the result follows.
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Translation and Change of Scale Properties: $10$





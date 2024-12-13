# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Constant_Mapping/Examples/Example_1

Example of Laplace Transform of Constant Mapping
Let $\map f t$ be the real function defined as:

$\forall t \in \R: \map f t = \begin {cases} 0 & : t < 0 \\ 5 & : 0 \le t < 3 \\ 0 & : t \ge 3 \end {cases}$

Then the Laplace transform of $f$ is given by:

$\laptrans {\map f t} = \dfrac {5 \paren {1 - e^{-3 s} } } s$


Proof













\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \map f t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^3 5 e^{-s t} \rd t + \int_3^\infty 0 e^{-s t} \rd t\)





Definition of $\map f t$














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {5 e^{-s t} } {-s} } 0 3 + 0\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \dfrac {5 e^{-3 s} - 5 e^0} {-s}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {5 \paren {1 - e^{-3 s} } } s\)





simplifying



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transforms of some Elementary Functions: $4$





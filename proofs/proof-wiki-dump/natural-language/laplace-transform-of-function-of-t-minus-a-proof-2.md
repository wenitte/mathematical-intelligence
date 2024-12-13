# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Function_of_t_minus_a/Proof_2

Theorem
Let $f$ be a function such that $\laptrans f$ exists.
Let $\laptrans {\map f t} = \map F s$ denote the Laplace transform of $f$.
Let $a \in \C$ or $\R$ be constant.

Let $g$ be the function defined as:

$\map g t = \begin{cases} \map f {t - a} & : t > a \\ 0 & : t \le a \end{cases}$

Then:

$\laptrans {\map g t} = e^{-a s} \map F s$


Proof













\(\ds \laptrans {\map g t}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \map g t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^a e^{-s t} \map g t \rd t + \int_a^\infty e^{-s t} \map g t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^a 0 \times e^{-s t} \rd t + \int_a^\infty e^{-s t} \map f {t - a} \rd t\)





Definition of $\map g t$














\(\ds \)

\(=\)







\(\ds \int_a^\infty e^{-s t} \map f {t - a} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty e^{-s \paren {u + a} } \map f u \rd u\)





Integration by Substitution: $t = u + a$














\(\ds \)

\(=\)







\(\ds e^{-a s} \int_0^\infty e^{-s u} \map f u \rd u\)




















\(\ds \)

\(=\)







\(\ds e^{-a s} \map F s\)





Definition of Laplace Transform



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Translation and Change of Scale Properties: $9$





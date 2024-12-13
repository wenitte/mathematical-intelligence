# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Heaviside_Step_Function



Theorem
Let $\map {u_c} t$ denote the Heaviside step function:

$\map {u_c} t = \begin{cases}
1 & : t > c \\
0 & : t < c
\end{cases}$

The Laplace transform of $\map {u_c} t$ is given by:

$\laptrans {\map {u_c} t} = \dfrac {e^{-s c} } s$
for $\map \Re s > c$.


Proof 1













\(\ds \laptrans {\map {u_c} t}\)

\(=\)







\(\ds \int_0^{\to +\infty} \map {u_c} t e^{-s t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^c \map {u_c} t e^{-s t} \rd t + \int_c^{\to +\infty} \map {u_c} t e^{-s t} \rd t\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_0^c 0 \times e^{-s t} \rd t + \int_c^{\to +\infty} 1 \times e^{-s t} \rd t\)





Definition of Heaviside Step Function














\(\ds \)

\(=\)







\(\ds \int_c^{\to +\infty} e^{-s t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to +\infty} \int_c^L e^{-s t} \rd t\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to +\infty} \intlimits {\dfrac {e^{-s t} } {-s} } c L\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to +\infty} \dfrac {e^{-s L} } {-s} - \dfrac {e^{-s c} } {-s}\)




















\(\ds \)

\(=\)







\(\ds 0 + \dfrac {e^{-s c} } s\)





simplification



Hence the result.
$\blacksquare$


Proof 2













\(\ds \laptrans 1\)

\(=\)







\(\ds \dfrac 1 s\)





Laplace Transform of 1








\(\ds \leadsto \ \ \)





\(\ds \laptrans {1 \times \map {u_c} t}\)

\(=\)







\(\ds \dfrac 1 s \times e^{-c s}\)





Laplace Transform of Function of t minus a














\(\ds \)

\(=\)







\(\ds \dfrac {e^{-s c} } s\)





simplification



Hence the result.
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of Special Functions: $11$





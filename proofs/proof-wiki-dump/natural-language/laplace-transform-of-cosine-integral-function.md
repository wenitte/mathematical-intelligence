# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Cosine_Integral_Function

Theorem
$\laptrans {\map \Ci t} = \dfrac {\map \ln {s^2 + 1} } {2 s}$
where:

$\laptrans f$ denotes the Laplace transform of the function $f$
$\Ci$ denotes the cosine integral function.


Proof 1
Let $\map f t := \map \Ci t = \ds \int_t^\infty \dfrac {\cos u} u \rd u$.
Then:














\(\ds \map {f'} t\)

\(=\)







\(\ds -\dfrac {\cos t} t\)














\(\ds \leadsto \ \ \)





\(\ds t \map {f'} t\)

\(=\)







\(\ds -\cos t\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {t \map {f'} t}\)

\(=\)







\(\ds -\laptrans {\cos t}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac s {s^2 + 1}\)





Laplace Transform of Cosine








\(\ds \leadsto \ \ \)





\(\ds -\dfrac \d {\d s} \laptrans {\map {f'} t}\)

\(=\)







\(\ds -\dfrac s {s^2 + 1}\)





Derivative of Laplace Transform








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d s} } {s \laptrans {\map f t} - \map f 0}\)

\(=\)







\(\ds \dfrac s {s^2 + 1}\)





Laplace Transform of Derivative








\(\ds \leadsto \ \ \)





\(\ds s \laptrans {\map f t}\)

\(=\)







\(\ds \int \dfrac s {s^2 + 1} \rd s\)





$\map f 0 = 0$, and integrating both sides with respect to $s$








\(\ds \leadsto \ \ \)





\(\ds s \laptrans {\map f t}\)

\(=\)







\(\ds \dfrac 1 2 \map \ln {s^2 + 1} + C\)





Primitive of $\dfrac x {x^2 + a^2}$




By the Initial Value Theorem of Laplace Transform:

$\ds \lim_{s \mathop \to \infty} s \laptrans {\map f t} = \lim_{t \mathop \to 0} \map f t = \map f 0 = 0$
which leads to:

$c = 0$

Thus:














\(\ds s \laptrans {\map f t}\)

\(=\)







\(\ds \dfrac 1 2 \map \ln {s^2 + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \dfrac {\map \ln {s^2 + 1} } {2 s}\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of Special Functions: $9$





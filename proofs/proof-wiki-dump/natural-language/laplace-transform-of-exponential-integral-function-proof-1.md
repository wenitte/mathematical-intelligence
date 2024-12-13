# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Exponential_Integral_Function/Proof_1

Theorem
Let $\Ei: \R_{>0} \to \R$ denote the exponential integral function:

$\map \Ei x = \ds \int_{t \mathop = x}^{t \mathop \to +\infty} \frac {e^{-t} } t \rd t$
Then:

$\laptrans {\map \Ei t} = \dfrac {\map \ln {s + 1} } s$
where $\laptrans f$ denotes the Laplace transform of the function $f$


Proof
Let $\map f t := \map \Ei t = \ds \int_t^\infty \dfrac {e^{-u} } u \rd u$.
Then:














\(\ds \map {f'} t\)

\(=\)







\(\ds -\dfrac {e^{-t} } t\)














\(\ds \leadsto \ \ \)





\(\ds t \map {f'} t\)

\(=\)







\(\ds -e^{-t}\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {t \map {f'} t}\)

\(=\)







\(\ds -\laptrans {e^{-t} }\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 {s + 1}\)





Laplace Transform of Exponential








\(\ds \leadsto \ \ \)





\(\ds -\dfrac \d {\d s} \laptrans {\map {f'} t}\)

\(=\)







\(\ds -\dfrac 1 {s + 1}\)





Derivative of Laplace Transform








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d s} } {s \laptrans {\map f t} - \map f 0}\)

\(=\)







\(\ds \dfrac 1 {s + 1}\)





Laplace Transform of Derivative








\(\ds \leadsto \ \ \)





\(\ds s \laptrans {\map f t}\)

\(=\)







\(\ds \int \dfrac 1 {s + 1} \rd s\)





$\map f 0 = 0$, and integrating both sides with respect to $s$








\(\ds \leadsto \ \ \)





\(\ds s \laptrans {\map f t}\)

\(=\)







\(\ds \map \ln {s + 1} + C\)





Primitive of $\dfrac 1 {a x + b}$




By the Initial Value Theorem of Laplace Transform:

$\ds \lim_{s \mathop \to \infty} s \laptrans {\map f t} = \lim_{t \mathop \to 0} \map f t = \map f 0 = 0$
which leads to:

$c = 0$

Thus:














\(\ds s \laptrans {\map f t}\)

\(=\)







\(\ds \map \ln {s + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \dfrac {\map \ln {s + 1} } s\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: The Sine, Cosine and Exponential Integrals: $38$





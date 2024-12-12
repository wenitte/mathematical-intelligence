# 

Source: https://proofwiki.org/wiki/Even_Impulse_Pair_is_Fourier_Transform_of_Cosine_Function

Theorem
Consider the (real) cosine function $\map \cos x: \R \to \R$.

$\map f x = \map \cos {\pi x}$

Then:














\(\ds \map {\hat f} s\)

\(=\)







\(\ds \dfrac 1 2 \map \delta {s - \dfrac 1 2} + \dfrac 1 2 \map \delta {s + \dfrac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname {II} } s\)









where:

$\map {\hat f} s$ is the Fourier transform of $\map f x$.
$\operatorname {II}$ denotes the even impulse pair function.


Proof
By the definition of a Fourier transform:














\(\ds \map {\hat f} s\)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \map f x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \map \cos {\pi x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \dfrac 1 2 \paren {e^{i \pi x} + e^{-i \pi x} } \rd x\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \int_{-\infty}^\infty e^{-2 \pi i x s} e^{i \pi x} \rd x + \dfrac 1 2 \int_{-\infty}^\infty e^{-2 \pi i x s} e^{-i \pi x} \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \int_{-\infty}^\infty e^{-2 \pi i x \paren {s - \frac 1 2 } } \rd x + \dfrac 1 2 \int_{-\infty}^\infty e^{-2 \pi i x \paren {s + \frac 1 2 } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \map \delta {s - \dfrac 1 2 } + \dfrac 1 2 \map \delta {s + \dfrac 1 2 }\)





Fourier Transform of 1



$\blacksquare$


Sources
1978: Ronald N. Bracewell: The Fourier Transform and its Applications (2nd ed.) ... (previous) ... (next): Chapter $1$: Introduction
Weisstein, Eric W. "Fourier Transform." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/FourierTransform.html





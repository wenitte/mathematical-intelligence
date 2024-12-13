# 

Source: https://proofwiki.org/wiki/Properties_of_Fourier_Transform/Scaling

Theorem
Let $\map f x$ be a Lebesgue integrable function.

Let $a$ be a non-zero real number.

Let $\map h x$ be a Lebesgue integrable function such that:

$\map h x = \map f {a x}$

Then:

$\map {\hat h} s = \dfrac 1 {\size a} \map {\hat f} {\dfrac s a}$

where $\map {\hat h} s$ and $\map {\hat f} s$ are the Fourier transforms of $\map h x$ and $\map f x$ respectively.


Proof













\(\ds \map {\hat h} s\)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \map h x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \map f {a x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\size a} \int_{-\infty}^\infty e^{-2 \pi i \paren {a x} \paren {s / a} } \map f {a x} \map \rd {a x}\)





Power of Power














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\size a} \map {\hat f} {\dfrac s a}\)









$\blacksquare$


Sources
Weisstein, Eric W. "Fourier Transform." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/FourierTransform.html





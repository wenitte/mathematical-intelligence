# 

Source: https://proofwiki.org/wiki/Properties_of_Fourier_Transform/Translation

Theorem
Let $\map f x$ be a Lebesgue integrable function.

Let $x_0$ be a real number.

Let $\map h x$ be a Lebesgue integrable function such that:

$\map h x = \map f {x - x_0}$

Then:

$\map {\hat h} s = e^{-2 \pi i x_0 s} \map {\hat f} s$

where $\map {\hat h} s$ and $\map {\hat f} s$ are the Fourier transforms of $\map h x$ and $\map f x$ respectively.


Proof













\(\ds \map {\hat h} s\)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \map h x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \map f {x - x_0 } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty \paren {e^{-2 \pi i x_0 s} } e^{-2 \pi i \paren {x - x_0 } s} \map f {x - x_0 } \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {e^{-2 \pi i x_0 s} } \int_{-\infty}^\infty e^{-2 \pi i \paren {x - x_0 } s} \map f {x - x_0 } \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds e^{-2 \pi i x_0 s} \map {\hat f} s\)









$\blacksquare$


Sources
Weisstein, Eric W. "Fourier Transform." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/FourierTransform.html





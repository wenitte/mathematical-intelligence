# 

Source: https://proofwiki.org/wiki/Properties_of_Fourier_Transform/Linearity

Theorem
Let $\map f x$ and $\map g x$ be Lebesgue integrable functions.

Let $a$ and $b$ be complex numbers.
Let $\map h x$ be a Lebesgue integrable function such that:

$\map h x = a \map f x + b \map g x$

Then:

$\map {\hat h} s = a \map {\hat f} s + b \map {\hat g} s$
where $\map {\hat h} s$, $\map {\hat f} s$ and $\map {\hat g} s$ are the Fourier transforms of $\map h x$, $\map f x$ and $\map g x$ respectively.


Proof













\(\ds \map {\hat h} \zeta\)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \map h x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \paren {a \map f x + b \map g x} \rd x\)




















\(\ds \)

\(=\)







\(\ds a \int_{-\infty}^\infty e^{-2 \pi i x s} \map f x \rd x + b \int_{-\infty}^\infty e^{-2 \pi i x s} \map g x \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds a \map {\hat f} s + b \map {\hat g} s\)









$\blacksquare$


Sources
Weisstein, Eric W. "Fourier Transform." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/FourierTransform.html





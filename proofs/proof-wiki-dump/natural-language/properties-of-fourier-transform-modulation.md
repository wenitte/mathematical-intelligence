# 

Source: https://proofwiki.org/wiki/Properties_of_Fourier_Transform/Modulation

Theorem
Let $\map f x$ be a Lebesgue integrable function.

Let $s_0$ be a real number.
Let $\map h x$ be a Lebesgue integrable function such that:

$\map h x = e^{2 \pi i x s_0} \map f x$

Then:

$\map {\hat h} s = \map {\hat f} {s - s_0}$
where $\map {\hat h} s$ and $\map {\hat f} s$ are the Fourier transforms of $\map h x$ and $\map f x$ respectively.


Proof













\(\ds \map {\hat h} s\)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \map h x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} e^{2 \pi i x s_0} \map f x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x \paren {s - s_0} } \map f x \rd x\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \map {\hat f} {s - s_0}\)









$\blacksquare$


Sources
Weisstein, Eric W. "Fourier Transform." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/FourierTransform.html





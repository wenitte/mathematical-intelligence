# 

Source: https://proofwiki.org/wiki/Fourier_Transform_of_Exponential_Function

Theorem
Let $\map f x$ be defined as the real exponential function where the absolute value of the input is used in the exponent and the exponent is scaled by a factor of $-2 \pi a$:

$\map f x = e^{-2 \pi a \size x}:    \R \to \R$

Then:

$\map {\hat f} s = \dfrac 1 \pi \dfrac a {a^2 + s^2}$
where $\map {\hat f} s$ is the Fourier transform of $\map f x$.


Proof
By the definition of a Fourier transform:














\(\ds \map {\hat f} s\)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \map f x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} e^{-2 \pi a \size x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^0 e^{-2 \pi i x s} e^{-2 \pi a \size x} \rd x + \int_0^\infty e^{-2 \pi i x s} e^{-2 \pi a \size x} \rd x\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_{-\infty}^0 e^{-2 \pi i x s} e^{-2 \pi a \paren {-x} } \rd x + \int_0^\infty e^{-2 \pi i x s} e^{-2 \pi a \paren x} \rd x\)





Definition 1 of Absolute Value














\(\ds \)

\(=\)







\(\ds \int_{-\infty}^0 e^{-x \paren {2 \pi i s - 2 \pi a} } \rd x + \int_0^\infty e^{-x \paren {2 \pi i s + 2 \pi a} } \rd x\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \paren {\lim_{\gamma \mathop \to -\infty} \intlimits {-\frac 1 {2 \pi \paren{i s - a} } e^{-x \paren{2 \pi i s - 2 \pi a } } } \gamma 0} + \paren {\lim_{\gamma \mathop \to +\infty} \intlimits {-\frac 1 {2 \pi \paren {a + i s} } e^{-x \paren {2 \pi i s + 2 \pi a} } } 0 \gamma}\)





Primitive of Exponential of a x














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi} \paren {\dfrac 1 {a - i s} + \dfrac 1 {a + i s} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi} \paren {\dfrac {a + i s} {a^2 + s^2} + \dfrac {a - i s} {a^2 + s^2} }\)





Definition of Rational Addition














\(\ds \)

\(=\)







\(\ds \dfrac 1 \pi \paren {\dfrac a {a^2 + s^2} }\)










Therefore:

$\map {\hat f} s = \dfrac 1 \pi \dfrac a {a^2 + s^2 }$
$\blacksquare$


Sources
Weisstein, Eric W. "Fourier Transform." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/FourierTransform.html





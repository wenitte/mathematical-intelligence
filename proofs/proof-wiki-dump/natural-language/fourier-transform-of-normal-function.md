# 

Source: https://proofwiki.org/wiki/Fourier_Transform_of_Normal_Function

Theorem
Let $\map f x$ be defined as $\sqrt \pi$ times the normal probability density function where $\mu = 0$ and $\sigma = \dfrac {\sqrt 2} 2$:















\(\ds \map f x\)

\(=\)







\(\ds \dfrac {\sqrt {\pi} } {\dfrac {\sqrt 2} 2 \sqrt {2 \pi} } \map \exp {-\dfrac {\paren {x - 0}^2} {2 \paren {\dfrac {\sqrt 2} 2 }^2} }\)




















\(\ds \)

\(=\)







\(\ds e^{-x^2}\)










Then:

$\map {\hat f} s = \sqrt \pi e^{-\paren {\pi s }^2}$
where $\map {\hat f} s$ is the Fourier transform of $\map f x$.


Proof
By the definition of a Fourier transform:














\(\ds \map {\hat f} s\)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \map f x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} e^{-x^2} \rd x\)










Taking the derivative with respect to $s$, we have:














\(\ds \dfrac \d {\d s} \map {\hat f} s\)

\(=\)







\(\ds \dfrac \d {\d s} \int_{-\infty}^\infty e^{-2 \pi i x s} e^{-x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 \pi i \int_{-\infty}^\infty e^{-2 \pi i x s} x e^{-x^2} \rd x\)










Integrating by parts, we have:

Let $u = e^{-2 \pi i x s}$ and $\rd v = x e^{-x^2} \rd x$
Then:

$\rd u = -2 \pi i s e^{-2 \pi i x s} \rd x$ and $v = -\dfrac 1 2 e^{-x^2}$

Hence:














\(\ds \dfrac \d {\d s} \map {\hat f} s\)

\(=\)







\(\ds -2 \pi i \paren {\paren {\lim_{\gamma \mathop \to \infty} \intlimits {-\dfrac 1 2 e^{-2 \pi i x s} e^{-x^2} } {-\gamma} {+\gamma} } - \int_{-\infty}^\infty \paren {-\dfrac 1 2 e^{-x^2} } \paren {-2 \pi i s e^{-2 \pi i x s} } \rd x}\)




















\(\ds \)

\(=\)







\(\ds -2 \pi i \paren {0 - \int_{-\infty}^\infty \paren {-\dfrac 1 2 e^{-x^2} } \paren {-2 \pi i s e^{-2 \pi i x s} } \rd x}\)





first part $\paren {u v}$ sums to zero














\(\ds \)

\(=\)







\(\ds -2 \pi i \paren {-\pi i \int_{-\infty}^\infty \paren {e^{-x^2} } \paren { s e^{-2 \pi i x s} } \rd x}\)




















\(\ds \)

\(=\)







\(\ds 2 \pi^2 i^2 \int_{-\infty}^\infty \paren {e^{-x^2} } \paren {s e^{-2 \pi i x s} } \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 \pi^2 \int_{-\infty}^\infty \paren {e^{-x^2} } \paren {s e^{-2 \pi i x s} } \rd x\)





$i^2 = -1$




We now have the following:















\(\ds \frac \d {\d s} \map {\hat f} s\)

\(=\)







\(\ds \int_{-\infty}^\infty \paren {-2 \pi^2 s e^{-x^2} } e^{-2 \pi i x s} \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 \pi^2 s \map {\hat f} s\)














\(\ds \leadsto \ \ \)





\(\ds \map \d {\map {\hat f} s}\)

\(=\)







\(\ds -2 \pi^2 s \map {\hat f} s \rd s\)




















\(\ds \dfrac {\map \d {\map {\hat f} s } } {\map {\hat f} s}\)

\(=\)







\(\ds -2 \pi^2 s \rd s\)





Solution to Separable Differential Equation














\(\ds \int \dfrac {\map \d {\map {\hat f} s } } {\map {\hat f} s}\)

\(=\)







\(\ds \int -2 \pi^2 s \rd s\)





integrating














\(\ds \map \ln {\map {\hat f} s}\)

\(=\)







\(\ds -\pi^2 s^2 + C\)





Primitive of Function under its Derivative, Primitive of Power














\(\ds \map {\hat f} s\)

\(=\)







\(\ds A e^{-\pi^2 s^2}\)





Exponential of Natural Logarithm: $A = e^C$




We solve for $A$ by setting $s = 0$:














\(\ds \map {\hat f} 0\)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x 0} e^{-x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-x^2} \rd x\)





Exponential of Zero














\(\ds \)

\(=\)







\(\ds \sqrt \pi\)





Gaussian Integral




Therefore:

$\map {\hat f} s = \sqrt \pi e^{-\paren {\pi s}^2}$
$\blacksquare$


Sources
Weisstein, Eric W. "Fourier Transform." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/FourierTransform.html





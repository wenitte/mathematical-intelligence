# 

Source: https://proofwiki.org/wiki/Fourier_Transform_of_1

Theorem
Let:

$\map f x = 1$

Then:

$\map {\hat f} s = \map \delta s$
where $\map {\hat f} s$ is the Fourier transform of $\map f x$.


Proof
By the definition of a Fourier transform:














\(\ds \map {\hat f} s\)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} \map f x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty e^{-2 \pi i x s} 1 \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty \paren {\map \cos {2 \pi s x} - i \map \sin {2 \pi s x} } \rd x\)





Euler's Formula/Corollary














\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty \map \cos {2 \pi s x} \rd x - i \int_{-\infty}^\infty \map \sin {2 \pi s x } \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi s} \paren {\paren {\lim_{\gamma \mathop \to +\infty} \bigintlimits {\map \sin {2 \pi s x } } {-\gamma} \gamma} - i \paren {\lim_{\gamma \mathop \to +\infty} \bigintlimits {-\map \cos {2 \pi s x } } {-\gamma} \gamma} }\)





Primitive of Sine Function and Primitive of Cosine Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi s} \paren {\paren {\lim_{\gamma \mathop \to +\infty} \bigintlimits {\map \sin {2 \pi s x } } {-\gamma} \gamma} + i \paren {\lim_{\gamma \mathop \to +\infty} \bigintlimits {\map \cos {2 \pi s x } } {-\gamma} \gamma} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi s} \paren {\paren {\lim_{\gamma \mathop \to +\infty} \bigintlimits {\map \sin {2 \pi s x } } {-\gamma} \gamma} + 0 }\)





Cosine of Conjugate Angle: $\map \cos {-x} = \map {\cos} x$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi s} \lim_{\gamma \mathop \to +\infty} 2 \map \sin {2 \pi s \gamma}\)





Sine of Conjugate Angle: $\map \sin {-x} = -\map \sin x$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\pi s} \lim_{\epsilon \mathop \to 0} \map \sin {\frac {2 \pi s} \epsilon}\)





Let $\epsilon = \dfrac 1 \gamma $














\(\ds \)

\(=\)







\(\ds \map \delta s\)





Definition of Dirac Delta Function: Limit 5



$\blacksquare$


Sources
Weisstein, Eric W. "Fourier Transform." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/FourierTransform.html





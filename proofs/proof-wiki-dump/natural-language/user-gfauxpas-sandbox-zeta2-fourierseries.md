# 

Source: https://proofwiki.org/wiki/User:GFauxPas/Sandbox/Zeta2/FourierSeries/

Define the function:

$\map f x = x^2: -\pi \le x \le \pi$
And consider its representation as a Fourier series:

$\ds \map f x = \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos x + b_n \sin x}$
where:

$\ds a_n = \frac 1 \pi \int_{-\pi}^\pi x^2 \cos n x \rd x: n = 0, 1, 2, \ldots$
$\ds b_n = \frac 1 \pi \int_{-\pi}^\pi x^2 \sin n x \rd x: n = 0, 1, 2, \ldots$
Because $x^2$ is even and $\sin x$ is odd, their product is odd. 
This implies, as the interval in question is symmetric about $0$:

$\ds \frac 1 \pi \int_{-\pi}^\pi x^2 \sin n x \rd x = 0$,
So:

$\ds \map f x = \frac {a_0} 2 + \sum_{n \mathop = 1}^{\infty} a_n \cos x$
Because $x^2$ is even and $\cos x$ is even, their product is even. 
This implies, as the interval in question is symmetric about $0$:

$\ds a_n = \frac 1 \pi \int_{-\pi}^\pi x^2 \cos n x \rd x = \frac 2 \pi \int_0^\pi x^2 \cos n x \rd x$
For $n = 0$:














\(\ds a_0\)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi x^2 \cos 0 \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi x^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \intlimits {\frac {x^3} 3} 0 \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \pi^2} 3\)









for $n \ge 1$:














\(\ds a_n\)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi x^2 \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \intlimits {\paren {\paren {\frac {x^2} n + \frac 2 {n^3} } \sin n x + \frac {2 x} {n^2} \cos n x} } 0 \pi\)





integration by parts, twice














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \times \frac {2 \pi} {n^2} \cos n \pi\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^n \frac 4 {n^2}\)









Put $a_0$ and $a_n$ into the Fourier series:


$\ds x^2 = \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac 4 {n^2} \cos n x$
Put $x = \pi$:














\(\ds \pi^2\)

\(=\)







\(\ds \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac 4 {n^2} \cos \pi n\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {-1}^n 4 \frac 1 {n^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^2} 3 + 4  \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)

\(=\)







\(\ds \frac 1 4 \paren {\pi^2 - \frac {\pi^2} 3}\)














\(\ds \leadsto \ \ \)





\(\ds \map \zeta 2\)

\(=\)







\(\ds \frac {\pi^2} 6\)









$\blacksquare$






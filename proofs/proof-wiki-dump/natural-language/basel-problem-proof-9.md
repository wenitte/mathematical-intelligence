# 

Source: https://proofwiki.org/wiki/Basel_Problem/Proof_9

Theorem
$\ds \map \zeta 2 = \sum_{n \mathop = 1}^\infty {\frac 1 {n^2} } = \frac {\pi^2} 6$
where $\zeta$ denotes the Riemann zeta function.


Proof
Let $\map f x$ be the real function defined on $\openint 0 {2 \pi}$ as:

$\map f x = \begin {cases} \paren {x - \pi}^2 & : 0 < x \le \pi \\ \pi^2 & : \pi < x < 2 \pi \end {cases}$
From Fourier Series: Square of x minus pi, Square of pi, its Fourier series can be expressed as:

$\map f x \sim \ds \dfrac {2 \pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\frac {2 \cos n x} {n^2} + \paren {\frac {\paren {-1}^n \pi} n + \frac {2 \paren {\paren {-1}^n - 1} } {\pi n^3} } \sin n x}$

Setting $x = 0$:














\(\ds \map f 0\)

\(=\)







\(\ds \frac {2 \pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\frac {2 \cos 0} {n^2} + \paren {\frac {\paren {-1}^n \pi} n + \frac {2 \paren {\paren {-1}^n - 1} } {\pi n^3} } \sin 0}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {0 - \pi}^2\)

\(=\)







\(\ds \frac {2 \pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\frac {2 \cos 0} {n^2} }\)





Sine of Zero is Zero








\(\ds \leadsto \ \ \)





\(\ds \pi^2\)

\(=\)







\(\ds \frac {2 \pi^2} 3 + 2 \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)





Cosine of Zero is One








\(\ds \leadsto \ \ \)





\(\ds \frac {\pi^2} 2 - \frac {\pi^2} 3\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\pi^2} 6\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)









$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 2$. Fourier Series: Example $1$





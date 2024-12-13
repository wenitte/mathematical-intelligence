# 

Source: https://proofwiki.org/wiki/Series_Expansion_for_Pi_over_8_Root_2

Theorem
$\ds \frac \pi {8 \sqrt 2} = \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {2 n - 1} {\paren {4 n - 1} \paren {4 n - 3} }$


Proof
Let $\map f x$ be the real function defined on $\openint {-\pi} \pi$ as:

$\map f x = \begin {cases}
\cos x & : -\pi < x < 0 \\
-\cos x & : 0 < x < \pi \end {cases}$

From Fourier Series: $\cos x$ over $\openint {-\pi} 0$, $-\cos x$ over $\openint 0 \pi$, we have:

$\ds \map f x \sim -\frac 8 \pi \sum_{r \mathop = 1}^\infty \frac {r \sin 2 r x} {4 r^2 - 1}$

Setting $x = \dfrac \pi 4$, we have:














\(\ds -\cos \dfrac \pi 4\)

\(=\)







\(\ds -\frac 8 \pi \sum_{r \mathop = 1}^\infty \frac {r \sin 2 r \dfrac \pi 4} {4 r^2 - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \cos \dfrac \pi 4\)

\(=\)







\(\ds \frac 8 \pi \sum_{r \mathop = 1}^\infty \frac {r \sin \dfrac {r \pi} 2} {4 r^2 - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\sqrt 2} 2\)

\(=\)







\(\ds \frac 8 \pi \sum_{r \mathop = 1}^\infty \frac {r \sin \dfrac {r \pi} 2} {4 r^2 - 1}\)





Cosine of $\dfrac \pi 4$








\(\ds \leadsto \ \ \)





\(\ds \frac {\pi} {8 \sqrt 2}\)

\(=\)







\(\ds \sum_{r \mathop = 1}^\infty \frac {r \sin \dfrac {r \pi} 2} {4 r^2 - 1}\)





rearranging




When $r$ is even, $\dfrac {r \pi} 2$ is an integer multiple of $\pi$.
Hence, in this case, from Sine of Multiple of Pi:

$\sin \dfrac {r \pi} 2 = 0$

When $r$ is odd it can be expressed as $r = 2 n - 1$ for $n \ge 1$.
Hence we have:














\(\ds \frac {\pi} {8 \sqrt 2}\)

\(=\)







\(\ds \sum_{r \mathop = 1}^\infty \frac {r \sin \dfrac {r \pi} 2} {4 r^2 - 1}\)





from above














\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 1}^\infty \frac {r \sin \dfrac {r \pi} 2} {\paren {2 r + 1} \paren {2 r - 1} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {2 n - 1} \sin \dfrac {\paren {2 n - 1} \pi} 2} {\paren {2 \paren {2 n - 1} + 1} \paren {2 \paren {2 n - 1} - 1} }\)





from above: terms in even $r$ vanish














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {2 n - 1} \sin \paren {\paren {n - 1} + \frac 1 2} \pi} {\paren {4 n - 1} \paren {4 n - 3} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {2 n - 1} \paren {-1}^{n - 1} } {\paren {4 n - 1} \paren {4 n - 3} }\)





Sine of Half-Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {2 n - 1} {\paren {4 n - 1} \paren {4 n - 3} }\)





rearranging



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Exercises on Chapter $\text I$: $3$.





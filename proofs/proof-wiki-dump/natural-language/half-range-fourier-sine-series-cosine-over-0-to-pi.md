# 

Source: https://proofwiki.org/wiki/Half-Range_Fourier_Sine_Series/Cosine_over_0_to_Pi

Theorem
  $\map f x$ and its $7$th approximation
On the interval $\openint 0 \pi$:














\(\ds \cos x\)

\(=\)







\(\ds \frac 8 \pi \sum_{m \mathop = 1}^\infty \frac {m \sin 2 m x} {4 m^2 - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 8 \pi \paren {\frac {\sin 2 x} {1 \times 3} + \frac {2 \sin 4 x} {3 \times 5} + \frac {3 \sin 6 x} {5 \times 7} + \cdots}\)











Proof
Let $\map f x$ be the function defined as:

$\forall x \in \openint 0 \pi: \map f x = \cos x$

Let $f$ be expressed by a half-range Fourier sine series:

$\ds \map f x \sim \sum_{n \mathop = 1}^\infty b_n \sin \frac {n \pi x} \lambda$
where for all $n \in \Z_{> 0}$:

$b_n = \ds \frac 2 \lambda \int_0^\lambda \cos x \sin \frac {n \pi x} \lambda \rd x$

In this context, $\lambda = \pi$ and so this can be expressed more simply as:

$\ds \map f x \sim \sum_{n \mathop = 1}^\infty b_n \sin n x$
where for all $n \in \Z_{> 0}$:

$b_n = \ds \frac 2 \pi \int_0^\pi \cos x \sin n x \rd x$

First the case when $n = 1$:














\(\ds b_1\)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi \cos x \sin x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \intlimits {\frac {\sin^2 x} 2} 0 \pi\)





Primitive of $\cos x \sin x$














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\frac {\sin^2 \pi} 2 - \frac {\sin^2 0} 2}\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {0 - 0}\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds 0\)










When $n \ne 1$:














\(\ds b_n\)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi \cos x \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \intlimits {\frac {-\cos \paren {n - 1} x} {2 \paren {n - 1} } - \frac {\cos \paren {n + 1} x} {2 \paren {n + 1} } } 0 \pi\)





Primitive of $\cos x \sin n x$














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\paren {\frac {-\cos \paren {n - 1} \pi} {2 \paren {n - 1} } - \frac {\cos \paren {n + 1} \pi} {2 \paren {n + 1} } } - \paren {\frac {-\cos 0} {2 \paren {n - 1} } - \frac {\cos 0} {2 \paren {n + 1} } } }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\paren {\frac {-\cos \paren {n - 1} \pi} {2 \paren {n - 1} } - \frac {\cos \paren {n + 1} \pi} {2 \paren {n + 1} } } + \frac 1 {2 \paren {n - 1} } + \frac 1 {2 \paren {n + 1} } }\)





Cosine of Zero is One and simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {1 - \cos \paren {n - 1} \pi} {\paren {n - 1} } + \frac {1 - \cos \paren {n + 1} \pi} {\paren {n + 1} } }\)





Further simplification




Thus for $n = 2 m$ for $m \in \Z$:














\(\ds b_n\)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {1 - \cos \paren {2 m - 1} \pi} {\paren {2 m - 1} } + \frac {1 - \cos \paren {2 m + 1} \pi} {\paren {2 m + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {1 - \paren {-1} } {\paren {2 m - 1} } + \frac {1 - \paren {-1} } {\paren {2 m + 1} } }\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac 2 {\paren {2 m - 1} } + \frac 2 {\paren {2 m + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {2 \paren {2 m + 1} + 2 \paren {2 m - 1} } {\paren {2 m + 1} \paren {2 m - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac {4 m + 2 + 4 m - 2} {\pi \paren {2 m + 1} \paren {2 m - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {8 m} {\pi \paren {4 m^2 - 1} }\)










and for $n = 2 m + 1$ for $m \in \Z$:














\(\ds b_n\)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {1 - \cos \paren {2 m} \pi} {\paren {2 m - 1} } + \frac {1 - \cos \paren {2 m + 2} \pi} {\paren {2 m + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {1 - 1} {\paren {2 m - 1} } + \frac {1 - 1} {\paren {2 m + 1} } }\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds 0\)










Thus we have:














\(\ds b_{2 m}\)

\(=\)







\(\ds \frac {8 m} {\pi \paren {4 m^2 - 1} }\)




















\(\ds b_{2 m + 1}\)

\(=\)







\(\ds 0\)










and so over the given interval:














\(\ds \cos x\)

\(=\)







\(\ds \sum_{m \mathop = 1}^\infty \frac {8 m} {\pi \paren {4 m^2 - 1} } \sin 2 m x\)




















\(\ds \)

\(=\)







\(\ds \frac 8 \pi \sum_{m \mathop = 1}^\infty \frac {m \sin 2 m x} {\paren {4 m^2 - 1} }\)









$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 5$. Half-Range Sine Series: Example $4$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 23$: Special Fourier Series and their Graphs: $23.13$





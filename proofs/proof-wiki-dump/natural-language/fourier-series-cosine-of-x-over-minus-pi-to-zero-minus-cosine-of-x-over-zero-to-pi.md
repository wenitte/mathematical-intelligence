# 

Source: https://proofwiki.org/wiki/Fourier_Series/Cosine_of_x_over_Minus_Pi_to_Zero,_Minus_Cosine_of_x_over_Zero_to_Pi

Theorem
Let $\map f x$ be the real function defined on $\openint {-\pi} \pi$ as:

  $\map f x$ and its $7$th approximation
$\map f x = \begin {cases}
\cos x & : -\pi < x < 0 \\
-\cos x & : 0 < x < \pi \end {cases}$

Then its Fourier series can be expressed as:














\(\ds \map f x\)

\(\sim\)







\(\ds -\frac 8 \pi \sum_{r \mathop = 1}^\infty \frac {r \sin 2 r x} {4 r^2 - 1}\)




















\(\ds \)

\(=\)







\(\ds -\frac 8 \pi \paren {\frac {\sin 2 x} {1 \times 3} + \frac {\sin 4 x} {3 \times 5} + \frac {\sin 6 x} {5 \times 7}  + \frac {\sin 8 x} {7 \times 9} + \dotsb}\)











Proof
It is apparent by inspection that $\map f x$ is an odd function over $\openint {-\pi} \pi$.
It follows from Fourier Series for Odd Function over Symmetric Range:

$\ds \map f x \sim \sum_{n \mathop = 1}^\infty b_n \sin n x$

where for all $n \in \Z_{> 0}$:

$b_n = \ds \frac 2 \pi \int_0^\pi \map f x \sin n x \rd x$
for all $n \in \Z_{>0}$.

Thus by definition of $f$:

$\ds b_n = -\frac 2 \pi \int_0^\pi \cos x \sin n x \rd x$

When $n \ne 1$, we have:














\(\ds b_n\)

\(=\)







\(\ds -\frac 2 \pi \int_0^\pi \cos x \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 2 \pi \intlimits {\frac {-\cos \paren {n - 1} x} {2 \paren {n - 1} } - \frac {\cos \paren {n + 1} x} {2 \paren {n + 1} } } 0 \pi\)





Primitive of $\cos x \sin n x$














\(\ds \)

\(=\)







\(\ds -\frac 2 \pi \paren {\paren {\frac {-\cos \paren {n - 1} \pi} {2 \paren {n - 1} } - \frac {\cos \paren {n + 1} \pi} {2 \paren {n + 1} } } - \paren {\frac {-\cos \paren {n - 1} 0} {2 \paren {n - 1} } - \frac {\cos \paren {n + 1} 0} {2 \paren {n + 1} } } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\paren {\frac {\cos \paren {n - 1} \pi} {n - 1} + \frac {\cos \paren {n + 1} \pi} {n + 1} } - \paren {\frac 1 {n - 1} + \frac 1 {n + 1} } }\)





Cosine of Zero is One and simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {\frac {\cos \paren {n - 1} \pi} {n - 1} - \frac 1 {n - 1} + \frac {\cos \paren {n + 1} \pi} {n + 1} - \frac 1 {n + 1} }\)





simplifying




When $n = 1$, we have:














\(\ds b_n\)

\(=\)







\(\ds -\frac 2 \pi \int_0^\pi \cos x \sin x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 2 \pi \intlimits {\frac {\sin^2 x} 2} 0 \pi\)





Primitive of $\cos x \sin x$














\(\ds \)

\(=\)







\(\ds -\frac 2 \pi \paren {\frac {\sin^2 \pi} 2 - \frac {\sin^2 0} 2}\)




















\(\ds \)

\(=\)







\(\ds 0\)





Sine of Multiple of Pi




Hence:














\(\ds \map f x\)

\(\sim\)







\(\ds \sum_{n \mathop = 1}^\infty b_n \sin n x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \sum_{n \mathop = 2}^\infty \paren {\frac {\cos \paren {n - 1} \pi} {n - 1} - \frac 1 {n - 1} + \frac {\cos \paren {n + 1} \pi} {n + 1} - \frac 1 {n + 1} } \sin n x\)





substituting for $b_n$ from above and rearranging




When $n$ is odd, we have $n = 2 r + 1$ for $r \ge 1$, and so:














\(\ds \)

\(\)







\(\ds \frac 1 \pi \sum_{r \mathop = 1}^\infty \paren {\frac {\cos \paren {\paren {2 r + 1} - 1} \pi} {\paren {2 r + 1} - 1} - \frac 1 {\paren {2 r + 1} - 1} + \frac {\cos \paren {\paren {2 r + 1} + 1} \pi} {\paren {2 r + 1} + 1} - \frac 1 {\paren {2 r + 1} + 1} } \sin \paren {2 r + 1} x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \sum_{r \mathop = 1}^\infty \paren {\frac {\cos 2 r \pi} {2 r} - \frac 1 {2 r} + \frac {\cos \paren {2 r + 2} \pi} {2 r + 2} - \frac 1 {2 r + 2} } \sin \paren {2 r + 1} x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \sum_{r \mathop = 1}^\infty \paren {\frac 1 {2 r} - \frac 1 {2 r} + \frac 1 {2 r + 2} - \frac 1 {2 r + 2} } \sin \paren {2 r + 1} x\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds 0\)





everything vanishes




When $n$ is even, we have $n = 2 r$ for $r \ge 1$, and so:














\(\ds \)

\(\)







\(\ds \frac 1 \pi \sum_{r \mathop = 1}^\infty \paren {\frac {\cos \paren {2 r - 1} \pi} {2 r - 1} - \frac 1 {2 r - 1} + \frac {\cos \paren {2 r + 1} \pi} {2 r + 1} - \frac 1 {2 r + 1} } \sin 2 r x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \sum_{r \mathop = 1}^\infty \paren {\frac {-1} {2 r - 1} - \frac 1 {2 r - 1} + \frac {-1} {2 r + 1} - \frac 1 {2 r + 1} } \sin 2 r x\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds -\frac 2 \pi \sum_{r \mathop = 1}^\infty \paren {\frac 1 {2 r - 1} + \frac 1 {2 r + 1} } \sin 2 r x\)




















\(\ds \)

\(=\)







\(\ds -\frac 2 \pi \sum_{r \mathop = 1}^\infty \frac {\paren {2 r + 1} + \paren {2 r - 1} } {\paren {2 r - 1} \paren {2 r + 1} } \sin 2 r x\)




















\(\ds \)

\(=\)







\(\ds -\frac 2 \pi \sum_{r \mathop = 1}^\infty \frac {4 r} {4 r^2 - 1} \sin 2 r x\)





Difference of Two Squares and simplifying














\(\ds \)

\(=\)







\(\ds -\frac 8 \pi \sum_{r \mathop = 1}^\infty \frac {r \sin 2 r x} {4 r^2 - 1}\)





simplifying



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Exercises on Chapter $\text I$: $3$.
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 23$: Special Fourier Series and their Graphs: $23.13$





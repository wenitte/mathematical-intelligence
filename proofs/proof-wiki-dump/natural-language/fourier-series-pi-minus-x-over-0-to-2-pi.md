# 

Source: https://proofwiki.org/wiki/Fourier_Series/Pi_minus_x_over_0_to_2_Pi

Theorem
For $x \in \openint 0 {2 \pi}$:

$\ds \pi - x = 2 \sum_{n \mathop = 1}^\infty \frac {\sin n x} n$


Proof
By definition of Fourier series:

$\ds \map f x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}$
where:














\(\ds a_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_0^{2 \pi} \map f x \cos n x \rd x\)




















\(\ds b_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_0^{2 \pi} \map f x \sin n x \rd x\)









for all $n \in \Z_{>0}$.

Thus:














\(\ds a_0\)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \map f x \rd x\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \pi - x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \intlimits {\pi x - \frac 1 2 x^2} 0 {2 \pi}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds 2 \pi^2 - \frac 4 2 \pi^2\)




















\(\ds \)

\(=\)







\(\ds 0\)









$\Box$

For $n > 0$:














\(\ds a_n\)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \map f x \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \paren {\pi - x} \cos n x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \pi \int_0^{2 \pi} \cos n x \rd x - \frac 1 \pi \int_0^{2 \pi} x \cos n x \rd x\)




















\(\ds \)

\(=\)







\(\ds - \frac 1 \pi \int_0^{2 \pi} x \cos n x \rd x\)





Integral over $2 \pi$ of $\cos n x$














\(\ds \)

\(=\)







\(\ds - \frac 1 \pi \intlimits {\frac {\cos n x} {n^2} + \frac {x \sin n x} n} 0 {2 \pi}\)





Primitive of $x \cos n x$














\(\ds \)

\(=\)







\(\ds - \frac 1 \pi \paren {\cos 0 - \cos 2 \pi}\)





Sine of Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds 0\)





Sine and Cosine are Periodic on Reals



$\Box$

Now for the $\sin n x$ terms:














\(\ds b_n\)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \map f x \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_0^{2 \pi} \paren {\pi - x} \sin n x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \int_0^{2 \pi} \sin n x \rd x - \frac 1 \pi \int_0^{2 \pi} x \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds - \frac 1 \pi \int_0^{2 \pi} x \sin n x \rd x\)





Integral over $2 \pi$ of $\sin n x$














\(\ds \)

\(=\)







\(\ds - \frac 1 \pi \intlimits {\frac {\sin n x} {n^2} - \frac {x \cos n x} n} 0 {2 \pi}\)





Primitive of $x \sin n x$














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \frac {2 \pi \cos 2 n \pi} n\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac 2 n\)





Cosine of Multiple of Pi




Finally:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 2 n \sin n x\)





substituting for $a_0$, $a_n$ and $b_n$ from above














\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop = 1}^\infty \frac {\sin n x} n\)





rearranging



$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Technically not the same result as cited hereIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 23$: Special Fourier Series and their Graphs: $23.10$





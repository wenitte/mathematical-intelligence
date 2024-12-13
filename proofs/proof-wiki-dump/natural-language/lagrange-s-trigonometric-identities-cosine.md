# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Trigonometric_Identities/Cosine



Theorem













\(\ds \frac 1 2 + \sum_{k \mathop = 1}^n \map \cos {k x}\)

\(=\)







\(\ds \frac 1 2 + \cos x + \cos 2 x + \cos 3 x + \cdots + \cos n x\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \sin {\paren {2 n + 1} x / 2} } {2 \map \sin {x / 2} }\)









where $x$ is not an integer multiple of $2 \pi$.


Proof
By the Werner Formula for Cosine by Sine:

$2 \cos \alpha \sin \beta = \map \sin {\alpha + \beta} - \map \sin {\alpha - \beta}$
Thus we establish the following sequence of identities:














\(\ds 2 \cdot \frac 1 2 \sin \frac x 2\)

\(=\)







\(\ds \sin \frac x 2\)




















\(\ds 2 \cos x \sin \frac x 2\)

\(=\)







\(\ds \sin \frac {3 x} 2 - \sin \frac x 2\)




















\(\ds 2 \cos 2 x \sin \frac x 2\)

\(=\)







\(\ds \sin \frac {5 x} 2 - \sin \frac {3 x} 2\)




















\(\ds \)

\(\cdots\)







\(\ds \)




















\(\ds 2 \cos n x \sin \frac x 2\)

\(=\)







\(\ds \sin \frac {\paren {2 n + 1} x} 2 - \sin \frac {\paren {2 n - 1} x} 2\)










Summing the above:

$\ds 2 \sin \frac x 2 \paren {\frac 1 2 + \sum_{k \mathop = 1}^n \map \cos {k x} } = \sin \frac {\paren {2 n + 1} x} 2$
as the sums on the right hand side form a telescoping series.
The result follows by dividing both sides by $2 \sin \dfrac x 2$.

It is noted that when $x$ is a multiple of $2 \pi$ then:

$\sin \dfrac x 2 = 0$
leaving the right hand side undefined.
$\blacksquare$


Also see
Lagrange's Sine Identity:
Sine Form of Lagrange's Sine Identity
Cosine Form of Lagrange's Sine Identity


Source of Name
This entry was named for Joseph Louis Lagrange.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: Miscellaneous Series: $19.39$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.15$: A Rigorous Proof of Euler's Formula $\ds \sum_1^\infty \frac 1 {n^2} = \frac {\pi^2} 6$





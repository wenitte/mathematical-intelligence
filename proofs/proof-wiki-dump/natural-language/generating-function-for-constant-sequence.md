# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Constant_Sequence



Theorem
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \N: a_n = r$
for some $r \in \R$.

Then the generating function for $\sequence {a_n}$ is given as:

$\map G z = \dfrac r {1 - z}$ for $\size z < 1$


Proof













\(\ds \map G z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty r z^n\)





Definition of Generating Function














\(\ds \)

\(=\)







\(\ds r \sum_{n \mathop = 0}^\infty z^n\)




















\(\ds \)

\(=\)







\(\ds \frac r {1 - z}\)





Sum of Infinite Geometric Sequence



for $\size z < 1$.
$\blacksquare$


Examples
$a_0 = 1, a_n = 2$
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \Z_{\ge 0}: a_n = \begin{cases} 1 & : n = 0 \\ 2 & : n > 0 \end{cases}$

Then the generating function for $\sequence {a_n}$ is given as:

$\map G z = \dfrac {1 + z} {1 - z}$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-4}$ Generating Functions: Example $\text {3-6}$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(5)$





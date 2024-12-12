# 

Source: https://proofwiki.org/wiki/Cassini%27s_Identity/Proof_1



Theorem
$F_{n + 1} F_{n - 1} - F_n^2 = \paren {-1}^n$


Proof
We see that:

$F_2 F_0 - F_1^2 = 1 \times 0 - 1 = -1 = \left({-1}\right)^1$
so the proposition holds for $n = 1$.
We also see that:

$F_3 F_1 - F_2^2 = 2 \times 1 - 1 = \left({-1}\right)^2$
so the proposition holds for $n = 2$.

Suppose the proposition is true for $n = k$, that is:

$F_{k + 1} F_{k - 1} - F_k^2 = \left({-1}\right)^k$
It remains to be shown that it follows from this that the proposition is true for $n = k + 1$, that is:

$F_{k + 2} F_k - F_{k + 1}^2 = \left({-1}\right)^{k + 1}$

So:














\(\ds F_{k + 2} F_k - F_{k + 1}^2\)

\(=\)







\(\ds \left({F_k + F_{k + 1} }\right) F_k - F_{k + 1}^2\)




















\(\ds \)

\(=\)







\(\ds F_k^2 + F_k F_{k + 1} - F_{k + 1}^2\)




















\(\ds \)

\(=\)







\(\ds F_k^2 + F_k F_{k + 1} - F_{k + 1} \left({F_k + F_{k - 1} }\right)\)




















\(\ds \)

\(=\)







\(\ds F_k^2 + F_k F_{k + 1} - F_k F_{k + 1} - F_{k + 1} F_{k - 1}\)




















\(\ds \)

\(=\)







\(\ds F_k^2 - F_{k + 1} F_{k - 1}\)




















\(\ds \)

\(=\)







\(\ds \left({-1}\right) \left({F_{k + 1} F_{k - 1} - F_k^2}\right)\)




















\(\ds \)

\(=\)







\(\ds \left({-1}\right) \left({-1}\right)^k\)




















\(\ds \)

\(=\)







\(\ds \left({-1}\right)^{k + 1}\)










By the Principle of Mathematical Induction, the proof is complete.
$\blacksquare$

Note that from the above we have that:

$F_{k + 2} F_k - F_{k + 1}^2 = \left({-1}\right)^{k + 1}$
from which:

$F_{n + 1}^2 - F_n F_{n + 2} = \left({-1}\right)^n$
follows immediately.


Source of Name
This entry was named for Giovanni Domenico Cassini.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: $(4)$





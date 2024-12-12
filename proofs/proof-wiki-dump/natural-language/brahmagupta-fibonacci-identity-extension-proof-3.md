# 

Source: https://proofwiki.org/wiki/Brahmagupta-Fibonacci_Identity/Extension/Proof_3

Extension to Brahmagupta-Fibonacci Identity
Let $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n$ be integers.
Then:

$\ds \prod_{j \mathop = 1}^n \paren { {a_j}^2 + {b_j}^2} = c^2 + d^2$
where $c, d \in \Z$.
That is: the product of any number of sums of two squares is also a sum of two squares.


Proof
Let $z_j = a_j + i b_j$ for each $j = 1, 2, \ldots, n$.
Let $\ds c + i d = \prod_{j \mathop = 1}^n z_j$.
Then:














\(\ds c + i d\)

\(=\)







\(\ds \prod_{j \mathop = 1}^n z_j\)




















\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^n \paren {a_j + i b_j}\)










As $a_1, a_2, \ldots, a_n$ and $b_1, b_2, \ldots, b_n$ are integers, so are $c$ and $d$.

Thus:














\(\ds c^2 + d^2\)

\(=\)







\(\ds \cmod {c + i d}^2\)





Definition of Complex Modulus














\(\ds \)

\(=\)







\(\ds \cmod {\prod_{j \mathop = 1}^n z_j}^2\)





$\ds c + i d = \prod_{j \mathop = 1}^n z_j$














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^n \cmod {z_j}^2\)





Complex Modulus of Product of Complex Numbers: General Result














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^n \cmod {a_j + i b_j}^2\)





$z_j = a_j + i b_j$














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 1}^n \paren { {a_j}^2 + {b_j}^2}\)





Definition of Complex Modulus



$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $142$





# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Powers_of_Two

Theorem
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \N: a_n = 2^n$
That is:

$\sequence {a_n} = 1, 2, 4, 8, \ldots$

Then the generating function for $\sequence {a_n}$ is given as:

$\map G z = \dfrac 1 {1 - 2 z}$ for $\size z < \dfrac 1 2$


Proof













\(\ds \)

\(\)







\(\ds 1 + 2 z + 4 z^2 + \cdots\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \paren {2 z}^n\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 - 2 z}\)





Sum of Infinite Geometric Sequence




This is valid for:

$\size {2 z} < 1$
from which:

$\size z < \dfrac 1 2$
follows directly by division by $2$.

The result follows from the definition of a generating function.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.1$: Generating functions





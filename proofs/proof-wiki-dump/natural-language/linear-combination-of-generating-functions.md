# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Generating_Functions

Theorem
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
and $\map H z$ be the generating function for the sequence $\sequence {b_n}$.

Then $\alpha \map G z + \beta \map H z$ is the generating function for the sequence $\sequence {\alpha a_n + \beta b_n}$.


Proof
By definition:

$\map G z = \ds \sum_{n \mathop \ge 0} a_n z^n$
$\map H z = \ds \sum_{n \mathop \ge 0} b_n z^n$
Let $\map G z$ and $\map H z$ converge to $x$ and $y$ respectively for some $z_0 \in \R_{>0}$.
Then from Linear Combination of Convergent Series:

$\ds \sum_{n \mathop \ge 0} \paren {\alpha a_n + \beta b_n} z^n = \alpha \sum_{n \mathop \ge 0} a_n z^n + \beta \sum_{n \mathop \ge 0} b_n z^n$
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(2)$





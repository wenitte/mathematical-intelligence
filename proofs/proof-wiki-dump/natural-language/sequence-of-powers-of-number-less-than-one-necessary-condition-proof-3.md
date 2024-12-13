# 

Source: https://proofwiki.org/wiki/Sequence_of_Powers_of_Number_less_than_One/Necessary_Condition/Proof_3

Theorem
Let $x \in \R$ be such that $\size{x} < 1$.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as $x_n = x^n$.

Then $\sequence {x_n}$ is a null sequence.


Proof
Let $\epsilon \in \R_{>0}$ be a strictly positive real number.

By the Axiom of Archimedes, there exists a natural number $M$ such that:

$M > \dfrac 1 {\paren {1 - \size x} \epsilon}$
By the Well-Ordering Principle, there exists a smallest natural number $m$ such that:

$\exists N \in \N: m > M \size x^N$
Note that:

$m - 1 \le M \size x^{N + 1}$
By elementary algebra, it follows that:

$1 - \dfrac 1 m = \dfrac {m - 1} m \le \size x < 1 - \dfrac 1 {M \epsilon}$
Hence, $m < M \epsilon$.

Therefore:

$\size x^N < \epsilon$
By Absolute Value Function is Completely Multiplicative:

$\forall n \in \N: n \ge N \implies \size {x^n} = \size x^n \le \size x^N < \epsilon$

Hence the result, by the definition of a limit.
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Sequence_of_Powers_of_Number_less_than_One/Necessary_Condition/Proof_2

Theorem
Let $x \in \R$ be such that $\size{x} < 1$.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as $x_n = x^n$.

Then $\sequence {x_n}$ is a null sequence.


Proof
Let $\epsilon \in \R_{>0}$ be a strictly positive real number.

Suppose that:

$\exists N \in \N: \size x^N < \epsilon$
Then the result follows by the definition of a limit, because:

$\forall n \in \N: n \ge N \implies \size {x^n} = \size x^n \le \size x^N < \epsilon$
where Absolute Value Function is Completely Multiplicative is applied.

It remains to consider the case that:

$\forall n \in \N: \size x^n \ge \epsilon$
By the Axiom of Archimedes, we can choose a natural number $M$ such that:

$M > \dfrac 1 {\paren {1 - \size x} \epsilon}$
Then, by Sum of Geometric Sequence:

$\ds M \epsilon \le \sum_{k \mathop = 0}^{M - 1} \size x^k = \frac {1 - \size x^M} {1 - \size x} < M \epsilon$
a contradiction.

Hence the result.
$\blacksquare$






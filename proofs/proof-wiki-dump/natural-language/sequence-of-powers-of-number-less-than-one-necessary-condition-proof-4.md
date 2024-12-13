# 

Source: https://proofwiki.org/wiki/Sequence_of_Powers_of_Number_less_than_One/Necessary_Condition/Proof_4

Theorem
Let $x \in \R$ be such that $\size{x} < 1$.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as $x_n = x^n$.

Then $\sequence {x_n}$ is a null sequence.


Proof
Define:

$\ds L = \inf_{n \mathop \in \N} \size x^n$
By the Continuum Property, such an $L$ exists in $\R$.

Clearly, $L \ge 0$.
Aiming for a contradiction, suppose $L > 0$.
Then, by the definition of the infimum, we can choose $n \in \N$ such that $\size x^n < L \size x^{-1}$.
But then $\size x^{n + 1} < L$, which contradicts the definition of $L$.
Therefore, $L = 0$.

Let $\epsilon \in \R_{>0}$ be a strictly positive real number.
By the definition of the infimum, there exists an $N \in \N$ such that $\size x^N < \epsilon$.
It follows that:

$\forall n \in \N: n \ge N \implies \size {x^n} = \size x^n \le \size x^N < \epsilon$
where Absolute Value Function is Completely Multiplicative is applied.

Hence the result, by the definition of a limit.
$\blacksquare$






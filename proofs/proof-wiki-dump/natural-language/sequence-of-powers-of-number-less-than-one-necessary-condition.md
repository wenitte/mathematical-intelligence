# 

Source: https://proofwiki.org/wiki/Sequence_of_Powers_of_Number_less_than_One/Necessary_Condition



Theorem
Let $x \in \R$ be such that $\size{x} < 1$.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as $x_n = x^n$.

Then $\sequence {x_n}$ is a null sequence.


Proof 1
Without loss of generality, assume that $x \ne 0$.
Observe that by hypothesis:

$0 < \size x < 1$
Thus by Ordering of Reciprocals:

$\size x^{-1} > 1$
Define:

$h = \size x^{-1} - 1 > 0$
Then:

$x = \dfrac 1 {1 + h}$
By the binomial theorem, we have that:

$\paren {1 + h}^n = 1 + n h + \cdots + h^n > n h$
because $h > 0$.

By Absolute Value Function is Completely Multiplicative, it follows that:

$0 \le \size {x^n} = \size x^n = \dfrac 1 {\paren {1 + h}^n} < \dfrac 1 {n h}$
From Sequence of Reciprocals is Null Sequence:

$\dfrac 1 n \to 0$ as $n \to \infty$
By the Multiple Rule for Real Sequences:

$\dfrac 1 {n h} \to 0$ as $n \to \infty$
By the Squeeze Theorem for Real Sequences: Corollary:

$\size {x^n} \to 0$
as $n \to \infty$.

Hence the result, by the definition of a limit.
$\blacksquare$


Proof 2
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


Proof 3
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


Proof 4
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


Also known as
This result and Sequence of Powers of Reciprocals is Null Sequence are sometimes referred to as the basic null sequences.






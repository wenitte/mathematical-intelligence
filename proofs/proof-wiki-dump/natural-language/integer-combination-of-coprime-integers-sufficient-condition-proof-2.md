# 

Source: https://proofwiki.org/wiki/Integer_Combination_of_Coprime_Integers/Sufficient_Condition/Proof_2



Theorem
Let $a, b \in \Z$ be integers, not both zero.
Let $a$ and $b$ be coprime to each other.
Then there exists an integer combination of them equal to $1$:

$\forall a, b \in \Z: a \perp b \implies \exists m, n \in \Z: m a + n b = 1$


Proof
Let $a \perp b$.
Thus they are not both $0$.
Let $S$ be defined as:

$S = \set {a m + b n: m, n \in \Z}$
$S$ contains at least one strictly positive integer, because for example $a^2 + b^2 \in S$.
By Set of Integers Bounded Below has Smallest Element, let $d$ be the smallest element of $S$ which is strictly positive.
Let $d = a x + b y$.
It remains to be shown that $d = 1$.
By the Division Theorem:

$a = d q + r$ where $0 \le r < d$
Then:














\(\ds r\)

\(=\)







\(\ds a - d q\)




















\(\ds \)

\(=\)







\(\ds a - \paren {a x + b y} q\)




















\(\ds \)

\(=\)







\(\ds a \paren {1 - x q} + b \paren {- y q}\)




















\(\ds \)

\(\in\)







\(\ds S\)









But we have that $0 \le r < d$.
We have defined $d$ as the smallest element of $S$ which is strictly positive
Hence it follows that $r$ cannot therefore be strictly positive itself.
Hence $r = 0$ and so $a = d q$.
That is:

$d \divides a$
By a similar argument:

$d \divides b$
and so $d$ is a common divisor of both $a$ and $b$.
But the GCD of $a$ and $b$ is $1$.
Thus it follows that, as $d \in S$:

$\exists m, n \in \Z: m a + n b = 1$
$\blacksquare$


Also known as
This result is sometimes known as Bézout's Identity, although that result is usually used for the more general result for not necessarily coprime integers.
Some sources refer to this result as the Euclidean Algorithm, but the latter as generally understood is the procedure that can be used to establish the values of $m$ and $n$, and for any pair of integers, not necessarily coprime.


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: Lemma $1$





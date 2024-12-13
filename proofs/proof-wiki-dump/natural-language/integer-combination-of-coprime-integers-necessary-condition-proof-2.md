# 

Source: https://proofwiki.org/wiki/Integer_Combination_of_Coprime_Integers/Necessary_Condition/Proof_2



Theorem
Let $a, b \in \Z$ be integers, not both zero.
Let $a$ and $b$ be such that there exists an integer combination of them equal to $1$.
Then $a$ and $b$ are coprime:

$\forall a, b \in \Z: \exists m, n \in \Z: m a + n b = 1 \implies a \perp b$
In such an integer combination $m a + n b = 1$, the integers $m$ and $n$ are also coprime.


Proof
Let $a, b \in \Z$ be such that $\exists m, n \in \Z: m a + n b = 1$.
Let $d$ be a divisor of both $a$ and $b$.
Then:

$d \divides m a + n b$
and so:

$d \divides 1$
Thus:

$d = \pm 1$
and so:

$\gcd \set {a, b} = 1$
Thus, by definition, $a$ and $b$ are coprime.
$\blacksquare$


Also known as
This result is sometimes known as Bézout's Identity, although that result is usually used for the more general result for not necessarily coprime integers.
Some sources refer to this result as the Euclidean Algorithm, but the latter as generally understood is the procedure that can be used to establish the values of $m$ and $n$, and for any pair of integers, not necessarily coprime.


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: Lemma $1$





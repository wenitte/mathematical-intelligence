# 

Source: https://proofwiki.org/wiki/P-adic_Integer_has_Unique_Coherent_Sequence_Representative/P-adic_Expansion



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $a$ be a $p$-adic number, that is left coset, in $\Q_p$ such that $\norm a _p \le 1$.

Then $a$ has exactly one representative that is a $p$-adic expansion of the form:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$


Proof
From P-adic Integer has Unique Coherent Sequence Representative, $a$ has exactly one representative coherent sequence.

Let $\sequence{\alpha_n}$ be the coherent sequence such that:

$\sequence{\alpha_n}$ is a representative of $a$.
From Coherent Sequence is Partial Sum of P-adic Expansion, there exists a $p$-adic expansion of the form:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$
such that:

$\forall n \in \N: \alpha_n = \ds \sum_{i \mathop = 0}^n d_i p^i$
Then $\ds \sum_{n \mathop = 0}^\infty d_n p^n$ is a representative of $a$.

Let $\ds \sum_{n \mathop = 0}^\infty d'_n p^n$ be a $p$-adic expansion that is a representative of $a$.
From Partial Sums of P-adic Expansion forms Coherent Sequence, the partial sums:

$\forall n \in \N: \alpha'_n = \ds \sum_{i \mathop = 0}^n d'_i p^i$
are a coherent sequence that is a representative of $a$.

Since $\sequence{\alpha_n}$ is the only coherent sequence that is a  representative of $a$, then:

$\sequence{\alpha'_n} = \sequence{\alpha_n}$
It follows that:

$\forall n \in \N : d'_n = d_n$
Then $\ds \sum_{n \mathop = 0}^\infty d_n p^n$ is the only $p$-adic expansion that is a representative of $a$.
$\blacksquare$


Also see
P-adic Integer is Limit of Unique P-adic Expansion
P-adic Integer has Unique Coherent Sequence Representative
P-adic Number has Unique P-adic Expansion Representative


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$





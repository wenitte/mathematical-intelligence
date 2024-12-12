# 

Source: https://proofwiki.org/wiki/Finite_iff_Cardinality_Less_than_Aleph_Zero



Theorem
Let $X$ be a set.

Then $X$ is finite if and only if $\card X < \aleph_0$
where:

$\card X$ denotes the cardinality of $X$
$\aleph_0 = \card \N$ by Aleph Zero equals Cardinality of Naturals.


Proof
Sufficient Condition
Let $X$ be finite.
By definition of finite set:

$\exists n \in \N: X \sim \N_n$
where:

$\sim$ denotes the set equivalence
$\N_n$ denotes the initial segment of natural numbers less than $n$.
By the von Neumann construction of natural numbers:

$\N_n = n$
By definition of cardinality:

$\card X = n$
By the von Neumann construction of natural numbers:

$\forall i \in \N: i \subseteq \N$
Then:

$n + 1 \subseteq \N$
By Subset implies Cardinal Inequality:

$n + 1 = \card {n + 1} \le \card \N = \aleph_0$
Also:

$n < n + 1$
Thus:

$\card X < \aleph_0$
$\Box$


Necessary Condition
Let $\card X < \aleph_0$.
By definition of aleph mapping:

$\aleph_0 = \omega$
By the von Neumann construction of natural numbers:

$\N = \omega$
By definition of ordinal:

$\card X \in \N$
By definition of cardinal:

$\exists n \in \N: X \sim n$
By the von Neumann construction of natural numbers:

$\exists n \in \N: X \sim \N_n$
Thus by definition:

$X$ is finite.
$\blacksquare$


Sources
Mizar article CARD_3:84





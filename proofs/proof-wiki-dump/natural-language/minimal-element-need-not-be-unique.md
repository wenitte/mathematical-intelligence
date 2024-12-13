# 

Source: https://proofwiki.org/wiki/Minimal_Element_need_not_be_Unique



Theorem
Let $\struct {S, \preccurlyeq}$ be an ordered set.
It is possible for $S$ to have more than one minimal element.


Proof
Proof by Counterexample:
Consider the set $S$ defined as:

$S = \N \setminus \set {0, 1}$
That is, $S$ is the set of natural numbers with $0$ and $1$ removed.
Let $\preccurlyeq$ be the ordering on $S$ defined as:

$\forall a, b \in S: a \preccurlyeq b \iff a \divides b$
where $a \divides b$ denotes that $a$ is a divisor of $b$.
From Divisor Relation on Positive Integers is Partial Ordering, $\struct {S, \preccurlyeq}$ is a partially ordered set.

Let $p \in S$ be a prime number.
Let $a \divides p$.
By definition of prime number, the only divisors of $p$ are $-p$, $-1$, $1$ and $p$.
Of these, only $p$ is an element of $S$.
Hence if $a \divides p$ it must be the case that $a = p$.
Hence $p$ is a minimal element of $S$ by definition.
Thus every prime number is a minimal element of $S$.
The result follows.
$\blacksquare$


Examples
Arbitrary Example $1$
Consider the set $S = \set {a, b, c, d, e}$ with the partial ordering $\preccurlyeq$ defined as:

${\preccurlyeq} := \set {\tuple {c, a}, \tuple {d, a}, \tuple {e, a}, \tuple {d, b}, \tuple {e, b}, \tuple {c, b}, \tuple {c, e} }$
This can be illustrated using the following Hasse diagram:


It can be seen by inspection that both $c$ and $d$ are minimal elements of the partially ordered set $\struct {S, \preccurlyeq}$.


Also see
Smallest Element is Unique


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): maximal
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): maximal





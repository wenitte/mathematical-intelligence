# 

Source: https://proofwiki.org/wiki/Positive_Integer_Greater_than_1_has_Prime_Divisor/Proof_2

Lemma
Every positive integer greater than $1$ has at least one divisor which is prime.


Proof
Aiming for a contradiction, suppose that there are some positive integers which are not divisible by some prime.
Let $S = \set {n \in \Z: n > 1: \neg \exists p \in \Bbb P: p \divides n}$.
That is:

$S = \set {\text {all integers not divisible by a prime} }$

Let $n \in S$ be the smallest of these.
As $S$ is bounded below by $1$, this is bound to exist, by Set of Integers Bounded Below by Integer has Smallest Element.
So:

$\neg \exists x \in S: x < n$

Now $n$ cannot be prime itself:

$\paren {\paren {n \in \Bbb P} \land \paren {n \divides n} \implies n \notin S} \implies n \notin \Bbb P$
So from Composite Number has Two Divisors Less Than It:

$\exists r, s \in \Z: n = r s, 1 < r < n, 1 < s < n$

There are two possibilities:

$(1):\quad$ Neither $r$ nor $s$ has a prime divisor
$(2):\quad$ At least one of $r$ and $s$ has a prime divisor.

If either $r$ or $s$ has a prime divisor, then:

$\exists p \in \Bbb P: \paren {p \divides r} \lor \paren {p \divides s} \implies p \divides n$
This contradicts our claim that $n$ is not divisible by some prime.

However, if neither $r$ nor $s$ has a prime divisor, it follows that $r, s \in S$.
But as $r, s < n$, this contradicts our choice of $n$ as the smallest element of $S$.

Therefore there can be no such $n$, therefore $S = \O$, and all positive integers greater than one are divisible by some prime.
$\blacksquare$


Sources
1982: Martin Davis: Computability and Unsolvability (2nd ed.) ... (previous) ... (next): Appendix $1$: Some Results from the Elementary Theory of Numbers: Corollary $3$





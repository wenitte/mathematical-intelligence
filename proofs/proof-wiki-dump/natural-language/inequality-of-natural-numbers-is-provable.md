# 

Source: https://proofwiki.org/wiki/Inequality_of_Natural_Numbers_is_Provable

Theorem
Let $x, y \in \N$ be natural numbers.
Suppose $x \ne y$.
Let $\sqbrk a$ denote the unary representation of $a \in \N$.
Then $\sqbrk x \ne \sqbrk y$ is a theorem of minimal arithmetic.


Proof
Lemma
Let $x, y \in \N$ be natural numbers.
Suppose $x < y$.
Then $\sqbrk y \ne \sqbrk x$ is a theorem of minimal arithmetic.
$\Box$

As $x \ne y$, by Ordering on Natural Numbers is Trichotomy, either $x < y$ or $y < x$.
If $y < x$, the result follows from the lemma.
$\Box$

If $x < y$, then:

$\sqbrk y \ne \sqbrk x$
is a theorem by the lemma.
Hence, the following formal proof:

By Rule of Assumption, suppose $\sqbrk x = \sqbrk y$
By Equality is Symmetric, $\sqbrk y = \sqbrk x$
By Principle of Non-Contradiction, this contradicts $\sqbrk y \ne \sqbrk x$
By Proof by Contradiction, $\sqbrk x \ne \sqbrk y$
demonstrates the result.
$\Box$

The overall result follows from Proof by Cases.
$\blacksquare$






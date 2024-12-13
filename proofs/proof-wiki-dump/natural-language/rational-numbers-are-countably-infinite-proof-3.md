# 

Source: https://proofwiki.org/wiki/Rational_Numbers_are_Countably_Infinite/Proof_3

Theorem
The set $\Q$ of rational numbers is countably infinite.


Proof
For each $n \in \N$, define $S_n$ to be the set:

$S_n := \set {\dfrac m n: m \in \Z}$
By Integers are Countably Infinite, each $S_n$ is countably infinite.
Because each rational number can be written down with a positive denominator, it follows that:

$\forall q \in \Q: \exists n \in \N: q \in S_n$
which is to say:

$\ds \bigcup_{n \mathop \in \N} S_n = \Q$
By Countable Union of Countable Sets is Countable, it follows that $\Q$ is countable.
Since $\Q$ is manifestly infinite, it is countably infinite.
$\blacksquare$


Sources
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Countable Sets





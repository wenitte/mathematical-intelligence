# 

Source: https://proofwiki.org/wiki/Integer_and_Fifth_Power_have_same_Last_Digit

Theorem
Let $n \in \Z$ be an integer.
Then $n^5$ has the same last digit as $n$ when both are expressed in conventional decimal notation.


Proof
From Fermat's Little Theorem: Corollary 1:

$n^5 \equiv n \pmod 5$

Suppose $n \equiv 1 \pmod 2$.
Then from Congruence of Powers:

$n^5 \equiv 1^5 \pmod 2$
and so:

$n^5 \equiv 1 \pmod 2$
Similarly, suppose $n \equiv 0 \pmod 2$.
Then from Congruence of Powers:

$n^5 \equiv 0^5 \pmod 2$
and so:

$n^5 \equiv 0 \pmod 2$

Hence:

$n^5 \equiv n \pmod 2$
So we have, by Chinese Remainder Theorem:

$n^5 \equiv n \pmod {2 \times 5}$
and the result follows.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-2}$ Fermat's Little Theorem: Exercise $3$





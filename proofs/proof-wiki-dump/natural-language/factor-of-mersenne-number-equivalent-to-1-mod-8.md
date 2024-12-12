# 

Source: https://proofwiki.org/wiki/Factor_of_Mersenne_Number_equivalent_to_%2B-1_mod_8

Theorem
Let $p$ and $q$ be prime numbers such that $q$ is a divisor of the Mersenne number $M_p$.
Then:

$q \equiv \pm 1 \pmod 8$


Proof
Suppose $q \divides M_p$, where $\divides$ denotes divisibility.
From Factor of Mersenne Number $M_p$ is of form $2 k p + 1$: 

$q - 1 = 2 k p$

From above:

$2^{\paren {q - 1} / 2} \equiv 2 k p \equiv 1 \pmod q$
and so $2$ is a quadratic residue $\pmod q$.
From Second Supplement to Law of Quadratic Reciprocity:

$q \equiv \pm 1 \pmod 8$
$\blacksquare$


Sources
Proof courtesy of The Prime Pages: Modular restrictions on Mersenne divisors.





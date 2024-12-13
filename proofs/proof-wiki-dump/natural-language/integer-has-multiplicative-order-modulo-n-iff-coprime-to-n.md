# 

Source: https://proofwiki.org/wiki/Integer_has_Multiplicative_Order_Modulo_n_iff_Coprime_to_n



Theorem
Let $a$ and $n$ be integers.
Let the multiplicative order of $a$ modulo $n$ exist.

Then:

$a \perp n$
that is, $a$ and $n$ are coprime.


Proof
Necessary Condition
Suppose $c \in \Z_{>0}$ is the multiplicative order of $a$ modulo $n$.
Then by definition:

$a^c \equiv 1 \pmod n$
Hence, by definition:

$a^c = k n + 1$
for some $k \in \Z$.
Thus:

$a r + n s = 1$
where:

$r = a^{c - 1}$
$s = -k$
It follows from Integer Combination of Coprime Integers that $a$ and $n$ are coprime.
$\Box$


Sufficient Condition
Suppose $a \perp n$.
Then by Euler's Theorem (Number Theory):

$a^{\map \phi n} \equiv 1 \pmod n$
where $\map \phi n$ is the Euler Phi Function of $n$.
Hence the multiplicative order of $a$ modulo $n$ exists, by taking $c = \map \phi n$.
$\blacksquare$






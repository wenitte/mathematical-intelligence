# 

Source: https://proofwiki.org/wiki/GCD_from_Congruence_Modulo_m

Theorem
Let $a, b \in \Z, m \in \N$.
Let $a$ be congruent to $b$ modulo $m$.
Then the GCD of $a$ and $m$ is equal to the GCD of $b$ and $m$.

That is:

$a \equiv b \pmod m \implies \gcd \set {a, m} = \gcd \set {b, m}$


Proof
We have:

$a \equiv b \pmod m \implies \exists k \in \Z: a = b + k m$

Thus:

$a = b + k m$
and the result follows directly from GCD with Remainder.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 23 \beta$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Exercise $2.12$





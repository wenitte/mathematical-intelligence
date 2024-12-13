# 

Source: https://proofwiki.org/wiki/P-adic_Norm_not_Complete_on_Rational_Numbers/Proof_2/Lemma_4

Theorem
Let $p, x_1, k \in \Z_{\gt 0}: p \nmid x_1, p \nmid k$
Let $a \in \Z$ be any integer.
Let $\map f X \in \Z \sqbrk X$ be the polynomial $X^k - a$
Let $\map {f'} X \in \Z \sqbrk X$ be the formal derivative of $\map f X$.
 
Then:

$\map {f'} {x_1} \not \equiv 0 \pmod p$


Proof
By Euclid's Lemma for Prime Divisors:

$p \nmid k x_1^{k - 1}$
Hence:

$k x_1^{k - 1} \not \equiv 0 \mod p$
The formal derivative $\map {f'} X \in \Z \sqbrk X$ of $\map f X$ is by definition:

$k X^{k - 1}$
Then:

$\map {f'} {x_1} = k x_1^{k - 1} \not \equiv 0 \pmod p$
$\blacksquare$






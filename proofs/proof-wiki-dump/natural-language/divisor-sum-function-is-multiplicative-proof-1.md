# 

Source: https://proofwiki.org/wiki/Divisor_Sum_Function_is_Multiplicative/Proof_1

Theorem
The divisor sum function:

$\ds {\sigma_1}: \Z_{>0} \to \Z_{>0}: \map {\sigma_1} n = \sum_{d \mathop \divides n} d$
is multiplicative.


Proof
Let $I_{\Z_{>0}}: \Z_{>0} \to \Z_{>0}$ be the identity function:

$\forall n \in \Z_{>0}: \map {I_{\Z_{>0} } } n = n$
Thus we have:

$\ds \map {\sigma_1} n = \sum_{d \mathop \divides n} d = \sum_{d \mathop \divides n} \map {I_{\Z_{>0} } } d$

But from Identity Function is Completely Multiplicative, $I_{\Z_{>0} }$ is multiplicative.
The result follows from Sum Over Divisors of Multiplicative Function.
$\blacksquare$






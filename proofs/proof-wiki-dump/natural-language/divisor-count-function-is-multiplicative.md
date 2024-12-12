# 

Source: https://proofwiki.org/wiki/Divisor_Count_Function_is_Multiplicative

Theorem
The divisor count function:

$\ds \tau: \Z_{>0} \to \Z_{>0}: \map {\sigma_0} n = \sum_{d \mathop \divides n} 1$
is multiplicative.


Proof
Let $f_1: \Z_{>0} \to \Z_{>0}$ be the constant function:

$\forall n \in \Z_{>0}: \map {f_1} n = 1$
Thus we have:

$\ds \map {\sigma_0} n = \sum_{d \mathop \divides n} 1 = \sum_{d \mathop \divides n} \map {f_1} d$

But from Unity Function is Completely Multiplicative, $f_1$ is multiplicative.
The result follows from Sum Over Divisors of Multiplicative Function.
$\blacksquare$


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): divisor function





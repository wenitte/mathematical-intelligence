# 

Source: https://proofwiki.org/wiki/Conditions_for_Floor_of_Log_base_b_of_x_to_equal_Floor_of_Log_base_b_of_Floor_of_x/Proof_2

Theorem
Let $b \in \R$ be a real number.

$\forall x \in \R_{\ge 1}: \floor {\log_b x} = \floor {\log_b \floor x} \iff b \in \Z_{> 1}$
where $\floor x$ denotes the floor of $x$.


Proof
We have that:

Logarithm is Strictly Increasing
and:

Real Natural Logarithm Function is Continuous
Suppose that $\log_b x \in \Z$: let $\log_b x = n$, say.
Then:

$x = b^n$
It follows that:

$x \in \Z \iff b \in \Z$
Thus by McEliece's Theorem (Integer Functions):

$\forall x \in \R_{\ge 1}: \floor {\log_b x} = \floor {\log_b \floor x} \iff b \in \Z_{>1}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $34$





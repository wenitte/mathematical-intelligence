# 

Source: https://proofwiki.org/wiki/Derivative_of_Exponential_at_Zero/Proof_1

Theorem
Let $\exp x$ be the exponential of $x$ for real $x$.

Then:

$\ds \lim_{x \mathop \to 0} \frac {\exp x - 1} x = 1$


Proof
For all $x \in \R$:

$\exp 0 - 1 = 0$ from Exponential of Zero
$\map {D_x} {\exp x - 1} = \exp x$ from Sum Rule for Derivatives
$D_x x = 1$ from Derivative of Identity Function.

Its prerequisites having been verified, Corollary 1 to L'Hôpital's Rule yields immediately:

$\ds \lim_{x \mathop \to 0} \frac {\exp x - 1} x = \lim_{x \mathop \to 0} \frac {\exp x} 1 = \exp 0 = 1$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 14.5 \ (3) \ \text{(i)}$





# 

Source: https://proofwiki.org/wiki/Derivative_of_Logarithm_at_One/Proof_1

Theorem
Let $\ln x$ be the natural logarithm of $x$ for real $x$ where $x > 0$.

Then:

$\ds \lim_{x \mathop \to 0} \frac {\map \ln {1 + x} } x = 1$


Proof
L'Hôpital's Rule gives:

$\ds \lim_{x \mathop \to c} \frac {\map f x} {\map g x} = \lim_{x \mathop \to c} \frac {\map {f'} x} {\map {g'} x}$
(provided the appropriate conditions are fulfilled).

Here we have:














\(\ds \map \ln {1 + 0}\)

\(=\)







\(\ds 0\)




















\(\ds \map {D_x} {\map \ln {1 + x} }\)

\(=\)







\(\ds \dfrac 1 {1 + x}\)





Chain Rule for Derivatives














\(\ds \map {D_x} x\)

\(=\)







\(\ds 1\)





Derivative of Identity Function




Thus:

$\ds \lim_{x \mathop \to 0} \frac {\map \ln {1 + x} } x = \lim_{x \mathop \to 0} \frac {\paren {1 + x}^{-1} } 1 = \frac 1 {1 + 0} = 1$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 14.5 \ (3) \ \text{(ii)}$





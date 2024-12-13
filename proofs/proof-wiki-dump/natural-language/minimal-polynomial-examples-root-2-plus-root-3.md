# 

Source: https://proofwiki.org/wiki/Minimal_Polynomial/Examples/Root_(2_plus_Root_3)

Examples of Minimal Polynomials
Let $\theta = \sqrt {2 + \sqrt 3}$.
The minimal polynomial of $\theta$ in $\Q$ is $x^4 - 4 x + 1$.
Hence $\index {\map \Q \theta} \Q = 4$.


Proof
From Algebraic Number: $\sqrt {2 + \sqrt 3}$, $\sqrt {2 + \sqrt 3}$ is algebraic over $\R$, and is a root of:

$\map P x := x^4 - 4 x + 1$
The only possible divisor of $\map P x$ of degree $1$ are $x \pm 1$, which are seen not to actually divide $\map P x$.
Hence if $\map P x$ could be factorised, it would be as:

$\paren {x^2 + a x + 1} \paren {x^2 + b x + 1}$
or:

$\paren {x^2 - a x + 1} \paren {x^2 - b x + 1}$
and it is found by inspection that there are no $a, b \in \Z_{>0}$ which would fit.
So $\map P x$ has no divisors with integer coefficients.
It follows from Factors of Polynomial with Integer Coefficients have Integer Coefficients that $a$ and $b$ cannot be rational.
Hence $\map P x$ is irreducible over $\Q$.
Hence the result, by definition of minimal polynomial.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Field Extensions: $\S 38$. Simple Algebraic Extensions: Example $78$





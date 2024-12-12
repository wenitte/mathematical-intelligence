# 

Source: https://proofwiki.org/wiki/Derivative_of_Arcsecant_Function/Corollary_2

Theorem
Let $x \in \R$ be a real number such that $x < -1$ or $x > 1$.
Let $\arcsec x$ be the arcsecant of $x$.

Then:

$\dfrac {\map \d {\arcsec x} } {\d x} = \dfrac 1 {x^2 \sqrt {1 - \frac 1 {x^2} } }$


Proof
From Derivative of Arcsecant Function:

$\dfrac {\map \d {\arcsec x} } {\d x} = \dfrac 1 {\size x \sqrt {x^2 - 1} }$

Since for all $x \in \R$, we have $\size x = \sqrt{x^2}$, we can write:

$\dfrac {\map \d {\arcsec x} } {\d x} = \dfrac 1 {\sqrt {x^2} \sqrt {x^2 - 1} }$
Multiplying the denominator by $1 = \dfrac {\sqrt{x^2} } {\sqrt{x^2} }$ yields:

$\dfrac {\map \d {\arcsec x} } {\d x} = \dfrac 1 {x^2 \sqrt {1 - \frac 1 {x^2} } }$
$\blacksquare$


Sources
Weisstein, Eric W. "Inverse Secant." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/InverseSecant.html





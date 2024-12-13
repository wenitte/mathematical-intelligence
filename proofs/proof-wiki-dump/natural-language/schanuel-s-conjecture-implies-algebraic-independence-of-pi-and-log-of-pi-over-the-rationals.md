# 

Source: https://proofwiki.org/wiki/Schanuel%27s_Conjecture_Implies_Algebraic_Independence_of_Pi_and_Log_of_Pi_over_the_Rationals

Theorem
Let Schanuel's Conjecture be true.

Then $\pi$ (pi) and the logarithm of $\pi$ (pi):

$\ln \pi$
are algebraically independent over the rational numbers $\Q$.


Proof
Assume the truth of Schanuel's Conjecture.
Let $z_1 = \ln \pi$, $z_2 = i \pi$.
Note that $z_1$ is wholly real and $z_2$ is wholly imaginary.
Hence, by Wholly Real Number and Wholly Imaginary Number are Linearly Independent over the Rationals, they are linearly independent over $\Q$.
By Schanuel's Conjecture, the extension field $\Q \left({z_1, z_2, e^{z_1}, e^{z_2}}\right)$ has transcendence degree at least $2$ over $\Q$.
That is, the extension field $\Q \left({\ln \pi, i \pi, \pi, e^{i \pi}}\right)$ has transcendence degree at least $2$ over $\Q$.
However, by Euler's Identity, $e^{i \pi} = -1$ is algebraic.
Also, $i \pi$ and $\pi$ are not algebraically independent, as they satisfy $x^2 + y^2 = 0$, where $x = i \pi$ and $y = \pi$.
Therefore, if Schanuel's Conjecture holds, then $\ln \pi$ and $\pi$ are algebraically independent.
$\blacksquare$






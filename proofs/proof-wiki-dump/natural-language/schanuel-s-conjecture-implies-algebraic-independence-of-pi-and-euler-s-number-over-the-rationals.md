# 

Source: https://proofwiki.org/wiki/Schanuel%27s_Conjecture_Implies_Algebraic_Independence_of_Pi_and_Euler%27s_Number_over_the_Rationals

Theorem
Let Schanuel's Conjecture be true.

Then $\pi$ (pi) and $e$ (Euler's number) are algebraically independent over the rational numbers $\Q$.


Proof
Assume the truth of Schanuel's Conjecture.
Let $z_1 = 1$ and $z_2 = i \pi$.
Note that $z_1$ is wholly real and $z_2$ is wholly imaginary.
Hence, by Wholly Real Number and Wholly Imaginary Number are Linearly Independent over the Rationals, they are linearly independent over $\Q$.
By Schanuel's Conjecture, the extension field $\map \Q {z_1, z_2, e^{z_1}, e^{z_2} }$ has transcendence degree at least $2$ over $\Q$.
That is, the extension field $\map \Q {1, i \pi, e, -1}$ has transcendence degree at least $2$ over $\Q$.
However, $1$ and $-1$ are algebraic.
Therefore $i \pi$ and $e$ must be algebraically independent over $\Q$.

Aiming for a contradiction, suppose $\pi$ and $e$ are not algebraically independent over $\Q$.
Then, then there would be a non-trivial polynomial $\map g {x, y}$ with rational coefficients satisfying:

$\map g {\pi, e} = 0$
Then, one can construct a non-trivial polynomial $\map f {x, y} = \map g {i x, y} \map g {-i x, y}$ with rational coefficients satisfying:

$\map f {i \pi, e} = 0$
which is contradictory to the previous statement that no such polynomials exist.

Therefore, if Schanuel's Conjecture is true, then $\pi$ and $e$ are algebraically independent over $\Q$.
$\blacksquare$






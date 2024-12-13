# 

Source: https://proofwiki.org/wiki/Lambert_W_of_Non-Zero_Algebraic_Number_is_Transcendental

Theorem
Let $W$ denote the (general) Lambert W function.
Let $a$ be a non-zero algebraic number.

Then, $W \left({a}\right)$ is transcendental.


Proof
From the definition of Lambert W function:

$a = W \left({a}\right) e^{W \left({a}\right)}$

Aiming for a contradiction, suppose $W \left({a}\right)$ is not transcendental.
Hence, $W \left({a}\right)$ is algebraic.

From the weaker Hermite-Lindemann-Weierstrass theorem, $e^{W \left({a}\right)}$ is transcendental.
However, from the equation above, it is also equal to:

$\dfrac a {W \left({a}\right)}$
which must be algebraic, considering the fact that $a$ and $W \left({a}\right)$ are both algebraic.
From this contradiction, it follows that $W \left({a}\right)$ must be transcendental whenever $a$ is a non-zero algebraic number.
$\blacksquare$






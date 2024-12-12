# 

Source: https://proofwiki.org/wiki/Fermat%27s_Right_Triangle_Theorem

Theorem
$x^4 + y^4 = z^2$ has no solutions in the (strictly) positive integers.


Proof
This proof using Method of Infinite Descent was created by Pierre de Fermat.

Suppose there is such a solution.
Then there is one with $\gcd \set {x, y, z} = 1$.
By Parity of Smaller Elements of Primitive Pythagorean Triple we can assume that $x^2$ is even and $y^2$ is odd.
By Primitive Solutions of Pythagorean Equation, we can write:

$x^2 = 2 m n$
$y^2 = m^2 - n^2$
$z = m^2 + n^2$
where $m, n$ are coprime positive integers.

Similarly we can write:

$n = 2 r s$
$y = r^2 - s^2$
$m = r^2 + s^2$

where $r, s$ are coprime positive integers, since $y$ is odd, forcing $n$ to be even.

We have:

$\paren {\dfrac x 2}^2 = m \paren {\dfrac n 2}$
Since $m$ and $\dfrac n 2$ are coprime, they are both squares.

Similarly we have:

$\dfrac n 2 = r s$
Since $r$ and $s$ are coprime, they are both squares.

Therefore $m = r^2 + s^2$ becomes an equation of the form $u^4 + v^4 = w^2$.
Moreover:

$z^2 > m^4 > m$
and so we have found a smaller set of solutions.

By Method of Infinite Descent, no solutions can exist.
$\blacksquare$


Source of Name
This entry was named for Pierre de Fermat.






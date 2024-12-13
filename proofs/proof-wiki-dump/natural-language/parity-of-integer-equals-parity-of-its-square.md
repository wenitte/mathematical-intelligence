# 

Source: https://proofwiki.org/wiki/Parity_of_Integer_equals_Parity_of_its_Square



Theorem
Let $p \in \Z$ be an integer.

Then $p$ is even if and only if $p^2$ is even.


Proof
Let $p$ be an integer.
By the Division Theorem, there are unique integers $k$ and $r$ such that $p = 2k + r$ and $0 \le r < 2$.
That is, $r = 0$ or $r = 1$, where $r = 0$ corresponds to the case of $p$ being even and $r = 1$ corresponds to the case of $p$ being odd.


Even case
Let $r = 0$, so:

$p = 2 k$
Then:

$p^2 = \paren {2 k}^2 = 4 k^2 = 2 \paren {2 k^2}$
and so $p^2$ is even.
$\Box$


Odd case
Let $r = 1$, so:

$p = 2 k + 1$
Then:

$p^2 = \paren {2 k + 1}^2 = 4 k^2 + 4 k + 1 = 2 \paren {2 k^2 + 2 k} + 1$
and so $p^2$ is odd.
$\Box$

Therefore, if it is not the case that an integer is even, then it is not the case that its square is even.
Conversely, if it is the case that an integer is even (and also a perfect square), then it is the case that its square root is even.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: Exercise $4$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.2$: More about Numbers: Irrationals, Perfect Numbers and Mersenne Primes
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): contrapositive
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): contrapositive





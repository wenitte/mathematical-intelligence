# 

Source: https://proofwiki.org/wiki/Basis_Expansion_of_Irrational_Number

Theorem
A basis expansion of an irrational number never terminates and does not recur.


Proof
We use a Proof by Contraposition.
Thus, we show that if a basis expansion of a (real) number terminates or recurs, then that number is rational.
Aiming for a contradiction, suppose $x \in \R$ were to terminate in some number base $b$.
Then (using the notation of that definition):

$\exists k \in \N: f_k = 0$
and so we can express $x$ precisely as:

$x = \sqbrk {s . d_1 d_2 d_3 \ldots d_{k - 1} }_b$
This means:

$x = s + \dfrac {d_1} b + \dfrac {d_2} {b^2} + \dfrac {d_3} {b^3} + \cdots + \dfrac {d_{k - 1} } {b^{k - 1} }$
This is the same as:

$x = \dfrac {s b^{k - 1} + d_1 b^{k - 2} + d_2 b^{k - 3} + \cdots + d_{k - 1} } {b^{k - 1} }$
Both numerator and denominator are integers and so $x$ is a rational number.

Now suppose $x \in \R$ were to recur in some number base $b$.
Let $y$ be the recurring part of $x$.
That is, $y$ is obtained from $x$ by first subtracting $\floor x$ and then subtracting the non-recurring part of the basis expansion (if any).
Then we can express $y$ precisely as:

$y = \sqbrk {0 . 0 0 \ldots 0 d_1 d_2 \ldots d_{k - 1} d_1 d_2 \ldots d_{k - 1} \ldots}_b$
for some number $m$ (possibly $m = 0$) of zeroes following the point.
We define:

$z:= \sqbrk {0 . d_1 d_2 \ldots d_{k - 1} }_b = \dfrac {d_1} b + \dfrac {d_2} {b^2} + \dfrac {d_3} {b^3} + \cdots + \dfrac {d_{k - 1} } {b^{k - 1} }$
Then $z$ is a rational number.
Furthermore:

$y = \dfrac z {b^m} + \dfrac z {b^{m + k} } + \dfrac z {b^{m + 2 k} } + \cdots = \dfrac z {b^m} \paren {1 + \dfrac 1 {b^k} + \dfrac 1 {b^{2 k} } + \cdots} = \dfrac z {b^m} \cdot \dfrac 1 {1 - \dfrac 1 {b^k} }$
so $y$ is a rational number as well.
Thus as $x - y$ is rational, $x$ is also rational.
$\blacksquare$


Sources
1973: G. Stephenson: Mathematical Methods for Science Students (2nd ed.) ... (previous) ... (next): Chapter $1$: Real Numbers and Functions of a Real Variable: $1.1$ Real Numbers
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): decimal
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): irrational number
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): decimal
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): irrational number





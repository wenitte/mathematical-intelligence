# 

Source: https://proofwiki.org/wiki/Coefficients_in_Linear_Combination_forming_GCD_are_Coprime

Theorem
Let $a$ and $b$ be integers.
Let there exist integers $x$ and $y$ such that:

$a x + b y = \gcd \set {a, b}$
where $\gcd \set {a, b}$ denotes the greatest common divisor of $a$ and $b$.

Then:

$x \perp y$
where $\perp$ denotes coprimality.


Proof
Let $d = \gcd \set {a, b}$.
As $d$ is a divisor of both $a$ and $b$, both $\dfrac a d$ and $\dfrac b d$ are integers.
Hence, dividing through by $d$, we have:

$\dfrac a d x + \dfrac b d y = \dfrac {\gcd \set {a, b} } d = 1$
Thus there exist integers $m = \dfrac a d$ and $n = \dfrac b d$ such that:

$m x + n y = 1$
Hence from Integer Combination of Coprime Integers:

$x \perp y$
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $13 \ \text {(b)}$





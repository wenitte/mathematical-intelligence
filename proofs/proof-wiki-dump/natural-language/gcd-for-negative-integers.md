# 

Source: https://proofwiki.org/wiki/GCD_for_Negative_Integers

Theorem
Let $a$ and $b$ be integers.

$\gcd \set {a, b} = \gcd \set {\size a, b} = \gcd \set {a, \size b} = \gcd \set {\size a, \size b}$
where $\gcd$ denotes the greatest common divisor.

Alternatively, this can be put:

$\gcd \set {a, b} = \gcd \set {-a, b} = \gcd \set {a, -b} = \gcd \set {-a, -b}$
which follows directly from the above.


Proof
Note that $\size a = \pm a$.
Suppose that:

$u \divides a$
where $\divides$ denotes divisibility.
Then:

$\exists q \in \Z: a = q u$
Then:

$\size a = \pm q u = \paren {\pm q} u \implies u \divides \size a$
So every divisor of $a$ is a divisor of $\size a$.

Similarly, note that:

$a = \pm \size a$
so every divisor of $\size a$ is a divisor of $a$.
So it follows that the common divisors of $a$ and $b$ are the same as those of $a$ and $\size b$, and so on.
In particular:

$\gcd \set {a, b} = \gcd \set {a, \size b}$
and so on.
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $11$





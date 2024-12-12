# 

Source: https://proofwiki.org/wiki/Divisors_of_One



Theorem
The only divisors of $1$ are $1$ and $-1$.
That is:

$a \divides 1 \iff a = \pm 1$


Proof
Necessary Condition
Let $a = \pm 1$.
From Integer Divides Itself‎ we have that $1 \divides 1$.
From Integer Divides its Negative we have that $-1 \divides 1$.
$\Box$


Sufficient Condition
Let $\exists a \in \Z: a \divides 1$.
Then $\exists c \in \Z: a c = 1$.
From Absolute Value Function is Completely Multiplicative we have that:

$\size a \cdot \size c = \size 1$
Neither $a$ nor $c$ can be zero, from Integers form Integral Domain.
So $\size a \ge 1$ and $\size c \ge 1$.
But if $\size a > 1$ then:

$\size a \cdot \size c > \size c$
and so:

$\size a \cdot \size c > 1$
So:

$\size a = 1$
that is:

$a = 1$ or $a = -1$
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: The Integers: $\S 10$. Divisibility: Theorem $17 \ \text{(i)}$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Theorem $2 \text{-} 2 \ (2)$





# 

Source: https://proofwiki.org/wiki/Integer_equals_Floor_iff_between_Number_and_One_Less



Theorem
Let $x \in \R$ be a real number.
Let $\floor x$ denote the floor of $x$.
Let $n \in \Z$ be an integer.

Then:

$\floor x = n \iff x - 1 < n \le x$


Proof
Necessary Condition
Let $x - 1 < n \le x$.
From $n \le x$, we have by Number not less than Integer iff Floor not less than Integer:

$n \le \floor x$
From $x - 1 < n$:

$x < n + 1$
Hence by Number less than Integer iff Floor less than Integer:

$\floor x < n + 1$
We have that:

$\forall m, n \in \Z: m \le n \iff m < n + 1$
and so:

$\floor x \le n$
Thus as:

$n \le \floor x$
and:

$\floor x \le n$
it follows that:

$\floor x = n$
$\Box$


Sufficient Condition
Let $\floor x = n$.
Then:

$\floor x \ge n$
By Number not less than Integer iff Floor not less than Integer:

$n \le x$

By definition of the floor of $x$:

$x < \floor x + 1$
and so subtracting $1$ from both sides:

$x - 1 < \floor x$
and so by hypothesis:

$x - 1 < n$
So:

$\floor x = n \implies x - 1 < n \le x$
$\Box$

Hence the result:

$\floor x = n \iff x - 1 < n \le x$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $3 \ \text{(e)}$





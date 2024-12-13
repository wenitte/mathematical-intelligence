# 

Source: https://proofwiki.org/wiki/Integer_equals_Floor_iff_Number_between_Integer_and_One_More



Theorem
Let $x \in \R$ be a real number.
Let $\floor x$ denote the floor of $x$.
Let $n \in \Z$ be an integer.

Then:

$\floor x = n \iff n \le x < n + 1$


Proof
Necessary Condition
Let $n \le x < n + 1$.
From Number not less than Integer iff Floor not less than Integer:

$n \le x \implies n \le \floor x$

By definition of the floor of $x$:

$\floor x \le x$
and so by hypothesis:

$\floor x < n + 1$
We have that:

$\forall m, n \in \Z: m \le n \iff m < n + 1$
and so:

$\floor x \le n$

So we have:

$n \le \floor x$
and:

$\floor x \le n$

Thus:

$n \le x < n + 1 \implies \floor x = n$
$\Box$


Sufficient Condition
Let $\floor x = n$.
By definition of the floor of $x$:

$\floor x \le x$
and so by hypothesis:

$n \le x$

Also by definition of the floor of $x$:

$x < \floor x + 1$
and so by hypothesis:

$x < n + 1$

Thus:

$\floor x = n \implies n \le x < n + 1$.
$\Box$

Hence the result:

$\floor x = n \iff n \le x < n + 1$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $3 \ \text{(e)}$





# 

Source: https://proofwiki.org/wiki/Integer_equals_Ceiling_iff_Number_between_Integer_and_One_Less



Theorem
Let $x \in \R$ be a real number.
Let $\ceiling x$ be the ceiling of $x$.
Let $n \in \Z$ be an integer.

Then:

$\ceiling x = n \iff n - 1 < x \le n$


Proof
Necessary Condition
Let $n - 1 < x \le n$.
From Number not greater than Integer iff Ceiling not greater than Integer:

$x \le n \implies \ceiling x \le n$

From Number is between Ceiling and One Less:

$x \le \ceiling x$
and so:

$n - 1 < \ceiling x$
We have that:

$\forall m, n \in \Z: m - 1 < n \iff m \le n$
and so:

$n \le \ceiling x$

So we have:

$\ceiling x \le n$
and:

$n \le \ceiling x$

Thus:

$n - 1 < x \le n \implies \ceiling x = n$
$\Box$


Sufficient Condition
Let $\ceiling x = n$.
From Number is between Ceiling and One Less:

$x \le \ceiling x$
and so:

$x \le n$

Also from Number is between Ceiling and One Less:

$\ceiling x - 1 < x$
and so:

$n - 1 < x$

Thus:

$\ceiling x = n \implies n - 1 < x \le n$.
$\Box$

Hence the result:

$\ceiling x = n \iff n - 1 < x \le n$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $3 \ \text{(f)}$





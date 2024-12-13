# 

Source: https://proofwiki.org/wiki/Integer_equals_Ceiling_iff_between_Number_and_One_More



Theorem
Let $x \in \R$ be a real number.
Let $\ceiling x$ be the ceiling of $x$.
Let $n \in \Z$ be an integer.

Then:

$\ceiling x = n \iff x \le n < x + 1$


Proof
Necessary Condition
Let $x \le n < x + 1$.
From $x \le n$, we have by Number not greater than Integer iff Ceiling not greater than Integer:

$\ceiling x \le n$
From $n < x + 1$:

$n - 1 < x$
Hence by Number greater than Integer iff Ceiling greater than Integer:

$n - 1 < \ceiling x$
We have that:

$\forall m, n \in \Z: m < n \iff m \le n - 1$
and so:

$n \le \ceiling x$
Thus as:

$\ceiling x \le n$
and:

$\ceiling x \ge n$
it follows that:

$\ceiling x = n$
$\Box$


Sufficient Condition
Let $\ceiling x = n$.
Then:

$\ceiling x \le n$
By Number not greater than Integer iff Ceiling not greater than Integer:

$x \le n$

From Number is between Ceiling and One Less:

$\ceiling x - 1 < x$
and so adding $1$ to both sides:

$\ceiling x < x + 1$
and so by hypothesis:

$n < x + 1$
So:

$\ceiling x = n \implies x \le n < x + 1$
$\Box$

Hence the result:

$\ceiling x = n \iff x \le n < x + 1$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $3 \ \text{(f)}$





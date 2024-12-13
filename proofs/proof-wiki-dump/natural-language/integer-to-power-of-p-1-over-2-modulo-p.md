# 

Source: https://proofwiki.org/wiki/Integer_to_Power_of_p-1_over_2_Modulo_p



Theorem
Let $a \in \Z$.
Let $p$ be an odd prime.
Let $b = a^{\frac {\paren {p - 1} } 2}$.

Then one of the following cases holds:

$b \bmod p = 0$
which happens exactly when $a \equiv 0 \pmod p$, or:

$b \bmod p = 1$
or:

$b \bmod p = p - 1$
where:

$b \bmod p$ denotes the modulo operation
$x \equiv y \pmod p$ denotes that $x$ is congruent modulo $p$ to $y$.


Proof
By definition of congruence modulo $p$:

$\forall x, y \in \R: x \equiv y \pmod p \iff x \bmod p = y \bmod p$

We have that:

$b = a^{\frac{\paren {p - 1} } 2}$
and so:

$b^2 = a^{p - 1}$

Let $a \equiv 0 \pmod p$.
Then by definition of congruence modulo $p$:

$p \divides a$
and so:

$p \divides a^{\frac{\paren {p - 1} } 2}$
where $\divides$ denotes divisibility.

Thus by definition of congruence modulo $p$:

$b \equiv 0 \pmod p$
and so:

$b \bmod p = 0$
$\Box$

Otherwise, from Fermat's Little Theorem:

$b^2 \equiv 1 \pmod p$
That is:

$b^2 - 1 \equiv 0 \pmod p$

From Difference of Two Squares:

$b^2 - 1 = \paren {b + 1} \paren {b - 1}$
So either:

$p \divides b + 1$
or:

$p \divides b - 1$

Aiming for a contradiction, suppose both $p \divides b + 1$ and $p \divides b - 1$.
Then by Modulo Subtraction is Well-Defined:

$p \divides \paren {b + 1} - \paren {b - 1} = 2$
But $p$ is an odd prime.
So it cannot be the case that $p \divides 2$.
From this contradiction it follows that 
Note that $p$ cannot divide both $b + 1$ and $b - 1$.

So either:














\(\ds \paren {b - 1}\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)












\(\ds \leadsto \ \ \)





\(\ds b\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod p\)



Modulo Addition is Well-Defined




or:














\(\ds \paren {b + 1}\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)












\(\ds \leadsto \ \ \)





\(\ds b\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod p\)



Modulo Subtraction is Well-Defined














\(\ds \)

\(\equiv\)







\(\ds p - 1\)

\(\ds \pmod p\)



Negative Number is Congruent to Modulus minus Number



Hence the result.
$\blacksquare$


Also see
Euler's Criterion


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $26$





# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Theorem_(Number_Theory)

This proof is about Lagrange's Theorem in the context of Number Theory. For other uses, see Lagrange's Theorem.



Theorem
Let $\struct {\Z_p, +_p, \times_p}$ be the ring of integers modulo $p$ for some prime $p$.
Let $f$ be a polynomial in one variable of degree $n$ over $\Z_p$.
Then $f$ has at most $n$ roots in $\Z_p$.


Proof
Proof by induction on $n$:

Basis for the Induction
When $n = 1$, we have:

$\map f x = a x + b$ for some $a, b \in \Z_p$ and $a \ne 0$
Suppose $x_1, x_2 \in \Z_p$ are two roots of $\map f x$.
Then:














\(\ds a x_1 + b\)

\(\equiv\)







\(\ds a x_2 + b\)

\(\ds \equiv 0\)

\(\ds \pmod p\)










\(\ds \leadsto \ \ \)





\(\ds a x_1\)

\(\equiv\)







\(\ds a x_2\)



\(\ds \pmod p\)










\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(\equiv\)







\(\ds x_2\)



\(\ds \pmod p\)

since $a \perp p$



Hence these two roots must be the same, implying that there is at most $1$ root.
This is our basis for the induction.


Induction Hypothesis
This is our induction hypothesis:

A polynomial in one variable of degree $k$ has at most $k$ roots in $\Z_p$.
It is to be demonstrated that:

A polynomial in one variable of degree $k + 1$ has at most $k + 1$ roots in $\Z_p$.


Induction Step
This is our induction step:
Consider $n = k + 1$, and let $f$ be a polynomial in one variable of degree $k + 1$.
If $f$ does not have a root in $\Z_p$, our claim is satisfied.

Otherwise, suppose $f$ does have a root $x_0$.
From Ring of Integers Modulo Prime is Field, $\Z_p$ is a field.
Applying the Polynomial Factor Theorem, since $\map f {x_0} = 0$:

$\map f x = \paren {x - x_0} \map Q x$
where $Q$ is a polynomial of degree $k$.

By Euclid's Lemma for Prime Divisors:

$\map f x = 0 \iff x - x_0 = 0 \text { or } \map Q x = 0$
By the induction hypothesis, $Q$ has at most $k$ roots.
Hence $f$ has at most $k + 1$ roots.

By the Principle of Mathematical Induction, the theorem holds for all $n$.
$\blacksquare$


Examples
Non-Prime Index
This does not hold for composite number $p$.
For $p = 8$, the polynomial $x^2 - 1$ has $4$ roots $\eqclass 1 8, \eqclass 3 8, \eqclass 5 8, \eqclass 7 8$ in $\Z_p$ and $4 > n = 2$.


Source of Name
This entry was named for Joseph Louis Lagrange.






# 

Source: https://proofwiki.org/wiki/Condition_for_Linear_Divisor_of_Polynomial



Theorem
Let $\map P x$ be a polynomial in $x$.
Let $a$ be a constant.

Then $x - a$ is a divisor of $\map P x$ if and only if $a$ is a root of $P$.


Proof
From the Little Bézout Theorem, the remainder of $\map P x$ when divided by $x - a$ is equal to $\map P a$.


Sufficient Condition
Let $x - a$ be a divisor of $\map P x$.
From the Little Bézout Theorem, the remainder of $\map P x$ when divided by $x - a$ is equal to $\map P a$.
By definition of divisor, the remainder of $\map P x$ when divided by $x - a$ equals $0$.
That is:

$\map P a = 0$
It follows by definition that $a$ is a root of $P$.
$\Box$


Necessary Condition
Let $a$ be a root of $P$.
From the Little Bézout Theorem, and by Polynomial Long Division, we have:

$\map P x = \paren {x - a} \map Q x + \map P a$
where $\map Q x$ is a polynomial in $x$ of degree one less than $\map P x$.
By definition of root of polynomial:

$\map P a = 0$
So we have:

$\map P x = \paren {x - a} \map Q x$
and the result follows by definition of divisor.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Field Extensions: $\S 37$. Roots of Polynomials: Theorem $70$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): factor theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): factor theorem





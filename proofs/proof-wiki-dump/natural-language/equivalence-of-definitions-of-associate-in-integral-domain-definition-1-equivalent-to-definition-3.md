# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Associate_in_Integral_Domain/Definition_1_Equivalent_to_Definition_3



Theorem
The following definitions of the concept of Associate in the context of Integral Domain are equivalent:
Let $\struct {D, +, \circ}$ be an integral domain.
Let $x, y \in D$.

Definition 1
$x$ is an associate of $y$ (in $D$) if and only if they are both divisors of each other.

That is, $x$ and $y$ are associates (in $D$) if and only if $x \divides y$ and $y \divides x$.

Definition 3
$x$ and $y$ are associates (in $D$) if and only if there exists a unit $u$ of $\struct {D, +, \circ}$ such that:

$y = u \circ x$
and consequently:

$x = u^{-1} \circ y$

That is, if and only if $x$ and $y$ are unit multiples of each other.


Proof













\(\ds y\)

\(=\)







\(\ds u \circ x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds u^{-1} \circ y\)





Definition of Unit of Ring



By the definition of divisor:

$x \divides y$ and $y \divides x$
$\Box$

Let $x \divides y$ and $y \divides x$.
Then $\exists s, t \in D$ such that:

$(1): \quad y = t \circ x$
and:

$(2): \quad x = s \circ y$
If either $x = 0_D$ or $y = 0_D$, then so must be the other (as an integral domain has no zero divisors by definition).
So $x = 1_D \circ y$ and $y = 1_D \circ x$, and the result holds.

Otherwise:














\(\ds 1_D \circ x\)

\(=\)







\(\ds x\)





Definition of Unity of Ring














\(\ds \)

\(=\)







\(\ds s \circ y\)





from $(2)$














\(\ds \)

\(=\)







\(\ds s \circ \paren {t \circ x}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \paren {s \circ t} \circ x\)





Definition of Associative Operation




So:

$s \circ t = 1_D$
and both $s \in U_D$ and $t \in U_D$.
The result follows.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 26$. Divisibility: Theorem $50$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 62.1$ Factorization in an integral domain: $\text{(iv)}$





# 

Source: https://proofwiki.org/wiki/Prime_Element_of_Integral_Domain_is_Irreducible

Theorem
Let $\struct {D, +, \circ}$ be an integral domain whose unity is $1_D$.
Let $p$ be a prime element of $\struct {D, +, \circ}$.
Then $p$ is an irreducible element of $\struct {D, +, \circ}$.


Proof
By definition of prime element, $p$ is neither zero nor a unit of $\struct {D, +, \circ}$.
Aiming for a contradiction, suppose:

$p = a \circ b$
for some non-units $a, b \in D$.
From Element of Integral Domain is Divisor of Itself:

$p \divides a \circ b$
By definition of prime element:

$p \divides a$ or $p \divides b$

Without loss of generality, suppose $p \divides a$.
That is:

$a = p \circ c$
for some $c \in D$.














\(\ds p \circ 1_D\)

\(=\)







\(\ds p\)





Definition of Unity of Ring














\(\ds \)

\(=\)







\(\ds a \circ b\)




















\(\ds \)

\(=\)







\(\ds p \circ c \circ b\)





$a = p \circ c$








\(\ds \leadsto \ \ \)





\(\ds 1_D\)

\(=\)







\(\ds c \circ b\)





Cancellation Law for Ring Product of Integral Domain



Thus $b$ is a unit of $\struct {D, +, \circ}$.
This contradicts the assertion that $a$ and $b$ are not units of $\struct {D, +, \circ}$.
Thus by Proof by Contradiction $p$ is an irreducible element of $\struct {D, +, \circ}$.
$\blacksquare$






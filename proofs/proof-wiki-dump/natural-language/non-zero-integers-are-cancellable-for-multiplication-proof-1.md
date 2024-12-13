# 

Source: https://proofwiki.org/wiki/Non-Zero_Integers_are_Cancellable_for_Multiplication/Proof_1

Theorem
Every non-zero integer is cancellable for multiplication.

That is:

$\forall x, y, z \in \Z, x \ne 0: x y = x z \iff y = z$


Proof
Let $x y = x z$.
There are two cases to investigate: $x > 0$ and $x < 0$.

Let $x > 0$.
From Natural Numbers are Non-Negative Integers, $x \in \N_{> 0}$.
By the Extension Theorem for Distributive Operations and Ordering on Natural Numbers is Compatible with Multiplication, $x$ is cancellable for multiplication.
$\Box$

Let $x < 0$.
We know that the Integers form Integral Domain and are thus a ring.
Then $-x > 0$ and so:














\(\ds \paren {-x} y\)

\(=\)







\(\ds -\paren {x y}\)





Product with Ring Negative














\(\ds \)

\(=\)







\(\ds -\paren {x z}\)





$\struct {\Z, +}$ is a group: Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {-x} z\)





Product with Ring Negative








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds z\)





from above: case where $x > 0$



$\Box$

So whatever non-zero value $x$ takes, it is cancellable for multiplication.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.10$





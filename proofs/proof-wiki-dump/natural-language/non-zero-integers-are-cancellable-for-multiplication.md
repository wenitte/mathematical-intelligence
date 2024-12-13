# 

Source: https://proofwiki.org/wiki/Non-Zero_Integers_are_Cancellable_for_Multiplication



Theorem
Every non-zero integer is cancellable for multiplication.

That is:

$\forall x, y, z \in \Z, x \ne 0: x y = x z \iff y = z$


Proof 1
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


Proof 2
Let $y, z \in \Z: y \ne z$.














\(\ds y\)

\(\ne\)







\(\ds z\)














\(\ds \leadstoandfrom \ \ \)





\(\ds y - z\)

\(\ne\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x \paren {y - z}\)

\(\ne\)







\(\ds 0\)





Ring of Integers has no Zero Divisors‎








\(\ds \leadstoandfrom \ \ \)





\(\ds x y - x z\)

\(\ne\)







\(\ds 0\)





Integer Multiplication Distributes over Subtraction



The result follows by transposition.
$\blacksquare$


Proof 3
Let $x y = x z$.
There are two cases to investigate: $x > 0$ and $x < 0$.

Let $x > 0$.
From Natural Numbers are Non-Negative Integers, $x \in \N_{> 0}$.
By the Extension Theorem for Distributive Operations and Ordering on Natural Numbers is Compatible with Multiplication, $x$ is cancellable for multiplication.
{{qed|lemma}

Let $x < 0$.
We know that the Integers form Integral Domain and are thus a ring.
Then $-x > 0$ and so:














\(\ds x y\)

\(=\)







\(\ds x z\)














\(\ds \leadsto \ \ \)





\(\ds \paren {-\paren {-x} } y\)

\(=\)







\(\ds \paren {-\paren {-x} } z\)





Negative of Ring Negative








\(\ds \leadsto \ \ \)





\(\ds -\paren {\paren {-x} y}\)

\(=\)







\(\ds -\paren {\paren {-x} z}\)





Product with Ring Negative








\(\ds \leadsto \ \ \)





\(\ds -y\)

\(=\)







\(\ds -z\)





as $-x$ is (strictly) positive, the above result holds








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds z\)





$\struct {\Z, +}$ is a group: Group Axiom $\text G 3$: Existence of Inverse Element



$\Box$

So whatever non-zero value $x$ takes, it is cancellable for multiplication.
$\blacksquare$


Also known as
Some sources give this as the cancellation law, but this term is already in use in the context of a group.


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 5$: The system of integers





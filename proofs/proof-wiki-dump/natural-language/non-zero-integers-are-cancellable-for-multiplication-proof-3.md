# 

Source: https://proofwiki.org/wiki/Non-Zero_Integers_are_Cancellable_for_Multiplication/Proof_3

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






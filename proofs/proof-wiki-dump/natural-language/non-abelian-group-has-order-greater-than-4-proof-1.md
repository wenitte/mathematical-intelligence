# 

Source: https://proofwiki.org/wiki/Non-Abelian_Group_has_Order_Greater_than_4/Proof_1

Theorem
Let $\struct {G, \circ}$ be a non-abelian group.
Then the order of $\struct {G, \circ}$ is greater than $4$.


Proof
Let $\left({G, \circ}\right)$ be a non-abelian group whose identity is $e$.
For a group $\left({G, \circ}\right)$ to be non-abelian, we require:

$\exists x, y \in G: x \circ y \ne y \circ x$
Suppose $x \circ y \in \left\{ {x, y, e}\right\}$.

$x \circ y = e \implies y \circ x = e$
and $\left({G, \circ}\right)$ is abelian.

Without loss of generality, suppose $x \circ y = x$.














\(\ds x \circ y = x\)

\(\implies\)







\(\ds y = e\)




















\(\ds \)

\(\implies\)







\(\ds y \circ x = x\)




















\(\ds \)

\(\implies\)







\(\ds x \circ y = y \circ x\)









and again, $\left({G, \circ}\right)$ is abelian.
Similarly for $x \circ y = y$.
Again, the same applies if $y \circ x \in \left\{ {x, y, e}\right\}$.

So, if $x \circ y \ne y \circ x$, then;

$x \circ y$ and $y \circ x$ must be different elements
$x \circ y$ and $y \circ x$ must both different from $e, x$ and $y$.

Thus, in a non-abelian group, there needs to be at least $5$ elements:

$e, x, y, x \circ y, y \circ x$
$\blacksquare$






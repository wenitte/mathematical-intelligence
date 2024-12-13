# 

Source: https://proofwiki.org/wiki/Order_of_Subset_Product_with_Singleton

Theorem
Let $\struct {G, \circ}$ be a group.
Let $X, Y \subseteq \struct {G, \circ}$ such that $X$ is a singleton:

$X = \set x$

Then:

$\order {X \circ Y} = \order Y = \order {Y \circ X}$
where $\order S$ is defined as the order of $S$.


Proof 1
From Regular Representations of Subset Product, we have that the left regular representation of $\struct {S, \circ}$ with respect to $a$ is:

$\lambda_x \sqbrk S = \set x \circ S = x \circ S$
The result then follows directly from Regular Representation of Invertible Element is Permutation.
$\blacksquare$


Proof 2
Let $\order Y = k$.
We define the mapping $\phi: Y \to X \circ Y$ such that:

$\forall y \in Y: \map \phi y = x \circ y$

First we show that $\phi$ is injective.
Let $y_1, y_2 \in Y$.
Let $\map \phi {y_1} = \map \phi {y_2}$.














\(\ds \map \phi {y_1}\)

\(=\)







\(\ds \map \phi {y_2}\)














\(\ds \leadsto \ \ \)





\(\ds x \circ y_1\)

\(=\)







\(\ds x \circ y_2\)














\(\ds \leadsto \ \ \)





\(\ds y_1\)

\(=\)







\(\ds y_2\)





left cancellation



Hence $\phi$ is injective.

The fact that $\phi$ is surjective follows from the definition of $X \circ Y$.
Every element of $X \circ Y$ is of the form $x \circ y$ for some $y \in Y$.
Thus $\phi$ is surjective.

The other half of the result follows identically, by defining a similar function for $Y \circ X$.
$\blacksquare$






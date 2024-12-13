# 

Source: https://proofwiki.org/wiki/Sandwich_Principle/Proof_2

Theorem
Let $A$ be a class.
Let $g: A \to A$ be a mapping on $A$ such that:

for all $x, y \in A$, either $\map g x \subseteq y$ or $y \subseteq x$.

Then:

$\forall x, y \in A: x \subseteq y \subseteq \map g x \implies x = y \lor y = \map g x$

That is, there is no element $y$ of $A$ such that:

$x \subset y \subset \map g x$
where $\subset$ denotes a proper subset.


Proof
We are given that:

for all $x, y \in A$, either $\map g x \subseteq y$ or $y \subseteq x$.

Let $x, y \in A$ such that:

$x \subseteq y \subseteq \map g x$

Then either we have:

$\map g x \subseteq y$ and $y \subseteq \map g x$
in which case, by definition of set equality:

$y = \map g x$
or we have that:

$x \subseteq y$ and $y \subseteq x$
in which case, by definition of set equality:

$x = y$

Thus either $y = \map g x$ or $x = y$ and the result follows.
$\blacksquare$






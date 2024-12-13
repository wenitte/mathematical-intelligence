# 

Source: https://proofwiki.org/wiki/Ordering_where_every_Subclass_has_Smallest_Element_is_Well-Ordering

Theorem
Let $A$ be a class.
Let $\RR$ be an ordering on $A$.
Let $\RR$ be such that every subclass of $A$ has a smallest element under $\RR$.

Then $\RR$ is a well-ordering.


Proof
We are given that $\RR$ is an ordering.
It will be shown that $\RR$ is a total ordering, from which the fact that it is a well-ordering follows directly by hypothesis.

Let $x$ and $y$ be elements of $A$.
Then $\set {x, y}$ is a subclass of $A$.
Hence by hypothesis $\set {x, y}$ has a smallest element.
That is, either $x \mathrel \RR y$ or $y \mathrel \RR x$.
As $x$ and $y$ are arbitrary, it follows that:

$\forall x, y \in A: x \mathrel \RR y \lor y \mathrel \RR x$
Hence, by definition, $\RR$ is a total ordering.
So, we have that $\RR$ is a total ordering on $A$ such that every subclass of $A$ has a smallest element under $\RR$.
That is, $\RR$ is a well-ordering.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Exercise $1.1$





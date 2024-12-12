# 

Source: https://proofwiki.org/wiki/Backward_Path_of_Well-Ordering_is_Finite

Theorem
Let $A$ be a class under a well-ordering $\preccurlyeq$.
Let $S$ be a backward path of $\preccurlyeq$ in $A$.

Then $S$ is finite.


Proof
First suppose that $S$ has no terms.
Then $S$ is finite by default.

Hence let it be assumed that $S$ has at least $1$ term.
Let $T = \set {x: x \in \sequence {x_n} }$ be the range of $S$.
Then by definition $T$ is a subclass of $A$.

Aiming for a contradiction, suppose $S$ is infinite.
By definition of well-ordering, $T$ has a smallest element, which can be referred to as $y$.
Hence:

$\exists n \in \N: y = x_n$
But then by definition of backward path:

$x_{n + 1} \prec x_n$
and so $y$ is not the smallest element of $T$ after all.
Hence $T$ can have no such smallest element.
From this contradiction we conclude that $S$ cannot be an infinite sequence.
Hence the result.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Exercise $1.4$





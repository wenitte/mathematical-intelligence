# 

Source: https://proofwiki.org/wiki/Characterisation_of_Limit_Element_under_Well-Ordering

Theorem
Let $A$ be a class.
Let $\preccurlyeq$ be a well-ordering on $A$.
Let $x \in A$ be an element of $A$ such that $x$ is not the smallest element of $A$ under $\preccurlyeq$.

Then:

$x$ is a limit element of $A$ under $\preccurlyeq$
if and only if:

$x^\prec$ has no greatest element with respect to $\preccurlyeq$
where $x^\prec$ denotes the strict lower closure of $x$ in $A$ under $\preccurlyeq$.


Proof
Suppose $x^\prec$ has a greatest element $y$.
Then $x$ is the immediate successor of $y$, that is:

$\nexists z \in A : y < z < x$
Hence $x$ is not a limit element.
Therefore, if $x$ is a limit element, then $x^\prec$ cannot have a greatest element.
$\Box$

Suppose $x$ is an immediate successor.
Then the immediate predecessor of $x$ is the greatest element of $x^\prec$.
Therefore if $x^\prec$ has no greatest element then $x$ cannot be an immediate successor.
Hence if $x$ is not the smallest element of $A$, it must be a limit element.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Proposition $1.6$





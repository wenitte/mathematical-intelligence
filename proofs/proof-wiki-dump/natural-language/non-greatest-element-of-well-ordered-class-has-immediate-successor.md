# 

Source: https://proofwiki.org/wiki/Non-Greatest_Element_of_Well-Ordered_Class_has_Immediate_Successor

Theorem
Let $C$ be a well-ordered class under an ordering $\le$.
Let $x \in C$.
Suppose that $x$ is not the greatest element in $C$.

Then $x$ has an immediate successor element in $C$.


Proof
Let $x$ be an element of $C$ which is not the greatest element of $C$.
Let $S$ be the class of successor elements of $x$ in $C$.

We have that $S$ is a subclass of $C$.
Also, $S$ is non-empty because $x$ is not the greatest element.
Thus $S$ is a non-empty subclass of $C$.

We have by hypothesis that $\le$ is a well-ordering on $C$
Hence $S$ has a smallest element, $y$.
By the definition of $S$:

$x < y$
Aiming for a contradiction, suppose that for some $z \in C$, $x < z < y$.
Then by the definition of $S$, $z \in S$.
This contradicts the fact that $y$ is the smallest element of $S$.
Thus $y$ is the immediate successor element of $x$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Proposition $1.4$





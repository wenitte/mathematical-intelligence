# 

Source: https://proofwiki.org/wiki/First_Principle_of_Transfinite_Induction

Theorem
Let $A$ be a class.
Let $\preccurlyeq$ be a well-ordering on $A$.
Let $P$ be a property that satisfies the following condition:

For all $x \in A$, if $P$ holds for every $y \prec x$, then $P$ holds for $x$.
Then $P$ holds for all $x \in A$.


Proof
Let $s$ be the smallest element of $A$.
Then vacuously $P$ holds for every element $y \in A$ such that $y \prec s$.
Thus $P$ holds for $s$.

Aiming for a contradiction, suppose $P$ fails to hold for some $z \in A$.
The class of elements of $A$ for which $P$ does not hold is therefore non-empty.
We have that $A$ is a well-ordered class.
Hence there must be some smallest element $x \in A$ for which $P$ fails to hold.
This cannot be $s$ as we have seen above.
But for every $y \prec x$, we have that $P$ holds for $y$.
But then by hypothesis $P$ holds for $x$.
This contradicts our definition of $x$.
Hence there can be no such $z \in A$ for which $P$ fails to hold.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Proposition $1.8$ (Transfinite Induction Principle $1$)





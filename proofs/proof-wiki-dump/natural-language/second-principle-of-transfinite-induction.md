# 

Source: https://proofwiki.org/wiki/Second_Principle_of_Transfinite_Induction

Theorem
Let $A$ be a class.
Let $\preccurlyeq$ be a well-ordering on $A$.
Let $P$ be a property that satisfies the following $3$ conditions:

$(1): \quad P$ holds for the smallest element of $A$.
$(2): \quad$ For all $x \in A$ which have an immediate successor $\map S x$, if $P$ holds for $x$, then $P$ holds for $\map S x$.
$(3): \quad$ For all limit element $y$ of $A$, if $P$ holds for all $x \prec y$, then $P$ holds for $y$.

Then $P$ holds for all $x \in A$.


Proof
Aiming for a contradiction, suppose $P$ fails to hold for some $z \in A$.
The class of elements of $A$ for which $P$ does not hold is therefore non-empty.
We have that $A$ is a well-ordered class.
Hence there must be some smallest element $x \in A$ for which $P$ fails to hold.
By $(1)$, this cannot be the smallest element of $A$.
By $(2)$, this cannot be an immediate successor element.
By $(3)$, this cannot be a limit element.
From Categories of Elements under Well-Ordering, there are no other options for $x$.
Hence for all $x \in A$, by hypothesis, $P$ holds for $x$.
This contradicts our definition of $x$.
Hence there can be no such $z \in A$ for which $P$ fails to hold.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Proposition $1.9$ (Transfinite Induction Principle $2$)





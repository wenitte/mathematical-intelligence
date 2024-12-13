# 

Source: https://proofwiki.org/wiki/Set_is_Ordinal_iff_Every_Transitive_Proper_Subset_is_Element_of_it



Theorem
Let $x$ be a set.
Then:

$x$ is an ordinal
if and only if

every transitive proper subset of $x$ is an element of $x$.


Proof
Necessary Condition
Let $\alpha$ be an arbitrary ordinal.
Let $y$ be a proper subset of $\alpha$ such that $y$ is transitive.
From Transitive Set of Ordinals is Ordinal it follows that $y$ is an ordinal.
By definition of usual ordering of ordinals:

$y < \alpha$
Hence from Strict Ordering of Ordinals is Equivalent to Membership Relation:

$y \in \alpha$
As $\alpha$ is arbitrary, it follows that every transitive proper subset of $\alpha$ is an element of $\alpha$.
$\Box$


Sufficient Condition
Let $x$ be a set such that every transitive proper subset of $x$ is an element of $x$.
Let $\alpha$ be the smallest ordinal which is not in $x$.
This is always possible by Well-Ordering of Class of All Ordinals under Subset Relation.
Thus every ordinal which is smaller than $\alpha$ is an element of $x$.
Hence:

$\alpha \subseteq x$
Suppose $\alpha$ is a proper subset of $x$.
From Ordinal is Transitive, $\alpha$ is then a transitive proper subset of $x$.
Hence by hypothesis $\alpha \in x$
But we have that $\alpha \notin x$.
Hence it must be the case that $\alpha = x$.
Thus $x$ is an ordinal.
The result follows.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $5$: Ordinal Numbers: $\S 2$ Ordinals and transitivity: Theorem $2.3$





# 

Source: https://proofwiki.org/wiki/Set_is_Recursively_Enumerable_iff_Domain_of_Recursive_Function



Theorem
Let $S \subseteq \N$ be a set of natural numbers.
Then:

$S$ is recursively enumerable
if and only if:

There exists a recursive function $f : \N \to \N$ such that $S = \Dom f$
where $\Dom f$ is the domain of $f$.


Proof
Necessary Condition
Suppose $S$ is the empty set.
Define $\map f x = \map {\mu z} {z \ne z}$.
Then, $f$ is undefined for every $x \in \N$, and thus is defined on the empty set.
Additionally, $f$ is recursive by:

Equality Relation is Primitive Recursive
Set Operations on Primitive Recursive Relations
Primitive Recursive Function is Total Recursive Function

Otherwise, let $S$ be non-empty.
Then, by Recursively Enumerable Set is Image of Primitive Recursive Function/Corollary, there exists a primitive recursive function $g : \N \to \N$ such that:

$S = \Img g$
Define $\map f x = \map {\mu z} {\map g z = x}$.
It remains to be shown that $\Dom f = \Img f$.

Let $y \in \Dom f$.
Then, there exists $z \in \N$ such that $\map g z = y$.
But then, $y \in \Img g$.

Now, let $y \in \Img g$.
Then, there exists $z \in \N$ such that $\map g z = y$.
Let $z'$ be the smallest such $z$.
Then, $\map f y = z'$ be definition.
Thus, $y \in \Dom f$.
$\Box$


Sufficient Condition
Define $\map g x = \map {\pr_1^2} {x, \map f x}$.
As projection is a basic primitive recursive function, and $g$ is obtained by substitution, it is recursive by definition.
It remains to be shown that $\Img g = \Dom f$.

Let $y \in \Img g$.
Then, by definition of substitution, $\map f y$ is defined.
Therefore, $y \in \Dom f$.

Now, let $y \in \Dom f$.
Then, as $\map f y$ is defined:

$\map g y = y$
Thus, $y \in \Img g$.
$\blacksquare$






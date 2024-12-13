# 

Source: https://proofwiki.org/wiki/Intersection_of_Recursively_Enumerable_Sets

Theorem
Let $S, T \subseteq \N$ be recursively enumerable.
Then $S \cap T$ is recursively enumerable.


Proof
By Set is Recursively Enumerable iff Domain of Recursive Function, there exist recursive $f, g : \N \to \N$ such that:

$S = \Dom f$
$T = \Dom g$
Define:

$\map h x = \map f x + \map g x$
By:

Addition is Primitive Recursive
Primitive Recursive Function is Total Recursive Function
it follows that $h$ is recursive.

Let $x \in S \cap T$.
Then $x \in \Dom f$ and $x \in \Dom g$.
Thus, there exist $y, z \in \N$ such that:

$y = \map f x$
$z = \map g x$
Therefore:

$\map h x = y + z$
Hence, $x \in \Dom h$.
Then, by definition of subset, $S \cap T \subseteq \Dom h$.

Let $x \in \Dom h$.
By definition of substitution, there must exist $y, z \in \N$ such that:

$y = \map f x$
$z = \map g x$
Therefore, $x \in \Dom f$ and $x \in \Dom g$.
It follows that $x \in S \cap T$.
Therefore, by definition of subset, $\Dom h \subseteq S \cap T$.

By definition of set equality, $S \cap T = \Dom h$.
Thus, by Set is Recursively Enumerable iff Domain of Recursive Function, $S \cap T$ is recursively enumerable.
$\blacksquare$






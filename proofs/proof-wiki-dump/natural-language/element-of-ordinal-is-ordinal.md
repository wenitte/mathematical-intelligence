# 

Source: https://proofwiki.org/wiki/Element_of_Ordinal_is_Ordinal

Theorem
Let $n$ be an ordinal.
Let $m \in n$.

Then $m$ is also an ordinal.

That is, the class of all ordinals $\On$ is a transitive class.


Proof 1
Let $\On$ denote the class of all ordinals.
From Class of All Ordinals is Minimally Superinductive over Successor Mapping, $\On$ is superinductive.

By Zero is Smallest Ordinal, $0$ is the smallest element of $\On$.
We identify the natural number $0$ via the von Neumann construction of the natural numbers as:

$0 := \O$
Vacuously, every element of $\O$ is an ordinal.
$\Box$

Let $\alpha \in \On$ be an ordinal.
Let us assume that every element of $\alpha$ is an ordinal.
Let $\alpha^+$ denote the successor to $\alpha$.
Because $\On$ is superinductive:

$\alpha \in \On \implies \alpha^+ \in \On$
By definition of successor mapping:

$\alpha^+ = \alpha \cup \set \alpha$
Then every element of $\alpha^+$ is either an element of $\alpha$ or $\alpha$ itself.
We have by hypothesis that:

$\alpha$ is an ordinal
every element of $\alpha$ is an ordinal.
That is, $\alpha^+$ is an ordinal.
$\Box$

Let $C$ be a chain of ordinals such that:

each element $\alpha$ of $C$ has the property that each element of $\alpha$ is itself an ordinal.
Let $\beta \in \bigcup C$.
Then $\beta \in \alpha$ for some $\alpha \in C$.
Hence, by definition of $C$, $\beta$ is an ordinal which has the property that each element of $\beta$ is itself an ordinal.
It follows by the Principle of Superinduction that every element of an ordinal is an ordinal.
$\Box$

Let $\alpha \in \On$ be an arbitrary ordinal.
Let $\beta \subseteq \alpha$.
From Class of All Ordinals is Well-Ordered by Subset Relation, $\beta$ is an ordinal
Hence from the above:

$\beta \in \alpha$
As $\alpha$ is arbitrary:

$\forall \alpha \in \On: \beta \subseteq \alpha \implies \beta \in \alpha$
proving that $\On$ is transitive.
$\blacksquare$


Proof 2
By the definition of ordinal, $n$ is transitive.
Thus $m \subseteq n$.
By Subset of Strictly Well-Ordered Set is Strictly Well-Ordered, it follows that $m$ is strictly well-ordered by the epsilon restriction $\Epsilon {\restriction_m}$.

It is now to be shown that $m$ is transitive.
If $m = \O$ then the result follows by Empty Class is Transitive.

If $m \ne \O$, then let $x \in m$.
If $x = \O$, then $x \subseteq m$ by Empty Set is Subset of All Sets.

If $x \ne \O$, then let $y \in x$.
It suffices to show that $y \in m$.

Since $m \subseteq n$, it follows that $x \in n$.
Also, $y \in x \land x \in n \implies y \in n$ because $n$ is transitive.
And so $x \in n$, $y \in n$, and $m \in n$.

A strict well-ordering is transitive by definition.
Therefore:

$y \in x \land x \in m \implies y \in m$

Hence the result.
$\blacksquare$






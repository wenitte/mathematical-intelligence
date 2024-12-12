# 

Source: https://proofwiki.org/wiki/Element_of_Ordinal_is_Ordinal/Proof_2

Theorem
Let $n$ be an ordinal.
Let $m \in n$.

Then $m$ is also an ordinal.

That is, the class of all ordinals $\On$ is a transitive class.


Proof
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






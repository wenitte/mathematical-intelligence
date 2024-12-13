# 

Source: https://proofwiki.org/wiki/Ordinal_is_not_Element_of_Itself/Proof_1

Theorem
Let $x$ be an ordinal.
Then:

$x \notin x$


Proof
By Successor Set of Ordinal is Ordinal, the successor of $x$ is an ordinal.
That is, $x^+ = x \cup \set x$ is an ordinal.
By Set is Element of Successor, $x \in x^+$.
Because $x^+$ is an ordinal, it is strictly well-ordered by the epsilon restriction $\Epsilon {\restriction_{x^+} }$.

Because a strict ordering is antireflexive and $x \in x^+$, we conclude that $x \notin x$.
$\blacksquare$






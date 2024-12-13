# 

Source: https://proofwiki.org/wiki/Occurrence_in_Prefix_Notation_has_Unique_Scope

Theorem
Let $\FF$ be a formal language in prefix notation.
Let $\mathbf A$ be a well-formed formula of $\FF$.
Let $a$ be an occurrence in $\mathbf A$.

Then $a$ has a unique scope.


Proof
From the formal definition of prefix notation, it follows that $a$ must be introduced by the rule of formation:

$a \mathbf A_1 \cdots \mathbf A_n$
for some well-formed formulas $\mathbf A_1, \ldots, \mathbf A_n$.
By Unique Readability for Prefix Notation, the $\mathbf A_i$ are uniquely determined.
Then $\mathbf A' = a \mathbf A_1 \cdots \mathbf A_n$ is a well-formed part of $\mathbf A$.
Moreover, any well-formed part of $\mathbf A$ containing $a$ must contain $\mathbf A'$.
Hence $\mathbf A'$ is the scope of $a$.
$\blacksquare$


Sources
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\mathrm{II}.4$ Polish Notation: Lemma $\mathrm{II}.4.5$





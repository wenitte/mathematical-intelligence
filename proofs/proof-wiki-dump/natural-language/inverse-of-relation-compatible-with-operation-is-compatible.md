# 

Source: https://proofwiki.org/wiki/Inverse_of_Relation_Compatible_with_Operation_is_Compatible

Theorem
Let $\struct {S, \circ}$ be a closed algebraic structure.
Let $\RR$ be a relation on $S$ which is compatible with $\circ$.
Let $\QQ$ be the inverse relation of $\RR$.

Then $\QQ$ is compatible with $\circ$.


Proof
Let $x, y, z \in S$.
Suppose that $x \mathrel \QQ y$.
Then by the definition of $\QQ$:

$y \mathrel \RR x$.
Since $\RR$ is compatible with $\circ$:

$\paren {y \circ z} \mathrel \RR \paren {x \circ z}$
and

$\paren {z \circ y} \mathrel \RR \paren {z \circ x}$
Thus by the definition of $\QQ$:

$\paren {x \circ z} \mathrel \QQ \paren {y \circ z}$
and

$\paren {z \circ x} \mathrel \RR \paren {z \circ y}$
Thus $\QQ$ is compatible with $\circ$.
$\blacksquare$






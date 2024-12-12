# 

Source: https://proofwiki.org/wiki/Complement_of_Relation_Compatible_with_Group_is_Compatible

Theorem
Let $\struct {G, \circ}$ be a group.
Let $\RR$ be a relation on $G$.
Let $\RR$ be compatible with $\circ$.
Let $\QQ = \complement_{G \times G} \RR$, so that:

$\forall a, b \in G: a \mathrel \QQ b \iff \neg \paren {a \mathrel \RR b}$

Then $\QQ$ is a relation compatible with $\circ$.


Proof
Let $x, y, z \in G$.
Suppose that $\neg \paren {\paren {x \circ z} \mathrel \QQ \paren {y \circ z} }$.
Then by the definition of $\QQ$:

$\paren {x \circ z} \mathrel \RR \paren {y \circ z}$
Because $\RR$ is compatible with $\circ$:

$\paren {x \circ z} \circ z^{-1} \mathrel \RR \paren {y \circ z} \circ z^{-1}$

By Group Axiom $\text G 1$: Associativity and the Group Axiom $\text G 3$: Existence of Inverse Element:

$x \mathrel \RR y$
so by the definition of $\QQ$:

$\neg \paren {x \mathrel \QQ y}$

By the Rule of Transposition:

$\forall x, y, z \in G: x \mathrel \QQ y \implies \paren {x \circ z} \mathrel \QQ \paren {y \circ z}$
A similar argument shows that:

$\forall x, y, z \in G: x \mathrel \QQ y \implies \paren {z \circ x} \mathrel \QQ \paren {z \circ y}$
Thus, by definition, $\QQ$ is a relation compatible with $\circ$.
$\blacksquare$






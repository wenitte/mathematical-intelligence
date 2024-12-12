# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Cone_Compatible_with_Group_Induces_Transitive_Compatible_Relation



Theorem
Let $(G,\circ)$ be a group.
Let $C \subseteq G$ be a User:Dfeuer/Definition:Cone Compatible with Operation.
Let the relation $\mathcal R$ be defined as follows:
If $x,y \in G$, then $x \mathrel{\mathcal R} y$ iff $y \circ x^{-1} \in C$.

Then $\mathcal R$ is a transitive relation compatible with $\circ$.


Proof
Transitive
Let $x,y,z \in G$.
Let $x \mathrel{\mathcal R} y$ and $y \mathrel{\mathcal R} z$.
Then $y \circ x^{-1} \in C$ and $z \circ y^{-1} \in C$.
Thus by the definition of a compatible cone:

$(z \circ y^{-1}) \circ (y \circ x^{-1}) \in C$
By associativity and the definition of inverse:

$z \circ x^{-1} \in C$
Thus $x \mathrel{\mathcal R} z$.
$\Box$

Compatible
Let $x,y,z \in G$.
Let $x \mathrel{\mathcal R} y$.
Then $y \circ x^{-1} \in C$.
$(y \circ z) \circ (x \circ z)^{-1} = (y \circ z) \circ (z^{-1} \circ x^{-1}) = y \circ x^{-1} \in C$.
Thus $(y \circ z) \mathrel{\mathcal R} (x \circ z)$.

Now $(z \circ x)^{-1} \circ (z \circ y) = x^{-1} \circ y \in C$, so by the definition of a compatible cone:
$(z \circ y) \circ (z \circ x)^{-1} \in C$
Thus $z \circ x \mathrel{\mathcal R} z \circ y$.
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Transitive_Relation_Compatible_with_Group_Operation_Induced_by_Unique_Cone



Theorem
Let $\struct {G, \circ}$ be a group with identity $e$.
Let $\RR$ be a transitive relation compatible with $\circ$.
Let $C = \set {x \in G: e \mathrel \RR x}$.

Then $C$ induces $\RR$ and is the only compatible cone to do so.


Proof
Existence
Suppose $a \mathrel \RR b$.
Then $a \circ a^{-1} \mathrel \RR b \circ a^{-1}$, so

$e \mathrel \RR b \circ a^{-1}$
so $b \circ a^{-1} \in C$.
If $b \circ a^{-1} \in C$, then

$e \mathrel \RR b \circ a^{-1}$
So $a \mathrel \RR b$.
Thus $C$ induces $\RR$.
$\Box$


Uniquelness
Suppose $D$ induces $\RR$.
Let $x \in C$.
Then $x \circ e^{-1} = x$, so $e \mathrel \RR x$.
Thus $x = x \circ e^{-1} \in D$.
Let $x \in D$.
Then $x \circ e^{-1} = x \in D$.
So $e \mathrel \RR x$, so $x \in C$.
$\blacksquare$






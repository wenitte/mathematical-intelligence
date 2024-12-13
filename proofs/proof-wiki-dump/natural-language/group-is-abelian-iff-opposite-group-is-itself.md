# 

Source: https://proofwiki.org/wiki/Group_is_Abelian_iff_Opposite_Group_is_Itself



Theorem
Let $\struct {G, \circ}$ be a  group.
Let $\struct {G, *}$ be the opposite group to $\struct {G, \circ}$.

$\struct {G, \circ}$ is an Abelian group if and only if:

$\struct {G, \circ} = \struct {G, *}$


Proof
By definition of opposite group:

$(1): \quad \forall a, b \in G : a \circ b = b * a$


Necessary Condition
Let $\struct {G, \circ}$ be Abelian. 
Then:










\(\ds \forall a, b \in G: \, \)



\(\ds a \circ b\)

\(=\)







\(\ds b \circ a\)





Definition of Abelian Group














\(\ds \)

\(=\)







\(\ds a * b\)





Definition of Opposite Group








\(\ds \leadsto \ \ \)





\(\ds \struct {G, \circ}\)

\(=\)







\(\ds \struct {G, *}\)





Equality of Algebraic Structures



$\blacksquare$


Sufficient Condition
Let $\struct {G, \circ} = \struct {G, *}$.
Then:










\(\ds \forall a, b \in G: \, \)



\(\ds a \circ b\)

\(=\)







\(\ds a * b\)





Equality of Algebraic Structures














\(\ds \)

\(=\)







\(\ds b \circ a\)





Definition of Opposite Group



Thus by definition $\struct {G, \circ}$ is an Abelian group.
$\blacksquare$






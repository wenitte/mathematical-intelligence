# 

Source: https://proofwiki.org/wiki/Graph_Functor_is_Functor

Definition
Let $\mathbf{Set}$ and $\mathbf{Rel}$ be the category of sets and the category of relations, respectively.
Let $G: \mathbf{Set} \to \mathbf{Rel}$ be the graph functor.

Then $G$ is a functor.


Proof
For any set $X$, we have:














\(\ds \map G {\operatorname{id}_X}\)

\(=\)







\(\ds \set {\tuple {x, \map {\operatorname{id}_X} x} \in X \times X: x \in X}\)





Definition of Graph Functor














\(\ds \)

\(=\)







\(\ds \set {\tuple {x, x} \in X \times X: x \in X}\)





Definition of Identity Mapping














\(\ds \)

\(=\)







\(\ds \operatorname{id}_X\)





Definition of Diagonal Relation














\(\ds \)

\(=\)







\(\ds \operatorname{id}_{G X}\)





Definition of Graph Functor



Thus $G$ preserves identity morphisms.

For mappings $f: X \to Y$ and $g: Y \to Z$, we have:














\(\ds \map G {g \circ f}\)

\(=\)







\(\ds \set {\tuple {x, \map g {\map f x} } \in X \times Z: x \in X}\)





Definition of Graph Functor














\(\ds \)

\(=\)







\(\ds \set {\tuple {x, z} \in X \times Z: \exists y \in Y: \map f x = y \land \map g y = z}\)




















\(\ds \)

\(=\)







\(\ds \set {\tuple {x, z} \in X \times Z: \exists y \in Y: \tuple {x, y} \in G f \land \tuple {y, z} \in G g}\)





Definition of Graph Functor














\(\ds \)

\(=\)







\(\ds G g \circ G f\)





Definition of $\circ$ in the category of relations




Hence $G$ is a functor.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.9$: Exercise $1 \,\text{(b)}$





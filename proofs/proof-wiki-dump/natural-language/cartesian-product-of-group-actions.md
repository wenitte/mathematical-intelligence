# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Group_Actions

Theorem
Let $\struct {G, \circ}$ be a group.
Let $S$ and $T$ be sets.
Let $*_S: G \times S \to S$ and $*_T: G \times T \to T$ be group actions.

Then the operation $*: G \times \paren {S \times T} \to S \times T$ defined as:

$\forall \tuple {g, \tuple {s, t} } \in G \times \paren {S \times T}: g * \tuple {s, t} = \tuple {g *_S s, g *_T t}$
is a group action.


Proof
The group action axioms are investigated in turn.
Let $g, h \in G$ and $s, t \in S$.

Thus:














\(\ds g * \tuple {h * \tuple {s, t} }\)

\(=\)







\(\ds g * \tuple {h *_S s, h *_T t}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \tuple {g *_S \tuple {h *_S s}, g *_T \tuple {h *_T t} }\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \tuple {\paren {g \circ h} *_S s, \paren {g \circ h} *_T t}\)





Group Action Axiom $\text {GA} 1$ for both $*_S$ and $*_T$














\(\ds \)

\(=\)







\(\ds \paren {g \circ h} * \tuple {s, t}\)





Definition of $*$



demonstrating that Group Action Axiom $\text {GA} 1$ holds.

Then:














\(\ds e * \tuple {s, t}\)

\(=\)







\(\ds \tuple {e *_S s, e *_T t}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \tuple {s, t}\)





Group Action Axiom $\text {GA} 2$ for both $*_S$ and $*_T$



demonstrating that Group Action Axiom $\text {GA} 2$ holds.

The group action axioms are thus seen to be fulfilled, and so $*$ is a group action.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Exercise $3$





# 

Source: https://proofwiki.org/wiki/Graph_Isomorphism_is_Equivalence_Relation



Theorem
Graph isomorphism is an equivalence relation.


Proof 1
From the formal definitions:


Simple Graph
A (simple) graph $G$ is a non-empty set $V$ together with an antireflexive, symmetric relation $\RR$ on $V$.


Digraph
A digraph $D$ is a non-empty set $V$ together with an antireflexive relation $\RR$ on $V$.


Loop-graph
A loop-graph $P$ is a non-empty set $V$ together with a symmetric relation $\RR$ on $V$.


Loop-Digraph
A loop-digraph $D$ is a non-empty set $V$ together with a relation $\RR$ on $V$.

It can be seen from these definitions that all the above are relational structures with more or less restriction on the relation.

Hence the result from Relation Isomorphism is Equivalence Relation.
$\blacksquare$


Proof 2
In the following, let:














\(\ds G_1\)

\(=\)







\(\ds \struct {\map V {G_1}, \map E {G_1} }\)




















\(\ds G_2\)

\(=\)







\(\ds \struct {\map V {G_2}, \map E {G_2} }\)




















\(\ds G_3\)

\(=\)







\(\ds \struct {\map V {G_3}, \map E {G_3} }\)









be arbitrary graphs.

Checking in turn each of the criteria for equivalence:


Reflexivity
The identity mapping on $\map V {G_1}$ is a bijection that maps each vertex to itself.
This is seen to preserve adjacency.
Thus graph isomorphism preserves reflexivity.
$\Box$


Symmetry
Let $G_1$ be isomorphic to $G_2$
Then there exists an isomorphism $\phi: \map V {G_1} \to \map V {G_2}$ from $\map V {G_1}$ to $\map V {G_2}$.
Let its inverse $\phi^{-1}: \map V {G_2} \to \map V {G_1}$ be defined by:

$\map {\phi^{-1} } {v_2} = v_1 \iff \map \phi {v_1} = v_2$
By Inverse of Bijection is Bijection, $\phi^{-1}$ is a bijection.

Let $u_2, v_2 \in \map V {G_2}$ such that $\map {\phi^{-1} } {u_2} = u_1$ and $\map {\phi^{-1} } {v_2} = v_1$.
Then:














\(\ds \map \phi {u_1}\)

\(=\)







\(\ds u_2\)




















\(\ds \map \phi {v_1}\)

\(=\)







\(\ds v_2\)









So $u_2$ and $v_2$ are adjacent if and only if $\map \phi {u_1}$ and $\map \phi {v_1}$ are adjacent.
Because $G_1$ is isomorphic to $G_2$, $\map \phi {u_1}$ and $\map \phi {v_1}$ are adjacent if and only if $u_1 = \map {\phi^{-1} } {u_2}$ and $v_1 = \map {\phi^{-1} } {v_2}$ are adjacent.
So $u_2$ and $v_2$ are adjacent if and only if $u_1 = \map {\phi^{-1} } {u_2}$ and $v_1 = \map {\phi^{-1} } {v_2}$ are adjacent.
That is, $G_2$ is isomorphic to $G_1$
Thus graph isomorphism preserves symmetry.
$\Box$


Transitivity
Let $G_1$ be isomorphic to $G_2$ and $G_2$ be isomorphic to $G_3$.
Then there exist isomorphisms:

$\alpha: \map V {G_1} \to \map V {G_2}$ from $\map V {G_1}$ to $\map V {G_2}$
$\beta: \map V {G_2} \to \map V {G_3}$ from $\map V {G_2}$ to $\map V {G_3}$.
Consider the composite mapping $\beta \circ \alpha$.
From Composite of Bijections is Bijection, $\beta \circ \alpha$ is a bijection from $\map V {G_1}$ to $\map V {G_3}$.
Let $u_1, v_1 \in \map V {G_1}$.
Let $\map \alpha {u_1} = u_2$ and $\map \alpha {v_1} = v_2$.
Let $\map \beta {u_2} = u_3$ and $\map \beta {v_2} = v_3$.
We have that $\alpha$ and $\beta$ are isomorphisms.
So:

$u_1$ and $v_1$ are adjacent if and only if $\map \alpha {u_1} = u_2$ and $\map \alpha {v_1} = v_2$ are adjacent
$u_2$ and $v_2$ are adjacent if and only if $\map \beta {u_2} = u_3$ and $\map \beta {v_2} = v_3$ are adjacent.
Thus:

$u_1$ and $v_1$ are adjacent if and only if $\map \beta {\map \alpha {u_1} } = u_3$ and $\map \beta {\map \alpha {v_1} } = v_3$ are adjacent.
That is, if and only if $\map {\paren {\beta \circ \alpha} } {u_1} = u_3$ and $\map {\paren {\beta \circ \alpha} } {v_1} = v_3$ are adjacent.
Thus it has been demonstrated that $\beta \circ \alpha$ is an isomorphism.

Thus graph isomorphism has been shown to preserve transitivity.
$\Box$

Graph isomorphism has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$






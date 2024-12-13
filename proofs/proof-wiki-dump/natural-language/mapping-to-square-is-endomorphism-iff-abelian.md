# 

Source: https://proofwiki.org/wiki/Mapping_to_Square_is_Endomorphism_iff_Abelian



Theorem
Let $\struct {G, \circ}$ be a group.
Let $\phi: G \to G$ be defined as:

$\forall g \in G: \map \phi g = g \circ g$

Then $\struct {G, \circ}$ is abelian if and only if $\phi$ is a (group) endomorphism.


Proof
Necessary Condition
Let $\struct {G, \circ}$ be an abelian group.
Let $a, b \in G$ be arbitrary.
Then:














\(\ds \map \phi {a \circ b}\)

\(=\)







\(\ds \paren {a \circ b} \circ \paren {a \circ b}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds a \circ \paren {b \circ a} \circ b\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds a \circ \paren {a \circ b} \circ b\)





Definition of Abelian Group: Commutativity














\(\ds \)

\(=\)







\(\ds \paren {a \circ a} \circ \paren {b \circ b}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \map \phi a \circ \map \phi b\)





Definition of $\phi$



As $a$ and $b$ are arbitrary, the above holds for all $a, b \in G$.
Thus $\phi$ is a group homomorphism from $G$ to $G$.
So by definition, $\phi$ is a group endomorphism.
$\Box$


Sufficient Condition
Let $\phi: G \to G$ as defined above be a group endomorphism.
Then:










\(\ds \forall a, b \in G: \, \)



\(\ds \map \phi {a \circ b}\)

\(=\)







\(\ds \map \phi a \circ \map \phi b\)





Definition of Group Endomorphism








\(\ds \leadsto \ \ \)

\(\ds \forall a, b \in G: \, \)



\(\ds \paren {a \circ b} \circ \paren {a \circ b}\)

\(=\)







\(\ds \paren {a \circ a} \circ \paren {b \circ b}\)





Definition of $\phi$








\(\ds \leadsto \ \ \)

\(\ds \forall a, b \in G: \, \)



\(\ds a \circ \paren {b \circ a} \circ b\)

\(=\)







\(\ds a \circ \paren {a \circ b} \circ b\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)

\(\ds \forall a, b \in G: \, \)



\(\ds b \circ a\)

\(=\)







\(\ds a \circ b\)





Cancellation Laws



Thus, by definition, $G$ is an abelian group.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 60 \delta$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Exercise $(9)$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Exercise $6$





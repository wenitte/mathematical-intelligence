# 

Source: https://proofwiki.org/wiki/Mapping_to_Power_is_Endomorphism_iff_Abelian



Theorem
Let $\struct {G, \circ}$ be a group.
Let $n \in \Z$ be an integer.
Let $\phi: G \to G$ be defined as:

$\forall g \in G: \map \phi g = g^n$

Then $\struct {G, \circ}$ is abelian if and only if $\phi$ is a (group) endomorphism.


Proof
Necessary Condition
Let $\struct {G, \circ}$ be an abelian group.
Let $a, b \in G$ be arbitrary.
Then:














\(\ds \map \phi {a \circ b}\)

\(=\)







\(\ds \paren {a \circ b}^n\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds a^n \circ b^n\)





Power of Product of Commutative Elements in Group














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



\(\ds \paren {a \circ b}^n\)

\(=\)







\(\ds a^n \circ b^n\)





Definition of $\phi$



From Power of Product of Commutative Elements in Group it follows that $G$ is an abelian group.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $7$: Homomorphisms: Exercise $2$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Exercise $(9)$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): $\S 3$: Exercise $6$





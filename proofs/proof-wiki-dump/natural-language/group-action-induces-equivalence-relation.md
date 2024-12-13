# 

Source: https://proofwiki.org/wiki/Group_Action_Induces_Equivalence_Relation



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $X$ be a set.
Let $*: G \times S \to S$ be a group action.
Let $\RR_G$ be the relation induced by $G$, that is:

$\forall x, y \in X: x \mathrel {\RR_G} y \iff y \in \Orb x$
where:

$\Orb x$ denotes the orbit of $x \in X$.

Then:

$\RR_G$ is an equivalence relation
and:

the equivalence class of an element of $X$ is its orbit.


Proof
Let $x \mathrel {\RR_G} y \iff y \in \Orb x$.
Checking in turn each of the criteria for equivalence:


Reflexivity









\(\ds \exists e \in G: \, \)



\(\ds x\)

\(=\)







\(\ds e * x\)





Group Action Axiom $\text {GA} 2$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \Orb x\)





Definition of Orbit (Group Theory)



Thus $\RR_G$ is reflexive.
$\Box$


Symmetry













\(\ds y\)

\(\in\)







\(\ds \Orb x\)














\(\ds \leadsto \ \ \)

\(\ds \exists g \in G: \, \)



\(\ds y\)

\(=\)







\(\ds g * x\)





Definition of Orbit (Group Theory)








\(\ds \leadsto \ \ \)





\(\ds g^{-1} * \paren {g * x}\)

\(=\)







\(\ds g^{-1} * y\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds \paren {g^{-1} \circ g} * x\)

\(=\)







\(\ds g^{-1} * y\)





Group Action Axiom $\text {GA} 1$








\(\ds \leadsto \ \ \)





\(\ds e * x\)

\(=\)







\(\ds g^{-1} * y\)





Group Axiom $\text G 2$: Existence of Identity Element








\(\ds \leadsto \ \ \)

\(\ds \exists g^{-1} \in G: \, \)



\(\ds x\)

\(=\)







\(\ds g^{-1} * y\)





Group Action Axiom $\text {GA} 2$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \Orb y\)





Definition of Orbit (Group Theory)



Thus $\RR_G$ is symmetric.
$\Box$


Transitivity













\(\ds y\)

\(\in\)







\(\ds \Orb x\)


















\(\, \ds \land \, \)

\(\ds z\)

\(\in\)







\(\ds \Orb y\)














\(\ds \leadsto \ \ \)

\(\ds \exists g_1, g_2 \in G: \, \)



\(\ds y\)

\(=\)







\(\ds g_1 * x\)





Definition of Orbit (Group Theory)












\(\, \ds \land \, \)

\(\ds z\)

\(=\)







\(\ds g_2 * y\)





Definition of Orbit (Group Theory)








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds g_2 * \paren {g_1 * x}\)














\(\ds \leadsto \ \ \)

\(\ds \exists g_2 \circ g_1 \in G: \, \)



\(\ds z\)

\(=\)







\(\ds \paren {g_2 \circ g_1} * x\)





Group Action Axiom $\text {GA} 1$








\(\ds \leadsto \ \ \)





\(\ds z\)

\(\in\)







\(\ds \Orb x\)





Definition of Orbit (Group Theory)



Thus $\RR_G$ is transitive.
$\Box$

So $\RR_G$ has been shown to be an equivalence relation. 
Hence the result, by definition of an equivalence class.
$\blacksquare$


Also see
Definition:Set of Orbits
Definition:Equivalence Relation Induced by Group Action
Set of Orbits forms Partition


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.5$. Orbits: Lemma $\text{(i)}$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.6$: Exercise $4.2$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 54$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Proposition $10.13$





# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_induced_by_Congruence_Relation_on_Quotient_Structure_is_Congruence/Corollary



Corollary to Equivalence Relation induced by Congruence Relation on Quotient Structure is Congruence
Let $\struct {A, \oplus}$ be an algebraic structure.
Let $\RR$ and $\TT$ be congruence relations on $\struct {A, \oplus}$ such that $R \subseteq T$.
Let $\SS$ be the relation on the quotient structure $\struct {A / \RR, \oplus_\RR}$ which satisfies:

$\forall X, Y \in A / \RR: X \mathrel \SS Y \iff \exists x \in X, y \in Y: x \mathrel \TT y$

Then:

$\SS$ is a congruence relation on $\struct {A / \RR, \oplus_\RR}$
and:

there exists a unique isomorphism $\phi$ from $\paren {A / \RR} / \SS$ to $A / \TT$ which satisfies:
$\phi \circ q_\SS \circ q_\RR = q_\TT$
where $q_\SS$, $q_\RR$ and $q_\TT$ denote the quotient epimorphisms as appropriate.


Proof
Recall that by definition $\RR$ and $\TT$ are a fortiori equivalence relations.

First it is demonstrated that $\SS$ is an equivalence relation.
Checking in turn each of the criteria for equivalence:


Reflexivity
Let $X \in  A / \RR$.
Then as $\TT$ is an equivalence relation, therefore a fortiori reflexive:

$\forall x \in X: x \mathrel \TT x$
Thus by definition of $\SS$:

$\forall X \in  A / \RR: X \mathrel \SS X$
Thus $\SS$ is seen to be reflexive.
$\Box$


Symmetry









\(\ds \forall X, Y \in A / \RR: \, \)



\(\ds X\)

\(\SS\)







\(\ds Y\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in X, y \in Y: \, \)



\(\ds x\)

\(\TT\)







\(\ds y\)





Definition of $\SS$








\(\ds \leadsto \ \ \)

\(\ds \exists x \in X, y \in Y: \, \)



\(\ds y\)

\(\TT\)







\(\ds x\)





as $\TT$ is an equivalence relation, therefore a fortiori symmetric








\(\ds \leadsto \ \ \)





\(\ds Y\)

\(\SS\)







\(\ds X\)





Definition of $\TT$



Thus $\SS$ is seen to be symmetric.
$\Box$


Transitivity
Let $X, Y, Z \in A / \RR$ such that 














\(\ds X\)

\(\SS\)







\(\ds Y\)


















\(\, \ds \land \, \)

\(\ds Y\)

\(\SS\)







\(\ds Z\)









Then we have:














\(\ds X\)

\(\SS\)







\(\ds Y\)


















\(\, \ds \land \, \)

\(\ds Y\)

\(\SS\)







\(\ds Z\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in X, y \in Y, z \in Z: \, \)



\(\ds x\)

\(\TT\)







\(\ds y\)





Definition of $\SS$












\(\, \ds \land \, \)

\(\ds y\)

\(\TT\)







\(\ds z\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in X, z \in Z: \, \)



\(\ds x\)

\(\TT\)







\(\ds z\)





as $\TT$ is an equivalence relation, therefore a fortiori transitive








\(\ds \leadsto \ \ \)





\(\ds X\)

\(\SS\)







\(\ds Z\)





Definition of $\SS$



Thus $\SS$ is seen to be transitive.
$\Box$

Hence $\TT$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\Box$

It remains to be demonstrated that $\SS$ is a congruence relation.
Let $X_1, Y_1, X_2, Y_2 \in A / \RR$ such that:














\(\ds X_1\)

\(\SS\)







\(\ds Y_1\)


















\(\, \ds \land \, \)

\(\ds X_2\)

\(\SS\)







\(\ds Y_2\)









Then we have:










\(\ds \exists x_1, x_2 \in X, y_1, y_2 \in Y: \, \)



\(\ds x_1\)

\(\TT\)







\(\ds y_1\)





Definition of $\SS$












\(\, \ds \land \, \)

\(\ds x_2\)

\(\TT\)







\(\ds y_2\)














\(\ds \leadsto \ \ \)

\(\ds \exists x_1 \oplus x_2 \in X_1 \oplus_\RR X_2, \exists y_1 \oplus y_2 \in Y_1 \oplus_\RR Y_2: \, \)



\(\ds x_1 \oplus x_2\)

\(\TT\)







\(\ds y_1 \oplus y_2\)





Definition of Congruence Relation








\(\ds \leadsto \ \ \)





\(\ds X_1 \oplus_\RR X_2\)

\(\SS\)







\(\ds Y_1 \oplus_\RR Y_2\)





Definition of $\SS$



Hence by definition of congruence relation:

$\SS$ is a congruence relation on $\struct {A / \RR, \oplus_\RR}$.
$\Box$

Thus we have that:

$\RR$ is a congruence relation on $\struct {A, \oplus}$
and:

$\SS$ is a congruence relation on the quotient structure $\struct {A / \RR, \oplus_\RR}$ defined by $\RR$.

By definition of quotient structure:

$\forall x, y \in A: x \mathrel \TT y \iff \eqclass x \RR \mathrel \SS \eqclass y \RR$
where $\eqclass x \RR$ is the equivalence class under $\RR$ of $x$.


This article contains statements that are justified by handwavery.In particular: The above needs to be proved properly. No doubt this is the point at which we invoke $\RR \subseteq \TT$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence the criteria of Equivalence Relation induced by Congruence Relation on Quotient Structure is Congruence are fulfilled.

Hence from Equivalence Relation induced by Congruence Relation on Quotient Structure is Congruence:

there exists a unique isomorphism $\phi$ from $\paren {A / \RR} / \SS$ to $A / \TT$ which satisfies:
$\phi \circ q_\SS \circ q_\RR = q_\TT$
where $q_\SS$, $q_\RR$ and $q_\TT$ denote the quotient epimorphisms as appropriate.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.19 \ \text {(a)}$





# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_induced_by_Congruence_Relation_on_Quotient_Structure_is_Congruence



Theorem
Let $\struct {A, \oplus}$ be an algebraic structure.
Let $\RR$ be a congruence relation on $\struct {A, \oplus}$.
Let $\SS$ be a congruence relation on the quotient structure $\struct {A / \RR, \oplus_\RR}$ defined by $\RR$.
Let $\TT$ be the relation on $A$ defined as:

$\forall x, y \in A: x \mathrel \TT y \iff \eqclass x \RR \mathrel \SS \eqclass y \RR$

Then:

$\TT$ is a congruence relation on $\struct {A, \oplus}$
and:

there exists a unique isomorphism $\phi$ from $\paren {A / \RR} / \SS$ to $A / \TT$ which satisfies:
$\phi \circ q_\SS \circ q_\RR = q_\TT$
where $q_\SS$, $q_\RR$ and $q_\TT$ denote the quotient epimorphisms as appropriate.


Corollary
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
Recall that by definition $\RR$ and $\SS$ are a fortiori equivalence relations.

First it is demonstrated that $\TT$ is an equivalence relation.
Checking in turn each of the criteria for equivalence:


Reflexivity
We have:

$\forall a \in A: a \in \eqclass a \RR$
Hence as $\SS$ is an equivalence relation, therefore a fortiori reflexive:

$\forall a \in A: \eqclass a \RR \mathrel \SS \eqclass a \RR$
That is:

$\forall a \in A: a \mathrel \TT a$
Thus $\TT$ is seen to be reflexive.
$\Box$


Symmetry









\(\ds \forall a, b \in A: \, \)



\(\ds a\)

\(\TT\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass a \RR\)

\(\SS\)







\(\ds \eqclass b \RR\)





Definition of $\TT$








\(\ds \leadsto \ \ \)





\(\ds \eqclass b \RR\)

\(\SS\)







\(\ds \eqclass a \RR\)





as $\SS$ is an equivalence relation, therefore a fortiori symmetric








\(\ds \leadsto \ \ \)





\(\ds b\)

\(\TT\)







\(\ds a\)





Definition of $\TT$



Thus $\TT$ is seen to be symmetric.
$\Box$


Transitivity
Let $a, b, c \in A$ such that 














\(\ds a\)

\(\TT\)







\(\ds b\)


















\(\, \ds \land \, \)

\(\ds b\)

\(\TT\)







\(\ds c\)









Then we have:














\(\ds a\)

\(\TT\)







\(\ds b\)


















\(\, \ds \land \, \)

\(\ds b\)

\(\TT\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass a \RR\)

\(\SS\)







\(\ds \eqclass b \RR\)





Definition of $\TT$












\(\, \ds \land \, \)

\(\ds \eqclass b \RR\)

\(\SS\)







\(\ds \eqclass c \RR\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass a \RR\)

\(\SS\)







\(\ds \eqclass c \RR\)





as $\SS$ is an equivalence relation, therefore a fortiori transitive








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\TT\)







\(\ds c\)





Definition of $\TT$



Thus $\TT$ is seen to be transitive.
$\Box$

Hence $\TT$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\Box$

It remains to be demonstrated that $\TT$ is a congruence relation.
Let $x_1, y_1, x_2, y_2 \in A$ such that:














\(\ds x_1\)

\(\TT\)







\(\ds y_1\)


















\(\, \ds \land \, \)

\(\ds x_2\)

\(\TT\)







\(\ds y_2\)









Then we have:














\(\ds \eqclass {x_1} \RR\)

\(\SS\)







\(\ds \eqclass {y_1} \RR\)





Definition of $\TT$












\(\, \ds \land \, \)

\(\ds \eqclass {x_2} \RR\)

\(\SS\)







\(\ds \eqclass {y_2} \RR\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass {x_1} \RR \oplus_\RR \eqclass {x_2} \RR\)

\(\SS\)







\(\ds \eqclass {y_1} \RR \oplus_\RR \eqclass {y_2} \RR\)





Definition of Congruence Relation








\(\ds \leadsto \ \ \)





\(\ds \eqclass {x_1 \oplus x_2} \RR\)

\(\SS\)







\(\ds \eqclass {y_1 \oplus y_2} \RR\)





Definition of Operation Induced on Quotient Set








\(\ds \leadsto \ \ \)





\(\ds x_1 \oplus x_2\)

\(\TT\)







\(\ds y_1 \oplus y_2\)





Definition of $\TT$



Hence by definition of congruence relation:

$\TT$ is a congruence relation on $\struct {A, \oplus}$.
$\Box$

Now we have:










\(\ds \forall x \in A: \, \)



\(\ds \map {q_\RR} x\)

\(=\)







\(\ds \eqclass x \RR\)





Definition of Quotient Epimorphism










\(\ds \forall y \in A / \RR: \, \)



\(\ds \map {q_\SS} y\)

\(=\)







\(\ds \eqclass y \SS\)





Definition of Quotient Epimorphism








\(\ds \leadsto \ \ \)

\(\ds \forall x \in A: \, \)



\(\ds \map {q_\SS \circ q_\RR} x\)

\(=\)







\(\ds \eqclass {\eqclass x \RR} \SS\)









From Composite of Epimorphisms is Epimorphism, $q_\SS \circ q_\RR$ is an epimorphism.
We also have that $q_\TT$ is a fortiori an epimorphism.

From the Quotient Theorem for Epimorphisms, there exists a unique isomorphism $\phi: \paren {A / \RR} / \SS \to A / \TT$ which satisfies $\phi \circ \paren {q_\SS \circ q_\RR} = q_\TT$.
$\blacksquare$


This page has been identified as a candidate for refactoring of basic complexity.In particular: Whatever the place for this nice diagram, not like thisUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
This theorem can be illustrated by means of the following commutative diagram:

$\begin{xy}\xymatrix@L+2mu@+1em{
 A \ar[r]^*{q_\TT}
     \ar[d]^*{q_\RR}
&
 A / \TT
\\ 
 A / \RR \ar[r]_*{q_\SS}
&
 \paren {A / \RR} / \SS \ar@{-->}[u]_*{\phi}^*{\cong}
}\end{xy}$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.17 \ \text {(a)}$





# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_between_Ordinals_and_Proper_Class


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\struct {A, \prec}$ be a strict well-ordering.
Let $A$ be a proper class.
Let the initial segment of $x$ be a set for every $x \in A$.

Then we may make the following definitions:
Set $G$ equal to the collection of ordered pairs $\tuple {x, y}$ such that:

$y \in A \setminus \Img x$
$\paren {A \setminus \Img x} \cap A_y = \O$

Use the First Principle of Transfinite Recursion to construct a mapping $F$ such that:

The domain of $F$ is the class of all ordinals $\On$
For all ordinals $x$, $\map F x = \map G {F {\restriction_x} }$

Then $F: \On \to A$ is an order isomorphism between $\struct {\On, \in}$ and $\struct {A, \prec}$.


Corollary
Let $A$ be a proper class of ordinals.
We will take ordering on $A$ to be $\in$.
Set $G$ equal to the class of all ordered pairs $\tuple {x, y}$ such that:

$y \in A \setminus \Img x$
$\paren {A \setminus \Img x} \cap A_y = \O$
Define $F$ by the First Principle of Transfinite Recursion to construct a mapping $F$ such that:

The domain of $F$ is $\On$.
For all ordinals $x$, $\map F x = \map G {F \restriction x}$.

Then $F: \On \to A$ is an order isomorphism between $\struct {\On, \in}$ and $\struct {A, \in}$.


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.


Lemma
Suppose the following conditions are met:
Let $A$ be a class.
We allow $A$ to be a proper class or a set.
Let $\struct {A, \prec}$ be a strict well-ordering.
Let every $\prec$-initial segment be a set, not a proper class.
Let $\Img x$ denote the image of a subclass $x$.
Let $G$ equal the class of all ordered pairs $\tuple {x, y}$ satisfying:

$y \in A \setminus \Img x$
The initial segment $A_y$ of $\struct {A, \prec}$ is a subset of $\Img x$
Let $F$ be a mapping with a domain of $\On$.
Let $F$ also satisfy:

$\map F x = \map G {F \restriction x}$

Then:

$G$ is a mapping
$\map G x \in A \setminus \Img x \iff A \setminus \Img x \ne \O$
$\Box$

Assume that:

$\exists x: A \setminus \Img x = \O$
Then:

$A \subseteq \Img x$
Therefore, $A$ is a set.
This contradicts the fact that $A$ is a proper class.
Therefore by Axiom of Subsets Equivalents and De Morgan's Laws (Predicate Logic):

$\forall x: A \setminus \Img x \ne \O$
Then:










\(\ds \forall x: \, \)



\(\ds A \setminus \Img x\)

\(\ne\)







\(\ds \O\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map F x\)

\(\in\)







\(\ds A \setminus \Img x\)





Lemma












\(\, \ds \land \, \)

\(\ds \paren {A \setminus \Img x} \cap A_{\map F x}\)

\(\ne\)







\(\ds \O\)














\(\ds \leadsto \ \ \)





\(\ds f: \On\)

\(\rightarrowtail\)







\(\ds A\)





Condition for Injective Mapping on Ordinals



where $\rightarrowtail$ denotes an injection.

Now to prove that $F$ is surjective:














\(\ds y\)

\(\in\)







\(\ds \Img f\)














\(\ds \leadsto \ \ \)

\(\ds \exists x: \, \)



\(\ds y\)

\(=\)







\(\ds \map F x\)





Definition of Image of Mapping








\(\ds \leadsto \ \ \)

\(\ds \exists x: \, \)



\(\ds \paren {A \setminus \Img x} \cap A_y\)

\(=\)







\(\ds \O\)





from $(1)$












\(\, \ds \land \, \)

\(\ds y\)

\(=\)







\(\ds \map F x\)














\(\ds \leadsto \ \ \)

\(\ds \exists x: \forall z: \, \)



\(\ds \paren {z \prec y \land x \in A}\)

\(\implies\)







\(\ds z \in \Img x\)














\(\ds \leadsto \ \ \)

\(\ds \forall z: \, \)



\(\ds \paren {z \prec y \land x \in A}\)

\(\implies\)







\(\ds z \in \Img f\)














\(\ds \leadsto \ \ \)





\(\ds \Img F = A\)

\(=\)







\(\ds \)





Well-Ordered Transitive Subset is Equal or Equal to Initial Segment










\(\ds \exists x \in A: \, \)

\(\, \ds \lor \, \)

\(\ds \Img F\)

\(=\)







\(\ds A \cap A_x\)










But if $\Img F = A \cap A_x$, then it is equal to some initial segment of $A$.
This would imply that $\Img F$ is a set, which is a contradiction.
Therefore $A = \Img F$ and the function is bijective.















\(\ds x\)

\(\in\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \Img x\)

\(\subseteq\)







\(\ds \Img y\)





Transitive Set is Proper Subset of Ordinal iff Element of Ordinal and the fact that the image preserves subsets








\(\ds \leadsto \ \ \)





\(\ds A \setminus \Img y\)

\(\subseteq\)







\(\ds A \setminus \Img x\)














\(\ds \leadsto \ \ \)





\(\ds \map F y\)

\(\in\)







\(\ds A \setminus \Img x\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \map F y\)

\(\notin\)







\(\ds A_{\map F x}\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \map F x\)

\(\prec\)







\(\ds \map F y\)





$\prec$ is a Strict Well-Ordering












\(\, \ds \lor \, \)

\(\ds \map F x\)

\(=\)







\(\ds \map F y\)














\(\ds \leadsto \ \ \)





\(\ds \map F x\)

\(\prec\)







\(\ds \map F y\)





$F$ is injective and $x \ne y$




Conversely, assume $\map F x \prec \map F y$.
Then $y \in x$ and $x = y$ lead to contradictory conclusions.
By Ordinal Membership is Trichotomy, we may conclude that $x \in y$.
$\blacksquare$


Also see
Transfinite Recursion Theorem
Condition for Injective Mapping on Ordinals
Maximal Injective Mapping from Ordinals to a Set


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.49$





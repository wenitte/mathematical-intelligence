# 

Source: https://proofwiki.org/wiki/Maximal_Injective_Mapping_from_Ordinals_to_a_Set


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $F$ be a mapping satisfying the following properties:


This article, or a section of it, needs explaining.In particular: What is $G$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
The domain of $F$ is $\On$, the class of all ordinals
For all ordinals $x$, $\map F x = \map G {F \restriction x}$.
For all ordinals $x$, if $A \setminus \Img x \ne \O$, then $\map G {F \restriction x} \in A \setminus \Img x$ where $\Img x$ is the image of the subset $x$ under $F$.
$A$ is a set.

Then there exists an ordinal $y$ satisfying the following properties:

$\forall x \in y: A \setminus \Img x \ne \O$
$\Img y = A$
$F \restriction y$ is an injective mapping.
Note that the first third and fourth properties of $F$ are the most important.  For any mapping $G$, a mapping $F$ can be constructed satisfying the first two properties using the First Principle of Transfinite Recursion.


Proof
Set $B$ equal to the class of all ordinals $x$ such that $A \setminus \Img x \ne \O$.
Assume $B = \On$.  
Then:














\(\ds B\)

\(=\)







\(\ds \On\)














\(\ds \leadsto \ \ \)

\(\ds \forall x: \, \)



\(\ds \map F x\)

\(=\)







\(\ds \map G {F \restriction x}\)





Definition of $B$








\(\ds \leadsto \ \ \)

\(\ds \forall x: \, \)



\(\ds \map G {F \restriction x}\)

\(\in\)







\(\ds A \setminus \Img F\)





by hypothesis



By Condition for Injective Mapping on Ordinals, $A$ is a proper class.
This contradicts the fact that $A$ is a set.
Therefore $B \subsetneq \On$.

Because $B$ is bounded above, $\bigcup B \in \On$.
By Union of Ordinals is Least Upper Bound, the union of ordinals is the least upper bound of $B$.
Setting $\bigcup B = x$:

$(1): \quad A \setminus \Img x = \O \land \forall y \in x: A \setminus \Img y \ne \O$
The first condition is satisfied.
In addition:

$(2): \quad A \subseteq \Img x$
Take any $y \in \Img x$.
Then:














\(\ds y\)

\(\in\)







\(\ds \Img x\)














\(\ds \leadsto \ \ \)

\(\ds \exists z \in x: \, \)



\(\ds y\)

\(=\)







\(\ds \map F z\)





Definition of Image of Element under Mapping








\(\ds \leadsto \ \ \)

\(\ds \exists z: \, \)



\(\ds y\)

\(=\)







\(\ds \map F z\)





Equation $(1)$












\(\, \ds \land \, \)

\(\ds A \setminus \Img z\)

\(\ne\)







\(\ds \O\)














\(\ds \leadsto \ \ \)

\(\ds \exists z: \, \)



\(\ds y\)

\(=\)







\(\ds \map F z\)





by hypothesis












\(\, \ds \land \, \)

\(\ds \map F z\)

\(\in\)







\(\ds A \setminus \Img z\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds A\)









This means that:

$\Img x \subseteq A$
Combining with $(2)$:

$\Img x = A$
$F$ is a mapping, so $F \restriction x$ is a mapping. 
Take any $y, z \in x$ such that $y$ and $z$ are distinct.
Without loss of generality, allow $y \in z$ (justified by Ordinal Membership Trichotomy).














\(\ds y\)

\(\in\)







\(\ds z\)


















\(\, \ds \land \, \)

\(\ds z\)

\(\in\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \map F y\)

\(\in\)







\(\ds \Img z\)





by hypothesis












\(\, \ds \land \, \)

\(\ds \map F z\)

\(\in\)







\(\ds A \setminus \Img z\)














\(\ds \leadsto \ \ \)





\(\ds \map F y\)

\(\in\)







\(\ds \Img z\)





Definition of Set Difference












\(\, \ds \land \, \)

\(\ds \map F z\)

\(\notin\)







\(\ds \Img z\)














\(\ds \leadsto \ \ \)





\(\ds \map F y\)

\(\ne\)







\(\ds \map F z\)









From this, we may conclude that $F$ is injective.
$\blacksquare$


Also see
Condition for Injective Mapping on Ordinals
Transfinite Recursion Theorem
Order Isomorphism between Ordinals and Proper Class


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.47$





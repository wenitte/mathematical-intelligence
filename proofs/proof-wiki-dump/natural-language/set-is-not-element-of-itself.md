# 

Source: https://proofwiki.org/wiki/Set_is_Not_Element_of_Itself


This page has been identified as a candidate for refactoring of medium complexity.In particular: Establish the fact that this specifically refers to sets whose existence are predicated by the Axiom of Foundation. Note that from the PoV of class theory, the concept of an ordinary set subsumes this -- thereby leaving open the possibility of non-ordinary sets which are defined as a direct contradiction of this result.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
There cannot exist a set which is an element of itself.
That is:

$\neg \exists a: a \in a$


Proof
Aiming for a contradiction, suppose $a$ is such a set.
Then $a \in a$ and $a \in \set a$.
$a \ne \O$ because the empty set has no elements by definition.

It is also seen that:














\(\ds a \cap \set a\)

\(=\)







\(\ds \set {x: x \in a \land x \in \set a}\)





Definition of Set Intersection














\(\ds \)

\(=\)







\(\ds \set {x: x \in a \land x = a}\)





Definition of Singleton














\(\ds \)

\(=\)







\(\ds a\)










By the Axiom of Foundation:

$a \cap \set a = \O$
Thus $a = \O$.
But it was previously established that $a \ne \O$.

From this contradiction it follows that there cannot exist such a set.
Hence the result.
$\blacksquare$


Axiom of Foundation
This theorem depends on the Axiom of Foundation.
Most mathematicians accept the Axiom of Foundation, but theories that reject it, or negate it, have found applications in Computer Science and Linguistics.






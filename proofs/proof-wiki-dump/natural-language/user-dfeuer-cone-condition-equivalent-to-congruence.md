# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Cone_Condition_Equivalent_to_Congruence


This page has been identified as a candidate for refactoring.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $(G,\circ)$ be a group with identity $e$.
Let $C$ be a cone compatible with $\circ$ with the following properties:

$C = C^{-1}$
$e \in C$
Let $\cong$ be the relation induced by $C$.

Then $\cong$ is a Congruence Relation.

Proof
By User:Dfeuer/Cone Compatible with Group Induces Transitive Compatible Relation, $\cong$ is compatible with $\circ$ and is transitive.
By User:Dfeuer/Cone Condition Equivalent to Symmetry and User:Dfeuer/Cone Condition Equivalent to Reflexivity, $\cong$ is symmetric and reflexive.
Thus $\cong$ is an Equivalence Relation compatible with $\circ$, and hence a congruence relation.
$\blacksquare$

Theorem
Let $(G,\circ)$ be a group with identity $e$.
Let $\cong$ be a Congruence Relation on $G$.
Then there is a unique cone $C$ compatible with $\circ$ such that $C$ induces $\cong$, and $C$ has the following properties:

$C = C^{-1}$
$e \in C$


Proof
Since a congruence relation on $G$ is an equivalence relation compatible with $\circ$, it is in particular transitive.
Thus by User:Dfeuer/Transitive Relation Compatible with Group Operation Induced by Unique Cone $\cong$ is induced by a unique cone

$C = \{x \in G: e \cong x\}$
That is, $C$ is the $\cong$ congruence class of $e$.
By User:Dfeuer/Cone Condition Equivalent to Symmetry:

$C = C^{-1}$
Finally, by User:Dfeuer/Cone Condition Equivalent to Reflexivity:

$e \in C$
$\blacksquare$






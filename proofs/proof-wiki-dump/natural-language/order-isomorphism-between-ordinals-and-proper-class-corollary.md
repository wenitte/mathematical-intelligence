# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_between_Ordinals_and_Proper_Class/Corollary



Corollary to Order Isomorphism between Ordinals and Proper Class
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
$A$ is a proper class of ordinals.
It is strictly well-ordered by $\in$.
Moreover, every initial segment of $A$ is a set, since the initial segment of the ordinal is simply the ordinal itself.
Therefore, we may apply Order Isomorphism between Ordinals and Proper Class to achieve the desired isomorphism.
$\blacksquare$


Remark

This page has been identified as a candidate for refactoring of basic complexity.In particular: just get rid of "Remark"Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
This theorem shows that every proper class of ordinals can be put in a unique order-isomorphism with the set of all ordinals.


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.50$





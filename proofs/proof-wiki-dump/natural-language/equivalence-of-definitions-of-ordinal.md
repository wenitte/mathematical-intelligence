# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ordinal



Theorem
The following definitions of the concept of Ordinal are equivalent:

Definition 1
$\alpha$ is an ordinal if and only if it fulfils the following conditions:




\((1)\)  

$:$  



$\alpha$ is a transitive set   











  


\((2)\)  

$:$  



$\Epsilon {\restriction_\alpha}$ strictly well-orders $\alpha$   











  

where $\Epsilon {\restriction_\alpha}$ is the restriction of the epsilon relation to $\alpha$.

Definition 2
$\alpha$ is an ordinal if and only if it fulfils the following conditions:




\((1)\)  

$:$  



$\alpha$ is a transitive set   











  


\((2)\)  

$:$  



the epsilon relation is connected on $\alpha$:   



\(\ds \forall x, y \in \alpha: x \ne y \implies x \in y \lor y \in x \)   







  


\((3)\)  

$:$  



$\alpha$ is well-founded.   











  

Definition 3
An ordinal is a strictly well-ordered set $\struct {\alpha, \prec}$ such that:

$\forall \beta \in \alpha: \alpha_\beta = \beta$
where $\alpha_\beta$ is the initial segment of $\alpha$ determined by $\beta$:

$\alpha_\beta = \set {x \in \alpha: x \prec \beta}$
Definition 4
$\alpha$ is an ordinal if and only if:

$\alpha$ is an element of every superinductive class.


Proof
Definition 1 is equivalent to Definition 2
This follows immediately from the definition of a strict well-ordering.
$\Box$


Definition 1 implies Definition 3
Let $\alpha$ be an ordinal according to Definition 1.
Let $\beta \in \alpha$.
Then:














\(\ds \alpha_\beta\)

\(=\)







\(\ds \set {x \in \alpha: x \in_\alpha \beta}\)





Definition of Initial Segment














\(\ds \)

\(=\)







\(\ds \set {x: x \in \alpha \land x \in \beta}\)




















\(\ds \)

\(=\)







\(\ds \alpha \cap \beta\)





Definition of Set Intersection














\(\ds \)

\(=\)







\(\ds \beta\)





as $\beta \subseteq \alpha$ by transitivity



$\Box$


Definition 3 implies Definition 1
Let $\struct {\alpha, \prec}$ be an ordinal according to Definition 3.
Let $\beta \in \alpha$.
Then $\beta = \alpha_\beta \subseteq \alpha$ and so $\alpha$ is transitive.

Also, by the definition of set equality:










\(\ds \forall x: \, \)



\(\ds x \in \beta\)

\(\iff\)







\(\ds x \in \alpha_\beta\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall x: \, \)



\(\ds x \in \beta\)

\(\iff\)







\(\ds \paren {x \in \alpha \land x \prec \beta}\)










It has been shown that if $x, \beta \in \alpha$ then:

$x \in \beta \iff x \prec \beta$

Therefore, ${\prec} = \struct {\alpha, \alpha, \RR}$ where:














\(\ds \RR\)

\(=\)







\(\ds \set {\tuple {x, \beta} \in \alpha \times \alpha: x \prec \beta}\)




















\(\ds \)

\(=\)







\(\ds \set {\tuple {x, \beta} \in \alpha \times \alpha: x \in \beta}\)




















\(\ds \)

\(=\)







\(\ds \in_\alpha\)





Definition of Epsilon Restriction



Hence ${\prec} = \Epsilon {\restriction_\alpha}$.
$\Box$


Definition 3 is equivalent to Definition 4

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.3$, $\S 7.4$





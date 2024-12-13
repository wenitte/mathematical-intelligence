# 

Source: https://proofwiki.org/wiki/Method_of_the_Auxiliary_Hypothesis



Definition
The method rests on the Criterion of Deduction:
Let $A$ be a relation in $I$, and $I*$ be the the theory obtained by adjoining $A$ to the axioms of $I$. If $B$ is a theorem in $I*$, then $A \implies B$ is a theorem in $I$.
The proof is on the page 30 in the book Theory of Sets by Bourbaki.

Example
Suppose a field, where the inverse of the zero-element and its existence are not defined in axioms.
The auxiliary hypothesis:

adjoin the inconsistent assumption (not yet proved) to the axioms that the zero-element has an inverse:

${0}^{-1}*0 = 1$
According to the axioms of the field:

$0^{-1}*0 = 0*0^{-1}= 0$
Contradiction, since an axiom of the field states the uniqueness of the product. So the zero-element has no inverse by the Method of the auxiliary hypothesis. Otherwise, the set of axioms would be inconsistent.
A common mistake is to assume the non-existence of the inverse for the zero-element from the axioms of the field. It is a consequence, not a definition per se. 

$\blacksquare$


Similarity to a proof method from Propositional Logic
If $a \land \neg b$ leads to contradiction, then the proposition $(a \implies b)$ is true.

$(a \implies b) \iff (\neg a \lor b) \iff \neg (a \land \neg b)$
References
Theory of Sets by Bourbaki


Work In ProgressIn particular: add links and a proof, and tidy the heading formatting.Actually, I'm fairly sure we've got this covered elsewhere.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.





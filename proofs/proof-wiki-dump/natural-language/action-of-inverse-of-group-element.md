# 

Source: https://proofwiki.org/wiki/Action_of_Inverse_of_Group_Element

Theorem
Let $\struct {G, \circ}$ be a group.
Let $S$ be a sets.
Let $*: G \times S \to S$ be a group action.

Then:

$g * a = b \iff g^{-1} * b = a$


Proof













\(\ds g * a\)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds g^{-1} * \paren {g * a}\)

\(=\)







\(\ds g^{-1} * b\)














\(\ds \leadsto \ \ \)





\(\ds \paren {g^{-1} \circ g} * a\)

\(=\)







\(\ds g^{-1} * b\)





Group Action Axiom $\text {GA} 2$








\(\ds \leadsto \ \ \)





\(\ds e * a\)

\(=\)







\(\ds g^{-1} * b\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds g^{-1} * b\)





Group Action Axiom $\text {GA} 1$




and:














\(\ds g^{-1} * b\)

\(=\)







\(\ds a\)














\(\ds \leadsto \ \ \)





\(\ds g * \paren {g^{-1} * b}\)

\(=\)







\(\ds g * a\)














\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ g^{-1} } * b\)

\(=\)







\(\ds g * a\)





Group Action Axiom $\text {GA} 2$








\(\ds \leadsto \ \ \)





\(\ds e * b\)

\(=\)







\(\ds g * a\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds b\)

\(=\)







\(\ds g * a\)





Group Action Axiom $\text {GA} 1$



$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.6$. Stabilizers: Lemma





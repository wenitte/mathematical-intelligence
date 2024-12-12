# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Empty_Set



Theorem
The following formulations of the Axiom of the Empty Set are equivalent:

Formulation 1
$\exists x: \forall y \in x: y \ne y$
Formulation 2
$\exists x: \forall y: \paren {\neg \paren {y \in x} }$


Proof
Formulation 1 implies Formulation 2



\(\text {(1)}: \quad\)









\(\ds \)

\(\)







\(\ds \forall y: y = y\)





Equality is Reflexive




\(\text {(2)}: \quad\)









\(\ds \)

\(\)







\(\ds \neg \exists y: y \ne y\)





From $(1)$: Assertion of Universality




\(\text {(3)}: \quad\)









\(\ds \)

\(\)







\(\ds x := \set { {y: y \ne y} }\)










\(\text {(4)}: \quad\)









\(\ds \)

\(\)







\(\ds \neg \exists y: y \in x\)





From $(2)$ and $(3)$



$\Box$


Formulation 2 implies Formulation 1



\(\text {(1)}: \quad\)









\(\ds \)

\(\)







\(\ds \forall y: \paren {\neg \paren {y \in x} }\)










\(\text {(2)}: \quad\)









\(\ds \)

\(\)







\(\ds \forall y: \neg \paren {y \in x} \land \paren {y \in x} \implies y \ne y\)





Rule of Explosion




\(\text {(3)}: \quad\)









\(\ds \)

\(\)







\(\ds \forall y: \paren {\neg \paren {y \in x} \implies \paren {y \in x \implies y \ne y} }\)





Rule of Exportation, from $(2)$




\(\text {(4)}: \quad\)









\(\ds \)

\(\)







\(\ds \forall y: \paren {y \in x \implies y \ne y}\)





Modus Ponendo Ponens, from $(1)$ and $(3)$



$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.2$. Sets





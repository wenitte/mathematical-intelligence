# 

Source: https://proofwiki.org/wiki/Negated_Restricted_Existential_Quantifier

Theorem
Let $x$ and $A$ be sets.
Let $\map P x$ be a propositional function.

$\neg \exists x \in A : \map P x \iff \forall x \in A : \neg \map P x $
Proof
From left to right:










\(\ds \neg \exists x \in A: \, \)



\(\ds \)

\(\map P x\)







\(\ds \)














\(\ds \leadsto \ \ \)

\(\ds \neg \exists x: \, \)



\(\ds \)

\(x \in A \land \map P x\)







\(\ds \)





Definition of Restricted Existential Quantifier








\(\ds \leadsto \ \ \)

\(\ds \forall x: \, \)



\(\ds \)

\(\neg \paren{x \in A \land \map P x}\)







\(\ds \)





De Morgan's Laws (Predicate Logic)/Denial of Existence








\(\ds \leadsto \ \ \)

\(\ds \forall x: \, \)



\(\ds \)

\(x \in A \implies \neg \map P x\)







\(\ds \)





Modus Ponendo Tollens/Variant








\(\ds \leadsto \ \ \)

\(\ds \forall x \in A: \, \)



\(\ds \)

\(\neg \map P x\)







\(\ds \)





Definition of Restricted Universal Quantifier




From right to left:










\(\ds \forall x \in A: \, \)



\(\ds \)

\(\neg \map P x\)







\(\ds \)














\(\ds \leadsto \ \ \)

\(\ds \forall x: \, \)



\(\ds \)

\(x \in A \implies \neg \map P x\)







\(\ds \)





Definition of Restricted Universal Quantifier








\(\ds \leadsto \ \ \)

\(\ds \forall x: \, \)



\(\ds \)

\(\neg \paren{x \in A \land \map P x}\)







\(\ds \)





Modus Ponendo Tollens/Variant








\(\ds \leadsto \ \ \)

\(\ds \neg \exists x: \, \)



\(\ds \)

\(x \in A \land \map P x\)







\(\ds \)





De Morgan's Laws (Predicate Logic)/Denial of Existence








\(\ds \leadsto \ \ \)

\(\ds \neg \exists x \in A: \, \)



\(\ds \)

\(\map P x\)







\(\ds \)





Definition of Restricted Existential Quantifier



$\blacksquare$






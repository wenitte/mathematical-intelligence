# 

Source: https://proofwiki.org/wiki/Negated_Restricted_Universal_Quantifier



Theorem
Let $x$ and $A$ be sets.
Let $\map P x$ be a propositional function.

$\neg \forall x \in A : \map P x \iff \exists x \in A : \neg \map P x $


Proof
Sufficient Condition









\(\ds \neg \forall x \in A: \, \)



\(\ds \)

\(\map P x\)







\(\ds \)














\(\ds \leadsto \ \ \)

\(\ds \neg \forall x: \, \)



\(\ds \)

\(x \in A \implies \map P x\)







\(\ds \)





Definition of Restricted Universal Quantifier








\(\ds \leadsto \ \ \)

\(\ds \exists x: \, \)



\(\ds \)

\(\neg \paren{x \in A \implies \map P x}\)







\(\ds \)





De Morgan's Laws (Predicate Logic)/Denial of Universality








\(\ds \leadsto \ \ \)

\(\ds \exists x: \, \)



\(\ds \)

\(x \in A \land \neg \map P x\)







\(\ds \)





Conjunction with Negative is Equivalent to Negation of Conditional








\(\ds \leadsto \ \ \)

\(\ds \exists x \in A: \, \)



\(\ds \)

\(\neg \map P x\)







\(\ds \)





Definition of Restricted Existential Quantifier



$\Box$


Necessary Condition









\(\ds \exists x \in A: \, \)



\(\ds \)

\(\neg \map P x\)







\(\ds \)














\(\ds \leadsto \ \ \)

\(\ds \exists x: \, \)



\(\ds \)

\(x \in A \land \neg \map P x\)







\(\ds \)





Definition of Restricted Existential Quantifier








\(\ds \leadsto \ \ \)

\(\ds \exists x: \, \)



\(\ds \)

\(\neg \paren{x \in A \to \map P x}\)







\(\ds \)





Conjunction with Negative is Equivalent to Negation of Conditional








\(\ds \leadsto \ \ \)

\(\ds \neg \forall x: \, \)



\(\ds \)

\(x \in A \to \map P x\)







\(\ds \)





De Morgan's Laws (Predicate Logic)/Denial of Universality








\(\ds \leadsto \ \ \)

\(\ds \neg \forall x \in A: \, \)



\(\ds \)

\(\map P x\)







\(\ds \)





Definition of Restricted Universal Quantifier



$\blacksquare$






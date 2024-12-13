# 

Source: https://proofwiki.org/wiki/Particular_Affirmative_and_Universal_Negative_are_Contradictory

Theorem
Consider the categorical statements:








\(\ds \mathbf I:\)   

The particular affirmative:   

  \(\ds \exists x:\)

\(\ds \map S x \land \map P x \)   







  






\(\ds \mathbf E:\)   

The universal negative:   

  \(\ds \forall x:\)

\(\ds \map S x \implies \neg \map P x \)   







  

Then $\mathbf I$ and $\mathbf E$ are contradictory.

Using the symbology of predicate logic:

$\neg \paren {\paren {\exists x: \map S x \land \map P x} \iff \paren {\forall x: \map S x \implies \neg \map P x} }$


Proof













\(\ds \)

\(\)







\(\ds \mathbf E\)














\(\ds \therefore \ \ \)





\(\ds \forall x:\)

\(\)







\(\ds \map S x \implies \neg \map P x\)





Definition of $\mathbf E$








\(\ds \therefore \ \ \)





\(\ds \forall x:\)

\(\)







\(\ds \neg \paren {\map S x \land \map P x}\)





Modus Ponendo Tollens








\(\ds \therefore \ \ \)





\(\ds \neg \exists x:\)

\(\)







\(\ds \map S x \land \map P x\)





De Morgan's Laws: Denial of Existence








\(\ds \therefore \ \ \)





\(\ds \)

\(\)







\(\ds \neg \mathbf I\)





Definition of $\mathbf I$




The argument reverses:














\(\ds \)

\(\)







\(\ds \mathbf I\)














\(\ds \therefore \ \ \)





\(\ds \exists x:\)

\(\)







\(\ds \map S x \land \map P x\)





Definition of $\mathbf I$








\(\ds \therefore \ \ \)





\(\ds \exists x:\)

\(\)







\(\ds \neg \paren {\map S x \implies \neg \map P x}\)





Conjunction is Equivalent to Negation of Conditional of Negative








\(\ds \therefore \ \ \)





\(\ds \neg \forall x:\)

\(\)







\(\ds \map S x \implies \neg \map P x\)





De Morgan's Laws: Denial of Universality








\(\ds \therefore \ \ \)





\(\ds \)

\(\)







\(\ds \neg \mathbf E\)





Definition of $\mathbf E$




The result follows by definition of contradictory.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $4$ The Syllogism
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $4$: Propositional Functions and Quantifiers: $4.1$: Singular Propositions and General Propositions





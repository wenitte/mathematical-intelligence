# 

Source: https://proofwiki.org/wiki/Non-Negative_Additive_Function_is_Monotone

Theorem
Let $\SS$ be an algebra of sets.
Let $f: \SS \to \overline \R$ be an additive function, that is:

$\forall A, B \in \SS: A \cap B = \O \implies \map f {A \cup B} = \map f A + \map f B$

If $\forall A \in \SS: \map f A \ge 0$, then $f$ is monotone, that is:

$A \subseteq B \implies \map f A \le \map f B$


Proof
Let $A \subseteq B$.

Then:














\(\ds B\)

\(=\)







\(\ds \paren {B \setminus A} \cup \paren {A \cap B}\)





Set Difference Union Intersection














\(\ds \)

\(=\)







\(\ds \paren {B \setminus A} \cup A\)





Intersection with Subset is Subset














\(\ds \O\)

\(=\)







\(\ds \paren {B \setminus A} \cap A\)





Set Difference Intersection with Second Set is Empty Set














\(\ds 0\)

\(\le\)







\(\ds \map f {B \setminus A}\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \map f A\)

\(\le\)







\(\ds \map f {B \setminus A} + \map f A\)














\(\ds \leadsto \ \ \)





\(\ds \map f A\)

\(\le\)







\(\ds \map f B\)





Definition of Additive Function (Measure Theory)



$\blacksquare$






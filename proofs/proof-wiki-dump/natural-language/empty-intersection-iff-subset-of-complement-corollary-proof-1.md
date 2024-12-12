# 

Source: https://proofwiki.org/wiki/Empty_Intersection_iff_Subset_of_Complement/Corollary/Proof_1

Corollary to Empty Intersection iff Subset of Complement
Let $A, B, S$ be sets such that $A, B \subseteq S$.
Then:

$\exists X \in \powerset S: \paren {A \cap X} \cup \paren {B \cap \complement_S \paren X} = \O \iff A \cap B = \O$
where $\overline X$ denotes the relative complement of $X$ in $S$.


Proof
Let there exist such a set $X$.
Then:














\(\ds \)

\(\)







\(\ds \paren {A \cap X} \cup \paren {B \cap \complement_S \paren X} = \O\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds A \cap X = \O \land B \cap \complement_S \paren X = \O\)





Union is Empty iff Sets are Empty














\(\ds \)

\(\leadstoandfrom\)







\(\ds A \subseteq \complement_S \paren X \land B \subseteq X\)





Empty Intersection iff Subset of Complement














\(\ds \)

\(\leadstoandfrom\)







\(\ds A \cap B = \O\)









$\blacksquare$






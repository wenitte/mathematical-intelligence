# 

Source: https://proofwiki.org/wiki/Set_Difference_as_Intersection_with_Relative_Complement

Theorem
Let $A, B \subseteq S$.

Then the set difference between $A$ and $B$ can be expressed as the intersection with the relative complement with respect to $S$:

$A \setminus B = A \cap \relcomp S B$


Proof













\(\ds A \setminus B\)

\(=\)







\(\ds \set {x: x \in A \land x \notin B}\)





Definition of Set Difference














\(\ds \)

\(=\)







\(\ds \set {x: \paren {x \in A \land x \in X} \land x \notin B}\)





Definition of Subset, Modus Ponens and Rule of Conjunction














\(\ds \)

\(=\)







\(\ds \set {x: x \in A \land \paren {x \in X \land x \notin B} }\)





Conjunction is Associative














\(\ds \)

\(=\)







\(\ds \set {x: x \in A \land x \in \relcomp S B}\)





Definition of Relative Complement














\(\ds \)

\(=\)







\(\ds A \cap \relcomp S B\)





Definition of Set Intersection



$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 5$: Complements and Powers
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Sets and Logic: Exercise $5$
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.2$: Outcomes and events: Exercise $2$





# 

Source: https://proofwiki.org/wiki/Complement_of_Relative_Complement_is_Union_with_Complement

Theorem
Let $A, B, C$ be sets such that $A \subseteq B \subseteq C$.
Then:

$\relcomp C {\relcomp B A} = A \cup \relcomp C B$


Proof













\(\ds \relcomp C {\relcomp B A}\)

\(=\)







\(\ds C \setminus \paren {B \setminus A}\)





Definition of Relative Complement














\(\ds \)

\(=\)







\(\ds \paren {C \setminus B} \cup \paren {C \cap A}\)





Set Difference with Set Difference is Union of Set Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren {C \setminus B} \cup A\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds A \cup \paren {C \setminus B}\)





Union is Commutative














\(\ds \)

\(=\)







\(\ds A \cup \relcomp C B\)





Definition of Relative Complement



$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 3$: Set Operations: Union, Intersection and Complement: Exercise $2 \ \text{(b)}$





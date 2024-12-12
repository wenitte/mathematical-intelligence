# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Relative_Complement/Complement_of_Union



Theorem
Let $S, T_1, T_2$ be sets such that $T_1, T_2$ are both subsets of $S$.

Then, using the notation of the relative complement:

$\relcomp S {T_1 \cup T_2} = \relcomp S {T_1} \cap \relcomp S {T_2}$


Proof 1
Let $T_1, T_2 \subseteq S$.
Then from Union is Smallest Superset:

$T_1 \cup T_2 \subseteq S$
Hence:














\(\ds \relcomp S {T_1 \cup T_2}\)

\(=\)







\(\ds S \setminus \paren {T_1 \cup T_2}\)





Definition of Relative Complement














\(\ds \)

\(=\)







\(\ds \paren {S \setminus T_1} \cap \paren {S \setminus T_2}\)





De Morgan's Laws: Difference with Union














\(\ds \)

\(=\)







\(\ds \relcomp S {T_1} \cap \relcomp S {T_2}\)





Definition of Relative Complement



$\blacksquare$


Proof 2
Let $x \in S$ througout.














\(\ds \)

\(\)







\(\ds x \in \relcomp S {T_1 \cup T_2}\)




















\(\ds \)

\(\leadsto\)







\(\ds x \notin \paren {T_1 \cup T_2}\)





Definition of Relative Complement














\(\ds \)

\(\leadsto\)







\(\ds \neg \paren {x \in T_1 \lor x \in T_2}\)





Definition of Set Union














\(\ds \)

\(\leadsto\)







\(\ds x \notin T_1 \land x \notin T_2\)





De Morgan's Laws: Conjunction of Negations














\(\ds \)

\(\leadsto\)







\(\ds x \in \relcomp S {T_1} \land x \in \relcomp S {T_2}\)





Definition of Relative Complement














\(\ds \)

\(\leadsto\)







\(\ds x \in \relcomp S {T_1} \cap \relcomp S {T_2}\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds \relcomp S {T_1 \cup T_2} \subseteq \relcomp S {T_1} \cap \relcomp S {T_2}\)





Definition of Subset


















\(\ds \)

\(\)







\(\ds x \in \relcomp S {T_1} \cap \relcomp S {T_2}\)




















\(\ds \)

\(\leadsto\)







\(\ds x \in \relcomp S {T_1} \land x \in \relcomp S {T_2}\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds x \notin T_1 \land x \notin T_2\)





Definition of Relative Complement














\(\ds \)

\(\leadsto\)







\(\ds \neg \paren {x \in T_1 \lor x \in T_2}\)





De Morgan's Laws: Conjunction of Negations














\(\ds \)

\(\leadsto\)







\(\ds x \notin \paren {T_1 \cup T_2}\)





Definition of Set Union














\(\ds \)

\(\leadsto\)







\(\ds x \in \relcomp S {T_1 \cup T_2}\)





Definition of Relative Complement














\(\ds \)

\(\leadsto\)







\(\ds \relcomp S {T_1} \cap \relcomp S {T_2} \subseteq \relcomp S {T_1 \cup T_2}\)





Definition of Set Intersection




By definition of set equality:

$\relcomp S {T_1 \cup T_2} = \relcomp S {T_1} \cap \relcomp S {T_2}$
$\blacksquare$


Source of Name
This entry was named for Augustus De Morgan.


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 5$: Complements and Powers
1961: John G. Hocking and Gail S. Young: Topology ... (previous) ... (next): A Note on Set-Theoretic Concepts: $(6)$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Theorem $3.2$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: $\text{(j)}$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.2$: Operations on Sets: Exercise $1.2.2 \ \text{(iv)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$





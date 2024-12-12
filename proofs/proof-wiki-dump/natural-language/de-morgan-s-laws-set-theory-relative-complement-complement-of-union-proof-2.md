# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Relative_Complement/Complement_of_Union/Proof_2



Theorem
$\relcomp S {T_1 \cup T_2} = \relcomp S {T_1} \cap \relcomp S {T_2}$


Proof
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
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Theorem $3.2$





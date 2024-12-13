# 

Source: https://proofwiki.org/wiki/Set_Difference_with_Empty_Set_is_Self



Theorem
The set difference between a set and the empty set is the set itself:

$S \setminus \O = S$


Proof
From Set Difference is Subset:

$S \setminus \O \subseteq S$
From the definition of the empty set:

$\forall x \in S: x \notin \O$

Let $x \in S$.
Thus:














\(\ds x\)

\(\in\)







\(\ds S\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds S \land x \notin \O\)





Rule of Conjunction








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds S \setminus \O\)





Definition of Set Difference








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\subseteq\)







\(\ds S \setminus \O\)





Definition of Subset




Thus we have:

$S \setminus \O \subseteq S$
and:

$S \subseteq S \setminus \O$
So by definition of set equality:

$S \setminus \O = S$
$\blacksquare$


Also see
Set Difference with Self is Empty Set


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.1: \ 8 \ \text{(b)}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 8 \ \text{(d)}$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.2$: Operations on Sets: Exercise $1.2.5 \ \text{(i)}$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): Appendix $\text{A}.2$: Theorem $\text{A}.11$





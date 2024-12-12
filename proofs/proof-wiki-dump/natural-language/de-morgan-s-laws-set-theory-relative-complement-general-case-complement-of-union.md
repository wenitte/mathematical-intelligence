# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Relative_Complement/General_Case/Complement_of_Union



Theorem
Let $S$ be a set.
Let $T$ be a subset of $S$.
Let $\powerset T$ be the power set of $T$.
Let $\mathbb T \subseteq \powerset T$. 

Then:

$\ds \relcomp S {\bigcup \mathbb T} = \bigcap_{H \mathop \in \mathbb T} \relcomp S H$


Proof













\(\ds \relcomp S {\bigcup \mathbb T}\)

\(=\)







\(\ds S \setminus \paren {\bigcup \mathbb T}\)





Definition of Relative Complement














\(\ds \)

\(=\)







\(\ds \bigcap_{H \mathop \in \mathbb T} \paren {S \setminus H}\)





De Morgan's Laws: Difference with Union














\(\ds \)

\(=\)







\(\ds \bigcap_{H \mathop \in \mathbb T} \relcomp S H\)





Definition of Relative Complement



$\blacksquare$


Source of Name
This entry was named for Augustus De Morgan.


Sources
1951: J.C. Burkill: The Lebesgue Integral ... (previous) ... (next): Chapter $\text {I}$: Sets of Points: $1 \cdot 1$. The algebra of sets
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Exercise $3.6 \ \text{(d)}$





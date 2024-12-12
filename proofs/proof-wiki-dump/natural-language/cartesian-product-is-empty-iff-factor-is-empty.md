# 

Source: https://proofwiki.org/wiki/Cartesian_Product_is_Empty_iff_Factor_is_Empty



Theorem
$S \times T = \O \iff S = \O \lor T = \O$

Thus:

$S \times \O = \O = \O \times T$


Family of Sets
Let $I$ be an indexing set.
Let $\family {S_i}_{i \mathop \in I}$ be a family of sets indexed by $I$.
Let $\ds S = \prod_{i \mathop \in I} S_i$ be the Cartesian product of $\family {S_i}_{i \mathop \in I}$.
Then:

$S = \O$  if and only if $S_i = \O$ for some $i \in I$


Proof













\(\ds S \times T\)

\(\ne\)







\(\ds \O\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \exists \tuple {s, t}\)

\(\in\)







\(\ds S \times T\)





Definition of Empty Set








\(\ds \leadstoandfrom \ \ \)





\(\ds \exists s \in S\)

\(\land\)







\(\ds \exists t \in T\)





Definition of Cartesian Product








\(\ds \leadstoandfrom \ \ \)





\(\ds S \ne \O\)

\(\land\)







\(\ds T \ne \O\)





Definition of Empty Set








\(\ds \leadstoandfrom \ \ \)





\(\ds \neg \leftparen {S = \O}\)

\(\lor\)







\(\ds \rightparen {T = \O}\)





De Morgan's Laws: Conjunction of Negations




So by the Rule of Transposition:

$S = \O \lor T = \O \iff S \times T = \O$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 6$: Ordered Pairs
1964: William K. Smith: Limits and Continuity ... (previous) ... (next): $\S 2.1$: Sets: Exercise $\text{C} \ 5$
1965: Claude Berge and A. Ghouila-Houri: Programming, Games and Transportation Networks ... (previous) ... (next): $1$. Preliminary ideas; sets, vector spaces: $1.1$. Sets
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 1$: The Language of Set Theory: Exercise $1.2$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 3$. Ordered pairs; cartesian product sets
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 8$: Cartesian product of sets





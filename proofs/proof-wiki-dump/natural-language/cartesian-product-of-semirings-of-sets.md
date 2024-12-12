# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Semirings_of_Sets



Theorem
Let $\SS$ and $\TT$ be semirings of sets.

Then $\SS \times \TT$ is also a semiring of sets.
Here, $\times$ denotes Cartesian product.


Proof
Recall the conditions for $\SS \times \TT$ to be a semiring of sets:

$(1): \quad \O \in \SS \times \TT$
$(2): \quad \SS \times \TT$ is $\cap$-stable
$(3'):\quad$ If $A, B \in \SS \times \TT$, then there exists a finite sequence of pairwise disjoint sets $A_1, A_2, \ldots, A_n \in \SS \times \TT$ such that $\ds A \setminus B = \bigcup_{k \mathop = 1}^n A_k$.


Proof of $(1)$
From Empty Set is Subset of All Sets:

$\O \in \SS$
and:

$\O \in \TT$
So:

$\O \times \O \in \SS \times \TT$
From Cartesian Product is Empty iff Factor is Empty:

$\O \times \O = \O$
$\Box$


Proof of $(2)$
Let $S_1 \times T_1$ and $S_2 \times T_2$ be in $\SS \times \TT$.
Then from Cartesian Product of Intersections:

$\paren {S_1 \times T_1} \cap \paren {S_2 \times T_2} = \paren {S_1 \cap S_2} \times \paren {T_1 \cap T_2}$
Since $\SS$ and $\TT$ are $\cap$-stable, $S_1 \cap S_2 \in \SS$ and $T_1 \cap T_2 \in \TT$.

Hence $\paren {S_1 \times T_1} \cap \paren {S_2 \times T_2} \in \SS \times \TT$.
$\Box$


Proof of $(3')$
Let $S_1 \times T_1$ and $S_2 \times T_2$ be in $\SS \times \TT$.
Let $\sqcup$ signify union of disjoint sets.

Then:














\(\ds \paren {S_1 \times T_1} \setminus \paren {S_2 \times T_2}\)

\(=\)







\(\ds \paren {S_1 \times \paren {T_1 \setminus T_2} } \cup \paren {\paren {S_1 \setminus S_2} \times T_1}\)





Set Difference of Cartesian Products














\(\ds \)

\(\)







\(\ds \)




















\(\ds S_1\)

\(=\)







\(\ds \paren {S_1 \setminus S_2} \sqcup \paren {S_1 \cap S_2}\)





Set Difference Union Intersection








\(\ds \leadsto \ \ \)





\(\ds S_1 \times \paren {T_1 \setminus T_2}\)

\(=\)







\(\ds \paren {S_1 \setminus S_2} \times \paren {T_1 \setminus T_2} \ \sqcup \ \paren {S_1 \cap S_2} \times \paren {T_1 \setminus T_2}\)





Cartesian Product Distributes over Union














\(\ds \)

\(\)







\(\ds \)




















\(\ds T_1\)

\(=\)







\(\ds \paren {T_1 \cap T_2} \sqcup \paren {T_1 \setminus T_2}\)





Set Difference Union Intersection








\(\ds \leadsto \ \ \)





\(\ds \paren {S_1 \setminus S_2} \times T_2\)

\(=\)







\(\ds \paren {S_1 \setminus S_2} \times \paren {T_1 \cap T_2} \ \sqcup \ \paren {S_1 \setminus S_2} \times \paren {T_1 \setminus T_2}\)





Cartesian Product Distributes over Union














\(\ds \)

\(\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds \paren {S_1 \times T_1} \setminus \paren {S_2 \times T_2}\)

\(=\)







\(\ds \paren {S_1 \setminus S_2} \times \paren {T_1 \setminus T_2} \ \sqcup \ \paren {S_1 \cap S_2} \times \paren {T_1 \setminus T_2} \ \sqcup \ \paren {S_1 \setminus S_2} \times \paren {T_1 \cap T_2}\)










Now recall that $\SS$ and $\TT$ are semirings of sets.
Thence the expressions $S_1 \setminus S_2$ and $T_1 \setminus T_2$ may be written as finite disjoint unions.
Applying Cartesian Product Distributes over Union again, each of the three $\sqcup$-operands in the expression above may thus be written as a finite disjoint union.

This yields the same fact for $\paren {S_1 \times T_1} \setminus \paren {S_2 \times T_2}$ as well, completing the proof.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $13.1$





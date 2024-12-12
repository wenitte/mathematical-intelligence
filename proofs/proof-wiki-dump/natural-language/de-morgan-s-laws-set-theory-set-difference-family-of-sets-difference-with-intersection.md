# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Set_Difference/Family_of_Sets/Difference_with_Intersection



Theorem
Let $S$ and $T$ be sets.
Let $\family {T_i}_{i \mathop \in I}$ be a family of subsets of $T$.

Then:

$\ds S \setminus \bigcap_{i \mathop \in I} T_i = \bigcup_{i \mathop \in I} \paren {S \setminus T_i}$
where:

$\ds \bigcup_{i \mathop \in I} T_i := \set {x: \exists i \in I: x \in T_i}$
that is, the union of $\family {T_i}_{i \mathop \in I}$.


Proof
Suppose:

$\ds x \in S \setminus \bigcap_{i \mathop \in I} T_i$
Note that by Set Difference is Subset we have that $x \in S$ (we need this later).
Then:














\(\ds x\)

\(\in\)







\(\ds S \setminus \bigcap_{i \mathop \in I} T_i\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\notin\)







\(\ds \bigcap_{i \mathop \in I} T_i\)





Definition of Set Difference








\(\ds \leadstoandfrom \ \ \)

\(\ds \neg \leftparen {\forall i \in I}: \, \)



\(\ds x\)

\(\in\)







\(\ds \rightparen {T_i}\)





Definition of Intersection of Family








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists i \in I: \, \)



\(\ds x\)

\(\notin\)







\(\ds T_i\)





Denial of Universality








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists i \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds S \setminus T_i\)





Definition of Set Difference: note $x \in S$ from above








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcup_{i \mathop \in I} \paren {S \setminus T_i}\)





Definition of Union of Family




Therefore:

$\ds S \setminus \bigcap_{i \mathop \in I} T_i = \bigcup_{i \mathop \in I} \paren {S \setminus T_i}$
$\blacksquare$


Source of Name
This entry was named for Augustus De Morgan.


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Subsets and Complements; Union and Intersection: Theorem $3 \ \text{(b)}$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $1$ Set Theory: $1$. Sets and Functions: $1.2$: Operations on sets: $(4)$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): Notation and Terminology
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.2$: Boolean Operations: Problem $\text{A}.2.2$





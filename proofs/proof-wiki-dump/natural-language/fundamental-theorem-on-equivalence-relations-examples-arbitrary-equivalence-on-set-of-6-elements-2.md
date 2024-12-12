# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_on_Equivalence_Relations/Examples/Arbitrary_Equivalence_on_Set_of_6_Elements_2

Example of Use of Fundamental Theorem on Equivalence Relations
Let $S = \set {1, 2, 3, 4, 5, 6}$.

Let $\RR \subset S \times S$ be an equivalence relation on $S$ with the properties:














\(\ds 1\)

\(\RR\)







\(\ds 3\)




















\(\ds 3\)

\(\RR\)







\(\ds 4\)




















\(\ds 2\)

\(\RR\)







\(\ds 6\)
















\(\ds \forall a \in A: \, \)



\(\ds \size {\eqclass a \RR}\)

\(=\)







\(\ds 3\)










Then the equivalence classes of $\RR$ are:














\(\ds \eqclass 1 \RR\)

\(=\)







\(\ds \set {1, 3, 4}\)




















\(\ds \eqclass 2 \RR\)

\(=\)







\(\ds \set {2, 5, 6}\)











Proof
We have that:

$1 \mathrel \RR 3$ and $3 \mathrel \RR 4$
As $\RR$ is an equivalence relation, it follows that $\RR$ is transitive and so:

$1 \mathrel \RR 4$
Thus:

$\eqclass 1 \RR \subseteq \set {1, 3, 4}$
but as:

$\size {\eqclass a \RR} = 3$
it follows that:

$\eqclass 1 \RR= \set {1, 3, 4}$

There are $6$ elements of $S$.
Thus the other $3$ elements must all be in the same equivalence class of $\RR$ which does not contain $1$, for example.
Thus we have:

$\eqclass 2 \RR \subseteq \set {2, 5, 6}$
and the information we were given that $2 \mathrel \RR 6$ was superfluous.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.3$: Equivalence Relations: Problem Set $\text{A}.3$: $14$





# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Square_Matrices_induced_by_Positive_Integer_Powers



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $S$ be the set of all square matrices of order $n$.
Let $\alpha$ denote the relation defined on $S$ by:

$\forall \mathbf A, \mathbf B \in S: \mathbf A \mathrel \alpha \mathbf B \iff \exists r, s \in \N: \mathbf A^r = \mathbf B^s$

Then $\alpha$ is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
We have that for all $\mathbf A \in S$:

$\mathbf A^r = \mathbf A^r$
for all $r \in \N$.
It follows by definition of $\alpha$ that:

$\mathbf A \mathrel \alpha \mathbf A$
Thus $\alpha$ is seen to be reflexive.
$\Box$


Symmetry













\(\ds \mathbf A\)

\(\alpha\)







\(\ds \mathbf B\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A^r\)

\(=\)







\(\ds \mathbf B^s\)





for some $r, s \in \N$








\(\ds \leadsto \ \ \)





\(\ds \mathbf B^s\)

\(=\)







\(\ds \mathbf A^r\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf B\)

\(\alpha\)







\(\ds \mathbf A\)









Thus $\alpha$ is seen to be symmetric.
$\Box$


Transitivity
Let:

$\mathbf A \mathrel \alpha \mathbf B$ and $\mathbf B \mathrel \alpha \mathbf C$
for square matrices of order $n$ $\mathbf A, \mathbf B, \mathbf C$.

Then by definition:














\(\ds \mathbf A^r\)

\(=\)







\(\ds \mathbf B^s\)





for some $r, s \in \N$














\(\ds \mathbf B^u\)

\(=\)







\(\ds \mathbf C^v\)





for some $u, v \in \N$








\(\ds \leadsto \ \ \)





\(\ds \mathbf A^{r u}\)

\(=\)







\(\ds \mathbf B^{s u}\)





raising both sides to $u$th power














\(\ds \mathbf B^{s u}\)

\(=\)







\(\ds \mathbf C^{s v}\)





raising both sides to $s$th power








\(\ds \leadsto \ \ \)





\(\ds \mathbf A^{r u}\)

\(=\)







\(\ds \mathbf C^{s v}\)









Thus $\alpha$ is seen to be transitive.
$\Box$

$\alpha$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $6$





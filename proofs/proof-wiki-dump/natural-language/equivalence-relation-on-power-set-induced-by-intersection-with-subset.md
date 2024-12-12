# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Power_Set_induced_by_Intersection_with_Subset



Theorem
Let $A, T$ be sets such that $A \subseteq T$.
Let $S = \powerset T$ denote the power set of $T$.

Let $\alpha$ denote the relation defined on $S$ by:

$\forall X, Y \in S: X \mathrel \alpha Y \iff X \cap A = Y \cap A$

Then $\alpha$ is an equivalence relation.


Equivalence Class of Empty Set
The equivalence class of $\O$ in $S$ with respect to $\alpha$ is given by:

$\eqclass \O \alpha = \powerset {T \setminus A}$


Cardinality of Set of Equivalence Classes
Let $A$ be finite with $\card A = n$, where $\card {\, \cdot \,}$ denotes cardinality.
The cardinality of the set of $\alpha$-equivalence classes is given by:

$\card {\set {\eqclass X \alpha: X \in S} } = 2^n$


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
We have that for all $X \in S$:

$X \cap A = X \cap A$
That is:

$X \mathrel \alpha X$
Thus $\alpha$ is seen to be reflexive.
$\Box$


Symmetry













\(\ds X\)

\(\alpha\)







\(\ds Y\)














\(\ds \leadsto \ \ \)





\(\ds X \cap A\)

\(=\)







\(\ds Y \cap A\)














\(\ds \leadsto \ \ \)





\(\ds Y \cap A\)

\(=\)







\(\ds X \cap A\)














\(\ds \leadsto \ \ \)





\(\ds Y\)

\(\alpha\)







\(\ds X\)









Thus $\alpha$ is seen to be symmetric.
$\Box$


Transitivity
Let $X \mathrel \alpha Y$ and $Y \mathrel \alpha Z$.
Then by definition:














\(\ds X \cap A\)

\(=\)







\(\ds Y \cap A\)




















\(\ds Y \cap A\)

\(=\)







\(\ds Z \cap A\)









Hence:

$X \cap A = Z \cap A$
and so by definition of $\alpha$:

$X \mathrel \alpha Z$
Thus $\alpha$ is seen to be transitive.
$\Box$

$\alpha$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $2 \ \text {(i)}$





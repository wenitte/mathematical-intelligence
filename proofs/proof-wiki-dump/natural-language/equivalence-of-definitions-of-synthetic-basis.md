# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Synthetic_Basis



Theorem
Let $S$ be a set.

The following definitions of the concept of Synthetic Basis are equivalent:

Definition 1
A synthetic basis on $S$ is a subset $\BB \subseteq \powerset S$ of the power set of $S$ such that:




\((\text B 1)\)  

$:$  













$\BB$ is a cover for $S$   

  


\((\text B 2)\)  

$:$  





  \(\ds \forall U, V \in \BB:\)







$\exists \AA \subseteq \BB: U \cap V = \bigcup \AA$   

  

That is, the intersection of any pair of elements of $\BB$ is a union of sets of $\BB$.

Definition 2
A synthetic basis on $S$ is a subset $\BB \subseteq \powerset S$ of the power set of $S$ such that:

$\BB$ is a cover for $S$
$\forall U, V \in \BB: \forall x \in U \cap V: \exists W \in \BB: x \in W \subseteq U \cap V$


Proof
1 implies 2
Let $U, V \in \BB$.
Let $x \in U \cap V$.
By hypothesis:

$\ds \exists \AA \subseteq \BB: U \cap V = \bigcup \AA$
By definition of union, $\exists W \in\AA : x \in W$.
By Set is Subset of Union: General Result, $W \subset U \cap V$.
Therefore:

$\ds \forall x \in A \cap B: \exists W \in \AA \subseteq \BB: x \in W \subseteq U \cap V$
$\Box$


2 implies 1
Let $U, V \in \BB$.
Define the set:

$\ds \AA = \set {W \in \BB: W \subseteq U \cap V} \subseteq \BB$

By Union is Smallest Superset: General Result:

$\ds \bigcup \AA \subseteq U \cap V$

By hypothesis:

$\ds \forall x \in U \cap V: \exists W \in \AA: x \in W$
Thus $\ds U \cap V \subseteq \bigcup \AA$
By definition of set equality:

$\ds U \cap V = \bigcup \AA$
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Equivalence_Relation/Examples/Non-Equivalence/Is_the_Mother_Of

Example of Relation which is not Equivalence
Let $P$ denote the set of people.
Let $\sim$ be the relation on $P$ defined as:

$\forall \tuple {x, y} \in P \times P: x \sim y \iff \text { $x$ is the mother of $y$}$
Then $\sim$ is not an equivalence relation.

The same applies (trivially) to the relation:

$\forall \tuple {x, y} \in P \times P: x \sim y \iff \text { $x$ is the father of $y$}$


Proof
For a start, no person can be his or her own mother, so: 

$\forall x: x \nsim x$
So $\sim$ is not reflexive.
Then:

If $x \sim y$ then $y$ is the son or daughter of $x$.
So $\sim$ is not symmetric.
Then:

if $x \sim y$ and $y \sim z$ it follows that $x$ is the grandmother of $z$, not his or her mother.
So $\sim$ is not transitive.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.2$. Equivalence relations: Example $31$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.4$: Equivalence relations





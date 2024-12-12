# 

Source: https://proofwiki.org/wiki/Connectedness_Between_Two_Points_is_an_Equivalence_Relation



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $a \sim b $ denote the relation:

$a \sim b \iff \exists S \subseteq T: S$ is connected between the two points  $a$ and $b$
where $a, b \in X$.

Then $\sim$ is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
Trivially, any separation of $T$ is a partition of $S$.
So any $a \in S$ will be in exactly one of the open sets forming the partition.
So $a \sim a$ and $\sim$ is seen to be reflexive.
$\Box$


Symmetry
If $a \sim b$ then each separation of $T$ includes a single open set $U \ne \O$ which contains both $a$ and $b$.
Trivially it follows that $b \sim a$ and so $\sim$ is seen to be symmetric.
$\Box$


Transitivity
Let $a \sim b$ and $b \sim c$.
Then by definition:

Each separation of $T$ includes a single open set $U_1 \ne \O$ which contains both $a$ and $b$.
Each separation of $T$ includes a single open set $U_2 \ne \O$ which contains both $b$ and $c$.
So $b \in U_1$ and $b \in U_2$ and so $U_1 \cap U_2 \ne \O$.
So by the definition of partition it follows that $U_1 = U_2$ and so $a \sim c$.
So $\sim$ has been shown to be transitive.
$\Box$

$\sim$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness





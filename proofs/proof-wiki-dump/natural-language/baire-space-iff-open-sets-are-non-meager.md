# 

Source: https://proofwiki.org/wiki/Baire_Space_iff_Open_Sets_are_Non-Meager



Theorem
Let $T = \struct {S, \tau}$ be a topological space.

Then $T$ is a Baire space if and only if every non-empty open set of $T$ is non-meager in $T$.


Proof
We prove the contrapositive:

$T$ is not a Baire space if and only if there exists a non-empty open set of $T$ which is meager in $T$.

We have by definition of Baire space:

$T$ is a Baire space if and only if the interior of the union of any countable set of closed sets of $T$ which are nowhere dense is empty.
Therefore:

$T$ is not a Baire space if and only if the interior of the union of some countable set of closed sets of $T$ which are nowhere dense is non-empty.

We have by definition of meager:

$A$ is meager in $T$ if and only if it is a countable union of subsets of $S$ which are nowhere dense in $T$.

Here $I$ denotes a countable indexing set.


Sufficient Condition
Suppose $T$ is not a Baire space.
Then there is a countable set of closed sets of $T$ which are nowhere dense with the interior of its union non-empty.
Let $\FF = \set {F_i: i \in I}$ be such a set.
Then $\paren {\bigcup \FF}^\circ$ is a non-empty open set.

Consider the set $\FF' = \set {F_i \cap \paren {\bigcup \FF}^\circ: i \in I}$.
From Intersection is Subset:

$\forall i \in I: F_i \cap \paren {\bigcup \FF}^\circ \subseteq F_i$
Since $F_i$ are nowhere dense, so is $F_i \cap \paren {\bigcup \FF}^\circ$.
We have:














\(\ds \bigcup \FF'\)

\(=\)







\(\ds \bigcup_{i \mathop \in I} \paren {F_i \cap \paren {\bigcup \FF}^\circ}\)




















\(\ds \)

\(=\)







\(\ds \paren {\bigcup \FF}^\circ \cap \bigcup_{i \mathop \in I} F_i\)





Intersection Distributes over Union of Family














\(\ds \)

\(=\)







\(\ds \paren {\bigcup \FF}^\circ \cap \bigcup \FF\)




















\(\ds \)

\(=\)







\(\ds \paren {\bigcup \FF}^\circ\)





Set Interior is Largest Open Set; Intersection with Subset is Subset



Therefore $\bigcup \FF'$ is meager in $T$.
Hence we have shown the existence of a non-empty open set of $T$ which is meager in $T$.
$\Box$


Necessary Condition
Suppose there exists a non-empty open set of $T$ which is meager in $T$.
Let $\ds A = \bigcup_{i \mathop \in I} A_i$ be such a set.
Then $A$ is a non-empty open set, and $A_i$ are nowhere dense for every $i \in I$.
Thus for every $i$, $\paren {A_i^-}^\circ = \O$.
By Closure of Topological Closure equals Closure:

$\paren {\paren {A_i^-}^-}^\circ = \paren {A_i^-}^\circ = \O$.
By Set is Closed iff Equals Topological Closure, $A_i^-$ are closed sets of $T$ which are nowhere dense.
We also have:














\(\ds A\)

\(=\)







\(\ds A^\circ\)





Interior of Open Set














\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{i \mathop \in I} A_i}^\circ\)




















\(\ds \)

\(\subseteq\)







\(\ds \paren {\bigcup_{i \mathop \in I} A_i^-}^\circ\)





Set is Subset of its Topological Closure; Set Union Preserves Subsets; Interior of Subset



Hence there is a countable set of closed sets of $T$ which are nowhere dense with the interior of its union non-empty.
Therefore $T$ is not a Baire space.
$\blacksquare$


Historical Note
This result was the original definition which René-Louis Baire gave for the Baire space.
The more modern approach is to define it directly in terms of interiors of countable unions of closed sets.






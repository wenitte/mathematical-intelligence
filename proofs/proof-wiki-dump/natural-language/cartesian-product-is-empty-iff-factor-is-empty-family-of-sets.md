# 

Source: https://proofwiki.org/wiki/Cartesian_Product_is_Empty_iff_Factor_is_Empty/Family_of_Sets



Theorem
Let $I$ be an indexing set.
Let $\family {S_i}_{i \mathop \in I}$ be a family of sets indexed by $I$.
Let $\ds S = \prod_{i \mathop \in I} S_i$ be the Cartesian product of $\family {S_i}_{i \mathop \in I}$.
Then:

$S = \O$  if and only if $S_i = \O$ for some $i \in I$


Proof
Necessary Condition
By the axiom of choice, the contrapositive statement holds:

if $S_i \ne \O$ for all $i \in I$ then $S \ne \O$
By the Rule of Transposition, the converse holds:

if $S = \O$  then $S_i = \O$ for some $i \in I$
$\Box$


Sufficient Condition
Let $S_j = \O$ for some $j \in I$.
By the definition of the Cartesian product:

$\ds \prod_{i \mathop \in I} S_i := \set {f: \paren {f: I \to \bigcup_{i \mathop \in I} S_i} \land \paren {\forall i \in I: \paren {\map f i \in S_i} } }$
For any $\ds f: I \to \bigcup_{i \mathop \in I} S_i$ we have:

$\map f j \notin S_j$
Thus:

$f \notin \ds \prod_{i \mathop \in I} S_i$
It follows that:

$\ds \prod_{i \mathop \in I} S_i = \O$
$\blacksquare$






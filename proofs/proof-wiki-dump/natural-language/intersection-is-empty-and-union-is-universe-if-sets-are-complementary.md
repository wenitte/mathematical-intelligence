# 

Source: https://proofwiki.org/wiki/Intersection_is_Empty_and_Union_is_Universe_if_Sets_are_Complementary

Theorem
Let $A$ and $B$ be subsets of a universe $\Bbb U$.
Then:

$A \cap B = \O$ and $A \cup B = \Bbb U$
if and only if:

$B = \relcomp {\Bbb U} A$
where $\relcomp {\Bbb U} A$ denotes the complement of $A$ with respect to $\Bbb U$.


Proof
From Complement Union with Superset is Universe: Corollary:

$A \cup B = \mathbb U \iff \relcomp {\Bbb U} A \subseteq B$
and from Empty Intersection iff Subset of Complement:

$A \cap B = \O \iff B \subseteq \relcomp {\Bbb U} A$
The result follows by definition of set equality.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: Exercise $11 \ \text{(c)}$





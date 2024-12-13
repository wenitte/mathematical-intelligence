# 

Source: https://proofwiki.org/wiki/Intersection_of_All_Division_Subrings_is_Prime_Subfield

Theorem
Let $\struct {K, +, \circ}$ be a division ring.
Let $P$ be the intersection of the set of all division subrings of $K$.

Then $P$ is the prime subfield of $K$.


Proof
By Intersection of Division Subrings is Division Subring, the intersection $P$ of the set of all division subrings of $K$ is a division ring.
Let $\map Z K$ be the center of $K$.
From Center of Ring is Commutative Subring, $\map Z K$ is a commutative subring of $K$.
Therefore $\map Z K$ is a commutative division ring
Thus $\map Z K$ is a subfield of $K$.
But as $P$ is contained in $\map Z K$, it is itself commutative.
By its definition, $P$ contains no proper subfield and hence is a prime field.
Also, $P$ is contained in every other subfield of $K$.
Therefore $P$ is the only prime subfield of $K$.
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Minimal_Ring_Generated_by_System_of_Sets



Theorem
Let $\SS$ be a non-empty system of sets.

Then there is a unique ring of sets $\map \RR \SS$ which:

$(1): \quad$ contains $\SS$
$(2): \quad$ is contained by every ring of sets which also contains $\SS$.

This ring of sets $\map \RR \SS$ is called the minimal ring generated by $\SS$.


Proof
Uniqueness
Suppose there were two such rings of sets $\map \RR \SS$ and $\map \RR \SS'$.
Then by definition their intersection $\map \RR \SS \cap \map \RR \SS'$ would also contain $\SS$.
By Intersection of Rings of Sets, $\map \RR \SS \cap \map \RR \SS'$ is also a ring of sets.
From Intersection is Subset, $\map \RR \SS \cap \map \RR \SS' \subseteq \map \RR \SS$ and $\map \RR \SS \cap \map \RR \SS' \subseteq \map \RR \SS'$.
Hence either $\map \RR \SS$ or $\map \RR \SS'$ can not be minimal.
So if $\map \RR \SS$ exists, it has to be unique.


Existence
Consider the union:

$\ds X = \bigcap_{A \mathop \in \SS} A$
of all sets in $\SS$.
Now consider the power set $\powerset X$ of all subsets of $X$.
From Power Set is Algebra of Sets and by definition of algebra of sets, $\powerset X$ is a ring of sets containing $\SS$.
Now let $\Sigma$ be the set of all rings of sets contained in $\powerset X$ which also contain $\SS$.
Then consider the intersection:

$\ds \map \RR \SS = \bigcap_{\TT \mathop \in \Sigma} \TT$
of all these rings of sets.
It is clear that $\map \RR \SS$ has the properties specified.
In particular, as all $\TT \in \Sigma$ contain $\SS$, then so does $\map \RR \SS$.

Finally, note that if $\RR'$ is a ring of sets containing $\SS$, then:

$\RR^* = \RR' \cap \powerset X$
is a ring of sets in $\Sigma$.
Hence $\map \RR \SS \subseteq \RR^* \subseteq \RR'$ as we needed to show.
$\blacksquare$






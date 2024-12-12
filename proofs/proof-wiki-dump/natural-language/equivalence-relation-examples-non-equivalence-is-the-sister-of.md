# 

Source: https://proofwiki.org/wiki/Equivalence_Relation/Examples/Non-Equivalence/Is_the_Sister_Of

Example of Relation which is not Equivalence
Let $P$ denote the set of people.
Let $\sim$ be the relation on $P$ defined as:

$\forall \tuple {x, y} \in P \times P: x \sim y \iff \text { $x$ is the sister of $y$}$
Then $\sim$ is not an equivalence relation.


Proof
For a start, no person can be his or her own sister, so: 

$\forall x: x \nsim x$
So $\sim$ is not reflexive.

Then:

If $x \sim y$ then it is not necessarily the case that $y$ is the sister of $x$.
This is because $y$ may be male, and so would be the brother of $x$.
So $\sim$ is not symmetric.

Let us assume that $\sim$ specifically means has the same father and mother as, and does not encompass half-siblings.
Thus:

if $x \sim y$ and $y \sim z$ it follows that $x$ is the sister of $z$.
So $\sim$ is transitive.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.2$: Cartesian Products and Relations: Problem Set $\text{A}.2$: $7 \ \text{(c)}$





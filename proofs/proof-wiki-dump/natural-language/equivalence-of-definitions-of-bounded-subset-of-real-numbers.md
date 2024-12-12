# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Bounded_Subset_of_Real_Numbers



Theorem
The following definitions of the concept of Bounded Subset of Real Numbers are equivalent:

Definition 1
Let $T \subseteq \R$ be both bounded below and bounded above in $\R$.

Then $T$ is bounded in $\R$.

Definition 2
Let $T \subseteq \R$ be a subset of $\R$ such that:

$\exists K \in \R: \forall x \in T: \size x \le K$
where $\size x$ denotes the absolute value of $x$.

Then $T$ is bounded in $\R$.


Proof
Definition 1 implies Definition 2
Let $S$ be a bounded subset of the real numbers by definition 1.
Then by definition $S$ is bounded both above and below.
As $S$ is bounded below:

$\exists L \in \R: \forall x \in S: L \le x$
As $S$ is bounded above:

$\exists H \in \R: \forall x \in S: H \ge x$
Let:

$K = \max \set {\size L, \size H}$
Then:

$K \ge \size L$ and $K \ge \size H$
It follows from Negative of Absolute Value: Corollary 2 that $-K \le L \le K$ and $-K \le H \le K$.
In particular:

$-K \le L$ and so $\forall x \in S: -K \le x$
$H \le K$ and so $\forall x \in S: x \le K$
Thus:

$\forall x \in S: -K \le x \le K$
and, by Negative of Absolute Value: Corollary 2:

$\forall x \in S: \size x \le K$
Thus $S$ is a bounded subset of the real numbers by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $S$ be a bounded subset of the real numbers by definition 2.
Thus:

$\exists K \in \R: \forall x \in S: \size x \le K$
Then by Negative of Absolute Value: Corollary 2:

$\forall x \in S: -K \le x \le K$
Thus by definition, $S$ is both bounded above (by $K$) and bounded below (by $-K$).
Thus $S$ is a bounded subset of the real numbers by definition 1.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: $\S 2.3$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.2$: Bounded sets





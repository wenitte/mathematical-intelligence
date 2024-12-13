# 

Source: https://proofwiki.org/wiki/Intersection_of_Ring_Ideals_is_Ideal

Theorem
Let $\struct {R, +, \circ}$ be a ring
Let $\mathbb L$ be a non-empty set of ideals of $R$.

Then the intersection $\bigcap \mathbb L$ of the members of $\mathbb L$ is itself an ideal of $R$.


Proof
Let $L = \bigcap \mathbb L$.
From Intersection of Subrings is Subring, we have that $L$ is a subring of $R$.

Let $x \in L$ and $y \in R$.
Then:

$\forall T \in \bigcap \mathbb L: x \circ y \in T, y \circ x \in T$
as every element of $\bigcap \mathbb L$, including $T$, is an ideal of $R$.

If $y \in R$, then $x \circ y$ and $y \circ x$ are in every element of $\mathbb L$, and hence in $L$.
So $L$ is an ideal of $R$.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 21$. Ideals: Theorem $39$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.3$: Some properties of subrings and ideals: Lemma $2.13 \ \text{(i)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $5$





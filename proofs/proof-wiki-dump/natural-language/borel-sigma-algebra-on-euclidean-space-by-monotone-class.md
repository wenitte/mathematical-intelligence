# 

Source: https://proofwiki.org/wiki/Borel_Sigma-Algebra_on_Euclidean_Space_by_Monotone_Class

Theorem
Let $\sqbrk {\R^n, \tau}$ be the $n$-dimensional Euclidean space.

Then:

$\map \BB {\R^n, \tau} = \map {\mathfrak m} \tau$
where $\BB$ denotes Borel $\sigma$-algebra, and $\mathfrak m$ denotes generated monotone class.


Proof
Let $U \in \tau$ be an open set, and define $C$ by:

$C := X \setminus U$
hence $C$ is a closed set.

Further, define, for all $n \in \N$:

$C_n := \ds \bigcup_{c \mathop \in C} \map B {c; \frac 1 n}$
where $B$ denotes open ball.
The $C_n$ are open sets, being the union of open balls.

It is clear that $C \subseteq C_n$ for all $n \in \N$.
Conversely, as $U$ is open, for any $u \in U$ (that is, $u \notin C$), find $n \in \N$ such that:

$\map B {u; \dfrac 1 n} \subseteq U$
as is possible from the definition of open set in a metric space.
Thus, for all $c \in C = X \setminus U$, this means:

$\map d {u, c} \ge \dfrac 1 n$
whence $u \notin C_n$.

That is, we have established that:

$c \in C \iff \forall n \in \N: c \in C_n$
Phrased in terms of intersection, this means:

$C = \ds \bigcap_{n \mathop \in \N} C_n$

Thus, since $C_n \in \tau \subseteq \map {\mathfrak m} \tau$:

$C \in \map {\mathfrak m} \tau$
Now define:

$\relcomp X \tau := \set {X \setminus U: U \in \tau}$

Then we have shown:

$\map {\mathfrak m} {\tau \cup \relcomp X \tau} \subseteq \map {\mathfrak m} \tau$
and the reverse inclusion (and hence equality) follows from Generated Monotone Class Preserves Subset.

Now applying Generated Sigma-Algebra by Generated Monotone Class: Corollary:

$\map \sigma \tau = \map {\mathfrak m} {\tau \cup \relcomp X \tau}$
Combining these two equalities gives the result, by definition of Borel $\sigma$-algebra.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 3$: Problem $12$





# 

Source: https://proofwiki.org/wiki/Box_Topology_may_not_be_Coarsest_Topology_such_that_Projections_are_Continuous/Lemma



Theorem
Let $\struct {X, \tau}$ be a topological space.
Let $U \in \tau$ such that $U \ne \O$ and $U \ne X$.

Let:

$Y = \ds \prod_{n \mathop \in \N} X = X \times X \times X \times \ldots$
be the countable Cartesian product of $\family {X}_{n \mathop \in \N}$.
Let $\tau_T$ be the product topology on $Y$.
Let $\tau_b$ be the box topology on $Y$.

Let:

$V = \ds \prod_{n \mathop \in \N} U = U \times U \times U \times \ldots$
be the countable Cartesian product of $\family {U}_{n \mathop \in \N}$.

Then:

$V$ is an element of the box topology $\tau_b$
$V$ is not an element of the product topology $\tau_T$


Proof
By the definition of the box topology:

$V \in \tau_b$

Let $W \in \tau_T$.


Case 1
Let $W \cap V = \O$.
Since $U \ne \O$, there exists $x \in U$.
Then $\family {x}_{n \mathop \in \N} \in V$
So $\family {x}_{n \mathop \in \N} \notin W$
By the definition of set equality:

$V \ne W$
$\Box$


Case 2
Let $W \cap V \ne \O$.
From Natural Basis of Product Topology, $W = \ds \prod_{n \mathop \in \N} W_n$ where:

for all $n \in \N : W_n \in \tau$
for all but finitely many indices $n : W_n = X$
Let $m = \max \set {n: W_n \ne X}$
Then:

$W_{m + 1} = X$
Since $W \cap V \ne \O$, there exists $\family {z_n} \in W \cap V$.
Since $U \ne X$, there exists $y \in X \setminus U$.
Let $\family {y_n}$ be defined as:

$y_n = \begin{cases}
z_n & : n \ne m + 1 \\
y  & : n = m + 1
\end{cases}$
Since $y_{m + 1} = y \in X = W_{m + 1}$, it follows that:

$\family {y_n} \in W$
Since $y_{m + 1} = y \notin U$, it follows that:

$\family {y_n} \notin V$
By the definition of set equality:

$W \ne V$
$\Box$

In either case $W \ne V$.
Since $W$ was arbitrary, it follows that for all $W \in \tau_T$, $W \ne V$.
Thus $V \notin \tau_T$  
$\blacksquare$






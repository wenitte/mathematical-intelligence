# 

Source: https://proofwiki.org/wiki/Characterization_of_Convergence_in_Locally_Convex_Space



Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $\struct {X, \mathcal P}$ be a locally convex space over $\Bbb F$ with standard topology $\tau$.
Let $x \in X$. 
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $X$. 

Then: 

$x_n \to x$ in $\struct {X, \tau}$
if and only if:

$\map p {x_n - x} \to 0$ as $n \to \infty$ as a real sequence, for each $p \in \mathcal P$.


Proof
Necessary Condition
Suppose that: 

$x_n \to x$ in $\struct {X, \tau}$
Let $p \in \mathcal P$. 
Let $\epsilon > 0$. 
We aim to show that there exists $N \in \N$ such that: 

$\map p {x_n - x} < \epsilon$ for $n \ge N$
showing that: 

$\map p {x_n - x} \to 0$ as $n \to \infty$.
From the definition of a convergent sequence in a topological space, we have: 

for each $U \in \tau$ such that $x \in U$, there exists $N \in \N$ such that $x_n \in U$ for $n \ge N$.
From the definition of the standard topology $\tau$, we have: 

$U = \set {y \in X : \map p {y - x} < \epsilon}$ is open.
So there exists $N \in \N$ such that $x_n \in U$ for $n \ge N$. 
That is: 

$\map p {x_n - x} < \epsilon$ for $n \ge N$.
Since $\epsilon$ was arbitrary we have: 

$\map p {x_n - x} \to 0$ as $n \to \infty$.
$\Box$

Sufficient Condition
Suppose that:

$\map p {x_n - x} \to 0$ as $n \to \infty$ as a real sequence, for each $p \in \mathcal P$.
Let $U \in \tau$ be such that $x \in U$.
We aim to show that there exists $N \in \N$ such that $x_n \in U$ for $n \ge N$.
From Open Sets in Standard Topology of Locally Convex Space, there exists $\epsilon > 0$ and $p_1, p_2, \ldots, p_m \in \mathcal P$ such that: 

$\set {y \in X : \map {p_k} {y - x} < \epsilon \text { for each } k \in \set {1, 2, \ldots, m} } \subseteq U$
Since: 

$\map {p_k} {x_n - x} \to 0$ as $n \to \infty$
for each $k \in \set {1, 2, \ldots, m}$, there exists $N_k \in \N$ such that: 

$\map {p_k} {x_n - x} < \epsilon$ for $n \ge N_k$.
Set: 

$N = \max \set {N_1, N_2, \ldots, N_k}$
Then, for $n \ge N$, we have: 

$\map {p_k} {x_n - x} < \epsilon$ for all $k \in \set {1, 2, \ldots, m}$.
Then: 

$x_n \in U$ for $n \ge N$.
Since $U$ was an arbitrary open set containing $x$, we have: 

$x_n \to x$ in $\struct {X, \tau}$.
$\blacksquare$






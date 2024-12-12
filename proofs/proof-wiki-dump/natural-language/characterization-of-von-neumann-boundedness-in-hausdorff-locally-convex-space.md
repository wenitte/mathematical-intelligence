# 

Source: https://proofwiki.org/wiki/Characterization_of_von_Neumann-Boundedness_in_Hausdorff_Locally_Convex_Space



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \PP}$ be a Hausdorff locally convex space over $\GF$.
Let $U \subseteq X$.

Then $U$ is von Neumann-bounded if and only if:

for each $p \in \PP$ there exists $C_p > 0$ such that:
$\map p x < C_p$
for each $x \in U$.


Proof
For each $p \in \PP$, let: 

$B_p = \set {y \in X : \map p y < 1}$
Note that by the definition of the standard topology, $B_p$ is an open neighborhood of $\mathbf 0_X$. 
Let $r > 0$. 
From Seminorm Axiom $\text N 2$: Positive Homogeneity, for $y \in X$ we have: 

$\map p y < 1$
if and only if:

$\map p {r y} < r$
So, we have: 

$r B_p = \set {y \in X : \map p y < r}$
Necessary Condition
Suppose that $U$ is von Neumann-bounded.
Then there exists $s > 0$ such that: 

$U \subseteq t B_p = \set {y \in X : \map p y < t}$
for $t > s$
In particular: 

$U \subseteq \set {y \in X : \map p y < s + 1}$
That is: 

$\map p x < s + 1$
for all $x \in U$.
$\Box$

Sufficient Condition
Suppose that for each $p \in \PP$ there exists $C_p > 0$ such that: 

$\map p x < C_p$
for each $x \in U$.
Let $V$ be an open neighborhood of $\mathbf 0_X$.
From Open Sets in Standard Topology of Locally Convex Space, there exists $p_1, \ldots, p_n \in \PP$ and $\epsilon > 0$ such that: 

$\ds \bigcap_{k \mathop = 1}^n \epsilon B_{p_k} = \set {y \in X : \map {p_k} y < \epsilon \text { for each } 1 \le k \le n} \subseteq V$
Let: 

$\ds r = \frac 1 \epsilon \max_{1 \le k \le n} C_{p_k}$
Then: 

$\ds r \bigcap_{k \mathop = 1}^n \epsilon B_{p_k} = \bigcap_{k \mathop = 1}^n \paren {\max_{1 \le k \le n} C_{p_k} } B_{p_k} \subseteq r V$
and generally if $s > r$: 

$\ds \bigcap_{k \mathop = 1}^n \paren {\max_{1 \le k \le n} C_{p_k} } B_{p_k} \subseteq s \bigcap_{k \mathop = 1}^n \epsilon B_{p_k} \subseteq s V$
Note that for $x \in U$, $1 \le k \le n$ and $s > r$ we then have: 

$\ds \map {p_k} x < C_{p_k} \le \max_{1 \le k \le n} C_{p_k} < s \epsilon$
for $x \in U$, and hence: 

$U \subseteq s V$
for $s > r$.
So $U$ is von Neumann-bounded.
$\blacksquare$






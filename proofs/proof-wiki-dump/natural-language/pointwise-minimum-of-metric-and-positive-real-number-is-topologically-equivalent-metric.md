# 

Source: https://proofwiki.org/wiki/Pointwise_Minimum_of_Metric_and_Positive_Real_Number_is_Topologically_Equivalent_Metric



Theorem
Let $\struct {X, d}$ be a metric space.
Let $c > 0$ be a real number. 
For each $x, y \in X$, define: 

$\map {d'} {x, y} = \min \set {\map d {x, y}, c}$

Then $d'$ is a metric that is topologically equivalent to $d$. 


Proof
Metric Space Axiom $(\text M 1)$
Suppose that $x, y \in X$ are such that: 

$\map {d'} {x, y} = 0$
Since $c > 0$, this implies that: 

$\map d {x, y} = 0$
Since $d$ is a metric, we have $x = y$ by Metric Space Axiom $(\text M 1)$ for $d$. 
Hence Metric Space Axiom $(\text M 1)$ is fulfilled.
$\Box$


Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let $x, y, z \in X$. 
We go casewise. 
Suppose that $\map d {x, y} > c$ and $\map d {y, z} > c$. 
Then $\map {d'} {x, y} = c$ and $\map {d'} {y, z} = c$, so that: 

$\map {d'} {x, y} + \map {d'} {y, z} = 2 c$
By definition, we also have: 

$\map {d'} {x, z} \le c \le 2 c$
so that: 

$\map {d'} {x, z} \le 2 c = \map {d'} {x, y} + \map {d'} {y, z}$
Now suppose that $\map d {x, y} \le c$ or $\map d {y, z} \le c$.
Then $\map {d'} {x, y} = c$ or $\map {d'} {y, z} = c$ so that: 

$\map {d'} {x, y} + \map {d'} {y, z} \ge c \ge \map {d'} {x, y}$
Finally, suppose that $\map d {x, y} < c$ and $\map d {y, z} < c$. 
Then, we have $\map {d'} {x, y} = \map d {x, y}$ and $\map {d'} {y, z} = \map d {y, z}$. 
By Metric Space Axiom $(\text M 2)$: Triangle Inequality for $d$, we have: 

$\map d {x, z} \le \map d {x, y} + \map d {y, z} = \map {d'} {x, y} + \map {d'} {y, z}$
while: 

$\map {d'} {x, z} \le \map d {x, z}$
so we get: 

$\map {d'} {x, z} \le \map {d'} {x, y} + \map {d'} {y, z}$
Hence Metric Space Axiom $(\text M 2)$: Triangle Inequality is fulfilled.
$\Box$


Metric Space Axiom $(\text M 3)$
For each $x, y \in X$ we have: 














\(\ds \map {d'} {y, x}\)

\(=\)







\(\ds \min \set {\map d {y, x}, c}\)




















\(\ds \)

\(=\)







\(\ds \min \set {\map d {x, y}, c}\)





Metric Space Axiom $(\text M 3)$














\(\ds \)

\(=\)







\(\ds \map {d'} {x, y}\)









Hence Metric Space Axiom $(\text M 3)$ is fulfilled.
$\Box$


Metric Space Axiom $(\text M 4)$
Let $x, y \in X$ be such that $x \ne y$. 
Then $\map d {x, y} \ne 0$ by Metric Space Axiom $(\text M 4)$ for $d$. 
If $0 < \map d {x, y} < c$, then: 

$\map {d'} {x, y} = \map d {x, y} > 0$
If $\map d {x, y} \ge c$, then: 

$\map {d'} {x, y} = c > 0$
So $\map {d'} {x, y} > 0$ if $x \ne y$.
Hence Metric Space Axiom $(\text M 4)$ is fulfilled.
$\Box$


Topological Equivalence
We show that $U$ is $d$-open if and only if it is $d'$-open.
First note that if $r < c$, then for $x, y \in X$ we have: 

$\map {d'} {x, y} < c$
if and only if:

$\map d {x, y} < c$
So, for each $x \in X$ and $r < c$ we have: 

$\map {B_r} {x, d} = \map {B_r} {x, d'}$
Let $U$ be $d$-open. 
Then, by Set is Open iff Union of Open Balls, for each $x \in U$, there exists $r_x > 0$ such that: 

$\ds U = \bigcup_{x \mathop \in U} \map {B_{r_x} } {x, d}$
Setting: 

$\delta_x = \min \set {r_x, \dfrac c 2}$
we have: 

$\map {B_{\delta_x} } {x, d} \subseteq \map {B_{r_x} } {x, d}$
so that: 

$\ds \bigcup_{x \mathop \in U} \map {B_{\delta_x} } {x, d} \subseteq \bigcup_{x \mathop \in U} \map {B_{r_x} } {x, d} \subseteq U$
Conversely, $x \in \map {B_{\delta_x} } {x, d}$ for each $x \in U$, so that:

$\ds U \subseteq \bigcup_{x \mathop \in U} \map {B_{\delta_x} } {x, d}$
giving:

$\ds U = \bigcup_{x \mathop \in U} \map {B_{\delta_x} } {x, d}$
Since $\delta_x < c$, we have: 

$\ds U = \bigcup_{x \mathop \in U} \map {B_{\delta_x} } {x, d'}$
So $U$ is $d'$-open.
Swapping $d$ and $d'$ in the above proof, we get that if $U$ is $d'$-open, it is $d$-open.
So $d'$ is a metric that is topologically equivalent to $d$.
$\blacksquare$






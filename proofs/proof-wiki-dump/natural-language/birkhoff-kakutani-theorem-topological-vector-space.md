# 

Source: https://proofwiki.org/wiki/Birkhoff-Kakutani_Theorem/Topological_Vector_Space


This article needs to be tidied.In particular: minor stuff, subscript formatting etcPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \tau}$ be a topological vector space over $\GF$.

Then $\struct {X, \tau}$ is pseudometrizable if and only if $\struct {X, \tau}$ is first-countable.
Further, if $\struct {X, \tau}$ is pseudometrizable then there exists an invariant pseudometric $d$ on $X$ such that:

$(1): \quad$ $d$ induces $\tau$
$(2): \quad$ the open balls in $\struct {X, d}$ are balanced.


Corollary
$\struct {X, \tau}$ is metrizable if and only if $\struct {X, \tau}$ is first-countable and Hausdorff.
Further, if $\struct {X, \tau}$ is metrizable then there exists an invariant metric $d$ on $X$ such that:

$(1): \quad$ $d$ induces $\tau$
$(2): \quad$ the open balls in $\struct {X, d}$ are balanced.


Proof
Sufficient Condition
Suppose that $\struct {X, \tau}$ is first-countable and Hausdorff.
Let $\sequence {U_n}_{n \mathop \in \N}$ be a local basis for ${\mathbf 0}_X$ in $\struct {X, \tau}$.
Let $V_1 = U_1$. 
From Open Neighborhood of Point in Topological Vector Space contains Sum of Open Neighborhoods: Corollary 2:

for $j \ge 2$, we can inductively pick an open neighborhood $V_j$ of ${\mathbf 0}_X$ such that:
$V_j + V_j \subseteq V_{j - 1} \cap U_{j - 1}$
so that $V_j + V_j \subseteq V_{j - 1}$.
Since $V_j \subseteq U_j$ for each $j \in \N$, and ${\mathbf 0}_X \in V_j$ for each $j \in \N$, $\sequence {V_n}_{n \mathop \in \N}$ is also a local basis for ${\mathbf 0}_X$ in $\struct {X, \tau}$.
Let $D$ be the set of real numbers with a terminating binary notation.
That is, the real numbers $r \in \R$ of the form:

$\ds r = \sum_{j \mathop = 1}^\infty \map {c_j} r 2^{-j}$
with $\map {c_j} r \in \set {0, 1}$ such that:

there exists $N \in \N$ such that $\map {c_j} r = 0$ for $j > N$.
From the Basis Representation Theorem, the coefficients $\map {c_j} r$ uniquely identify $r$.
Note that if $r, s \in D$ and $r + s < 1$, then $r + s \in D$. 
Now, for $r \ge 1$, set $\map A r = X$. 
For $r \in D$, set:

$\ds \map A r = \sum_{j \mathop = 1}^\infty \map {c_j} r V_j$
where $\ds \sum_{j \mathop = 1}^\infty$ denotes linear combination.
Note that from Linear Combination of Balanced Sets is Balanced, $\map A r$ is balanced for each $r \in D$.
Since $\map A 1 = X$, we have that:

$\set {r \in D \cup \hointr 1 \infty : x \in \map A r} \ne \O$
for each $x \in X$. 
Hence:

$\inf \set {r \in D \cup \hointr 1 \infty : x \in \map A r}$ is finite.
So, we can define $f : X \to \hointr 0 \infty$ by:

$\map f x = \inf \set {r \in D \cup \hointr 1 \infty : x \in \map A r}$
for each $x \in X$.
Define:

$\map d {x, y} = \map f {x - y}$
We aim to show that $d$ is a pseudometric. 

We require the following lemma:

Lemma
Let $r, s \in D$ be such that $r + s < 1$.

Then:

$\map A r + \map A s \subseteq \map A {r + s}$
$\Box$

If $r, s \in D$ and $r + s \ge 1$, we have $\map A {r + s} = X$, hence we have the inclusion:

$\map A r + \map A s \subseteq \map A {r + s}$
for all $r, s \in D$.
If $r \ge 1$ or $s \ge 1$, then $\map A r = X$ or $\map A s = X$, while $\map A {r + s} = X$ from $r + s \ge 1$.
So we obtain this inclusion for all $r, s \in D \cup \hointr 1 \infty$. 


Proof of Metric Space Axiom $(\text M 1)$
Note that ${\mathbf 0}_X \in \map A r$ for all $r \in D$.
Hence we have $\map f { {\mathbf 0}_X} = 0$.
Therefore we have $\map d {x, x} = \map f {x - x} = \map f { {\mathbf 0}_X} = 0$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
We first prove:

$\map f {x + y} \le \map f x + \map f y$ for all $x, y \in X$.
Let $\epsilon > 0$.
Using the definition of infimum to pick $r \in r \in D \cup \hointr 1 \infty$ such that:

$\map f x \le r \le \map f x + \epsilon$
and $x \in \map A r$. 
Similarly pick $s \in r \in D \cup \hointr 1 \infty$ such that:

$\map f y \le s \le \map f y + \epsilon$
and $y \in \map A s$.
Since $\map A r + \map A s \subseteq \map A {r + s}$, we have $x + y \in \map A {r + s}$.
Hence, $\map f {x + y} \le r + s$.
That is, $\map f {x + y} \le \map f x + \map f y + 2 \epsilon$.
Since $\epsilon > 0$ was arbitrary, we obtain:

$\map f {x + y} \le \map f x + \map f y$
Now let $x, y, z \in X$.
We have:














\(\ds \map d {x, z}\)

\(=\)







\(\ds \map f {x - z}\)




















\(\ds \)

\(=\)







\(\ds \map f {x - y + y - z}\)




















\(\ds \)

\(\le\)







\(\ds \map f {x - y} + \map f {y - z}\)




















\(\ds \)

\(=\)







\(\ds \map d {x, y} + \map d {y, z}\)









Hence we have proved Metric Space Axiom $(\text M 2)$: Triangle Inequality for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$
Recall that $\map A r$ is balanced for each $r \in D$. 
From Balanced Set in Vector Space is Symmetric, $\map A r$ is symmetric for each $r \in D$.
That is, for each $r \in D$ and $x \in X$ we have $x \in \map A r$ if and only if $-x \in \map A r$. 
Hence we have: 

$\set {r \in D \cup \hointr 1 \infty : x \in \map A r} = \set {r \in D \cup \hointr 1 \infty : -x \in \map A r}$
so that:

$\map f x = \map f {-x}$ for each $x \in X$.
Then, for $x, y \in X$ we have:














\(\ds \map d {x, y}\)

\(=\)







\(\ds \map f {x - y}\)




















\(\ds \)

\(=\)







\(\ds \map f {y - x}\)




















\(\ds \)

\(=\)







\(\ds \map d {y, x}\)









$\Box$


Proof of Translation Invariance
Let $x, y, z \in X$. 
Then, we have: 

$\map f {x - y} = \map f {\paren {x + z} - \paren {y + z} } = \map d {x + z, y + z}$
Hence $d$ is an invariant pseudometric.
$\Box$


Proof of $(1)$ and $(2)$
For each $x \in X$ and $r > 0$, let $\map {B_r} x$ be the open ball of radius $r$ and centered at $x$ in the pseudometric space $\struct {X, d}$. 
Note that for each $\delta > 0$, we have:

$\ds \map {B_\delta} { {\mathbf 0}_X} = \set {x \in X : \map f x < \delta} = \bigcup_{r \in D, \, 0 < r < \delta} \map A r$
We argue that $\map A r$ is open for each $r \in D \setminus \set 0$.
Let $r \in D \setminus \set 0$.
Since $r \ne 0$, there exists $n \in \N$ such that $\map {c_n} r \ne 0$.
Then, we have:

$\ds \map A r = \map {c_n} r V_n + \sum_{j \mathop \ne n} \map {c_n} r V_n$
From Dilation of Open Set in Topological Vector Space is Open, $\map {c_n} r V_n$ is open.
From Sum of Set and Open Set in Topological Vector Space is Open, $\map A r$ is therefore open for each $r \in D \setminus \set 0$.
So $\map {B_\delta} { {\mathbf 0}_X}$ is open for each $\delta > 0$. 
From Union of Balanced Sets in Vector Space is Balanced, we have that $\map {B_\delta} { {\mathbf 0}_X}$ is balanced, establishing $(2)$.
Note that for each $\delta < 2^{-n}$, we have $\map A \delta \subseteq \map A {2^{-n} }$, so that:

$\map {B_{4^{-n} } } { {\mathbf 0}_X} \subseteq \map A {2^{-n} } = V_n$ for each $n \in \N$.
So $\sequence {\map {B_{4^{-n} } } { {\mathbf 0}_X} }_{n \in \N}$ is a local basis for ${\mathbf 0}_X$.
We now move to deduce that every open set in $\struct {X, \tau}$ is open in $\struct {X, d}$.
Let $U$ be an open set in $\struct {X, \tau}$.
From Translation of Local Basis in Topological Vector Space, $\sequence {V_n + x}_{n \mathop \in \N}$ is a local basis for $x$.
For each $y \in U$, there exists $n_y \in \N$ such that $V_{n_y} + y \subseteq U$. 
Then, we have: 

$\ds \bigcup_{y \mathop \in U} \paren {V_{n_y} + y} \subseteq U$
We then have:

$\ds \bigcup_{y \mathop \in U} \paren {\map {B_{4^{-n_y} } } { {\mathbf 0}_X} + y} \subseteq U$
From Translation of Open Ball in Invariant Pseudometric on Vector Space, we then obtain:

$\ds \bigcup_{y \mathop \in U} \map {B_{4^{-n_y} } } y \subseteq U$
so that:

$\ds U = \bigcup_{y \mathop \in U} \map {B_{4^{-n_y} } } y$
Hence $U$ is the union of open sets in $\struct {X, d}$. 
Hence we have proved that $\tau$ is precisely the topology induced by $d$, now establishing $(1)$.
$\Box$


Necessary Condition
Suppose that $\struct {X, \tau}$ is pseudometrizable.
Then from Pseudometric Space is First-Countable, $\struct {X, \tau}$ is first-countable.
As shown in the sufficient condition, there then exists invariant pseudometric $d$ on $X$ such that:

$(1): \quad$ $d$ induces $\tau$
$(2): \quad$ the open balls in $\struct {X, d}$ are balanced.
$\blacksquare$


Source of Name
This entry was named for Garrett Birkhoff and Shizuo Kakutani.






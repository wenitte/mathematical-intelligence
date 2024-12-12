# 

Source: https://proofwiki.org/wiki/Characterization_of_Continuous_Linear_Transformations_between_Locally_Convex_Spaces



Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $\struct {X, \mathcal P}$ and $\struct {Y, \mathcal Q}$ be locally convex spaces over $\Bbb F$.
Let $T : X \to Y$ be a linear transformation.

The following statements are equivalent:

$(1) \quad$ $T$ is everywhere continuous
$(2) \quad$ $T$ is continuous at ${\mathbf 0}_X$
$(3) \quad$ for each $q \in \mathcal Q$ there exists a real number $C_q \ge 0$ and a finite set ${\mathcal I}_q \subseteq \mathcal P$ such that:
$\ds \map q {T x} \le C_q \max_{p \in {\mathcal I}_q} \map p x$
for each $x \in X$
where we consider continuity in the standard topologies of $\struct {X, \mathcal P}$ and $\struct {Y, \mathcal Q}$.


Proof
$(1)$ iff $(2)$
This follows from Linear Transformation between Topological Vector Spaces Continuous iff Continuous at Origin.
$\Box$

$(2)$ implies $(3)$
Let $q \in \mathcal Q$.
Let: 

$V = \set {y \in Y : \map q y < 1}$
From the definition of the standard topology, $V$ is open in $Y$. 
From Seminorm Maps Zero Vector to Zero, we have $\map q { {\mathbf 0}_Y}$ and so: 

$V$ is a open neighborhood of ${\mathbf 0}_Y$.
Since continuous at ${\mathbf 0}_X$ and $\map T { {\mathbf 0}_X} = {\mathbf 0}_Y$, there exists an open neighborhood $U'$ of ${\mathbf 0}_X$ such that: 

$T \sqbrk U \subseteq V$
From the definition of the standard topology, there exists $\epsilon > 0$ and seminorms $p_1, p_2, \ldots, p_n \in \mathcal P$ such that: 

$U = \set {x \in X : \map {p_k} x < \epsilon \text { for } 1 \le k \le n} \subseteq U'$
so that:

$T \sqbrk U \subseteq T \sqbrk {U'} \subseteq V$
Set: 

$\ds p = \max_{1 \le k \le n} p_k$
We aim to show that there exists a real number $C > 0$ such that: 

$\ds \map q {T x} \le C \map p x$
for each $x \in X$.
Let $x \in X$.
If $\map p x = 0$, then we have $\cmod \lambda \map p x = 0$ for each $\lambda \in \Bbb F$.
Since $p$ is a seminorm, this gives $\map p {\lambda x} = 0$ for each $\lambda \in \Bbb F$.
So $\lambda x \in U$ for each $\lambda \in \Bbb F$.
Then $\map T {\lambda x} \in T \sqbrk U$ for each $\lambda \in \Bbb F$.
So $\map T {\lambda x} \in V$ for each $\lambda \in \Bbb F$. 
So:

$\map q {\map T {\lambda x} } < 1$ for each $\lambda \in \Bbb F$.
Then for each $\lambda \in \Bbb F$ we have: 

$\map q {\lambda \map T x} < 1$
so:

$\ds \map q {T x} < \frac 1 {\cmod \lambda}$
Taking $\lambda = 1/\epsilon$ for $\epsilon > 0$, we have: 

$\map q {T x} < \epsilon$ for each $\epsilon > 0$.
Since $\map q {T x} \ge 0$, we must therefore have $\map q {T x} = 0$, so certainly:

$\ds \map q {T x} \le C \map p x$
for any real number $C > 0$. 
Now take $\map p x \ne 0$ and $k \in \set {1, 2, \ldots, n}$. 
Then, we have: 














\(\ds \map {p_k} {\frac {\epsilon x} {2 \map p x} }\)

\(=\)







\(\ds \frac {\epsilon \map {p_k} x} {2 \map p x}\)





$(\text N 2)$ in the definition of a seminorm














\(\ds \)

\(\le\)







\(\ds \frac {\epsilon \map p x} {2 \map p x}\)





Definition of Pointwise Maximum of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \frac \epsilon 2\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









giving:

$\dfrac {\epsilon x} {2 \map p x} \in U$
We therefore have: 

$\ds \map T {\frac {\epsilon x} {2 \map p x} } \in T \sqbrk U$
so:

$\ds \map T {\frac {\epsilon x} {2 \map p x} } \in V$
giving:

$\ds \map q {\map T {\frac {\epsilon x} {2 \map p x} } } < 1$
We then have: 














\(\ds \map q {\map T {\frac {\epsilon x} {2 \map p x} } }\)

\(=\)







\(\ds \map q {\frac \epsilon {2 \map p x} T x}\)





linearity of $T$














\(\ds \)

\(=\)







\(\ds \frac \epsilon {2 \map p x} \map q {T x}\)





$(\text N 2)$ in the definition of a seminorm














\(\ds \)

\(<\)







\(\ds 1\)









So, we have: 

$\ds \map q {T x} < \frac 2 \epsilon \map p x$
for all $x \in X$ with $\map p x \ne 0$.
As previously established, equality occurs if $\map p x = 0$.
So, we have: 

$\ds \map q {T x} \le \frac 2 \epsilon \map p x$
for all $x \in X$, giving the result.
$\Box$

$(3)$ implies $(2)$
Let $V$ be an open neighborhood of ${\mathbf 0}_Y$. 
We want to find an open neighborhood $U$ of ${\mathbf 0}_X$ such that: 

$T \sqbrk U \subseteq V$
Since $V$ is open in $Y$ there exists $\epsilon > 0$ and $q_1, q_2, \ldots, q_n$ such that: 

$V' = \set {y \in Y : \map {q_k} y \text { for } 1 \le k \le n} \subseteq V$
It therefore suffices to find an open neighborhood $U$ of ${\mathbf 0}_X$ such that: 

$T \sqbrk U \subseteq V'$
By $(3)$, for each $k \in \set {1, 2, \ldots, n}$ there exists a real number $C_k > 0$ and $p_{k, 1}, p_{k, 2}, \ldots, p_{k, m_k}$ such that: 

$\ds \map {q_k} {T x} \le C_k \max_{1 \le j \le m_k} \map {p_{k, j} } x$
For each $k \in \set {1, 2, \ldots, n}$ set:

$\ds U_k = \set {x \in X : \map {p_{k, j} } x < \frac \epsilon {C_k} \text { for } 1 \le j \le m_k}$
Each $U_k$ is open in $X$, and so:

$\ds U = \bigcap_{k \mathop = 1}^n U_k$
is open in $X$ as the finite intersection of open sets.
Then, for each $x \in U$ and $k \in \set {1, 2, \ldots, n}$ we have: 

$\ds \max_{1 \le j \le m_k} \map {p_{k, j} } x < \frac \epsilon {C_k}$
and so:

$\ds \map {q_k} {T x} < \epsilon$
This gives $T x \in V'$.
Hence, we have $T \sqbrk U \subseteq V'$. 
So $T \sqbrk U \subseteq V$, and $T$ is continuous at ${\mathbf 0}_X$.
$\blacksquare$






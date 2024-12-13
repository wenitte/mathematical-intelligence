# 

Source: https://proofwiki.org/wiki/Measure_of_Limit_of_Increasing_Sequence_of_Measurable_Sets

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $E \in \Sigma$.
Let $\sequence {E_n}_{n \mathop \in \N}$ be an increasing sequence of $\Sigma$-measurable sets such that: 

$E_n \uparrow E$
where $E_n \uparrow E$ denotes limit of increasing sequence of sets.

Then: 

$\ds \map \mu E = \lim_{n \mathop \to \infty} \map \mu {E_n}$


Proof
We define a sequence $\sequence {F_n}_{n \mathop \in \N}$ inductively.
Set $F_1 = E_1$. 
For $n > 1$, define: 

$F_n = E_n \setminus E_{n - 1}$
From the definition of set difference we have: 

$E_n \setminus E_{n - 1} = E_n \cap \paren {X \setminus E_{n - 1} }$
Since $\Sigma$ is closed under complementation, we have: 

$X \setminus E_{n - 1} \in \Sigma$
and so, from Sigma-Algebra Closed under Countable Intersection:

$F_n \in \Sigma$
for $n > 1$. 
Clearly $F_1 \in \Sigma$ also.
Since $\sequence {E_n}_{n \in \N}$ is increasing, we have that: 

$E_i \subseteq E_j$ for $i \le j$.
So:

$F_n$ is disjoint to $E_1, E_2, \ldots, E_{n - 1}$.
Since $F_i \subseteq E_i$ for each $i$, we have:

$F_n$ is disjoint to $F_1, F_2, \ldots, F_{n - 1}$.
Picking $n = \max \set {i, j}$ we obtain that: 

$F_i \cap F_j = \O$ for $i \ne j$.
We now show that: 

$\ds E_k = \bigcup_{i \mathop = 1}^k F_i$
We have: 

$\ds x \in \bigcup_{i \mathop = 1}^k F_i$
if and only if:

$x \in F_i$ for some $1 \le i \le k$.
This is equivalent to: 

$x \in E_i$ for some $1 \le i \le k$.
Since $\sequence {E_n}_{n \in \N}$ increasing sequence, this is equivalent to: 

$x \in E_k$
showing that: 

$\ds x \in \bigcup_{i \mathop = 1}^k F_i$ if and only if $x \in E_k$
giving:

$\ds E_k = \bigcup_{i \mathop = 1}^k F_i$
So, we have: 

$\ds \bigcup_{k \mathop = 1}^\infty E_k = \bigcup_{i \mathop = 1}^\infty F_i$
That is: 

$\ds E = \bigcup_{i \mathop = 1}^\infty F_i$
from the definition of a limit of an increasing sequence of sets.

We can now compute:














\(\ds \map \mu E\)

\(=\)







\(\ds \map \mu {\bigcup_{i \mathop = 1}^\infty F_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^\infty \map \mu {F_i}\)





since $\mu$ is countably additive














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \sum_{i \mathop = 1}^n \map \mu {F_i}\)





Definition of Infinite Series














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \mu {\bigcup_{i \mathop = 1}^n F_i}\)





Measure is Finitely Additive Function














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \mu {E_n}\)









$\blacksquare$






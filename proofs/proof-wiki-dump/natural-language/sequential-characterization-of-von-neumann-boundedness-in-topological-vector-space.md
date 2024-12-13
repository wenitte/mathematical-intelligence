# 

Source: https://proofwiki.org/wiki/Sequential_Characterization_of_von_Neumann-Boundedness_in_Topological_Vector_Space



Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ be a topological vector space over $\GF$.
Let $E \subseteq X$.

Then $E$ is von Neumann-bounded if and only if:

for each sequence $\sequence {x_n}_{n \in \N}$ in $E$ and each sequence $\sequence {\alpha_n}_{n \in \N}$ in $\GF$ such that $\alpha_n \to 0$ as $n \to \infty$, we have $\alpha_n x_n \to {\mathbf 0}_X$ as $n \to \infty$.


Proof
Necessary Condition
Let $E \subseteq X$ be von Neumann-bounded.
Let $U$ be an open neighborhood of ${\mathbf 0}_X$.
From Open Neighborhood of Origin in Topological Vector Space contains Balanced Open Neighborhood, there exists a balanced open neighborhood $V$ of ${\mathbf 0}_X$ such that $V \subseteq X$. 
Since $E$ is von Neumann-bounded, there exists $t > 0$ such that: 

$E \subseteq t V$
so that: 

$\ds \frac 1 t E \subseteq V$
Then we have: 

$\ds \frac {x_n} t \in V$
Since $\alpha_n \to 0$, there exists $N \in \N$ such that: 

$\ds \cmod {\alpha_n} < \frac 1 t$ for $n \ge N$.
That is: 

$\ds \cmod {\alpha_n} t = \cmod {\alpha_n t} < 1$ for $n \ge N$.
Since $V$ is balanced, we have: 

$\alpha_n t V \subseteq V$
so that: 

$\alpha_n x_n \in V$ for $n \ge N$
since $x_n/t \in V$.
So, we have: 

$\alpha_n x_n \in V$ for $n \ge N$.
So $\alpha_n x_n \to \mathbf 0_X$ as $n \to \infty$. 
$\Box$

Sufficient Condition
Let $E \subseteq X$ be such that:

for all sequences $\sequence {x_n}_{n \in \N}$ is a sequence in $E$ and $\sequence {\alpha_n}_{n \in \N}$ is a sequence in $\GF$ such that $\alpha_n \to 0$, we have $\alpha_n x_n \to {\mathbf 0}_X$.
Suppose that $E$ is not von Neumann-bounded.
Then for some open neighbourhood $V$ of ${\mathbf 0}_X$ and all $s > 0$, there exists $t > s$ such that $E \not \subseteq t V$.
That is, there exists a sequence $\sequence {r_n}_{n \in \N}$ of positive real numbers such that $r_n \to \infty$ and $E \not \subseteq r_n V$ for each $n \in \N$.
Then $r_n^{-1} \to 0$ as $n \to \infty$. 
For each $n \in \N$, pick $x_n \in E \setminus r_n V$.
Then we have $r_n^{-1} x_n \not \in V$ for each $n \in \N$. 
So $\sequence {r_n^{-1} x_n}_{n \in \N}$ cannot converge to $\mathbf 0_X$.
This is a contradiction, so $E$ is von Neumann-bounded.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.30$: Theorem





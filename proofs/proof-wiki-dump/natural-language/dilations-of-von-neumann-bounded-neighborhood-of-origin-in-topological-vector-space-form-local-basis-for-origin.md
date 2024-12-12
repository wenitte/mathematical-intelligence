# 

Source: https://proofwiki.org/wiki/Dilations_of_von_Neumann-Bounded_Neighborhood_of_Origin_in_Topological_Vector_Space_form_Local_Basis_for_Origin

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ be a topological vector space over $\Bbb F$. 
Let $\sequence {\delta_n}_{n \mathop \in \N}$ be a strictly decreasing real sequence with $\delta_n \to 0$.
Let $V$ be a von Neumann-bounded open neighborhood of ${\mathbf 0}_X$.

Then: 

$\BB = \set {\delta_n V : n \in \N}$ is a local basis for ${\mathbf 0}_X$.


Proof
Let $U$ be an open neighborhood of ${\mathbf 0}_X$.
We show that there exists $N \in \N$ such that: 

$\delta_N V \subseteq U$
Since $V$ is von Neumann-bounded, there exists $s > 0$ such that: 

$V \subseteq t U$ for $t > s$.
Since $\delta_n \to 0$ and $\sequence {\delta_n}_{n \mathop \in \N}$ is a strictly decreasing real sequence, there exists $N \in \N$ with: 

$\ds 0 < \delta_N < \frac 1 s$
so that: 

$\ds \frac 1 {\delta_N} > s$
giving:

$\ds V \subseteq \frac 1 {\delta_N} U$
so that: 

$\delta_N V \subseteq U$
Since $U$ was arbitrary, we have that $\BB$ is a local basis for ${\mathbf 0}_X$.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.15$: Theorem





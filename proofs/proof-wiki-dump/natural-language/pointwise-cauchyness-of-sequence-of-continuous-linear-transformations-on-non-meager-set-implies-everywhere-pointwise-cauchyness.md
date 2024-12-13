# 

Source: https://proofwiki.org/wiki/Pointwise_Cauchyness_of_Sequence_of_Continuous_Linear_Transformations_on_Non-Meager_Set_implies_Everywhere_Pointwise_Cauchyness

Theorem
Let $\GF \in \set {\R, \C}$.


This article, or a section of it, needs explaining.In particular: What role does $\GF$ play in the following?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $X$ and $Y$ be topological vector spaces.
Let $\sequence {T_n}_{n \in \N}$ be a sequence of continuous linear transformations $T_n : X \to Y$ such that:

the set $C$ of $x \in X$ such that $\sequence {T_n x}_{n \in \N}$ is a Cauchy sequence is non-meager.

Then $C = X$, so that:

$\sequence {T_n x}_{n \in \N}$ is Cauchy for each $x \in X$.


Proof
Let $B$ be the set of all $x \in X$ such that:

$\map \Gamma x = \set {T_n x : n \in \N}$
is von Neumann-bounded in $Y$.
For each $x \in C$, we have that $\sequence {T_n x}_{n \in \N}$ is Cauchy.
From Image of Cauchy Sequence in Topological Vector Space is von Neumann-Bounded, it follows that:

$\set {T_n x : n \in \N} = \map \Gamma x$ is von Neumann-bounded in $Y$
for each $x \in C$.
So we have $C \subseteq B$. 
Since $C$ is non-meager, we have that $B$ is non-meager by Subset of Meager Set is Meager Set.
From Banach-Steinhaus Theorem: Topological Vector Space, $\sequence {T_n}_{n \in \N}$ is equicontinuous and $B = X$.

We show that $C$ is a linear subspace of $X$. 
Since $C$ is non-meager, $C \ne \O$.
From One-Step Vector Subspace Test, it is enough to show that $\alpha x + \beta y \in C$ for each $x, y \in C$ and $\alpha, \beta \in \GF$. 
Let $x, y \in C$ and $\alpha, \beta \in \GF$. 
Since each $T_n$ is linear:

$\map {T_n} {\alpha x + \beta y} = \alpha T_n x + \beta T_n y$
From Linear Combination of Cauchy Sequences in Topological Vector Space is Cauchy Sequence, we obtain that:

$\sequence {\map {T_n} {\alpha x + \beta y} }_{n \in \N}$ is Cauchy.
So $\alpha x + \beta y \in C$. 
From One-Step Vector Subspace Test, we have that $C$ is a linear subspace of $X$. 
By Non-Meager Linear Subspace of Topological Vector Space is Everywhere Dense, we have that:

$C$ is everywhere dense
since $C$ is non-meager.

We aim to deduce that $C = X$.
Let $x \in X$. 
Let $W$ be an open neighborhood of ${\mathbf 0}_Y$. 
From Open Neighborhood of Point in Topological Vector Space contains Sum of Open Neighborhoods: Corollary $1$, there exists an open neighborhood $W_1$ of ${\mathbf 0}_Y$ such that:

$W_1 + W_1 \subseteq W$
Applying Open Neighborhood of Point in Topological Vector Space contains Sum of Open Neighborhoods: Corollary $1$ again there exists a open neighborhood $W_2$ of ${\mathbf 0}_Y$ such that:

$W_2 + W_2 \subseteq W_1$
Then, we have:

$W_2 + W_2 + W_2 + W_2 \subseteq W_1 + W_1 \subseteq W$
Since ${\mathbf 0}_Y \in W_2$, we have:

$W_2 + W_2 + W_2 \subseteq W$
Since  $\sequence {T_n}_{n \in \N}$ is equicontinuous, there exists an open neighborhood $V$ of ${\mathbf 0}_X$ such that:

$T_n \sqbrk V \subseteq W_2$ for each $n \in \N$.
Replacing $V$ with $V \cap \paren {-V}$, we can take $V$ to be symmetric.
Since $C^- = X$, we have $x \in C^-$, and we can apply Condition for Point being in Closure: Topological Vector Space to obtain that:

there exists $x' \in C \cap \paren {x + V}$.
Since $\sequence {T_n x'}_{n \in \N}$ is a Cauchy sequence, there exists $N \in \N$ such that:

$\paren {T_n - T_m} x' \in W_2$ for $n, m \ge N$.
Now write:

$\paren {T_n - T_m} x = \map {T_n} {x - x'} + \paren {T_n - T_m} x' + \map {T_m} {x' - x}$
Since $x' - x \in V$, we have:

$\map {T_m} {x' - x} \in W_2$
Since $V$ is symmetric, we also have $x - x' \in V$, so that:

$\map {T_n} {x - x'} \in W_2$
So, for $n, m \ge N$ we have:

$\paren {T_n - T_m} x \in W_2 + W_2 + W_2 \subseteq W$
Since $W$ was an arbitrary open neighborhood of ${\mathbf 0}_X$, we have that $\sequence {T_n x}_{n \in \N}$ is Cauchy.
So $x \in C$, and we obtain $C = X$.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $2.7$: Theorem





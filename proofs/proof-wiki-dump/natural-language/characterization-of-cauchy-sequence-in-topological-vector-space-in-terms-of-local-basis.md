# 

Source: https://proofwiki.org/wiki/Characterization_of_Cauchy_Sequence_in_Topological_Vector_Space_in_terms_of_Local_Basis



Theorem
Let $\struct {X, \tau}$ be a topological vector space.
Let $\BB$ be a local basis for $\mathbf 0_X$ in $\struct {X, \tau}$.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence. 

Then $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy if and only if:

for each $V \in \BB$ there exists $N \in \N$ such that $x_n - x_m \in V$ for $n, m \ge N$.


Proof
Necessary Condition
Suppose that $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy.
Then: 

for each open neighborhood $V$ of $\mathbf 0_X$ there exists $N \in \N$ such that:
$x_n - x_m \in V$ for each $n, m \ge N$.
Since $\BB$ consists of open neighbourhoods of $\mathbf 0_X$, we in particular have:

for each $V \in \BB$ there exists $N \in \N$ such that $x_n - x_m \in V$ for $n, m \ge N$.
$\Box$


Sufficient Condition
Suppose that: 

for each $V \in \mathcal B$ there exists $N \in \N$ such that $x_n - x_m \in V$ for $n, m \ge N$.
Let $U$ be an open neighborhood of $\mathbf 0_X$.
Then there exists $V \in \mathcal B$ such that $V \subseteq U$. 
Then there exists $N \in \N$ such that $x_n - x_m \in V \subseteq U$ for $n, m \ge N$. 
So $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy.
$\blacksquare$






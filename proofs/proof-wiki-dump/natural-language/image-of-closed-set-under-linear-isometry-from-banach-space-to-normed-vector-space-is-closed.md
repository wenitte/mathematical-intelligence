# 

Source: https://proofwiki.org/wiki/Image_of_Closed_Set_under_Linear_Isometry_from_Banach_Space_to_Normed_Vector_Space_is_Closed

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$ be a Banach space over $\GF$. 
Let $\struct {Y, \norm {\, \cdot \,}_Y}$ be a normed vector space over $\GF$. 
Let $T : X \to Y$ be a linear isometry.
Let $A$ be a closed subset of $X$.

Then $T \sqbrk A$ is closed in $X$.


Proof
Let $\sequence {y_n}_{n \mathop \in \N}$ be a convergent sequence in $T \sqbrk A$ with:

$y_n \to y$ as $n \to \infty$.
From Convergent Sequence is Cauchy Sequence, $\sequence {y_n}_{n \mathop \in \N}$ is a Cauchy sequence. 
Then there exists $x_n \in X$ with $y_n = T x_n$.
Let $\epsilon > 0$.
Let $N \in \N$ be such that:

$\norm {y_n - y_m}_Y = \norm {\map T {x_n - x_m} } < \epsilon$ for $n, m \ge N$.
Since $T$ is a linear isometry, we therefore have:

$\norm {x_n - x_m} < \epsilon$ for $n, m \ge N$.
So $\sequence {x_n}_{n \mathop \in \N}$ is a Cauchy sequence in $X$.
Hence there exists $x \in X$ such that $x_n \to x$.
Since $A$ is closed in $X$, we further have $x \in A$ from Subset of Metric Space contains Limits of Sequences iff Closed.
Since $T$ is continuous, we have $T x_n \to T x$. 
From Limit in Normed Vector Space is Unique, we have $y = T x$ with $x \in A$.
Hence $y \in T \sqbrk A$. 
Hence every convergent sequence in $T \sqbrk A$ has its limit in $T \sqbrk A$.
Hence $T \sqbrk A$ is closed.
$\blacksquare$






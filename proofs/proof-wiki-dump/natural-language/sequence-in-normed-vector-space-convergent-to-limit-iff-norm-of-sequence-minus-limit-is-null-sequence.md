# 

Source: https://proofwiki.org/wiki/Sequence_in_Normed_Vector_Space_Convergent_to_Limit_iff_Norm_of_Sequence_minus_Limit_is_Null_Sequence

Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space.
Let $x \in X$. 
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $X$.

Then $\sequence {x_n}_{n \mathop \in \N}$ converges to $x$ if and only if:

$\norm {x_n - x} \to 0$


Proof
From the definition of a convergent sequence in a normed vector space, we have that: 

$x_n$ converges to $x$
if and only if:

for each $\epsilon > 0$ there exists $N \in \N$ such that $\norm {x_n - x} < \epsilon$.
From the definition of a convergent real sequence, we have that: 

$\norm {x_n - x} \to 0$
if and only if:

for each $\epsilon > 0$ there exists $N \in \N$ such that $\size {\norm {x_n - x} - 0} < \epsilon$.
Since the norm is non-negative, we have that:

$\norm {x_n - x} \to 0$
if and only if:

for each $\epsilon > 0$ there exists $N \in \N$ such that $\norm {x_n - x} < \epsilon$.
We can therefore immediately deduce the result.
$\blacksquare$






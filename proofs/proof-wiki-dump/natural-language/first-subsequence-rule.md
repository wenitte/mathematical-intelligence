# 

Source: https://proofwiki.org/wiki/First_Subsequence_Rule

Theorem
Let $T = \struct {A, \tau}$ be a Hausdorff space.
Let $\sequence {x_n}$ be a sequence in $T$.
Suppose $\sequence {x_n}$ has two convergent subsequences with different limits.

Then $\sequence {x_n}$ is divergent.


Proof
As stated, let $T = \struct {A, \tau}$ be a Hausdorff space.
Let $\sequence {x_n}$ be a sequence in $T$.

Let $\sequence {y_n}$ and $\sequence {z_n}$ be convergent subsequences of $\sequence {x_n}$ with different limits.
Aiming for a contradiction, suppose $\sequence {x_n}$ is convergent.
From Convergent Sequence in Hausdorff Space has Unique Limit, $\sequence {x_n}$ has exactly one limit.
From Limit of Subsequence equals Limit of Sequence, $\sequence {y_n}$ has the same limit as $\sequence {x_n}$.
This contradicts the assertion that $\sequence {y_n}$ and $\sequence {z_n}$ have different limits.
Hence by Proof by Contradiction it must be the case that $\sequence {x_n}$ is divergent.
$\blacksquare$


Also see
Second Subsequence Rule





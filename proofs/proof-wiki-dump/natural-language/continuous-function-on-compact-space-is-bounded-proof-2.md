# 

Source: https://proofwiki.org/wiki/Continuous_Function_on_Compact_Space_is_Bounded/Proof_2

Theorem
Let $\struct {X, \tau}$ be a compact topological space.
Let $\struct {Y, \norm {\, \cdot \, } }$ be a normed vector space.
Let $f: X \to Y$ be continuous.

Then $f$ is bounded.


Proof
From Continuous Image of Compact Space is Compact, $f \sqbrk X$ is a compact subset of $Y$. 
From Compact Subset of Normed Vector Space is Closed and Bounded, $f \sqbrk X$ is bounded.
Hence there exists a real number $M > 0$ such that:

$\norm {\map f x} \le M$ for all $x \in X$.
So $f$ is bounded.
$\blacksquare$






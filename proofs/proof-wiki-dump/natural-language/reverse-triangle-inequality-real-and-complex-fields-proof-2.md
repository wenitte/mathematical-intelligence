# 

Source: https://proofwiki.org/wiki/Reverse_Triangle_Inequality/Real_and_Complex_Fields/Proof_2

Theorem
Let $x$ and $y$ be elements of either the real numbers $\R$ or the complex numbers $\C$.
Then:

$\cmod {x - y} \ge \size {\cmod x - \cmod y}$


Proof
From proof $2$ of corollary $1$ to this result, which is derived independently:

$\size {x - y} \ge \size x - \size y$

There are two cases:
$(1): \quad \size x \ge \size y$
We have :

$\size {\size x - \size y} = \size x - \size y$
and the proof is finished.
$\Box$

$(2): \quad \size y \ge \size x$
We have:

$\size {y - x} \ge \size y - \size x = \size {\size y - \size x}$
But:

$\size {y - x} = \size {x - y}$
and:

$\size {\size y - \size x} = \size {\size x - \size y}$

From this we have:

$-\size {\size x - \size y} \ge -\size {x - y}$
Since, by Negative of Absolute Value, we have that:

$\size x - \size y \ge -\size {\size x - \size y}$
it follows that:

$-\size {x - y} \le \size x - \size y \le \size {x - y}$
The result follows.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 1$: Real Numbers: Exercise $\S 1.20 \ (2)$





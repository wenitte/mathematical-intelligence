# 

Source: https://proofwiki.org/wiki/Limit_at_Infinity_of_Real_Identity_Function

Theorem
Let $I_\R: \R \to \R$ be the identity function on $\R$.
Then:

$(1): \quad \ds \lim_{x \mathop \to +\infty} \map {I_\R} x = +\infty$
$(2): \quad \ds \lim_{x \mathop \to -\infty} \map {I_\R} x = -\infty$


Proof
We have that the Derivative of Identity Function is $1$.
Hence, by Derivative of Monotone Function, $x$ is strictly increasing.
Now, by the definition of infinite limit at infinity, the first assertion is:

$\forall M \in \R_{>0}: \exists N \in \R_{>0}: x > N \implies \map f x > M$
For every $M$, choose $N = M$.
The second assertion is proved similarly.
$\blacksquare$






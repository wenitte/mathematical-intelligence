# 

Source: https://proofwiki.org/wiki/Rolle%27s_Theorem/Proof_1

Theorem
Let $f$ be a real function which is:

continuous on the closed interval $\closedint a b$
and:

differentiable on the open interval $\openint a b$.
Let $\map f a = \map f b$.

Then:

$\exists \xi \in \openint a b: \map {f'} \xi = 0$


Proof
We have that $f$ is continuous on $\closedint a b$.
It follows from Continuous Image of Closed Interval is Closed Interval that $f$ attains:

a maximum $M$ at some $\xi_1 \in \closedint a b$
and:

a minimum $m$ at some $\xi_2 \in \closedint a b$.

Suppose $\xi_1$ and $\xi_2$ are both end points of $\closedint a b$.
Because $\map f a = \map f b$ it follows that $m = M$ and so $f$ is constant on $\closedint a b$.
Then, by Derivative of Constant, $\map {f'} \xi = 0$ for all $\xi \in \openint a b$.

Suppose $\xi_1$ is not an end point of $\closedint a b$.
Then $\xi_1 \in \openint a b$ and $f$ has a local maximum at $\xi_1$.
Hence the result follows from Derivative at Maximum or Minimum‎.

Similarly, suppose $\xi_2$ is not an end point of $\closedint a b$.
Then $\xi_2 \in \openint a b$ and $f$ has a local minimum at $\xi_2$.
Hence the result follows from Derivative at Maximum or Minimum‎.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 11.4$





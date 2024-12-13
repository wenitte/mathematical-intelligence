# 

Source: https://proofwiki.org/wiki/Range_of_Sigmoid_Function

Theorem
Let $S$ be the real sigmoid function.
Then the range of $S$ is $\openint 0 1$.


Proof
By Sigmoid Function is Continuous, $S$ is a continuous real function.
By Image of Interval by Continuous Function is Interval, the range of $S$ is an interval $I$.
By Cumulative Distribution Function of Logistic Distribution, $S$ is the cumulative distribution function of a logistic distribution, with $\mu = 0$ and $s = 1$.
By Bounds for Cumulative Distribution Function:

$0 \le \map S x \le 1$
for every $x \in \R$.
Therefore, $I \subseteq \closedint 0 1$.

Aiming for a contradiction, suppose, suppose the left hand endpoint of $I$ is $a > 0$.
By Limit of Cumulative Distribution Function at Negative Infinity, there is some $x^- \in \R$ such that:

$\size {\map S {x^-} - 0} < a$
Therefore, $\map S {x^-} < a$, contradicting that $a$ is the left hand endpoint.
Hence, by Proof by Contradiction, $a = 0$.

Likewise, Limit of Cumulative Distribution Function at Positive Infinity proves that the right hand endpoint is $1$.
Therefore, $I \supseteq \openint 0 1$.

Aiming for a contradiction, suppose, suppose $0 \in I$.
Then, $\map S {x_0} = 0$, for some $x_0 \in \R$.
But as Sigmoid Function is Strictly Increasing, every $x < x_0$ must have $\map S x < 0$, contradicting $0 \le \map S x$ above.
Thus, by Proof by Contradiction, $0 \notin I$.

By the same argument, $1 \notin I$.
Therefore, $I = \openint 0 1$.
$\blacksquare$






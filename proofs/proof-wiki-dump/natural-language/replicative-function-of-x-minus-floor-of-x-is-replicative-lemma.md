# 

Source: https://proofwiki.org/wiki/Replicative_Function_of_x_minus_Floor_of_x_is_Replicative/Lemma

Theorem
Let $x \in \R$.
Suppose $x - \floor x < \dfrac 1 n$.
Then:

$\floor {x + \dfrac k n} = \dfrac {\floor  {n x} } n$
for any $0 \le k \le n - 1$.


Proof
We have $n x < n \floor x + 1$.
By Number less than Integer iff Floor less than Integer:

$\floor {n x} < n \floor x + 1$
Thus $\floor {n x} \le n \floor x$.
From definition of floor function:

$n x \ge n \floor x$
By Number not less than Integer iff Floor not less than Integer:

$\floor {n x} \ge n \floor x$
Therefore $\floor {n x} = n \floor x$ and thus $\floor x = \dfrac {\floor {n x} } n$.

Now we show $\floor {x + \dfrac k n} = \floor x$ for $0 \le k \le n - 1$.
We have:

$\floor x \le \floor {x + \dfrac k n} \le \floor {x + \dfrac {n - 1} n}$
We also have:

$x + \dfrac {n - 1} n < \floor x + \dfrac 1 n + \dfrac {n - 1} n = \floor x + 1$
By Number less than Integer iff Floor less than Integer:

$\floor {x + \dfrac {n - 1} n} < \floor x + 1$
This gives:

$\floor {x + \dfrac {n - 1} n} \le \floor x$
Combining the above:

$\floor {x + \dfrac k n} = \floor x$

Therefore $\floor {x + \dfrac k n} = \floor x = \dfrac {\floor {n x} } n$.
$\blacksquare$






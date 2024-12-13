# 

Source: https://proofwiki.org/wiki/Limit_of_Countable_Union_of_Unbounded_Below_Closed_Intervals

Theorem
Let $x \in \R$. 
,
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence converging to $x$ such that $x_n < x$ for each $n \in \N$.

Then we have:

$\ds \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \openint {-\infty} x$


Proof
First suppose that:

$\ds t \in \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x_n}$
Then we have:

$t \le x_n$ for some $n \in \N$.
We have $x_n < x$ for each $n \in \N$.
Hence $t < x$ and $t \in \openint {-\infty} x$.

Now suppose that $t \in \openint {-\infty} x$.
Then $t < x$. 
Hence we can take $\epsilon > 0$ such that:

$t + \epsilon < x$
so that:

$t < x - \epsilon$
Since $x_n \to x$, there exists $N \in \N$ such that:

$x - \epsilon \le x_n \le x + \epsilon$ for $n \ge N$.
Hence we have:

$t \le x_N$
In particular, $t \in \openinl {-\infty} {x_N}$, so:

$\ds t \in \bigcup_{n \mathop = 1}^\infty \openinl {-\infty} {x_n}$
So we have:

$\ds \openint {-\infty} x \subseteq \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x_n}$
$\blacksquare$






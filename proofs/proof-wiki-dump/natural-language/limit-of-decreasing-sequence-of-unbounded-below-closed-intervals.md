# 

Source: https://proofwiki.org/wiki/Limit_of_Decreasing_Sequence_of_Unbounded_Below_Closed_Intervals


It has been suggested that this page be renamed.In particular: remove mention of decreasingTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $x \in \R$. 
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence converging to $x$ such that $x_n \ge x$ for each $n \in \N$. 

Then:

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \hointl {-\infty} x$


Proof
We first show that: 

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} \subseteq \hointl {-\infty} x$
Let:

$\ds t \in \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n}$
Then:

$t \le x_n$
By the Squeeze Theorem, we then have:

$t \le x$
taking $n \to \infty$. 
So $t \in \hointl {-\infty} x$. 
$\Box$

We now show that:

$\ds \hointl {-\infty} x \subseteq \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n}$
Now suppose that: 

$t \in \hointl {-\infty} x$
Then $t \le x$. 
Since $x \le x_n$ for each $n \in \N$, we have $t \le x_n$ for each $n \in \N$.
That is, $t \in \hointl {-\infty} {x_n}$ for each $n \in \N$.
So:

$\ds t \in \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n}$
$\Box$

So, from the definition of set equality, we have: 

$\ds \bigcap_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \hointl {-\infty} x$
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Probability_of_Continuous_Random_Variable_Lying_in_Singleton_Set_is_Zero/Lemma

Lemma
Let $x$ be a real number.
Then: 

$\ds \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x - \frac 1 n} = \openint {-\infty} x$


Proof
We first show that: 

$\ds \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x - \frac 1 n} \subseteq \openint {-\infty} x$
Let: 

$\ds t \in \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x - \frac 1 n}$
Then, for some $k \in \N$ we have: 

$\ds t \in \hointl {-\infty } {x - \frac 1 k}$
In particular, we have: 

$t \le x - \dfrac 1 k$
Since: 

$-\dfrac 1 k < 0$
we certainly have: 

$t < x$
and hence: 

$t \in \openint {-\infty} x$
So, we have: 

$\ds \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x - \frac 1 n} \subseteq \openint {-\infty} x$
from the definition of subset.

We now show that: 

$\ds \openint {-\infty} x \subseteq \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x - \frac 1 n}$
Suppose that: 

$t \in \openint {-\infty} x$
Then either: 

$t \le x - 1$
or: 

$x - 1 < t < x$
If: 

$t \le x - 1$
then: 

$\ds t \in \hointl {-\infty} {x - 1}$
so:

$\ds t \in \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x - \frac 1 n}$
Now suppose that: 

$x - 1 < t < x$
Since:

$x_n \to x$
and $\sequence {x_n}_{n \mathop \in \N}$ is increasing, there exists $N \in \N$ such that: 

$\ds t \le x_N$
That is: 

$\ds t \le x - \frac 1 N$
so:

$\ds t \in \hointl {-\infty} {x - \frac 1 N}$
giving: 

$\ds t \in \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x - \frac 1 n}$
We therefore have: 

$\ds \openint {-\infty} x \subseteq \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x - \frac 1 n}$

So, from the definition of set equality, we have: 

$\ds \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x - \frac 1 n} = \openint {-\infty} x$
$\blacksquare$






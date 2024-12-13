# 

Source: https://proofwiki.org/wiki/Non-Zero_Dilation_of_Absorbing_Set_is_Absorbing

Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ be a vector space over $\GF$. 
Let $A \subseteq X$ be an absorbing set.
Let $\lambda \in \GF \setminus \set 0$. 

Then $\lambda A$ is absorbing.


Proof
Let $x \in X$.
Then there exists $t \in \R_{> 0}$ such that: 

$x \in \alpha A$ for $\cmod \alpha \ge t$.
That is: 

$\ds x \in \frac \alpha \lambda \paren {\lambda A}$ for $\cmod \alpha \ge t$.
Since the map $\alpha \mapsto \alpha/\lambda$ is a bijection from $\cmod \alpha \ge t$ to $\cmod \alpha \ge t/\cmod \lambda$, we have:

$\ds x \in \beta \paren {\lambda A}$ for $\cmod \beta \ge \dfrac t {\cmod \lambda}$.
So $\lambda A$ is absorbing.
$\blacksquare$






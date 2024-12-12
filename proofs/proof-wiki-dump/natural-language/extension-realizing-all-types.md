# 

Source: https://proofwiki.org/wiki/Extension_Realizing_All_Types

Theorem
Let $\MM$ be an $\LL$-structure.
Let $M$ be its universe.

There is an elementary extension $\NN$ of $\MM$ such that every type over $M$ (relative to $\MM$) is realized in $\NN$.


Proof
Let $\map S \MM$ denote the set containing all complete types over $M$ of every number of free variables.
Let $\kappa = \size{\map S \MM}$.

Use a bijection between $\kappa$ and $\map S \MM$ to write the elements of $\map S \MM$ as $p_\alpha$ for $\alpha < \kappa$.

For each $\alpha < \kappa$, let $N_\alpha$ be an elementary extension of $\MM$ which has an ordered tuple $\bar a_\alpha$ realizing $p_\alpha$.
Such extensions and tuples exist by Type is Realized in some Elementary Extension.

We will construct the extension claimed by the theorem as the union over a chain of elementary extensions defined using Transfinite Induction.
At each step, we use the Elementary Amalgamation Theorem to add on $N_\alpha$.

Base case $\alpha = 0$:
Let $\BB_0 = \MM$.
Note that $\BB_0$ is an elementary extension of $\MM$ by choice of $\NN_0$.

Limit ordinals $\alpha \le \kappa$:
Let $\ds \BB_\alpha = \bigcup_{\beta \mathop < \alpha} \BB_\beta$
$\BB_\alpha$ is an elementary extension of $\MM$ by Union of Elementary Chain is Elementary Extension.

Successor ordinals $\alpha + 1$ for $\alpha < \kappa$:
We have that $\BB_\alpha$ and $\NN_\alpha$ are both elementary extensions of $\MM$.
By the Elementary Amalgamation Theorem, there is:

an elementary extension $\BB_{\alpha + 1}$ of $\BB_\alpha$
and:

an elementary embedding $g_\alpha: \NN_\alpha \to \BB_{\alpha + 1}$ which is the identity on $M$ viewed as a subset of $\NN_\alpha$.
Note that $\map {g_\alpha} {\bar a_\alpha}$ realizes $p_\alpha$ in $\BB_{\alpha + 1}$ since $g_\alpha$ is elementary.
Thus $\BB_{\alpha + 1}$ is an elementary extension of $\MM$ which contains $\map {g_\alpha} {\bar a_\alpha}$ realizing $p_\alpha$.

Now, let $\ds \BB = \bigcup_{\alpha < \kappa} \BB_\alpha$.
$\BB$ is an elementary extension of each $\BB_\alpha$ by Union of Elementary Chain is an Elementary Extension.

In particular, $\BB$ is an elementary extension of $\BB_0 = \MM$

We have that:

each $p_\alpha$ is realized in $\BB_{\alpha + 1}$ by the corresponding $\map {g_\alpha} {\bar a_\alpha}$
and:

$\BB$ is an elementary extension of each $\BB_{\alpha + 1}$
Thus we have that $\map {g_\alpha} {\bar a_\alpha}$ realizes $p_\alpha$ in $\BB$.
$\blacksquare$






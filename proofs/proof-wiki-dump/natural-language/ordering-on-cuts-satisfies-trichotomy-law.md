# 

Source: https://proofwiki.org/wiki/Ordering_on_Cuts_satisfies_Trichotomy_Law

Theorem
Let $\alpha$ and $\beta$ be cuts.
Then exactly one of the following applies:




\(\text {(1)}: \quad\)









\(\ds \alpha\)

\(<\)







\(\ds \beta\)










\(\text {(2)}: \quad\)









\(\ds \alpha\)

\(=\)







\(\ds \beta\)










\(\text {(3)}: \quad\)









\(\ds \alpha\)

\(>\)







\(\ds \beta\)









where $<$ and so $>$ denote the strict ordering of cuts:

$\alpha < \beta \iff \exists p \in \Q: p \in \alpha, p \notin \beta$
Hence the ordering of cuts $\le$ is a total ordering.


Proof
Let $\alpha = \beta$.
By definition of equality of cuts:

$p \in \alpha \iff p \in \beta$
By definition of strict ordering of cuts it follows that neither $\alpha < \beta$ or $\alpha > \beta$.

Aiming for a contradiction, suppose both $\alpha < \beta$ and $\alpha > \beta$.
Because $\alpha < \beta$ there exists $p \in \Q$ such that:

$p \in \beta, p \notin \alpha$
Because $\alpha > \beta$ there exists $q \in \Q$ such that:

$q \in \alpha, q \notin \beta$
By Rational Number Not in Cut is Greater than Element of Cut:

$p \in \beta$ and $q \notin \beta$ implies $p < q$.
$q \in \alpha$ and $p \notin \alpha$ implies $p > q$.
But from Rational Numbers form Totally Ordered Field, $p < q$ and $p > q$ is not possible.
Hence by Proof by Contradiction, it is not possible for both $\alpha < \beta$ and $\alpha > \beta$.

Suppose either $\alpha < \beta$ or $\alpha > \beta$.
Then by definition of strict ordering of cuts it follows that $\alpha \ne \beta$.

Thus mutual exclusivity of the three conditions has been demonstrated.
That is, at most one of the three conditions holds.
$\Box$

It remains to be shown that at least one of the three conditions holds.
Suppose $\alpha \ne \beta$.
Then by definition of equality of cuts, either:

$\exists p \in \alpha: p \notin \beta$
in which case $\alpha > \beta$, or:

$\exists q \in \beta: q \notin \alpha$
in which case $\alpha < \beta$.
Hence the result.
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.10$. Theorem





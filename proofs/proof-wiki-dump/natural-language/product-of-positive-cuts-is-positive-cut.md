# 

Source: https://proofwiki.org/wiki/Product_of_Positive_Cuts_is_Positive_Cut

Theorem
Let $0^*$ denote the rational cut associated with the (rational) number $0$.
Let $\alpha$ and $\beta$ be cuts such that $\alpha \ge 0^*$ and $\beta \ge 0^*$, where $\ge$ denotes the ordering on cuts.

Let $\gamma$ be the set of all rational numbers $r$ such that either:

$r < 0$
or:

$\exists p \in \alpha, q \in \beta: r = p q$
where $p \ge 0$ and $q \ge 0$.

Then $\gamma$ is also a cut.

Thus the operation of multiplication on the set of positive cuts is closed.


Proof
By definition of $\gamma$, we have that $r < 0 \implies r \in \gamma$.
Hence $\gamma$ is not empty.

First suppose that either $\alpha = 0^*$ or $\beta = 0^*$.
Then by definition of cut:

$p \in \alpha \implies p < 0$
$q \in \beta \implies q < 0$
and so there exist no $r \in \gamma$ such that $r = p q$.
Thus $\gamma$ consists entirely of rational numbers $r$ such that $r < 0$.
That is:

$\gamma = \set {r \in \Q: r < 0}$
and so:

$\gamma = 0^*$
Hence $\gamma$ is a cut, as we needed to demonstrate.
$\Box$

Suppose that neither $\alpha$ nor $\beta$ are equal to $0^*$
That is:

$\alpha > 0$
and:

$\beta > 0$
Hence by definition of cut:

$0 \in \alpha$
and:

$0 \in \beta$
As a cut has no greatest element:

$\exists p \in \alpha: p > 0$
$\exists q \in \alpha: q > 0$
Let $s, t \in \Q$ such that $s \notin \alpha$ and $t \notin \beta$, where $\Q$ denotes the set of rational numbers.
Such $s$ and $t$ are bound to exist because by definition of cut, neither $\alpha$ nor $\beta$ equal $\Q$.
Note that as $\alpha \ge 0^*$ and $\beta \ge 0^*$, it follows by definition of cut that, both $s \ge 0$ and $t \ge 0$.
We have:














\(\ds p\)

\(<\)







\(\ds s\)





Definition of Cut: $s \notin \alpha$














\(\ds q\)

\(<\)







\(\ds t\)





Definition of Cut: $t \notin \beta$








\(\ds \leadsto \ \ \)

\(\ds \forall p \in \alpha, q \in \beta, p > 0, q > 0: \, \)



\(\ds p q\)

\(<\)







\(\ds s t\)





Rational Numbers form Totally Ordered Field








\(\ds \leadsto \ \ \)





\(\ds s t\)

\(\notin\)







\(\ds \gamma\)





Definition of Cut



Thus it is demonstrated that $\gamma$ does not contain every rational number.
Thus condition $(1)$ of the definition of a cut is fulfilled.
$\Box$

Let $r \in \gamma$.
Let $s \in \Q$ such that $s < r$.
If $r < 0$, then $s < 0$ and so $s \in \gamma$ by definition of $\gamma$.
If $r > 0$ and $s < 0$, then $s \in \gamma$ by definition of $\gamma$.
Otherwise, we have the case where $r > 0$ and $s > 0$.
By definition of $\gamma$:

$r = p q$ for some $p \in \alpha, q \in \beta$ such that $p > 0$ and $q > 0$.
Let $t \in \Q$ such that $s = t q$.
Then $0 < t < p$.
Hence $t \in \alpha$.
Hence by definition of $\gamma$, $t q = s \in \gamma$.
Thus we have that $r \in \gamma$ and $s < r$ implies that $s \in \gamma$.
Thus condition $(2)$ of the definition of a cut is fulfilled.
$\Box$

Aiming for a contradiction, suppose $r \in \gamma$ is the greatest element of $\gamma$.
Then $r = p q$ for some $p \in \alpha, q \in \beta$ such that $p > 0$ and $q > 0$.
By definition of a cut, $\alpha$ has no greatest element:
Hence:

$\exists s \in \Q: s > p: s \in \alpha$
But then $s q \in \gamma$ while $s q > r$.
This contradicts the supposition that $r$ is the greatest element of $\gamma$.
Hence $\gamma$ itself can have no greatest element.
Thus condition $(3)$ of the definition of a cut is fulfilled.
$\Box$

Thus it is seen that all the conditions are fulfilled for $\gamma$ to be a cut.
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.22$. Theorem





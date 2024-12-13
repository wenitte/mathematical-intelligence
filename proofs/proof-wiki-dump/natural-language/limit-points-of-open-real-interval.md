# 

Source: https://proofwiki.org/wiki/Limit_Points_of_Open_Real_Interval

Theorem
Let $\struct {\R, \tau_d}$ be the real number line under the usual (Euclidean) topology.
Let $\openint a b$ be an open interval of $\R$.

Then the limit points of $\openint a b$ are:

all the points in $\openint a b$
as well as:

the points $a$ and $b$.


Proof
Let $x \in \openint a b$.
Then by definition $a < x < b$.
Let $N_x$ be an open neighborhood of $x$ in $\R$.
So by Open Superset is Open Neighborhood, $N_x$ is an open set of $\R$ containing $x$.
By Open Sets in Real Number Line, $N_x$ is a countable union of pairwise disjoint open intervals.
As $x \in N_x$, it follows that $\exists U \subseteq N_x$ such that $x \in U$ and:

$\exists p, q \in \R: U = \openint p q$
Let $r = \max \set {a, p}$ and $s = \min \set {b, q}$.
Then as $x > a, x > p$ and $x < b, x < q$ it follows that $x > \max \set {a, p}$ and $x < \min \set {b, q}$.
That is:

$x \in \openint r s$
From Real Numbers are Densely Ordered:

$\exists y \in \R: r < y < x$
and so:

$y \in \openint r s$
By construction, it follows that:

$y \in \openint p q$
That is, $y$ is an element of $\R$ different from $x$ which is also in $N_x$.
As $N_x$ was arbitrary, it follows that every such open neighborhood of $x$ has the same property.
That is, $x$ is a limit point of $\openint a b$.
$\Box$

Let $N_a$ be an open neighborhood of $a$ in $\R$.
So by Open Superset is Open Neighborhood, $N_a$ is an open set of $\R$ containing $a$.
By Open Sets in Real Number Line, $N_a$ is a countable union of pairwise disjoint open intervals.
As $a \in N_a$, it follows that $\exists U \subseteq N_a$ such that $a \in U$ and:

$\exists p, q \in \R: U = \openint p q$
Let $s = \min \set {b, q}$.
As $a < b, a < q$ it follows that $a < \min \set {b, q}$.

That is:

$a \in \openint p s$
From Real Numbers are Densely Ordered:

$\exists y \in \R: a < y < s$
and so:

$y \in \openint p s$
By construction, it follows that:

$y \in \openint p q$
That is, $y$ is an element of $\R$ different from $a$ which is also in $N_a$.
As $N_a$ was arbitrary, it follows that every such open neighborhood of $a$ has the same property.
That is, $a$ is a limit point of $\openint a b$.

By a similar argument it is shown that $a$ is a limit point of $\openint a b$.
$\Box$

Now let:

$x \notin \openint a b \cup \set {a, b}$
Then either:

$x < a$
or

$x > b$
Let $x < a$.
Then by Real Numbers are Densely Ordered:

$\exists q \in \R: x < q < a$
and so $\exists p \in \R$ such that:

$x \in \openint p q$
such that:

$\openint p q \cap \openint a b = \O$
That is, $\openint p q$ is an open set of $\R$ containing $x$ which contains no elements of $\openint a b$.
Hence by definition, $x$ is not a limit point of $\openint a b$.

By a similar argument it is shown that if $x > b$ then $x$ is not a limit point of $\openint a b$.
$\blacksquare$






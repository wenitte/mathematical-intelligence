# 

Source: https://proofwiki.org/wiki/Interval_of_Totally_Ordered_Set_is_Convex


It has been suggested that this page or section be merged into Interval of Ordered Set is Convex.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $\struct {S, \preccurlyeq}$ be a totally ordered set.
Let $I \subseteq S$ be an interval in $S$.

Then $I$ is convex.


Proof
There are a number of cases to investigate.


Open Interval
Let $I = \openint a b$ be an open interval:

$I = \set {x \in S: a \prec x \prec b}$
Let $s, t, x \in I$ such that $s \prec x \prec t$.
Then by definition:

$a \prec s \prec x$
and:

$x \prec t \prec b$
and so:

$a \prec x \prec b$
and $x \in I$.
Thus we have:

$\forall s, t, x, \in I: s \prec x \prec t \implies x \in I$
and $I$ is convex by definition.
$\Box$


Left Half-Open Interval
Let $I = \hointl a b$ be a left half-open interval:

$I = \set {x \in S: a \prec x \preceq b}$
Let $s, t, x \in I$ such that $s \prec x \prec t$.
Then by definition:

$a \prec s \prec x$
and:

$x \prec t \preceq b$
and so:

$a \prec x \preceq b$
and $x \in I$.
Thus we have:

$\forall s, t, x, \in I: s \prec x \prec t \implies x \in I$
and $I$ is convex by definition.
$\Box$


Right Half-Open Interval
Let $I = \hointr a b$ be a right half-open interval:

$I = \set {x \in S: a \preceq x \prec b}$
Let $s, t, x \in I$ such that $s \prec x \prec t$.
Then by definition:

$a \preceq s \prec x$
and:

$x \prec t \prec b$
and so:

$a \preceq x \prec b$
and $x \in I$.
Thus we have:

$\forall s, t, x, \in I: s \prec x \prec t \implies x \in I$
and $I$ is convex by definition.
$\Box$


Closed Interval
Let $I = \closedint a b$ be a closed interval:

$I = \set {x \in S: a \preceq x \preceq b}$
Let $s, t, x \in I$ such that $s \prec x \prec t$.
Then by definition:

$a \preceq s \prec x$
and:

$x \prec t \preceq b$
and so:

$a \preceq x \preceq b$
and $x \in I$.
Thus we have:

$\forall s, t, x, \in I: s \prec x \prec t \implies x \in I$
and $I$ is convex by definition.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $39$. Order Topology: $1$





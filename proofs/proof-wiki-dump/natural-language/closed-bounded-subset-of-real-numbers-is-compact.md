# 

Source: https://proofwiki.org/wiki/Closed_Bounded_Subset_of_Real_Numbers_is_Compact



Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $S \subseteq \R$ be a closed and bounded subspace of $\R$.

Then $S$ is compact in $\R$.


Proof 1
A closed and bounded subspace $S$ of $\R$ is a closed subspace of some closed real interval $\closedint a b$.
From Closed Subspace of Compact Space is Compact, it suffices to prove that $\closedint a b$ is compact.

Let $\UU$ be any open cover of $\closedint a b$.
Let:

$G = \set {x \in \R: x \ge a, \closedint a x \text{ is covered by a finite subset of } \UU}$
Let points in $G$ be classified as $\text{good}$ (for $\UU$).
Thus if $z$ is $\text{good}$, then $\closedint a z$ has that finite subcover that is to be demonstrated for the whole of $\closedint a b$.
The aim therefore is to show that $b$ is $\text{good}$.

Let $x$ be $\text{good}$, and $a \le y \le x$.
We have that $\closedint a y \subseteq \closedint a x$.
Thus $\closedint a y$ can be covered with any finite subset of $\UU$ that covers $\closedint a x$.
As $x$ be $\text{good}$, at least one such subset is known to exist.
Thus, by definition, $y$ is $\text{good}$.

Now we show that $G \ne \O$.
At the same time we show that $G \supseteq \hointr a {a + \delta}$ for some $\delta > 0$.

As $\UU$ covers $\closedint a x$, it follows that $a$ must belong to some $U \in \UU$.
So, let $U \in \UU$ be some open set such that $a \in U$.
Since $U$ is open, $\hointr a {a + \delta} \subseteq U$ for some $\delta > 0$.
Hence $\closedint a x \subseteq U$ for all $x \in \hointr a {a + \delta}$.
It follows that all these $x$ are $\text{good}$.
So $G \ne \O$, and:

$(1): \quad G \supseteq \hointr a {a + \delta}$ for some $\delta > 0$

Now the non-empty set $G$ is either bounded above or it is not.

Suppose $G$ is not bounded above.
Then there is some $c$ which is $\text{good}$ such that $c > b$.
From our initial observation that if $x$ is $\text{good}$, and $a \le y \le x$, then $y$ is $\text{good}$, it follows that $b$ is $\text{good}$, and hence the result.

Now suppose $G$ is bounded above.
By the Continuum Property, $G$ admits a supremum in $\R$.
So let $g = \sup G$.

Suppose that $g > b$.
As $g$ is the least upper bound for $G$, there exists some $c$ which is $\text{good}$ such that $c > b$.
Again, from our initial observation, it follows that $b$ is $\text{good}$, and hence the result.

Aiming for a contradiction, suppose that $g \le b$.
From $(1)$ above:

$\hointr a {a + \delta} \subseteq G$ for some $\delta > 0$
and so $g > a$.
Since $g \in \closedint a b$, $g$ must belong to some $U_0 \in \UU$.
Since $U_0$ is open, there exists some open $\epsilon$-ball $\map {B_\epsilon} g$ of $g$ such that $U_0 \supseteq \map {B_\epsilon} g$.
Since $g > a$, we can arrange that $\epsilon < g - a$.
As $g$ is the least upper bound, there must be a $\text{good}$ $c$ such that $c > g - \epsilon$.
This means $\closedint a c$ is covered by a finite subset of $\UU$, say $\set {U_1, U_2, \ldots, U_r}$.
Then $\closedint a {g + \dfrac \epsilon 2}$ is covered by $\set {U_1, U_2, \ldots, U_r, U_0}$.
So $g + \dfrac \epsilon 2$ is $\text{good}$, contradicting the fact that $g$ is an upper bound for $G$.
This contradiction implies that $g > b$, and the proof is complete.
$\blacksquare$


Proof 2
Let $S$ be closed and bounded.
As $S$ is bounded, there exist some $a, b \in \R$ such that:

$S \subseteq \openint a b$
where $\openint a b$ is the open interval between $a$ and $b$.
It follows that $S \subseteq \closedint a b$.

Consider the set:

$U = \relcomp \R S \cap \openint {a - 1} {b + 1}$
By inspection it can be seen that:

$U = \openint {a - 1} a \cup \openint b {b + 1}$
By Union of Open Sets of Metric Space is Open, it follows that $U$ is open in $\R$.

Let $\CC$ be an open cover for $S$.
Then we can construct the open cover $\CC' = \CC \cup \set U$ for $\closedint a b$.
Let $\FF' \subseteq \CC'$ be a finite subcover of $\CC'$ for $\closedint a b$.
Then $\FF = \FF' \setminus \set U$ is the desired finite subcover for $S$.
Hence it is sufficient to prove that any open cover for $\closedint a b$, has a finite subcover.

So, suppose $S = \closedint a b$ and create the set $T \subseteq \closedint a b$ as follows:
Let $a \le x \le b$.
Then $x \in T$ if and only if $\closedint a x$ has a finite subcover of $\CC$.
We have that $a \in T$ and that $b$ is an upper bound for $T$.
Let $l = \map \sup T$ be the supremum of $T$.
Let $L \in \CC$ such that $l \in L$.
Since $L$ is open:

$\exists \epsilon \in \R_{>0}: \openint {l - \epsilon} {l + \epsilon} \subseteq L$
Since $l = \map \sup T$ there exists $t \in T$ such that $t > l - \epsilon$.
We have that $\FF$ is a finite subset of $\CC$ such that $\ds \closedint a t \subseteq \bigcup \FF$.
Then $\FF \cup \set L$ is a finite subset of $\CC$ whose union contains $\closedint a {l + \delta}$ for every $\delta \in \openint 0 \epsilon$.
Since $l$ is an upper bound for $T$, it follows that $l + \delta \notin T$.
Thus $l + \delta > b$ for all $\delta > 0$.
That is, $l \ge b$.
But by definition, $l \le b$.
So $l = b$ and so $\CC$ has a finite subcover for $\closedint a b$.
$\blacksquare$


Sources
1989: Elon Lages Lima: Análise Real 1: Chapter $5$, Theorem $10$





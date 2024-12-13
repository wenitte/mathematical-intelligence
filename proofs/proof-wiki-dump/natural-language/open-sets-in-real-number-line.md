# 

Source: https://proofwiki.org/wiki/Open_Sets_in_Real_Number_Line


This article needs to be linked to other articles.In particular: Long way to go, this is a laborious taskYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Every non-empty open set $I \subseteq \R$ can be expressed as a countable union of pairwise disjoint open intervals.
If:

$\ds I = \bigcup_{n \mathop \in \N} J_n$
$\ds I = \bigcup_{n \mathop \in \N} K_n$
are two such expressions, then there exists a permutation $\sigma$ of $\N$ such that:

$\forall n \in \N: J_n = K_{\map \sigma n}$


Proof
We know that $\R$ is a complete metric space.
Let $x \in I$.
By the definition of open sets in a metric space, there is an open interval $I_x$, included in $I$, that contains $x$.
Define the following:




\(\text {(1)}: \quad\)









\(\ds \map a x\)

\(=\)







\(\ds \inf \set {z: \openint z x \subseteq I}\)










\(\text {(2)}: \quad\)









\(\ds \map b x\)

\(=\)







\(\ds \sup \set {y: \openint x y \subseteq I}\)









The existence of $I_x$ assures us that we have $\map a x < x < \map b x$.
In this way we associate a non-empty open interval:

$\map J x = \openint {\map a x} {\map b x}$
to $x \in I$.

Let $\epsilon > 0$ be arbitrary.
As $\map a x$ is an infimum, there exists $z < \map  a x + \epsilon$ such that:

$\openint z x \subseteq I$
Thus certainly:

$\openint {\map a x + \epsilon} x \subseteq I$
It follows that we have:

$\ds \openint {\map a x} x = \bigcup_{n \mathop = 1}^\infty \openint {\map a x + \frac 1 n} x  \subseteq I$
By a similar argument:

$\openint x {\map b x} \subseteq I$
Therefore, as we have:

$\map J x = \openint {\map a x} x \cup \set x \cup \openint x {\map b x}$
we conclude that:

$\map J x \subseteq I$

Suppose now that we have $\map a x = -\infty$ or $\map b x = +\infty$.
If both are the case, it must be that $I = \R$, and hence $I$ is open.
It can then also be written uniquely as the pairwise disjoint union of the single open interval $\R$.
In other cases, we observe that intervals of the type:

$\map {K_-} a = \openint {-\infty} a$
or:

$\map {K_+} a = \openint a {+\infty}$
are open.
Assume $I$ contains such an interval $\map {K_\pm} a$ with $a \notin I$.
Then we have:

$\ds I = \paren {I \cap \map {K_-} a} \cup \paren {I \cap \map {K_+} a}$
Thus $I$ is open if and only if $I \setminus \map {K_\pm} a$ is open, since the $\map {K_\pm} a$ are disjoint, open sets.
It is also clear that a unique decomposition of $I \setminus \map {K_\pm} a$ into disjoint open intervals will give rise to such a decomposition for $I$.
Without loss of generality, therefore, we may assume $I$ contains no such interval.

Define a relation $\sim$ on $I$ by $x \sim y$ if and only if $\map J x = \map J y$ (the induced equivalence of $J$).
Then $\sim$ is an equivalence relation on $I$ by Relation Induced by Mapping is Equivalence Relation.
Therefore, by the Fundamental Theorem on Equivalence Relations, $\sim$ partitions $I$.

In fact, the equivalence classes are open intervals. 
To prove this, let $x < y$ with $x, y\in I$. We see that when $x \sim y$, we have $x \in \map J x = \map J y \ni y$. 
Also, when $x \in \map J y$, it follows that $\openint x y \subseteq I$. 
Therefore, we must have:

$\map a x = \map a y$
and:

$\map b x = \map b y$
hence:

$\map J x = \map J y$
This implies that the equivalence class of $x$ is precisely $\map J x$.

Finally, as:

$\openint {\map a x} {\map b x} \ne \O$
by Rationals are Everywhere Dense in Topological Space of Reals there exists:

$q \in \openint {\map a x} {\map b x} \cap \Q$
Therefore each set in the partition of $I$ can be labelled with a rational number.
Since the Rational Numbers are Countably Infinite, the partition is countable.

Then enumerating the disjoint intervals of $I$, we have an expression:

$\ds I = \bigcup_{n \mathop \in \N} J_n $

Now let:

$\ds I = \bigcup_{n \mathop \in \N} J_n,\qquad I = \bigcup_{n \mathop \in \N} K_n$
be two such expression for $I$.
Suppose that there exists $m_0 \in \N$ such that for all $n \in \N$, $K_{m_0} \ne J_n$.
Write $K_{m_0} = \openint {a_0} {b_0}$.
Since $I$ contains $K_{m_0}$ there exists $J_{m_0'} = \openint {a_0'} {b_0'}$ such that $J_{m_0'} \cap K_{m_0} \ne \O$.
This means that either $a_0' \in \openint {a_0} {b_0}$ or $b_0' \in \openint {a_0} {b_0}$.

Therefore either:

$J_{m_0'} \setminus K_{m_0} = \hointr {b_0'} {b_0}$
or:

$J_{m_0'} \setminus K_{m_0} = \hointl {a_0} {a_0'}$
Then we have one of the following two expressions:

$\ds I \setminus K_{m_0} = \bigcup_{n \mathop \ne m_0} \paren {J_n \setminus K_{m_0} } \cup \hointr {b_0'} {b_0}$
$\ds I \setminus K_{m_0} = \bigcup_{n \mathop \ne m_0} \paren {J_n \setminus K_{m_0} } \cup \hointl {a_0} {a_0'}$
Now by Half-Open Real Interval is neither Open nor Closed, and since this union is disjoint, we have that $I\setminus K_{m_0}$ is not open.
On the other hand, we have:

$\ds I \setminus K_{m_0} = \bigcup_{n \mathop \ne m_0} K_n$
which is a union of open sets, hence open.
This contradiction shows that for every $m \in \N$ there exists $\map \sigma m \in \N$ such that $K_m = J_{\map \sigma m}$.
Moreover since the $J_n$, $n \in \N$ are disjoint, there can be only one such $\map \sigma m$, so $\sigma$ is a permutation.
$\blacksquare$






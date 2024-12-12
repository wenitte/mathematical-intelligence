# 

Source: https://proofwiki.org/wiki/Consistency_Principle_for_Binary_Mess



Theorem
Let $S$ be a set.
Let $M$ be a binary mess on $S$.

Then there exists a mapping $f : S \to \Bbb B$ such that:

$f$ is consistent with $M$


Proof

This article, or a section of it, needs explaining.In particular: There's a lot going on here. I'm sure that at least some of it is more general than what is needed to prove the result, so should be pulled out and turned into separate results.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Let $I$ be the set of all finite subsets of $S$.
Recall that by definition of binary mess:

$\ds M \subseteq \bigcup_{P \mathop \in I} \Bbb B^P$
is a set of mappings from finite subsets of $S$ to a Boolean domain.

For every $P \in I$, define:

$M_P = \set {t \in M : \Dom t = P}$
By Binary Mess Axiom $(\text M 2)$ we have that $M_P$ cannot be empty.

For every $J \subseteq I$, define:

$Z_J = \set {z \in M^J : \paren {\forall P \in \Dom z : \map z P \in M_P} \land \paren {\forall P, Q \in \Dom z : t_1 {\restriction_R} = t_2 {\restriction_R} } }$
where:

$t_1 = \map z P$
$t_2 = \map z Q$
$R = \Dom {t_1} \cap \Dom {t_2}$
$M^J$ denotes the set of all mappings from $J$ to $M$.

Define:

$\ds Z = \bigcup_{J \mathop \subseteq I} Z_J$
$X_P = \set {z \in Z : P \in \Dom z}$
$F = \set {X_P : P \in I}$


Non-Emptiness
By Empty Set is Subset of All Sets and Cardinality of Empty Set:

$\O \in I$
Therefore:

$X_\O \in F$
Thus:

$F \ne \O$
$\Box$
Additionally:

$\set \O \in J$
Thus:

$z_\O \in Z_{\set \O}$
where:

$\map z \O = t_\O$
and $t_\O$ is the empty mapping.
Note that $t_\O \in M$ by definition of binary mess and Empty Mapping is Unique.
Therefore, $z_\O \in Z$ and:

$Z \ne \O$
$\Box$


Finite Intersection Property
Let $\set {X_1, \dotsc, X_k} \subset F$ be a non-empty finite subset of $F$.
By definition of $F$, for each $1 \le i \le k$, there is some $P \in I$ such that $X_i = X_P$.
By the Principle of Finite Choice, let:

$\set {P_1, \dotsc, P_k}$
be such that, for all $1 \le i \le k$:

$X_i = X_{P_i}$
Define:

$\ds Q = \bigcup_{i \mathop = 1}^k P_i$
By definition of binary mess, there is some $t \in M$ such that:

$\Dom t = Q$
Define $z : \set {P_1, \dotsc, P_k} \to M$ as:

$\map z P = t {\restriction_P}$
As every $P_i$ is a finite subset of $S$, by definition of binary mess:

$t {\restriction_{P_i} } \in M$
Additionally, as $\Dom t = Q \supseteq P_i$ for every $i$, it follows that:

$\Dom {t {\restriction_{P_i} } } = P_i$
Thus, for every $1 \le i \le k$:

$\map z {P_i} \in M_{P_i}$

Furthermore, for every $i, j$:

$\paren {t {\restriction_{P_i} } } {\restriction_R} = t {\restriction_R} = \paren {t {\restriction_{P_j} } } {\restriction_R}$
where $R = P_i \cap P_j$.
Thus, $z$ satisfies all of the requirements so that:

$z \in Z_{\set P_1, \dotsc, P_k}$
Hence:

$z \in Z$
As every $P_i \in \Dom z$:

$\ds z \in \bigcap_{i \mathop = 1}^k X_{P_i} = \bigcap_{i \mathop = 1}^k X_i$
Therefore, $F$ satisfies the finite intersection property.
$\Box$


Ultrafilter
By the Ultrafilter Lemma: Corollary, there exists an ultrafilter $U$ on $Z$ such that:

$U \supseteq F$

Let $P \in I$ be arbitrary.
For every $t \in M_P$, define:

$Y_t = \set {z \in X_P : \map z P = t}$

Let $t, t' \in M_P$ such that:

$Y_t \in U \land Y_{t'} \in U$
By definition of filter:

$Y_t \cap Y_{t'} \in U$
But then, as $\O \notin U$ by definition:

$\exists z \in Y_t \cap Y_{t'}$
Thus:

$t = \map z P = t'$

Now, suppose there is no $t \in M_P$ such that:

$Y_t \in U$
Then, by definition of ultrafilter, for every $t \in M_P$:

$\relcomp Z {Y_t} = \set {z \in Z : P \notin \Dom z \lor \map z P \ne t}$
As:

$M_P \subseteq \Bbb B^P$
it follows, by:

Set of Mappings between Finite Sets is Finite
Subset of Finite Set is Finite
that $M_P$ is a finite set.
Thus:

$N = \set {M_P} \cup \set {\relcomp Z {Y_t} : t \in M_P} \subseteq U$
is also finite.
Consider an arbitrary $z \in Z$.

If $P \notin \Dom z$, then $z \notin M_P$
Otherwise, there exists some $t \in M_P$ such that $\map z P = t$
But then, $z \notin Y_t$
Thus, for every $z \in Z$:

$z \notin N$
Hence:

$\ds \bigcap N = \O$
contradicting the finite intersection property in the definition of ultrafilter.
Thus, for every $P \in I$, there is a unique $t_P \in M_P$ such that $Y_{t_P} \in U$.


Consistent Mapping
Define $f \subseteq S \times \Bbb B$ as:

$\ds f = \bigcup_{P \mathop \in I} t_P$
For every $x \in S$:

$\Dom {t_{\set x} } = \set x$
Thus:

$\tuple {x, \map {t_{\set x} } x} \in f$
and $f$ is left-total by definition.

Now, suppose that, for $x \in S$:

$\tuple {x, b_1} \in f \land \tuple {x, b_2} \in f$
By definition of $f$, there are $P, Q \in I$ such that:

$\tuple {x, b_1} \in t_P \land \tuple {x, b_2} \in t_Q$
By definition of $t_P$:

$Y_{t_P} \in U \land Y_{t_Q} \in U$
Thus, by definition of filter:

$Y_{t_P} \cap Y_{t_Q} \in U$
But as $\O \notin U$ by definition of filter:

$\exists z \in Y_{t_P} \cap Y_{t_Q}$
That is:

$\exists z \in Z : \set {P, Q} \subseteq \Dom z \land \map z P = t_P \land \map z Q = t_Q$
Equivalently, there exists some $J \subseteq I$ such that:

$\set {P, Q} \subseteq J$
$\exists z \in Z_J : \map z P = t_P \land \map z Q = t_Q$
But by definition of $Z_J$:

$t_P {\restriction_{P \mathop \cap Q} } = t_Q {\restriction_{P \mathop \cap Q} }$
As $x \in \Dom {t_P} \cap \Dom {t_Q} = P \cap Q$:

$\map {t_P {\restriction_{P \mathop \cap Q} } } x = \map {t_Q {\restriction_{P \mathop \cap Q} } } x$
Or, in other words:

$b_1 = b_2$
Thus, $f$ is many-to-one by definition.

Hence, by definition, $f$ is a mapping.
$\Box$

Let $P \in I$ be arbitrary.
By definition of $f$:

$t_P \subseteq f$
By Subset of Many-to-One Relation is Restriction, and $\Dom {t_P} = P$:

$t_P = f {\restriction_P}$
As $t_P \in M_P \subseteq M$:

$f {\restriction_P} \in M$
Therefore, $f$ is consistent with $M$.
$\blacksquare$


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI), by way of Ultrafilter Lemma.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Sources
1973: Thomas J. Jech: The Axiom of Choice: $2.3$ The Prime Ideal Theorem





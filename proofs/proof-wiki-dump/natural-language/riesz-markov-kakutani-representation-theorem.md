# 

Source: https://proofwiki.org/wiki/Riesz-Markov-Kakutani_Representation_Theorem


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: I'm 99% sure integrals with respect to complex measures have not been properly introduced yetYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $\struct {X, \tau}$ be a locally compact Hausdorff space.
Let $\map {C_c} X$ be the space of continuous complex functions with compact support on $X$.
Let $\Lambda$ be a positive linear functional on $\map {C_c} X$.
There exists a $\sigma$-algebra $\MM$ over $X$ which contains the Borel $\sigma$-algebra of $\struct {X, \tau}$.
There exists a unique complete Radon measure $\mu$ on $\MM$ such that:

$\ds \forall f \in \map {C_c} X: \Lambda f = \int_X f \rd \mu$


Notation
For an open set $V \in \tau$ and a mapping $f \in \map {C_c} X$:

$f \prec V \iff \supp f \subset V$
where $\supp f$ denotes the support of $f$.


The validity of the material on this page is questionable.In particular: The proof does not work with this definition. Something should be forgotten. Maybe, $f \prec V \iff 0 \le f \le {\mathbf 1}_V$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

For a compact set $K \subset X$ and a mapping $f \in \map {C_c} X$:

$K \prec f \iff \forall x \in K: \map f x = 1$


Construction of $\mu$ and $\MM$
For every $V \in \tau$, define:

$\map {\mu_1} V = \sup \set {\Lambda f: f \prec V}$

The validity of the material on this page is questionable.In particular: The definition of $\mu_1$ seems wrong, as $\map {\mu_1} V \in \set {0, +\infty}$ for all $V$. Indeed, for each $c>0$, $f \prec V \iff c f \prec V $. This means $\map {\mu_1} V = c \map {\mu_1} V$ for all $c > 0$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Note that $\mu_1$ is monotonically increasing.
That is, for all $V, W \in \tau$ such that $V \subset W$, we have:














\(\ds \map {\mu_1} V\)

\(=\)







\(\ds \sup \set {\Lambda f: \supp f \subset V}\)




















\(\ds \)

\(\le\)







\(\ds \sup \set {\Lambda f: \supp f \subset W}\)

\(\ds = \map {\mu_1} W\)







$\Box$
For every other subset $E \subset X$, define:

$\map \mu E = \inf \set {\map {\mu_1} V: V \supset E \land V \in \tau}$
Since $\mu_1$ is monotonically increasing:

$\mu_1 = \mu {\restriction_\tau}$
Define:

$\MM_F = \set {E \subset X : \map \mu E < \infty \land \map \mu E = \sup \set {\map \mu K: K \subset E \land K \text { compact} } }$
Define:

$\MM = \set {E \subset X : \forall K \subset X \text { compact}: E \cap K \in \MM_F}$


Proof
Lemma $1$
$\mu$ is countably subadditive.
$\Box$


Lemma $2$
Let $K \subset X$ be compact.
Then:

$K \in \MM_F$
and:

$\map \mu K = \inf \set {\Lambda f : K \prec f}$
$\Box$


Lemma $3$
$\mu$ is countably additive over pairwise disjoint collections of compact sets.
$\Box$


Lemma $4$
$\mu$ is countably additive over pairwise disjoint collections of subsets of $\MM_F$.
$\Box$


Lemma $5$
$\set {V \in \tau: \map \mu V < \infty} \subset \MM_F$
$\Box$


Lemma $6$
For all $E \in \MM_F$ and $\epsilon \in \R_{>0}$, there exist some compact $K \in X$ and some $V \in \tau$ such that:

$K \subset E \subset V$
and:

$\map \mu {V \setminus K} < \epsilon$
$\Box$


Lemma $7$
The union, if of finite measure, of countable pairwise disjoint subsets of $\MM_F$ is in $\MM_F$.
$\Box$


Lemma $8$
$\MM_F$ is closed under set difference, union and intersection.
$\Box$


Lemma $9$
$\MM_F = \set {E \in \MM: \map \mu E < \infty}$
$\Box$

Let $K\subset X$ be compact. 
Suppose $A \in \MM$. 
Then, by Lemma $8$: 

$A^C \cap K = K \setminus \paren {A \cap K} \in \MM_F$
So, $\MM$ is closed under complement. 
Let $\sequence {A_n} \in \MM^\N$ and $A = \ds \bigcup_{i \mathop = 1}^\infty$.
Let $B_1 = A_1 \cap K$ and:

for $n \ge 2: B_n = \paren {A_n \cap K} \setminus \ds \bigcup_{i \mathop = 1}^{n - 1} B_i$
$\sequence {B_n}$ is disjoint and, by Lemma $8$, a sequence of $\MM_F$.
Then, by Lemma $7$:

$A \cap K = \ds \bigcup_{i \mathop = 1}^\infty \in \MM_F$
Therefore, $M$ is closed under countable union. 
Now:

$C \text{ closed} \implies C \cap K \text{ compact} \implies C \cap K \in \MM_F \implies C \in \MM$.
Therefore, by Borel $\sigma$-algebra generated by closed sets, $\MM$ is a $\sigma$-algebra which contains the Borel $\sigma$-algebra of $\struct {X, \tau}$.
Now, by Lemma $2$, the definition of $\mu$, Lemma $9$ and Lemma $4$, $\mu$ is a Radon measure on $\MM$.
Let $f \in \map {C_c} X $ be real. 
Let $K = \supp f$ and $\epsilon \in \R_{>0}$.
Let $\tuple {a, b} \in \R^2$ be such that $\closedint a b \supset K$.
Choose $\sequence {y_i} \in \R^n$ such that for all $i$, $y_i - y_{i - 1} < \epsilon$ and:

$y_0 < a < y_1 < \cdots < y_n = b$
Define:

$E_i = \map {f^{-1} } {\hointl {y_{i - 1} } {y_1} } \cap K$
By definition of $\mu$, there exist open sets $W_i \supset E_i$ such that:

$\map \mu {W_i} < \map \mu {E_i} + \dfrac \epsilon n$
Define:

$V_i = W_i \cap \map {f^{-1} } {\openint \gets {y_i + \epsilon} }$
Let $\set {h_i}$ be a partition of unity on $K$ subordinate to $\set {V_i}$. 
Then $\ds f = \sum h_i f$ on $K$ and, by Lemma 2:

$\ds \map \mu K \le \Lambda \sum_{i \mathop = 1}^n h_i = \sum_{i \mathop = 1}^n \Lambda h_i$
Since, for all $i$, for all $x \in E_i$:

$h_i f \le \paren {y_i + \epsilon} h_i$
and:

$y_i - \epsilon < \map f x$
we have:














\(\ds \Lambda f\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map \Lambda {h_i f}\)




















\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 1}^n \paren {y_i + \epsilon} \Lambda h_i\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {\size a + y_i + \epsilon} \Lambda h_i - \size a \sum_{i \mathop = 1}^n \Lambda h_i\)




















\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 1}^n \paren {\size a + y_i + \epsilon} \paren {\map \mu {E_i} + \dfrac \epsilon n} - \size a \map \mu K\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {y_i - \epsilon} + 2 \epsilon \map \mu K + \frac \epsilon  n \sum_{i \mathop = 1}^n \paren {\size a + y_i + \epsilon}\)




















\(\ds \)

\(\le\)







\(\ds \int_X f \rd \mu + \epsilon \paren {2 \map \mu K + \size a + b + \epsilon}\)









Since $\epsilon$ was arbitrary, for all real $f \in \map{C_c} X$:

$\Lambda f \le \int_X f \rd \mu$
Now, by linearity of $\Lambda$:

$-\Lambda f = \map \Lambda {-f} \le \int_X \paren {-f} \rd \mu = -\int_X f \rd \mu$
Therefore, for all real $f \in \map {C_c} X$:

$\Lambda f = \int_X f \rd \mu$

Suppose $u, v \in \map {C_c} X$ are real.
Then by linearity of $\Lambda$:

$\map \Lambda {u + i v} = \Lambda u + i \Lambda v = \int_X u \rd \mu + i \int_X v \rd \mu = \int_X \paren {u + i v} \rd \mu$













\(\ds \map \Lambda {u + i v}\)

\(=\)







\(\ds \Lambda u + i \Lambda v\)




















\(\ds \)

\(=\)







\(\ds \int_X u \rd \mu + i \int_X v \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_X \paren {u + i v} \rd \mu\)









That is, equality holds for all functions in $\map {C_c} X$.
Suppose $\mu_1$ and $\mu_2$ are two Radon measures on $\MM$. 
For all compact $K \subset X$ and $\epsilon>0$, there exists an open $V \supset K$ such that:

$\map {\mu_2} V < \map {\mu_2} K + \epsilon$
By Urysohn's Lemma, there exists:

$f \in \map{C_c} X: K \prec f \prec V$
Then:














\(\ds \map {\mu_1} K\)

\(=\)







\(\ds \int_X \chi_K \rd \mu_1\)




















\(\ds \)

\(\le\)







\(\ds \int_X f \rd \mu_1\)




















\(\ds \)

\(=\)







\(\ds \Lambda f\)




















\(\ds \)

\(=\)







\(\ds \int_X f \rd \mu_2\)




















\(\ds \)

\(\le\)







\(\ds \int_X \chi_V \rd \map {\mu_2} V\)




















\(\ds \)

\(=\)







\(\ds \map {\mu_2} V\)




















\(\ds \)

\(<\)







\(\ds \map {\mu_2} K + \epsilon\)









Thus:

$\map {\mu_1} K \le \map {\mu_2} K$
Interchanging $\mu_1$ and $\mu_2$ yields the opposite inequality.
Therefore, $\mu_1$ and $\mu_2$ coincide on all compact sets. 
By the definition of a Radon measure, the measure of all measurable sets is uniquely determined by the measures of the compact sets. 
So:

$\mu_1 = \mu_2$
and the measure is unique, completing the proof.
$\blacksquare$


Source of Name
This entry was named for Frigyes Riesz, Andrey Andreyevich Markov Jr. and Shizuo Kakutani.






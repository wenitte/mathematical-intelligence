# 

Source: https://proofwiki.org/wiki/Riesz-Markov-Kakutani_Representation_Theorem/Lemma_1



Lemma for Riesz-Markov-Kakutani Representation Theorem
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


Lemma
$\mu$ is countably subadditive.


Proof
Let $V_1$ and $V_2$ be open subsets of $X$.
Let $g \in \map {C_c} X: g \prec V_1 \cup V_2$.
Let $\set {h_1, h_2}$ be a partition of unity subordinate to $\set {V_1, V_2}$.
By linearity of $\Lambda$ and the definition of $\mu$:














\(\ds \Lambda g\)

\(=\)







\(\ds \map \Lambda {h_1 g + h_2 g}\)




















\(\ds \)

\(=\)







\(\ds \Lambda h_1 g + \Lambda h_2 g\)




















\(\ds \)

\(\le\)







\(\ds \map \mu {V_1} + \map \mu {V_2}\)










Since $g$ was arbitrary, by the definition of $\mu$, $\mu$ is subadditive over $\tau$.
Applying Principle of Mathematical Induction yields the countable subadditivity of $\mu$ over $\tau$.


This article, or a section of it, needs explaining.In particular: How does the countable subbaditivity follow from the finite subadditivity? It needs a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\sequence{E_i}\in X^\N$.
By definition of $\mu$, for all $E_i$, for all $\epsilon \in \R_{>0}$, there exists an open $V_i \supset E_i$ such that:

$\map \mu {V_i} \le \map \mu {E_i} + 2^{-i} \epsilon$
Therefore, by $\ds \bigcup_{i \mathop = 1}^\infty V_i \supset \bigcup_{i \mathop = 1}^\infty E_i$, monotonicity of $\mu$, and countable subadditivity of $\mu$ over $\tau$:

$\ds \map \mu {\bigcup_{i \mathop = 1}^\infty E_i} \le \map \mu {\bigcup_{i \mathop = 1}^\infty V_i} \le \epsilon + \sum_{i \mathop = 1}^\infty \map \mu {E_i}$
Since $\epsilon$ was arbitrary, $\mu$ is countably subadditive over $X$.
$\blacksquare$






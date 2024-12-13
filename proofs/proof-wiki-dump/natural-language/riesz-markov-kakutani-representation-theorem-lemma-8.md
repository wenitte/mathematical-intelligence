# 

Source: https://proofwiki.org/wiki/Riesz-Markov-Kakutani_Representation_Theorem/Lemma_8



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
$\MM_F$ is closed under set difference, union and intersection.


Proof
Let $\tuple {A, B} \in \paren {\MM_F}^2$.

By Lemma 6, there exist compact sets $K_1, K_2$ and open sets $V_1, V_2$ such that:

$K_1 \subset A \subset V_1$
$K_2 \subset B \subset V_2$
and:

$\forall i \in \set {1, 2}: \map \mu {V_i \setminus K_i} < \dfrac \epsilon 2$
Now:














\(\ds A \setminus B\)

\(\subset\)







\(\ds V_1 \setminus K_2\)




















\(\ds \)

\(\subset\)







\(\ds \paren {V_1 \setminus K_1} \cup \paren {K_1 \setminus V_2} \cup \paren {V_2 \setminus K_2}\)










So, by Lemma 1:

$\map \mu {A_B} \le \map \mu {K_1 \setminus V_2} + \epsilon$
By Closed Subspace of Compact Space is Compact:

$K_1 \setminus V_2$ is compact.
Since $K_1 \setminus V_2 \subset A \setminus B$, there exist compact subsets of $A \setminus B$ arbitrarily close in measure to $A \setminus B$.
So:

$A \setminus B \in \MM_F$.
Now, by Lemma 7:

$A \cup B = \paren {A \setminus B} \cup B \in \MM_F$
and:

$A \cap B = A \setminus \paren {A \setminus B} \in \MM_F$.
$\blacksquare$






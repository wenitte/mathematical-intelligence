# 

Source: https://proofwiki.org/wiki/Component_of_Complement_of_Jordan_Curve_has_Curve_as_Boundary



Theorem
Let $\phi : \closedint 0 1 \to \R^2$ be a Jordan curve.
Let $J = \phi \closedint 0 1$ be the image of $\phi$.
Suppose that $\R^2 \setminus J$ has at least two distinct components.

Then, for any component $U$ of $\R^2 \setminus J$:

$\partial U = J$
where $\partial U$ denotes the boundary of $U$.


Proof
By:

Closed Real Interval is Compact
Continuous Image of Compact Space is Compact
it follows that $J$ is compact.
Therefore, by Compact Subspace of Hausdorff Space is Closed:

$J$ is closed in $\R^2$
so by definition of closed:

$\R^2 \setminus J$ is open in $\R^2$
By definition of locally connected:

Each component of $\R^2 \setminus J$ is open

Let $W$ be the union of all components of $\R^2 \setminus J$, excluding $U$.
By Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets, $W$ is open.
Additionally:

$U \cup W = \R^2 \setminus J$
$U \cap W = \O$
By Open Set Disjoint from Set is Disjoint from Closure and the definition of closure:

$\paren {U \cup \partial U} \cap W = \O$
By Intersection Distributes over Union, Set is Subset of Union, Subset of Empty Set:

$\partial U \cap W = \O$

Combining the above with Set is Open iff Disjoint from Boundary, we get:

$\partial U \cap \paren {\R^2 \setminus J} = \O$
That is:

$\partial U \subseteq J$


Jordan Arc
Aiming for a contradiction, suppose $\partial U \subsetneq J$.
That is, there is some $\bsx_0 \in J \setminus U$.
As $\bsx_0 \notin U^-$ and Set is Closed iff Equals Topological Closure:

$\bsx_0 \in \paren {U^-}^e$
where $U^e$ denotes the exterior of $U$.
But then, by definition of exterior:

$\bsx_0$ is an interior point of $\R^2 \setminus U^-$
That is:

There is an open neighborhood $N_{\bsx_0}$ such that $N_{\bsx_0} \subseteq \R^2 \setminus U^-$
By definition of continuous:

$\phi^{-1} \sqbrk {N_{\bsx_0}}$ is a neighborhood of all $t_0 \in \closedint 0 1$ such that $\map \phi {t_0} = \bsx_0$
If $t_0 \in \openint 0 1$, let $\epsilon > 0$ be such that:

$\openint {t_0 - \epsilon} {t_0 + \epsilon} \subseteq \phi^{-1} \sqbrk {N_{\bsx_0}}$
where $a < t_0 - \epsilon < t_0 + \epsilon < b$, which exists by definition of neighborhood and of topology induced by metric.
Then, $\phi^* : \closedint 0 1 \to J$ defined as:

$\map {\phi^*} t = \begin{cases} \map \phi {2 t + \paren {1 - 2 t} \paren {t_0 + \epsilon}} & : t \in \closedint 0 {\dfrac 1 2} \\ \map \phi {\paren {2 t - 1} \paren {t_0 - \epsilon}} & : t \in \closedint {\dfrac 1 2} 1 \end{cases}$
is a continuous injection, and thus a Jordan arc.
Additionally:

$\phi^* \closedint 0 1 \supseteq J \setminus N_{\bsx_0} \supseteq \partial U$

Now, suppose $t_0 = 0, 1$.
By definition of Jordan curve, it immediately follows that both $0, 1$ satisfy $\map \phi {t_0} = \bsx_0$.
Therefore, there is some $\epsilon > 0$ such that:

$\hointr 0 \epsilon \cup \hointl {1 - \epsilon} 1 \subseteq \phi^{-1} \sqbrk {N_{\bsx_0}}$
Then, $\phi^* : \closedint 0 1 \to J$ defined as:

$\map {\phi^*} t = \map \phi {\paren {1 - t} \epsilon + t \paren {1 - \epsilon}}$
is also a Jordan arc, and satisfies:

$\phi^* \closedint 0 1 \supseteq \partial U$


Extension
By Compact Subspace of Metric Space is Bounded:

$J$ is bounded
Therefore, by Complement of Bounded Set has Exactly One Unbounded Component, and the assumption that there are at least two components of $\R^2 \setminus J$:

There exists a bounded component of $\R^2 \setminus J$
If $U$ is bounded:

Let $o \in U$ be arbitrary
Otherwise:

Let $o \in \R^2 \setminus J$ be contained in a bounded component.

By definition of bounded, it follows that there exists some $K > 0$ such that:

$J \subseteq \map {B_K} o$
where $\map {B_K} o$ denotes the open ball with radius $K$ and center $o$.


This page or section has statements made on it that ought to be extracted and proved in a Theorem page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
From the proof of Complement of Bounded Set has Exactly One Unbounded Component, it follows that $\partial \map {B_K} o$ is contained in the unique unbounded component of $\R^2 \setminus J$.
As $\phi^*$ is a injection, by Injection to Image is Bijection, we can consider:

$\phi^* : \closedint 0 1 \to A$
as a bijection, where $A = \phi^* \closedint 0 1$.
Then, ${\phi^*}^{-1}$ is a mapping by definition of bijection.

Additionally, since $\closedint 0 1$ is compact by Closed Real Interval is Compact, by Continuous Bijection from Compact to Hausdorff is Homeomorphism:

${\phi^*}^{-1}$ is continuous
Therefore, by the Tietze Extension Theorem, there exists a continuous extension of ${\phi^*}^{-1}$:

$r : D \to \R$
where $D = {\map {B_K} o}^-$.
By Minimum Rule for Continuous Functions and Maximum Rule for Continuous Functions, $r^* : D \to \closedint 0 1$, defined as:

$\map {r^*} \bsx = \begin{cases} 0 & : \map r \bsx < 0 \\ \map r \bsx & : 0 \le \map r \bsx \le 1 \\ 1 & : \map r \bsx > 1 \end{cases}$
is also continuous.


Fixed Point
We will now define $q : D \to D \setminus \set o$.
If $U$ is bounded, then:

$\map q \bsz = \begin{cases} \map {\phi^*} {\map {r^*} \bsz} & : \bsz \in U^- \\ \bsz & : \bsz \in D \setminus U \end{cases}$
If $U$ is unbounded, then:

$\map q \bsz = \begin{cases} \bsz & : \bsz \in U^- \\ \map {\phi^*} {\map {r^*} \bsz} & : \bsz \in D \setminus U \end{cases}$
In order for these to be well-defined, it is required that:

$\map {\phi^*} {\map {r^*} \bsz} = \bsz$
for all $\bsz \in \partial U$.

We have already shown that $\partial U \subseteq A$, so:














\(\ds \map {\phi^*} {\map {r^*} \bsz}\)

\(=\)







\(\ds \map {\phi^*} {\map { {\phi^*}^{-1} } \bsz}\)





As $r$ extends $\phi^*$, and is thus on $\closedint 0 1$














\(\ds \)

\(=\)







\(\ds \bsz\)










This page or section has statements made on it that ought to be extracted and proved in a Theorem page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Additionally, $q$ is continuous.
Finally, to show that $o \notin \Img q$, observe that $o$ is always contained in the set such that:

$\map q o = \map {r^*} o \in A$

Now, we define $p : D \setminus \set o \to \partial D$ as:

$\map p \bsx = o - \dfrac K {\norm {\bsx - o}} \paren {\bsx - o}$
where $K$ is the radius of $D$.
$p$ is clearly continuous by Combination Theorem for Continuous Mappings on Metric Space.

We want to show that $p \circ q : D \to D$ has no fixed point.
As $\Img p \subseteq \partial D$, it is clear that any fixed point must be in $\partial D$.
As such, let $\bsx \in \partial D$ be arbitrary.
As $\bsx$ is in the unbounded component of $\R^2 \setminus J$, it is either:

In $D \setminus U$ if $U$ is bounded
In $U^-$ if $U$ is unbounded
Thus, in either case:

$\map q \bsx = \bsx$
Therefore:














\(\ds \map {\paren {p \circ q} } \bsx\)

\(=\)







\(\ds \map p \bsx\)




















\(\ds \)

\(=\)







\(\ds o - \dfrac K {\norm {\bsx - o} } \paren {\bsx - o}\)





Definition of $p$














\(\ds \)

\(=\)







\(\ds o - \paren {\bsx - o}\)





$\bsx \in \partial D$














\(\ds \)

\(=\)







\(\ds 2 o - \bsx\)














\(\ds \leadsto \ \ \)





\(\ds \norm {\map {\paren {p \circ q} } \bsx - \bsx}\)

\(=\)







\(\ds \norm {2 o - 2 \bsx}\)




















\(\ds \)

\(=\)







\(\ds 2 K\)





$\bsx \in \partial D$








\(\ds \leadsto \ \ \)





\(\ds \map {p \circ q} \bsx\)

\(\ne\)







\(\ds \bsx\)





Norm Axiom $\text N 1$: Positive Definiteness



Therefore, $p \circ q : D \to D$ has no fixed point.
But by Brouwer's Fixed Point Theorem, it must have a fixed point.
This is a contradiction, so our assumption that $\partial U \subsetneq J$ was false.
Thus, by Proof by Contradiction:

$\partial U = J$
$\blacksquare$


Sources
1984: Ryuji Maehara: The Jordan Curve Theorem Via the Brouwer Fixed Point Theorem (Amer. Math. Monthly Vol. 91, no. 10: pp. 641 – 643)  www.jstor.org/stable/2323369





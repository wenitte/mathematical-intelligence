# 

Source: https://proofwiki.org/wiki/Banach-Alaoglu_Theorem/Lemma_3


This article needs to be linked to other articles.In particular: Banach-Alaoglu Theorem/Proof 2You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma for Banach-Alaoglu Theorem
Let $X$ be a normed vector space.
Denote by $B$ the closed unit ball in $X$.
Let $X^*$ be the dual of $X$.
Denote by $B^*$ the closed unit ball in $X^*$.
Let $\map \FF B = \closedint {-1} 1^B$ be the topological space of functions from $B$ to $\closedint {-1} 1$.
By Tychonoff's Theorem, $\map \FF B$ is compact with respect to the product topology.
We define the restriction map:

$R: B^* \to \map \FF B$
by:

$\map R \psi = \psi \restriction_B$

$R \sqbrk {B^*}$ is a closed subset of $\map \FF B$.


Proof
Below, we will show that $f \in R \sqbrk {B^*}$ if and only if:




\(\text {(1)}: \quad\)





\(\ds \forall x,y \in B: \, \)



\(\ds x + y \in B\)

\(\implies\)







\(\ds \map f {x + y} = \map f x + \map f y\)










\(\text {(2)}: \quad\)





\(\ds \forall x \in B, \alpha \in \R_{>0}: \, \)



\(\ds \alpha x \in B\)

\(\implies\)







\(\ds \map f {\alpha x} = \alpha \map f x\)










First, we see how the result follows from the above claim.
That is, we show that $\map \FF B \setminus R \sqbrk {B^*}$ is open.
For $u \in \closedint {-1} 1$ and $r \in \R_{>0}$, let $\map {I_r} u$ denote the open $r$-ball of $u$ in $\closedint {-1} 1$, i.e.:

$\map {I_r} u := \openint {u - r} {u + r} \cap \closedint {-1} 1$

Let $f \in \map \FF B \setminus R \sqbrk {B^*}$
It suffices to find an open set $U_f$ in $\map \FF B$ such that:

$f \in U_f \subseteq \map \FF B \setminus R \sqbrk {B^*}$
In view of the claim above, either $(1)$ or $(2)$ must fail for $f$.
Suppose $(1)$ fails.
That is, there exist $x, y \in B$ such that $x + y \in B$ satisfying:

$3 \epsilon := \size {\map f x + \map f y - \map f {x + y} } > 0$
Thus we can choose:

$U_f := \pr_x^{-1} \sqbrk { \map {I_\epsilon} {\map f x} } \cap \pr_y^{-1} \sqbrk { \map {I_\epsilon} {\map f y} } \cap \pr_{x+y}^{-1} \sqbrk { \map {I_\epsilon} {\map f {x+y} } }$

Suppose $(2)$ fails.
That is, there exist $x \in B$ and $\alpha \in \R_{>0}$ such that $\alpha x \in B$ satisfying:

$2 \epsilon := \size {\map f {\alpha x} - \alpha \map f x} > 0$
Thus we can choose:

$U_f := \pr_{\alpha x}^{-1} \sqbrk { \map {I_\epsilon} { \map f {\alpha x} } } \cap \pr_x^{-1} \sqbrk { \map {I_{\epsilon / \alpha } } {\map f x} }$
$\Box$

Now, we show the above claim.
Let $f \in R \sqbrk {B^*}$.
That is, there is a $\psi \in B^\ast$ such that $f = \map R \psi$.
$\psi$ satisfies both $(1)$ and $(2)$, as $\psi \in X^\ast$, especially.
Thus $f$ also satisfies them, because it is a restriction of $\psi$.

Conversely, let $f \in \map \FF B$ be satisfying $(1)$ and $(2)$.
Then, define a mapping $\phi : X \to \R$ by:

$\forall x \in X \setminus \set 0 : \map \psi x := \norm x \map f {\dfrac x {\norm x} }$
and $\map \psi 0 := 0$.
We show that $\psi \in B^\ast$ such that $\map R \psi = f$.
Observe that $\map f 0 = 0$, since $\map f 0 = \map f {0 + 0} = \map f 0 + \map f 0$ by $(1)$.
Thus, for $x \in X$ such that $x \ne 0$:














\(\ds \map \psi x + \map \psi {-x}\)

\(=\)







\(\ds \norm x \map f {\frac x {\norm x} } + \norm {-x} \map f {\frac {-x} {\norm {-x} } }\)





Definition of $\psi$














\(\ds \)

\(=\)







\(\ds \norm x \paren {\map f {\frac x {\norm x} } +  \map f {\frac {-x} {\norm x } } }\)




















\(\ds \)

\(=\)







\(\ds \norm x \paren {\map f {\frac x {\norm x} + \frac {-x} {\norm x } } }\)





by $(1)$














\(\ds \)

\(=\)







\(\ds \norm x \map f 0\)




















\(\ds \)

\(=\)







\(\ds 0\)









Furthermore, for all $x,y \in X$ such that $x + y \ne 0$:














\(\ds \map \psi {x+y}\)

\(=\)







\(\ds \norm {x + y} \map f {\frac {x+y} {\norm {x+y} } }\)





Definition of $\psi$














\(\ds \)

\(=\)







\(\ds \norm {x + y} \map f {\frac {\norm x + \norm y}{\norm {x+y} }  \frac {x+y} {\norm x + \norm y } }\)




















\(\ds \)

\(=\)







\(\ds \norm {x + y} \frac {\norm x + \norm y}{\norm {x+y} }  \map f { \frac {x+y} {\norm x + \norm y } }\)





by $(2)$














\(\ds \)

\(=\)







\(\ds \paren {\norm x + \norm y} \map f { \frac x {\norm x + \norm y } + \frac y {\norm x + \norm y }  }\)




















\(\ds \)

\(=\)







\(\ds \paren {\norm x + \norm y} \paren { \map f { \frac x {\norm x + \norm y } }+ \map f {\frac y {\norm x + \norm y }  } }\)





by $(1)$














\(\ds \)

\(=\)







\(\ds \paren {\norm x + \norm y} \map f { \frac x {\norm x + \norm y } } + \paren {\norm x + \norm y}\map f {\frac y {\norm x + \norm y }  }\)




















\(\ds \)

\(=\)







\(\ds \paren {\norm x + \norm y} \map f { \frac {\norm x} {\norm x + \norm y } \frac x {\norm x} } + \paren {\norm x + \norm y}\map f {\frac {\norm y} {\norm x + \norm y } \frac x {\norm y }  }\)




















\(\ds \)

\(=\)







\(\ds \paren {\norm x + \norm y} \frac {\norm x} {\norm x + \norm y }  \map f { \frac x {\norm x} } + \paren {\norm x + \norm y} \frac {\norm y} {\norm x + \norm y } \map f { \frac x {\norm y }  }\)





by $(2)$














\(\ds \)

\(=\)







\(\ds \norm x \map f { \frac x {\norm x} } + \norm y \map f { \frac x {\norm y }  }\)




















\(\ds \)

\(=\)







\(\ds \map \psi x + \map \psi y\)





Definition of $\psi$



Thus for $x,y \in X$:

$\map \psi {x+y} = \map \psi x + \map \psi y$
In particular, for all $x \in X$:

$\map \psi {-x} = - \map \psi x$
For $x \in X$ and $\alpha \in \R$ such that $\alpha x \ne 0$:














\(\ds \map \psi {\alpha x}\)

\(=\)







\(\ds \norm {\alpha x} \map f {\frac {\alpha x} {\norm {\alpha x} } }\)





Definition of $\psi$














\(\ds \)

\(=\)







\(\ds \size \alpha \norm x \map f {\frac {\map \sgn \alpha x} {\norm x} }\)




















\(\ds \)

\(=\)







\(\ds \size \alpha \norm x \map \sgn \alpha \map f {\frac {x} {\norm x} }\)





by $(2)$














\(\ds \)

\(=\)







\(\ds \alpha \norm x \map f {\frac {x} {\norm x} }\)




















\(\ds \)

\(=\)







\(\ds \alpha \map \psi x\)





Definition of $\psi$



We also have by Definition of $\psi$:

$\forall x \in X \setminus \set 0 : \size {\map \psi x} = \norm x \size {\map f {\frac x {\norm x} } } \le \norm x$
Thus $\psi \in B^\ast$.

Finally, we have $\map R \psi = f$, since for all $x \in B \setminus \set 0$:














\(\ds \map \psi x\)

\(=\)







\(\ds \norm x \map f {\frac x {\norm x } }\)





by Definition of $\psi$














\(\ds \)

\(=\)







\(\ds \norm x \frac 1 {\norm x} \map f x\)





by $(2)$














\(\ds \)

\(=\)







\(\ds \map f x\)









and $\map \psi 0 = 0 = \map f 0$.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: More detailsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$






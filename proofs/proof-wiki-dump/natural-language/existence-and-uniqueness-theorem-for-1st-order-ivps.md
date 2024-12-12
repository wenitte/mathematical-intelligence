# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_Theorem_for_1st_Order_IVPs


It has been suggested that this page be renamed.In particular: Ought to be renamed, this covers pretty much all IVPsTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $x' = \map f {t, x}$, $\map x {t_0} = x_0$ be an explicit ODE of dimension $n$.
Let there exist an open ball $V = \sqbrk {t_0 - \ell_0, t_0 + \ell_0} \times \map {\overline B} {x_0, \epsilon}$ of $\tuple {t_0, x_0}$ in phase space $\R \times \R^n$ such that $f$ is Lipschitz continuous on $V$.


This article, or a section of it, needs explaining.In particular: Notation needs to be explained: $\sqbrk {t_0 - \ell_0, t_0 + \ell_0}$ looks as though it should be an interval (and so needs to be written in Wirth interval notation $\closedint {t_0 - \ell_0} {t_0 + \ell_0}$ so as to abide by house style rules), and $\tuple {t_0, x_0}$ is probably an ordered pair. It's not clear enough. The immediate confusion arises because as $\closedint {t_0 - \ell_0} {t_0 + \ell_0}$ is a closed interval it is counter-intuitive for it to be one of the factors of an open ball expressed as a Cartesian product.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then there exists $\ell < \ell_0$ such that there exists a unique solution $\map x t$ defined for $t \in \closedint {t_0 - \ell_0} {t_0 + \ell_0}$.


This article, or a section of it, needs explaining.In particular: what is an "IVP"?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
For $0 < \ell < \ell_0$, let $\XX = \map \CC {\closedint {t_0 - \ell_0} {t_0 + \ell_0}; \R^n}$ endowed with the sup norm be the Banach Space of Continuous Functions on Compact Space $\closedint {t_0 - \ell_0} {t_0 + \ell_0} \to \R^n$.
By Fixed Point Formulation of Explicit ODE it is sufficient to find a fixed point of the map $T: \XX \to \XX$ defined by:

$\ds \map {\paren {T x} } t = x_0 + \int_{t_0}^t \map f {s, \map x s} \rd s$

This article, or a section of it, needs explaining.In particular: Notation not clear: what actually does $T x$ mean? And is $x$ that fixed point posited?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We also have Closed Subset of Complete Metric Space is Complete.
Therefore the Banach Fixed-Point Theorem it is sufficient to find a non-empty subset $\YY \subseteq \XX$ such that:

$\YY$ is closed in $\XX$
$T \YY \subseteq \YY$
$T$ is a contraction on $\YY$

This article, or a section of it, needs explaining.In particular: Notation not clear: what does $T \YY$ mean?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
First note that $V$ is closed and bounded, hence compact by the Heine-Borel Theorem.


The validity of the material on this page is questionable.In particular: For Heine-Borel Theorem to apply, $V$ needs to be demonstrated to be not only bounded, but also Definition:Totally Bounded Metric Space.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Therefore since $f$ is continuous, by the extreme value theorem, the maximum $\ds m = \sup_{\tuple {t, x} \mathop \in V} \size {\map f {t, x} }$ exists and is finite.
Let $\kappa$ be the Lipschitz constant of $f$.
Let:

$\YY = \set {y \in \XX: \norm {\map y t - x_0} \le m \size {t - t_0}, t \in \closedint {t_0 - \ell_0} {t_0 + \ell_0} }$
be the cone in $\XX$ centred at $\tuple {t_0, x_0}$.


This article, or a section of it, needs explaining.In particular: Is this a specialised use of the term "cone" different from the 3-d geometrical construct? If so, it needs to be defined and linked to -- if not, it needs to be explained why it is a cone.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Clearly $\YY$ is closed in $\XX$.
Also for $y \in \YY$ we have:














\(\ds \size {\map {\paren {T y} } t - x_0}\)

\(\le\)







\(\ds \size {\int_{t_0}^t \map f {s, \map y s} \rd s}\)




















\(\ds \)

\(\le\)







\(\ds m \int_{t_0}^t \rd s\)





Absolute Value of Definite Integral














\(\ds \)

\(=\)







\(\ds m \set {t - t_0}\)









Therefore $T \YY \subseteq \YY$.
Finally we must show that $T$ is a contraction on $\YY$ (we will find that this restricts our choice of $\ell$).
Let $y_1, y_2 \in \YY$.
We have:














\(\ds \size {\map {\paren {T y_1} } t - \map {\paren {T y_2} } t}\)

\(\le\)







\(\ds \size {\int_{t_0}^t \map f {s, \map {y_1} s} - \map f {s, \map {y_2} s} \rd s}\)




















\(\ds \)

\(\le\)







\(\ds \int_{t_0}^t \size {\map f {s, \map {y_1} s} - \map f {s, \map {y_2} s} } \rd s\)





Absolute Value of Definite Integral














\(\ds \)

\(\le\)







\(\ds \kappa \int_{t_0}^t \size {\map {y_1} t - \map {y_2} t} \rd s\)





Lipschitz Condition














\(\ds \)

\(\le\)







\(\ds \kappa \size {t - t_0} \norm {y_1 - y_2}_\sup\)





Estimation Lemma for Contour Integrals




This article, or a section of it, needs explaining.In particular: Specific meaning of $\norm {y_1 - y_2}_\sup$ needs to be established.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Taking the supremum over $t$ we have:

$\norm {T y_1 - T y_2}_\sup \le \kappa \ell \norm {y_1 - y_2}_\sup$
for all $y_1, y_2 \in \YY$.

Therefore choosing $\ell < \kappa^{-1}$, $T$ is a contraction on $\YY$ as required.
This completes the proof.
$\blacksquare$






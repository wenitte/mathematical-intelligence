# 

Source: https://proofwiki.org/wiki/Characterization_of_Lipschitz_Continuity_on_Shift_of_Finite_Type_by_Variations


This article, or a section of it, needs explaining.In particular: If you're going to reference a concept in the title, you need to reference it also in the body of the proof. There is no indication anywhere here what "lipgloss continence" is.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Theorem
Let $\struct {X_\mathbf A, \sigma_\mathbf A}$ be a shift of finite type.
Let $f : X_\mathbf A \to \C$ be a continuous mapping.
Let $\theta \in \openint 0 1$.
Let $C > 0$.

Then:

$\forall x, y \in X_\mathbf A : \size {\map f x - \map f y} \le C \map {d_\theta} {x, y}$
if and only if:

$\forall n \in \N : \map {\mathrm {var}_n} f \le C \theta ^n$
where:

$d_\theta$ denotes the metric
$\map {\mathrm {var}_n} f$ denotes the $n$th variation of $f$.

That is:

$\ds \size f_\theta = \sup \set { \dfrac {\cmod {\map f x - \map f y} }{\map {d_\theta} {x,y} } : x,y \in X_\mathbf A, x \ne y}$
where $\size \cdot_\theta $ is the Lipschitz seminorm.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Maybe a separate page for this "That is"You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: ... and we still need to reference "Lipschitz continuity" somehowYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof
Sufficient Condition
Suppose:

$\forall x, y \in X_\mathbf A : \size {\map f x - \map f y} \le C \map {d_\theta} {x, y}$
Let $n\in\N$.
By definition of the metric:

$\forall x, y \in X_\mathbf A:$
$\forall i \in \openint {-n} n : x_i = y_i \implies \map {d _\theta} {x, y} \le \theta ^n$
Thus, by the assumption:

$\forall x, y \in X_\mathbf A:$
$\forall i \in \openint {-n} n :x_i = y_i \implies \size {\map f x - \map f y} \le C \map {d_\theta} {x, y} \le C \theta ^n$
Therefore:

$\map {\mathrm {var}_n} f \le C \theta ^n$
$\Box$


Necessary Condition
Suppose:

$\forall n \in \N : \map {\mathrm {var}_n} f \le C \theta ^n$
Let $x, y \in X_\mathbf A$.
If $x = y$, then obviously:

$\size {\map f x - \map f y} = 0 \le C \map {d_\theta} {x, y}$
So, let $x \ne y$.
Then:

$\exists N \in \N : d_\theta (x,y) = \theta ^N$
In particular:

$\forall i \in \openint {-N} N : x_i = y_i$
Therefore:

$\size {\map f x - \map f y}\le \map {\mathrm {var}_N} f\le C \theta ^N = C \map {d_\theta} {x, y}$
$\blacksquare$






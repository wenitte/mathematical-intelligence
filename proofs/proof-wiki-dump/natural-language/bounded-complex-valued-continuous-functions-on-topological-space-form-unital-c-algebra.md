# 

Source: https://proofwiki.org/wiki/Bounded_Complex-Valued_Continuous_Functions_on_Topological_Space_form_Unital_C*-Algebra

Theorem
Let $X$ be a topological space. 
Let $\map {\CC_b} {X; \C} := \map {\CC_b} X$ be the space of bounded continuous functions on $X$ valued in $\C$.
Let $\norm {\,\cdot\,}_\infty$ be the supremum norm on $\map {\CC_b} X$.
For each $f \in \map {\CC_b} X$, define $\overline f : X \to \C$ by:

$\map {\overline f} x = \overline {\map f x}$
for each $x \in X$. 
Equip $\map {\CC_b} X$ with pointwise multiplication. 

Then $\struct {\map {\CC_b} X, \norm {\,\cdot\,}_\infty}$ is a unital $\text C^\ast$-algebra.


Proof
From Bounded Continuous Functions on Topological Space form Banach Space, $\struct {\map {\CC_b} X, \norm {\,\cdot\,}_\infty}$ is a Banach space over $\C$.
From Product of Continuous Functions on Topological Ring is Continuous, $f g$ is continuous for each $f, g \in \map {\CC_b} X$.
Further, from Product of Bounded Mappings on Normed Algebra is Bounded, $f g$ is bounded.
For each $f, g \in \map {\CC_b} X$ and $x \in X$ we have:

$\cmod {\map f x \map g x} = \cmod {\map f x} \cmod {\map g x}$
so that:

$\norm {f g}_\infty \le \norm f_\infty \norm g_\infty$
Hence $\struct {\map {\CC_b} X, \norm {\,\cdot\,}_\infty}$ is a Banach algebra with pointwise multiplication.
Further, the function ${\mathbf 1}_{\map {\CC_b} X} : X \to \C$ defined by:

$\map { {\mathbf 1}_{\map {\CC_b} X} } x = 1$
for each $x \in X$, satisfies:

$\map f x \map { {\mathbf 1}_{\map {\CC_b} X} } x = \map { {\mathbf 1}_{\map {\CC_b} X} } x \map f x = 1$
From Constant Mapping is Continuous, ${\mathbf 1}_{\map {\CC_b} X}$ is continuous.
Further:

$\cmod { \map { {\mathbf 1}_{\map {\CC_b} X} } x} = 1$
for each $x \in X$.
Hence ${\mathbf 1}_A \in \map {\CC_b} X$ with:

$\norm { {\mathbf 1}_{\map {\CC_b} X} }_\infty = 1$
So ${\mathbf 1}_{\map {\CC_b} X}$ is an identity element for $\map {\CC_b} X$, making $\map {\CC_b} X$ a unital Banach algebra.
That $\overline {\, \cdot \,}$ is an involution on $\map {\CC_b} X$ follows from Complex Numbers form Unital C*-Algebra.
Finally, from Complex Numbers form Unital C*-Algebra we have:

$\cmod {\map f x \map {\overline f} x} = \cmod {\map f x}^2$
Taking supremums we have:

$\norm {f \overline f}_\infty = \norm f^2$
for each $f \in \map {\CC_b} X$.
So $\overline {\, \cdot \,}$ satisfies the $\text C^\ast$ identity.
Hence $\struct {\map {\CC_b} X, \norm {\,\cdot\,}_\infty}$ is a unital $\text C^\ast$-algebra.
$\blacksquare$






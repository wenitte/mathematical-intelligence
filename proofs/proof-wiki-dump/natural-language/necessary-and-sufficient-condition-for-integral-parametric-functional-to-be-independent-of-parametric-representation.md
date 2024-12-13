# 

Source: https://proofwiki.org/wiki/Necessary_and_Sufficient_Condition_for_Integral_Parametric_Functional_to_be_Independent_of_Parametric_Representation


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $x: \R \to \R$ and $y: \R \to \R$ be real functions.
Let $J \sqbrk {x, y}$ be a functional of the form:

$\ds J \sqbrk {x, y} = \int_{t_0}^{t_1} \map \Phi {t, x, y, \dot x, \dot y} \rd t$
where $\dot y$ denotes the derivative of $y$ with respect to $t$:

$\dot y = \dfrac {\d y} {\d t}$

Then $J \sqbrk {x, y}$ depends only on the curve in the $x y$-plane defined by the parametric equations:

$x = \map x t$, $y = \map y t$
and not on the choice of the parametric representation of the curve if and only if the integrand $\Phi$ does not involve $t$ explicitly 
and is a positive-homogeneous function of degree $1$ in $\dot x$ and $\dot y$.


Proof
In the functional:

$\ds \JJ \sqbrk y = \int_{x_0}^{x_1} \map F {x, y, y'} \rd x$
let the argument $y$ stand for a curve which is given in a parametric form. 
In other words, let the curve be described by the vector $\tuple {\map y t,\map x t}$ rather than $\paren {\map y x, x}$.
Then the functional can be rewritten as:














\(\ds \JJ \sqbrk y\)

\(=\)







\(\ds \int_{t_0}^{t_1} F \sqbrk {\map x t, \map y t, \frac {\d \, \map y t} {\d \, \map x t} } \rd \map x t\)




















\(\ds \)

\(=\)







\(\ds \int_{t_0}^{t_1} F \sqbrk {\map x t, \map y t, \frac {\frac {\d y} {\d t} } {\frac {\d x} {\d t} } } \frac {\d x} {\d t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_{t_0}^{t_1} F \sqbrk {\map x t, \map y t, \frac {\map {\dot y} t} {\map {\dot x} t} } \map {\dot x} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_{t_0}^{t_1} \map \Phi {x, y, \dot x, \dot y} \rd t\)









The function on the right hand side does not involve $t$ explicitly.
Suppose that it is positive-homogeneous of degree 1 in $\map {\dot x} t$ and $\map {\dot y} t$:

$\map \Phi {x, y, \lambda \dot x, \lambda \dot y} = \lambda \map \Phi {x, y, \dot x, \dot y}$ for all $\lambda > 0$.
Now we will show that the value of such functional depends only on the curve in the $x y$-plane defined by the parametric equations $x = \map x t$ and $y = \map y t$, and not on the functions $\map x t$, $\map y t$ themselves. 
Let a new parameter $\tau$ be chosen such that $t = \map t \tau$, where $\dfrac {\d t} {\d \tau} > 0$.
Let the interval $\closedint {t_0} {t_1}$ be mapped onto $\closedint {\tau_0} {\tau_1}$.
Since $\Phi$ is positive-homogeneous of degree $1$ in $\dot x$ and $\dot y$, it follows that:














\(\ds \int_{\tau_0}^{\tau_1} \map \Phi {x, y, \frac {\d x} {\d \tau}, \frac {\d y} {\d \tau} } \rd \tau\)

\(=\)







\(\ds \int_{\tau_0}^{\tau_1} \map \Phi {x, y, \dot x \frac {\d t} {\d \tau}, \dot y \frac {\d t} {\d \tau} } \rd \tau\)





Chain Rule for Derivatives: $\dfrac {\d x} {\d \tau} = \dfrac {\d x} {\d t} \dfrac {\d t} {\d \tau}$














\(\ds \)

\(=\)







\(\ds \int_{\tau_0}^{\tau_1} \map \Phi {x, y, \dot x, \dot y} \frac {\d t} {\d \tau} \rd \tau\)




















\(\ds \)

\(=\)







\(\ds \int_{t_0}^{t_1} \map \Phi {x, y, \dot x, \dot y} \rd t\)









$\blacksquare$


This theorem requires a proof.In particular: seems that only one condition is proven; check for the other oneYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 2.10$: Variational Problems in Parametric Form





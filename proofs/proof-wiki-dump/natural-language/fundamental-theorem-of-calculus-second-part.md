# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Calculus/Second_Part



Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$.
Then:

$(1): \quad f$ has a primitive on $\closedint a b$
$(2): \quad$ If $F$ is any primitive of $f$ on $\closedint a b$, then:
$\ds \int_a^b \map f t \rd t = \map F b - \map F a = \bigintlimits {\map F t} a b$


Proof 1
Let $G$ be defined on $\closedint a b$ by:

$\ds \map G x = \int_a^x \map f t \rd t$
We have:

$\ds \map G a = \int_a^a \map f t \rd t = 0$ from Integral on Zero Interval
$\ds \map G b = \int_a^b \map f t \rd t$ from the definition of $G$ above.
Therefore, we can compute:














\(\ds \int_a^b \map f t \rd t\)

\(=\)







\(\ds \int_a^a \map f t \rd t + \int_a^b \map f t \rd t\)





Sum of Integrals on Adjacent Intervals for Continuous Functions














\(\ds \)

\(=\)







\(\ds \map G a + \map G b\)





From the definition of $G$














\(\ds \)

\(=\)







\(\ds \map G b - \map G a\)





$\map G a = 0$



By the first part of the theorem, $G$ is a primitive of $f$ on $\closedint a b$.
By Primitives which Differ by Constant‎, we have that any primitive $F$ of $f$ on $\closedint a b$ satisfies $\map F x = \map G x + c$, where $c$ is a constant.
Thus we conclude:














\(\ds \int_a^b \map f t \rd t\)

\(=\)







\(\ds \paren {\map G b + c} - \paren {\map G a + c}\)




















\(\ds \)

\(=\)







\(\ds \map F b - \map F a\)









$\blacksquare$


Proof 2
As $f$ is continuous, by the first part of the theorem, it has a primitive. Call it $F$.
$\closedint a b$ can be divided into any number of closed subintervals of the form $\closedint {x_{k - 1} } {x_k}$ where:

$a = x_0 < x_1 \cdots < x_{k-1} < x_k = b$
Fix such a finite subdivision of the interval $\closedint a b$; call it $P$.

Next, we observe the following telescoping sum identity:




\(\text {(1)}: \quad\)









\(\ds \sum_{i \mathop = 1}^k \paren {\map F {x_i} - \map F {x_{i - 1} } }\)

\(=\)







\(\ds \map F b - \map F a\)









Because $F' = f$, $F$ is differentiable.
By Differentiable Function is Continuous, $F$ is also continuous.
Therefore we can apply the Mean Value Theorem on $F$.
It follows that in every closed subinterval $I_i = \closedint {x_{i - 1} } {x_i}$ there is some $c_i$ such that:

$\map {F'} {c_i} = \dfrac {\map F {x_i} - \map F {x_{i - 1} } } {x_i - x_{i - 1} }$
It follows that:














\(\ds \map F {x_i} - \map F {x_{i - 1} }\)

\(=\)







\(\ds \map {F'} {c_i} \paren {x_i - x_{i - 1} }\)










\(\text {(2)}: \quad\)









\(\ds \map F b - \map F z\)

\(=\)







\(\ds \sum_{i \mathop = 1}^k \map {F'} {c_i} \paren {x_i - x_{i - 1} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^k \map f {c_i} \paren {x_i - x_{i - 1} }\)





because $F' = f$




From the definitions of supremum and infimum, we have for all $i$ (recall $I_i = \closedint {x_{i - 1} } {x_i}$):

$\displaystyle \inf_{x \mathop \in I_i} \map f x \le \map f {c_i} \le \sup_{x \mathop \in I_i} \map f x$
From the definitions of upper Darboux sum and lower Darboux sum, we conclude for any finite subdivision $P$:

$\displaystyle \map L P \le \sum_{i \mathop = 1}^k \map f {c_i} \paren {x_i - x_{i - 1} } \le \map U P$
Lastly, from the definition of a definite integral and from $(2)$, we conclude:

$\displaystyle \map F b - \map F a = \int_a^b \map f t \rd t$
$\blacksquare$


Proof 3

Work In ProgressYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Let $\closedint a b$ be the closed (real) interval.
We claim that closed (real) interval is a smooth 1-dimensional oriented manifold.
By Classification of Compact One-Manifolds, every compact connected 1-dimensional manifold is diffeomorphic to either a circle or a closed interval.
Therefore, the closed interval is a  1-dimensional manifold.
By Subset of Real Numbers is Interval iff Connected, since $\closedint a b$ is an interval of $\R$, it follows that $\closedint a b$ is connected.


This needs considerable tedious hard slog to complete it.In particular: Prove that the closed (real) interval is a smooth and oriented manifoldTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $\F$ be a smooth 0-form with compact support on the $\closedint a b$.
Let the boundary of $\closedint a b$ be:

$\partial \closedint a b$
Since the manifold is oriented, and has compact support, the integrals:

$\ds \int_{\partial \closedint a b} \F$
and:

$\int_{\closedint a b} \rd \F$
are well-defined.


This needs considerable tedious hard slog to complete it.In particular: Prove that the integrals are well-defined given that the manifold is orientable and compactly supportedTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Then, by General Stokes' Theorem:

$\ds \int_{\partial \closedint a b} \F = \int_{\closedint a b} \rd \F$
where $\d \F$ is the exterior derivative of 0-form:

$\F = \map f x dx$
It follows that:














\(\ds \ds \int_{\closedint a b} \map f x dx\)

\(=\)







\(\ds \int_{\closedint a b} \rd F\)




















\(\ds \)

\(=\)







\(\ds \ds \int_{\partial \closedint a b } F\)





by General Stokes' Theorem














\(\ds \)

\(=\)







\(\ds \int_{\set{a}^- \cup \set{b}^+} F\)





Definition of Boundary of Manifold














\(\ds \)

\(=\)







\(\ds \map F b - \map F a\)









as required.
$\blacksquare$

Also presented as
The Fundamental Theorem of Calculus can also be presented in the following form:
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$ expressed as a normal first order ODE:

$(1): \quad \dfrac {\d y} {\d x} = \map f x$
Let $c \in \R$ be an arbitrary real number.
Then there exists a unique solution $\map F x$ to $(1)$ on $\closedint a b$ such that $\map F a = c$, given by the definite integral:

$\ds \map F x = c + \int_a^x \map f t \rd t$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Definite Integrals
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definition of a Definite Integral: $15.2$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): definite integral





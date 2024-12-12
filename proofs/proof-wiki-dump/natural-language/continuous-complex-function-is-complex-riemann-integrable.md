# 

Source: https://proofwiki.org/wiki/Continuous_Complex_Function_is_Complex_Riemann_Integrable


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\closedint a b$ be a closed real interval.
Let $f: \closedint a b \to \C$ be a continuous complex function.

Then $f$ is complex Riemann integrable over $\closedint a b$.


Proof
Define the real function $x: \closedint a b \to \R$ by:

$\forall t \in \closedint a b : \map x t = \map \Re {\map f t}$
Define the real function $y: \closedint a b \to \R$ by:

$\forall t \in \closedint a b : \map y t = \map \Im {\map f t}$
where:

$\map \Re {\map f t}$ denotes the real part of the complex number $\map f t$
$\map \Im {\map f t}$ denotes the imaginary part of $\map f t$.

From Real and Imaginary Part Projections are Continuous, it follows that $\Re: \C \to \R$ and $\Im: \C \to \R$ are continuous functions.
From Composite of Continuous Mappings is Continuous, it follows that $x$ and $y$ are continuous.
From Continuous Real Function is Darboux Integrable, it follows that $x$ and $y$ are Darboux integrable over $\closedint a b$.
By definition, it follows that $f$ is complex Riemann integrable.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.1$





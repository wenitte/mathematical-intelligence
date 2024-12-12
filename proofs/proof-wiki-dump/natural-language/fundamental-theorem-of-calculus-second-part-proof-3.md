# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Calculus/Second_Part/Proof_3


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






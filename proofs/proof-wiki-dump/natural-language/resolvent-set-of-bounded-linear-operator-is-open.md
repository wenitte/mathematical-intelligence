# 

Source: https://proofwiki.org/wiki/Resolvent_Set_of_Bounded_Linear_Operator_is_Open

Theorem
Let $X$ be a Banach space over $\C$. 
Let $T : X \to X$ be a bounded linear operator.
Let $\map \rho T$ be the resolvent set of $T$. 

Then $\map \rho T$ is open. 


Proof
Let $\lambda \in \map \rho T$. 
Then $T - \lambda I$ is invertible as a bounded linear operator.
Let $\delta > 0$ be such that: 

$\cmod \delta < \norm {\paren {T - \lambda I}^{-1} }_{\map \BB X}^{-1}$
Then, we have: 

$\norm {\delta I}_{\map \BB X} \norm {\paren {T - \lambda I}^{-1} } < 1$
From Invertibility of Identity Minus Operator: Corollary, we have: 

$T - \paren {\lambda + \delta} I$ is invertible as a bounded linear operator.
That is, if: 

$\ds \cmod {\mu - \lambda} < \norm {\paren {T - \lambda I}^{-1} }_{\map \BB X}^{-1}$
we have: 

$T - \mu I$ is invertible as a bounded linear operator
so that $\mu \in \map \rho T$. 
So $\map \rho T$ contains an open neighborhood of each of its points. 
So $\map \rho T$ is open.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $14.1$: The Resolvent and Spectrum





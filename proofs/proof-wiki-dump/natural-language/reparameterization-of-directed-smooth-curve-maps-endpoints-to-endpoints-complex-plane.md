# 

Source: https://proofwiki.org/wiki/Reparameterization_of_Directed_Smooth_Curve_Maps_Endpoints_To_Endpoints/Complex_Plane

Theorem
Let $\C$ denote the complex plane.
Let $\closedint a b$ and $\closedint c d$ be closed real intervals.
Let $\gamma: \closedint a b \to \C$ be a smooth path in $\C$.
Let $C$ be a directed smooth curve with parameterization $\gamma$.
Let $\sigma: \closedint c d \to \C$ be a reparameterization of $C$.

Then the start points and end points of $\gamma$ and $\sigma$ are identical:

$\map \gamma a = \map \sigma c$
$\map \gamma b = \map \sigma d$


Proof
By definition of reparameterization, there exists a bijective differentiable strictly increasing real function $\phi: \closedint c d \closedint a b$ such that $\sigma = \gamma \circ \phi$.
As $\map {\phi^{-1} }{a} \in \closedint c d$:

$c \le \map {\phi^{-1} }{a}$
As $\phi$ is strictly increasing:

$\map \phi c \le \map \phi { \map {\phi^{-1} } a } = a$
As $\map \phi c \in \closedint a b$:

$\map \phi c = a$
Hence:

$\map \sigma c = \map {\gamma \circ \phi} c = \map \gamma a$

As $\map {\phi^{-1} } b \in \closedint c d$:

$d \ge \map {\phi^{-1} } b$
As $\phi$ is strictly increasing:

$\map \phi d \ge \map \phi { \map {\phi^{-1} } b } = b$
As $\map \phi d \in \closedint a b$:

$\map \phi d = b$
Hence:

$\map \sigma d = \map {\gamma \circ \phi} d = \map \gamma b)$
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$





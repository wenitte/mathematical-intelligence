# 

Source: https://proofwiki.org/wiki/Reparameterization_of_Contour_is_Contour

Theorem
Let $\closedint a b$ and $\closedint c d$ be closed real intervals.
Let $\gamma: \closedint a b \to \C$ be a contour in $\C$.
That is, there exists a subdivision $a_0, a_1 , \ldots, a_n$ of $\closedint a b$ such that $\gamma \restriction_{I_i}$ is a smooth path for all $i \in \set {1, \ldots, n}$, where $I_i = \closedint {a_{i - 1} } {a_i}$.
Here, $\gamma \restriction_{I_i}$ denotes the restriction of $\gamma$ to $I_i$.
Let $\phi: \closedint c d \to \closedint a b$  be a differentiable real function with $\map \phi c = a$, and $\map \phi d = b$.
Suppose that $\phi$ is either bijective or strictly increasing.

Define $\sigma: \closedint c d \to \C$ as a composite function by $\sigma = \gamma \circ \phi$.

Then $\sigma$ is a contour.

For all $i \in \set {1, \ldots, n}$, let $J_i := \closedint {\map {\phi^{-1} } {a_{i - 1} } } {\map {\phi^{-1} } {a_i} }$.
Then:

$\map {\sigma' \restriction_{J_i} } t = \map {\gamma' \restriction_{I_i} } {\map \phi t} \map {\phi'} t$


Proof
$\phi$ is either bijective or strictly increasing.
From Continuous Real Function on Closed Interval is Bijective iff Strictly Monotone, it follows that in both cases $\phi$ is both bijective and strictly monotone.
As $\map \phi c < \map \phi d$, $\phi$ must be strictly increasing.
As $\phi$ is strictly increasing, we have $c = \map {\phi^{-1} } {a_0} < \map {\phi^{-1} } {a_1} < \cdots < \map {\phi^{-1} } {a_n} = d$.
Hence, $\map {\phi^{-1} } {a_0}, \map {\phi^{-1} } {a_1}, \dotsc, \map {\phi^{-1} } {a_n}$ form a subdivision of $\closedint a b$.
Define $J_i := \closedint {\map {\phi^{-1} } {a_{i - 1} } } {\map {\phi^{-1} } {a_i} }$ as a closed real interval.
From Derivative of Complex Composite Function, it follows that $\sigma$ restricted to $J_i$ is complex differentiable.
Its derivative is given by:

$\map {\sigma' \restriction_{J_i} } t = \map {\gamma' \restriction_{I_i} } {\map \phi t} \map {\phi'} t$
From Derivative of Monotone Function, it follows that for all $t \in \closedint c d$, we have $\map {\phi'} t > 0$.
As $\map {\gamma' \restriction_{I_i} } {\map \phi t} \ne 0$ by definition of contour, we have $\map {\sigma' \restriction_{J_i} } t \ne 0$.
Then $\sigma$ fulfils both requirement $(1)$ and $(2)$ from the definition of contour, so $\sigma$ is a contour.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$





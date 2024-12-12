# 

Source: https://proofwiki.org/wiki/Directed_Smooth_Curve_Relation_is_Equivalence


This article is complete as far as it goes, but it could do with expansion.In particular: Make more general by applying this to the Real Cartesian SpaceYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $\sim$ denote a relation on the set of all smooth paths: $\set {\gamma: I \to \C : \text{$I$ is a closed real interval, $\gamma$ is a smooth path} }$.
Let $\gamma: \closedint a b \to \C$ and $\sigma : \closedint c d \to \C$ be smooth paths.
Define $\sim$ as follows: 

$\gamma \sim \sigma$ if and only if there exists a bijective differentiable strictly increasing real function $\phi: \closedint c d \to \closedint a b$ such that $\sigma = \gamma \circ \phi$.

Then $\sim$ is an equivalence relation on the set of all smooth paths.


Proof
Checking in turn each of the criteria for an equivalence:


Reflexive
Let $\gamma: \closedint a b \to \C$ be a smooth path.
Define $\phi: \closedint a b \to \closedint a b$ as the identity function, so:
$\map \phi t = t$ for all $t \in \closedint a b$
From Identity Mapping is Bijection, it follows that $\phi$ is bijective.
From Derivative of Identity Function, it follows that:

$\map {\phi'} t = 1 > 0$
for all $t \in \closedint a b$.
Then Derivative of Monotone Function shows that $\phi$ is strictly increasing.
Hence, $\gamma \sim \gamma$, so $\sim$ is reflexive.
$\Box$


Symmetric
Let $\gamma: \closedint a b \to \C$ and $\sigma: \closedint c d \to \C$ be smooth paths such that $\gamma \sim \sigma$.
That is, $\sigma = \gamma \circ \phi$ where $\phi: \closedint c d \to \closedint a b$ is bijective, differentiable and strictly increasing.
From Bijection iff Inverse is Bijection, it follows that $\phi$ has an inverse function:

$\phi^{-1}: \closedint a b \to \closedint c d$
Then:

$\gamma = \sigma \circ \phi^{-1}$
From Derivative of Inverse Function:

$D \map {\phi^{-1} } t = \dfrac 1 {\map {\phi'} {\map {\phi^{-1} } t} }$
for all $t \in \closedint a b$.
From Derivative of Monotone Function:

$\map {\phi'} {\map {\phi^{-1} } t} > 0$
Then:

$D \map {\phi^{-1} } t > 0$
so $\phi^{-1}$ is strictly increasing.
Hence, $\sigma \sim \gamma$, so $\sim$ is symmetric.
$\Box$


Transitive
Let $\gamma: \closedint a b \to \C$, $\sigma: \closedint c d \to \C$ and $\rho: \closedint g h \to \C$ be smooth paths such that $\gamma \sim \sigma$ and $\sigma \sim \rho$.
That is:

$\sigma = \gamma \circ \phi$ and $\rho = \sigma \circ \psi$
where $\phi: \closedint c d \to \closedint a b$ and $\psi: \closedint g h \to \closedint c d$ are bijective, differentiable and strictly increasing.
Then:

$\rho = \gamma \circ \paren {\phi \circ \psi}$
From Composite of Bijections is Bijection, it follows that $\phi \circ \psi$ is bijective.
From Derivative of Composite Function, it follows that:

$D \map {\paren {\phi \circ \psi} } t = \map {\phi'} {\map \psi t} \map {\psi'} t$
for all $t \in \closedint g h$.
As $\map {\phi'} {\map \psi t} > 0$ and $\map {\psi'} t > 0$, this implies that:

$D \map {\paren {\phi \circ \psi} } t > 0$
so $\phi \circ \psi$ is strictly increasing.
Hence, $\gamma \sim \rho$, so $\sim$ is transitive.
$\Box$

Therefore, $\sim$ is an equivalence relation.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$





# 

Source: https://proofwiki.org/wiki/User:Geometry_dude/Preimage_Theorem

Theorem
Let $\varphi \colon M \to N$ be a smooth map between smooth manifolds $M,N$ and let $p \in N$ be a regular value of $\varphi$. Then the preimage $\varphi^{-1}(y)$ together with the natural inclusion $\iota:\varphi^{-1}(y) \to M$ is an embedded smooth submanifold of $M$ of dimension $\dim M - \dim N$.


Proof
Centr

We need: theorem 1.5.11; Prop 1.7.3; and the fact that the set where $\varphi$ is a submersion is open. 
A subset of a second countable, Hausdorff topological space is second-countable, Hausdorff. 
Proposition 1.5.15

Consider the map $\tilde \varphi: \varphi^{-1}(p) \to N$ obtained by restricting the domain of $\varphi$ to $\varphi^{-1}(p)$. 
$\varphi$ is smooth and hence continuous. 
$\lbrace p \rbrace \subseteq N$ is closed and since the continuous preimage of closed set is closed, $\varphi^{-1}(p)$ is closed. 

Why is $\varphi^{-1}(p)$ open?
Injectivity of $\iota$ is trivial. <-> inclusions are not necessarily injective! hausdorff!!
Injectivity of $\iota_*$ follows from the constant rank theorem. 
Why is $\iota$ open? Invariance of domain http://mathworld.wolfram.com/DomainInvarianceTheorem.html

$\blacksquare$
Also known as: regular value theorem; regular level set theorem






# 

Source: https://proofwiki.org/wiki/User:Arbo/Sandbox.



Theorem
Finite-dimensional smooth manifolds can be immersed in a finite-dimensional Euclidean space. Precisely: If $M$ is a smooth $m$-dimensional manifold, then there exists an immersion $f\colon M\to\R^{2m-1}$.

Consequences
Any abstract finite-dimensional manifold is actually a submanifold of some $\R^N$. In proofs, it suffices to show that a statement is true for submanifolds to conclude the statement for abstract finite-dimensional manifolds. 

Proof
The general strategy will be to show that there are embedding/immersions of smooth manifolds into some $\R^N$, $N \gt\gt 0$. These embeddings/immersions can then be imporved by linear Transformations.

Lemma
Statement
For every injective Function $f\colon M \rightarrow \R^n$ there exists a linear Transformation $\lambda \colon \R^n \rightarrow \R^{n-1}$, such that $\lambda\circ f$ is injective, provided that $n \gt 2m+1$. Moreover $\lambda \circ f$ is immersive, if $f$ is immersive and $n \gt 2m$.


Proof
For the first part, observe that $\tilde{M} = M\times M - \triangle M$ is a smooth $2m$-dimensional manifold, with $\triangle M$ being the image of the map $M \rightarrow M\times M$, $x\mapsto \left({x, x}\right)$. The reason is that $\triangle{M}$ is closed in $M\times M$ and thus $\tilde{M}$ is just an open set in $M\times M$. Define
$$F\colon \tilde{M} \to S^{n-1} \\
\left(x,y\right) \mapsto \frac{f(x)-f(y)}{\left\vert f(x)-f(y) \right\vert}.$$
Verify that F is smooth and injective. Since by assumption $n \gt 2m+1 \iff n-1 \gt 2m$, a corollary from Sard's Theorem implies that $F$ is not surjective. So there exists $b \in S^{n-1} - \operatorname{Image}(F)$. The desired Transformation $\lambda$ is the projection on $b^\perp$.
It remains to check that $\lambda\circ f$ is injective. To this end suppose that $f(x)-f(y) \in \operatorname{Kernel}(\lambda)$. Then $f(x) = f(y)$ or $f(x)-f(y) = r*b$, for some $r\in\R$. The second case contradicts the injectivity of $F$, since $$F(x,y) = \frac{f(x)-f(y)}{\left\vert f(x)-f(y) \right\vert} = \frac{r*b}{\left\vert r*b \right\vert} = \frac{b}{\left\vert b \right\vert} = b$$. Therefore $f(x) = f(y)$, which implies that $x=y$ because $f$ is injective. Alltogether this shows that $f(x)-f(y) \in \operatorname{Kernel}(\lambda) \implies x=y$, where the condition of this implication is equivalent to $\lambda\circ f(x) = \lambda\circ f(y)$, since $\lambda$ is linear.
For the second part of the statement, let $\tau M$ denote the tangent bundle of $M$. It is a smooth manifold of dimension $2m$. Choose a riemannian metric $g$ on $\tau M$ and consider the sphere bundle $\sigma M = \{v \in \tau M ~\vert~ g(v,v)=1\}$. $\sigma M$ is a fiber bundle with typical fiber $S^m$, and it is a smooth $2m-1$-dimensional submanifold of $\tau M$. Consider the map
$$G\colon \sigma M \to S^{n-1} \\
v \mapsto \frac{Df(p(v)[v]}{\left\vert Df(p(v))[v] \right\vert},$$
where $p$ is the bundle projection of $\tau M$ restricted to $\sigma M$ and $Df(x)[v]$ denotes the derivative of $f$ at $x$ evalued at $v$. Check that $G$ is smooth and injective. By the new bound for m, $n \gt 2m \iff n-1 \gt 2m-1$. Again Sard's Theorem applies and shows that $G$ cannot be surjective. So there exists $b \in S^{n-1} - \left(\operatorname{Image}(F) \cup \operatorname{Image}(G)\right)$. 
$\Box$


Lemma
Statement
Any compact $m$-dimensional Manifold $M$ can be embedded into $\R^N$. 


Proof
A smooth (immersive) injective map $M \to \R^N$ has to be constructed. To this end observe that any smooth structure is a (maximal) set of (compatible) charts $\left(\phi_\alpha,U_\alpha\right)_{\alpha \in A}$, where the $M = \bigcup_{\alpha \in A}U_\alpha$ and $A$ some indexset. Since $M$ is compact, we may choose a finite subcover. Switching the indexation we arrive at say $\left\{U_{p_{i}}\right\}_{1 \le i \le k}$, for $k \in \N$. To gain ever more control over the cover, choose balls $B_{3r_{p_{i}}}\left(0\right)$, such that $\phi_k^{-1}\left(B_{2r_{p_{i}}}\left(0\right)\right)$ covers $M$. Choose a bump function $\rho_k$, which is $1$ on $B_{2r_{p_{i}}}\left(0\right)$ and $0$ on $\R^n-\bar{B_{3r_{p_{i}}}\left(0\right)}$. Define
$$f_i = \rho_i\circ\phi_i\colon M \to \R^m$$
and
$$f = \left(f_i, \rho_i\right)_{1 \le i \le k}\colon M \to \R^{mk+k}.$$
It remains to show that $f$ is an injective immersion.
$\Box$

Let $...$ be a [[Definition:[definiend]/Definition 2|[definiend] by definition 2]].
Then by definition:

[Definition 2 of definiend]



Thus $...$ is a [[Definition:[definiend]/Definition 1|[definiend] by definition 1]].
$\blacksquare$
[[Category:[definiend]]]






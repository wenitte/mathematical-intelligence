# 

Source: https://proofwiki.org/wiki/Image_of_Path_is_Path-Connected_Set

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $I \subset \R$ be the closed real interval $\closedint a b$.
Let $\gamma: I \to S$ be a path.

Then:

$\map \gamma I$ is a path-connected set of $T$.


Proof
From Path-Connected iff Path-Connected to Point, $\map \gamma I$ is a path-connected set if and only if every point of $\map \gamma I$ is path-connected to a common point.
It is shown that every point of $\map \gamma I$ is path-connected to $\map \gamma a$.
Let $H = \map \gamma I$.
Let $x = \map \gamma a$.
From Point is Path-Connected to Itself, $x$ is path-connected to itself.

Let $y$ be any element of $H \setminus \set x$.
By assumption:

$\exists t \in \hointl a b : \map \gamma t = y$
From Continuity of Composite with Inclusion, $\mathbin \gamma {\restriction_{\closedint a t} } : \closedint a t \to H$ is a continuous mapping.
It follows that $\mathbin \gamma {\restriction_{\closedint a t} }$ is a path joining $x$ to $y$.
The result follows.
$\blacksquare$






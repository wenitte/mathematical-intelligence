# 

Source: https://proofwiki.org/wiki/Metacompact_Countably_Compact_Space_is_Compact

Theorem
Let $T = \struct {S, \tau}$ be a countably compact space which is also metacompact.
Then $T$ is compact.


Proof
From the definition of countably compact space, every countable open cover of $S$ has a finite subcover.
Let $T = \struct {S, \tau}$ be a countably compact space which is also metacompact.
Let $\UU_\alpha$ be an open cover of $S$.
Then let $\VV_\beta$ be the open refinement which is point finite, guaranteed by its metacompactness.

Let $x \in S$.
We have that $x$ is an element of only a finite number of the elements of $\VV_\beta$, as $\VV_\beta$ is point finite.
Consider all the subcovers of $\VV_\beta$, and order them by subset.
Consider any chain $\CC$ of such subcovers.
Aiming for a contradiction, suppose $x$ is not in the intersection of $\CC$.
Then it would fail to be covered by one of the elements of $\CC$.
This would be a contradiction of the fact that every element of $\CC$ is a cover of $\VV_\beta$. 
So the intersection of a chain of such subcovers is itself a subcover.
Hence it must be that $\VV$ has a minimal subcover, $\VV_\gamma$, say.

Now each element $V_\gamma$ of $\VV_\gamma$ must itself contain a unique element $x_\gamma \in V_\gamma$ which belongs to no element of $\VV_\gamma$.
This is because $\VV_\gamma$ is minimal.
If $\VV_\gamma$ were infinite, the set of all $\set {x_\gamma}$ would be an infinite set without an $\omega$-accumulation point.
This can not be the case.


This article, or a section of it, needs explaining.In particular: Why can this not be the case?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus $\VV_\gamma$ is a finite cover.
So we have constructed a finite subcover for $\UU_\alpha$, demonstrating that $T$ is compact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Paracompactness





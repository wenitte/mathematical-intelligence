# 

Source: https://proofwiki.org/wiki/Compactness_Properties_Preserved_under_Continuous_Surjection



Theorem
Let $T_A = \struct {S_A, \tau_A}$ and $T_B = \struct {S_B, \tau_B}$ be topological spaces.
Let $\phi: T_A \to T_B$ be a continuous surjection.

If $T_A$ has one of the following properties, then $T_B$ has the same property:

Compact Space
$\sigma$-Compact Space
Countable Compact Space
Sequential Compact Space
Lindelöf Space


Proof
Proof for Compactness
Let $T_A$ be compact.
Take an open cover $\UU$ of $T_B$.
From Preimage of Cover is Cover, $\set {\phi^{-1} \sqbrk U: U \in \UU}$ is a cover of $S_A$.
But $\phi$ is continuous, and for all $U \in \UU$, $U$ is open in $T_B$.
It follows that $\forall U \in \UU: \phi^{-1} \sqbrk U$ is open in $T_A$.
So $\set {\phi^{-1} \sqbrk U:\ U \in \UU}$ is an open cover of $T_A$.

$T_A$ is compact, so we take a finite subcover:

$\set {\phi^{-1} \sqbrk {U_1}, \ldots, \phi^{-1} \sqbrk {U_n} }$
We have that $\phi$ is surjective.
So from Surjection iff Right Inverse, $\phi \sqbrk {\phi^{-1} \sqbrk A} = A$
So:

$\set {\phi \sqbrk {\phi^{-1} \sqbrk {U_1} }, \ldots, \phi \sqbrk {\phi^{-1} \sqbrk {U_n} } } = \set {U_1, \ldots, U_n} \subseteq \UU$
is a finite subcover of $\UU$ on $T_B$.
$\blacksquare$


Proof for $\sigma$-Compactness
Let $T_A$ be $\sigma$-compact.
Then:

$\ds S_A = \bigcup_{i \mathop = 1}^\infty S_i$
where $S_i \subseteq S_A$ are compact.
Since $\phi$ is surjective, we have from Image of Union under Relation:

$\ds \phi \sqbrk {S_A} = S_B = \phi \sqbrk {\bigcup_{i \mathop = 1}^\infty S_i} = \bigcup_{i \mathop = 1}^\infty \phi \sqbrk {S_i}$
From Compactness is Preserved under Continuous Surjection, we have that $\phi \sqbrk {S_i}$ is compact for all $i \in \N$.
So $S_B$ is the union of a countable number of compact subsets.
Thus, by definition, $T_B$ is also $\sigma$-compact.
$\blacksquare$


Proof for Countable Compactness
Let $T_A$ be countably compact.
Take a countable open cover $\UU$ of $T_B$.
From Preimage of Cover is Cover, $\VV := \set {\phi^{-1} \sqbrk U: U \in \UU}$ is a cover of $S_A$.
$\VV$ is a countable cover because there it is bijective with $\UU$.


This article, or a section of it, needs explaining.In particular: It needs to be demonstrated that "it" is bijective, and in this context, exactly what "it" is.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By hypothesis, $\phi$ is continuous.
For all $U \in \UU$, $U$ is open in $T_B$.
It follows that $\forall U \in \UU: \phi^{-1} \sqbrk U$ is open in $T_A$.
So $\VV$ is a countable open cover of $T_A$.
$T_A$ is countably compact, so we take a finite subcover:

$\set {\phi^{-1} \sqbrk {U_1}, \ldots, \phi^{-1} \sqbrk {U_n} }$
We have that $\phi$ is surjective.
So from Surjection iff Right Inverse:

$\phi \sqbrk {\phi^{-1} \sqbrk A} = A$
So:

$\set {\phi \sqbrk {\phi^{-1} \sqbrk {U_1} }, \ldots, \phi \sqbrk {\phi^{-1} \sqbrk {U_n} } } = \set {U_1, \ldots, U_n} \subseteq \UU$
is a finite subcover of $\UU$ on $T_B$.


This article, or a section of it, needs explaining.In particular: It is not clear that $\set {U_1, \ldots, U_n}$ covers $T_B$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Proof for Sequential Compactness
Let $T_A$ be a sequentially compact space.
Take an infinite sequence $\sequence {x_n} \subseteq S_B$.
From the surjectivity of $\phi$, there exists another infinite sequence $\sequence {y_n} \subseteq S_A$ such that $\map \phi {y_n} = x_n$.
By the definition of sequential compactness, there exists a subsequence of $\sequence {y_n}$
Let this subsequence be named $\sequence {y_{n_k} }$.
Let $\sequence {y_{n_k} }$ converge to $y \in S_A$ with respect to $T_A$.
From the continuity of $\phi$, it is concluded that $\map \phi {y_{n_k} } = x_{n_k}$ converges to $\map \phi y \in S_B$.
Thus, $\sequence {x_n}$ has a subsequence that converges.
By definition, $T_B$ is sequentially compact.
$\blacksquare$


Proof for Lindelöf Property
Let $T_A$ be a Lindelöf space.
Take an open cover $\UU$ of $T_B$.
From Preimage of Cover is Cover, $\set {\phi^{-1} \sqbrk U: U \in \UU}$ is a cover of $S_A$.
But $\phi$ is continuous, and for all $U \in \UU$, $U$ is open in $T_B$.
It follows that $\forall U \in \UU: \phi^{-1} \sqbrk U$ is open in $T_A$.
So $\set {\phi^{-1} \sqbrk U: U \in \UU}$ is an open cover of $T_A$.
$T_A$ is Lindelöf , so we take a countable subcover:

$\set {\phi^{-1} \sqbrk {U_1}, \ldots, \phi^{-1} \sqbrk {U_n}, \ldots}$
We have that $\phi$ is surjective.
So from Surjection iff Right Inverse:

$\phi \sqbrk {\phi^{-1} \sqbrk A} = A$
So:

$\set {\phi \sqbrk {\phi^{-1} \sqbrk {U_1} }, \ldots, \phi \sqbrk {\phi^{-1} \sqbrk {U_n} }, \ldots} = \set {U_1, \ldots, U_n, \ldots} \subseteq \UU$
is a countable subcover of $\UU$ on $T_B$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Invariance Properties





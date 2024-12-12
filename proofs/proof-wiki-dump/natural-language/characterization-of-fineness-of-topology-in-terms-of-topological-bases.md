# 

Source: https://proofwiki.org/wiki/Characterization_of_Fineness_of_Topology_in_terms_of_Topological_Bases



Theorem
Let $X$ be a set.
Let $\tau$ and $\tau'$ be topologies on $X$. 
Let $\BB \subseteq \tau$ be a basis for $\tau$ and $\BB' \subseteq \tau'$ be a basis for $\tau'$.

The following statements are equivalent:

$(1): \quad$ $\tau'$ is finer than $\tau$
$(2): \quad$ for each $x \in X$ and each $B \in \BB$ containing $x$, there exists $B' \in \BB'$ such that $x \in B' \subseteq B$.


Proof
$(1)$ implies $(2)$
Let $x \in X$ and $B \in \BB$ contain $x$.
Since $\tau'$ is finer than $\tau$, we have that $B \in \tau'$. 
Since $\BB'$ is a basis for $\tau'$, there exists a subset $\set {B'_\alpha : \alpha \in I} \subseteq \BB'$ such that: 

$\ds B = \bigcup_{\alpha \mathop \in I} B'_\alpha$
from Open Set is Union of Elements of Basis.
Since $x \in B$, we have $x \in B'_\alpha$ for some $\alpha \in I$.
We have $B'_\alpha \subseteq B$ from Set is Subset of Union. 
Setting $B = B'_\alpha$, we have therefore found $B' \in \BB'$ such that $x \in B' \subseteq B$, proving $(2)$. 
$\Box$

$(2)$ implies $(1)$
Let $U \in \tau$. 
We aim to prove that $U \in \tau'$. 
Let $x \in U$.
Since $\BB$ is a basis for $\tau$, there exists a subset $\set {B_\alpha : \alpha \in I} \subseteq \BB$ such that: 

$\ds U = \bigcup_{\alpha \mathop \in I} B_\alpha$
from Open Set is Union of Elements of Basis.
Then for some $\alpha \in I$, we have $x \in B_\alpha \subseteq U$. 
By $(2)$, it follows that there exists $B' \in \BB'$ such that: 

$x \in B' \subseteq B_\alpha$
in particular: 

$x \in B' \subseteq U$
We have now shown that for each $x \in U$, there exists $B'_x \in \BB'$ such that: 

$x \in B'_x \subseteq U$
We argue that: 

$\ds U = \bigcup_{x \in U} B'_x$
Clearly: 

$\ds U \subseteq  \bigcup_{x \in U} B'_x$
since $x \in B'_x$ for each $x \in U$, while: 

$\ds \bigcup_{x \in U} B'_x \subseteq U$
sine $B'_x \subseteq U$ for each $x \in U$.
So we have: 

$\ds U = \bigcup_{x \in U} B'_x$
So $U$ is the union of elements of $\BB'$. 
In particular, $U$ is the union of elements of $\tau'$. 
So, since topologies are closed under union, we have $U \in \tau'$.
So we have $\tau \subseteq \tau'$ as desired.
$\blacksquare$






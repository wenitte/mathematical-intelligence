# 

Source: https://proofwiki.org/wiki/Continuity_Defined_by_Closure/Proof_2



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: T_1 \to T_2$ be a mapping.

Then $f$ is continuous if and only if:

$\forall H \subseteq S_1: f \sqbrk {H^-} \subseteq \paren {f \sqbrk H}^-$
where $H^-$ denotes the closure of $H$ in $T_1$.

That is, if and only if the image of the closure is a subset of the closure of the image.


Proof
First we establish some details.
Let $H \subseteq S_1$.
Let $\mathbb K_1$ be defined as:

$\mathbb K_1 := \set {K \subseteq S_1: H \subseteq K, K \text { closed} }$
That is, let $\mathbb K_1$ be the set of all closed sets of $T_1$ which contain $H$.
Similarly, let $\mathbb K_2$ be defined as:

$\mathbb K_2 := \set {K \subseteq S_2: f \sqbrk H \subseteq K, K \text{ closed} }$
That is, let $\mathbb K_2$ be the set of all closed sets of $T_2$ which contain $f \sqbrk H$.

From the definition of closure, we have that:

$\ds H^- = \bigcap \mathbb K_1$
That is, the closure of $H$ is the intersection of all the closed sets of $T_1$ which contain $H$.
Similarly:

$\ds \paren {f \sqbrk H}^- = \bigcap \mathbb K_2$
That is, the closure of $f \sqbrk H$ is the intersection of all the closed sets of $T_2$ which contain $f \sqbrk H$.

We have:














\(\ds f \sqbrk {H^-}\)

\(=\)







\(\ds f \sqbrk {\bigcap \mathbb K_1}\)




















\(\ds \)

\(\subseteq\)







\(\ds \bigcap_{K \mathop \in \mathbb K_1} f \sqbrk K\)





Image of Intersection under Mapping



From Image of Subset under Mapping is Subset of Image:

$H \subseteq K \implies f \sqbrk H \subseteq f \sqbrk K$


Necessary Condition
Suppose $f$ is continuous.
From the above we have that :

$\ds \paren {f \sqbrk H}^- := \bigcap \mathbb K_2$
As $f$ is continuous, then:

$\forall K \in \mathbb K_2: f^{-1} \sqbrk K$ is closed in $T_1$
But as $f \sqbrk H \subseteq K$, it follows from Preimage of Subset is Subset of Preimage that:

$H \subseteq f^{-1} \sqbrk K$
So:

$\mathbb K_3 := \set {f^{-1} \sqbrk K: K \text { closed in } T_2, H \subseteq f^{-1} \sqbrk K}$
consists entirely of closed sets in $T_1$ which are supersets of $H$.
That is, $\mathbb K_3 \subseteq \mathbb K_1$.
So:

$\ds \bigcap \mathbb K_1 \subseteq \bigcap \mathbb K_3$
and so:

$\ds f \sqbrk {\bigcap \mathbb K_1} \subseteq f \sqbrk {\bigcap \mathbb K_3}$
But from Image of Intersection under Mapping:

$\ds f \sqbrk {\bigcap \mathbb K_3} \subseteq \bigcap_{K \mathop \in \mathbb K_3} f \sqbrk K$
But:

$\ds \bigcap_{K \mathop \in \mathbb K_3} f \sqbrk K = \bigcap \mathbb K_2$
and so:

$\ds f \sqbrk {\bigcap \mathbb K_1} \subseteq \bigcap \mathbb K_2$
which means that:

$f \sqbrk {H^-} \subseteq \paren {f \sqbrk H}^-$
as we wanted to show.
$\Box$


Sufficient Condition
Suppose $f$ is not continuous.
From Continuity Defined from Closed Sets, $\exists B \subseteq S_2$ which is closed in $T_2$ such that $f^{-1} \sqbrk B$ is not closed in $T_1$.
By Image of Preimage under Mapping, we have that:

$f \sqbrk {f^{-1} \sqbrk B} \subseteq B$
So from Topological Closure of Subset is Subset of Topological Closure:

$\paren {f \sqbrk {f^{-1} \sqbrk B} }^- \subseteq B^-$
From Closed Set Equals its Closure we have that $B^- = B$.
Transitively, we get:

$\paren {f \sqbrk {f^{-1} \sqbrk B} }^- \subseteq B$
Because $f^{-1} \sqbrk B$ is not closed in $T_1$, we have that:

$f^{-1} \sqbrk B \subsetneq \paren {f^{-1} \sqbrk B}^-$
This means there exists an element $x \in \paren {f^{-1} \sqbrk B}^-$ such that $x \notin f^{-1} \sqbrk B$. 
Therefore $\map f x \notin B$, but $\map f x \in f \sqbrk {\sqbrk {f^{-1} \sqbrk B}^-}$.
From above, we had:

$\paren {f \sqbrk {f^{-1} \sqbrk B} }^- \subseteq B$
so there exists a set $A \subseteq S_1$, namely $A = f^{-1} \sqbrk B$, such that:

$f \sqbrk {A^-} \nsubseteq \paren {f \sqbrk A}^-$
$\blacksquare$






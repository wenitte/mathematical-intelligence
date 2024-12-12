# 

Source: https://proofwiki.org/wiki/Banach-Steinhaus_Theorem/Topological_Vector_Space



Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ and $Y$ be topological vector spaces over $\GF$.
Let $\Gamma$ be a set of continuous linear transformations $X \to Y$.
Let $B$ be the set of all $x \in X$ such that:

$\map \Gamma x = \set {T x : T \in \Gamma}$
is von Neumann-bounded in $Y$.
Suppose that $B$ is not meager in $X$.

Then $B = X$ and $\Gamma$ is equicontinuous.


Proof
Let $W$ be an open neighborhood of ${\mathbf 0}_Y$.
From Open Neighborhood of Point in Topological Vector Space contains Sum of Open Neighborhoods, there exists an open neighborhood $V$ of ${\mathbf 0}_Y$ such that:

$V + V \subseteq W$
From Disjoint Compact Set and Closed Set in Topological Vector Space separated by Open Neighborhood: Corollary, there exists a further open neighborhood $U$ of ${\mathbf 0}_X$ such that:

$U^- \subseteq V$
so that:

$U^- + U^- \subseteq W$
where $U^-$ denotes the closure of $U$ in $Y$.
From Open Neighborhood of Origin in Topological Vector Space contains Balanced Open Neighborhood and Set Closure Preserves Set Inclusion we can take $U$ to be balanced. 
Let:

$\ds E = \bigcap_{T \in \Gamma} T^{-1} \sqbrk {U^-}$
Since each $T \in \Gamma$ is continuous, and $U^-$ is closed in $Y$ by Topological Closure is Closed we have:

$T^{-1} \sqbrk {U^-}$ is closed in $Y$ for each $T \in \Gamma$.
So $E$ is closed in $E$ as the countable intersection of closed sets.

Now let $x \in B$. 
Since $\map \Gamma x$ is von Neumann-bounded in $Y$, there exists $n \in \N$ such that:

$\map \Gamma x \subseteq n U$
Then we have:

$T x \in n U$ for each $T \in \Gamma$.
That is:

$x \in T^{-1} \sqbrk {n U}$
so that:

$x \in T^{-1} \sqbrk {n U^-}$
for each $T \in \Gamma$. 
Then we have:














\(\ds x\)

\(\in\)







\(\ds \bigcap_{T \in \Gamma} T^{-1} \sqbrk {n U^-}\)




















\(\ds \)

\(=\)







\(\ds \bigcap_{T \in \Gamma} n T^{-1} \sqbrk {U^-}\)





Preimage of Dilation of Set under Linear Transformation is Dilation of Preimage














\(\ds \)

\(=\)







\(\ds n \bigcap_{T \in \Gamma} T^{-1} \sqbrk {U^-}\)





Dilation of Intersection of Subsets of Vector Space














\(\ds \)

\(=\)







\(\ds n E\)









So we may conclude that:

$\ds B \subseteq \bigcup_{n \mathop = 1}^\infty n E$

We argue that $n E$ is not meager in $X$ for some $n \in \N$.
Aiming for a contradiction, suppose that $n E$ is meager in $X$ for each $n \in \N$.
Then $\paren {n E} \cap B$ is meager in $X$ for each $n \in \N$ by Subset of Meager Set is Meager Set, while:

$\ds B = \bigcup_{n \mathop = 1}^\infty \paren {\paren {n E} \cap B}$
From Countable Union of Meager Sets is Meager, we have that $B$ is meager, contrary to our assumption that it is not. 
So we have that $n E$ is meager in $X$ for some $n \in \N$.
From Dilation Mapping on Topological Vector Space is Homeomorphism, the mapping $x \mapsto n^{-1} x$ is a homeomorphism.
From Homeomorphic Image of Meager Set is Meager, we have that $E$ is meager.
Since $E$ is closed, the interior of $E$ is non-empty.
Let $v \in E^\circ$.
Let $V \subseteq E$ be an open neighborhood of $x$.
From Translation of Open Set in Topological Vector Space is Open, $V - x$ is an open neighborhood of ${\mathbf 0}_X$.
By definition of $E$ we have:

$T v \in U^-$ for all $T \in \Gamma$.
Hence:














\(\ds T \sqbrk {V - x}\)

\(=\)







\(\ds T \sqbrk V - T x\)





Image of Translation of Set under Linear Transformation is Translation of Image














\(\ds \)

\(\subseteq\)







\(\ds U^- - U^-\)




















\(\ds \)

\(\subseteq\)







\(\ds U^- + U^-\)





from Closure of Balanced Set in Topological Vector Space is Balanced, $U^-$ is balanced and $-U^- \subseteq U^-$














\(\ds \)

\(\subseteq\)







\(\ds W\)





by choice of $U$



for all $T \in \Gamma$. 
Since $W$ was an arbitrary open neighborhood of ${\mathbf 0}_Y$, we have that $\Gamma$ is equicontinuous.
It remains to show that $B = X$.
Let $x \in X$. 
From Finite Subset of Topological Vector Space is von Neumann-Bounded, we have:

$\set x$ is von Neumann-bounded.
From Image of von Neumann-Bounded Set under Equicontinuous Family of Linear Transformations is Contained in von Neumann-Bounded Set, there exists a |von Neumann-bounded subset $F_x$ of $Y$ such that:

$T \sqbrk {\set x} \subseteq F_x$
for each $T \in \Gamma$.
That is:

$T x \in F_x$ for each $T \in \Gamma$
so that:

$\set {T x : T \in \Gamma} \subseteq F_x$
In other words, from Subset of von Neumann-Bounded Set is von Neumann-Bounded:

$\set {T x : T \in \Gamma}$ is von Neumann-bounded for each $x \in X$.
So $x \in B$.
Hence we conclude $B = X$.
$\blacksquare$


Historical Note
The Banach-Steinhaus Theorem was first proved, in the context of normed vector spaces, by Eduard Helly in around $1912$.
This was some years before Stefan Banach's work, but Helly failed to obtain recognition for this.


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $2.4$: Equicontinuity





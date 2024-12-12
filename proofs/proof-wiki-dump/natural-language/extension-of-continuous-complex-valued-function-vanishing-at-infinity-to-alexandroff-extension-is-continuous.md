# 

Source: https://proofwiki.org/wiki/Extension_of_Continuous_Complex-Valued_Function_Vanishing_at_Infinity_to_Alexandroff_Extension_is_Continuous

Theorem
Let $X$ be a locally compact Hausdorff space.
Let $X^\ast = X \cup \set p$ be the Alexandroff extension of $X$.
Let $f : X \to \C$ be a continuous complex-valued function vanishing at infinity.
Define $f^\ast : X^\ast \to \C$ by taking:

$\map {f^\ast} x = \begin{cases}\map f x & x \in X \\ 0 & x = p\end{cases}$
for each $x \in X^\ast$. 

Then $f^\ast$ is continuous. 


Corollary
Let $X$ be a locally compact Hausdorff space.
Let $f : X \to \C$ be a continuous complex-valued function vanishing at infinity.

Then $f \sqbrk X \cup \set 0$ is compact.


Proof
Since $f$ is continuous at each $x \in X$, we have:

for each $x \in X$:
for every open neighborhood $U_2$ of $\map f x \in \C$, there exists an open neighborhood $U_1$ of $x \in X$ such that $f \sqbrk {U_1} \subseteq U_2$.
From the definition of the topology on $X^\ast$:

every open set in $X$ is open in $X^\ast$.
Hence the $U_1$ given above remains an open neighborhood of $x$ in $X^\ast$.
Since $\map {f^\ast} x = \map f x$ for $x \in X$, $f^\ast$ remains continuous at each $x \in X$. 
We therefore only need to concern ourselves with continuity at $p$.
Let $U_2$ be an open neighborhood of $0 \in \C$.
Then there exists $\epsilon > 0$ such that $\set {z \in \C : \cmod z < \epsilon} \subseteq U_2$. 
From the definition of a complex-valued function vanishing at infinity, there exists a compact set $K \subseteq X$ such that:

$\cmod {\map f x} < \epsilon$ for $x \in X \setminus K$.
We also have $\cmod {\map {f^\ast} p} = 0 < \epsilon$, so we have:

$\cmod {\map {f^\ast} x} < \epsilon$ for $x \in \set p \cup \paren {X \setminus K}$.
From the definition of the topology on $X^\ast$:

$\set p \cup \paren {X \setminus K}$ is open in $X^\ast$.
Hence setting $U_1 = \set p \cup \paren {X \setminus K}$, we have:

${f^\ast} \sqbrk {U_1} \subseteq \set {z \in \C : \cmod z < \epsilon} \subseteq U_2$
with $p \in U_1$.
So $f^\ast$ is continuous at $p$.
Hence $f^\ast$ is continuous.
$\blacksquare$






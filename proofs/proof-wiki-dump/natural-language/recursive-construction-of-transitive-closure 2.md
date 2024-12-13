# 

Source: https://proofwiki.org/wiki/Recursive_Construction_of_Transitive_Closure



Theorem
Let $\RR$ be a relation.
The transitive closure $\RR^+$ of $\RR$ can be constructed as follows:
Let:

$\RR_n := \begin {cases} \RR & : n = 0 \\ \RR_{n - 1} \cup \set {\tuple {x_1, x_3}: \exists x_2: \tuple {x_1, x_2} \in \RR_{n-1} \land \tuple {x_2, x_3} \in \RR_{n - 1} } & : n > 0 \end{cases}$
Finally, let:

$\ds \RR^+ = \bigcup_{i \mathop \in \N} \RR_i$
Then $R^+$ is the transitive closure of $R$.


Proof
We must show that:

$(1): \quad \RR \subseteq \RR^+$
$(2): \quad \RR^+$ is transitive
$(3): \quad \RR^+$ is the smallest relation with both of those characteristics.


Proof of Subset
$\RR \subseteq \RR^+$: $\RR^+$ contains all of the $\RR_i$, so in particular $\RR^+$ contains $\RR$.


Proof of Transitivity
Every element of $\RR^+$ is in one of the $\RR_i$.
From the method of construction of $\RR^+$:

$\forall i, j \in \N: \RR_i \subseteq \RR_{\max \set {i, j} }$
Suppose $\tuple {s_1, s_2} \in \RR_j$ and $\tuple {s_2, s_3} \in \RR_k$.
Then as:

$\RR_j \subseteq \RR_{\max \set {j, k} }$
and:

$\RR_k \subseteq \RR_{\max \set {j, k} }$
it follows that:

$\tuple {s_1, s_2} \in \RR_{\max \set {j, k} }$ and $\tuple {s_2, s_3} \in \RR_{\max \set {j, k} }$
It follows from the method of construction that:

$\tuple {s_1, s_3} \in \RR_{\max \set {j, k} }$

Hence as $\RR_{\max \set {j, k} } \subseteq \RR^+$, it follows that $\RR^+$ is transitive.


Proof of being the smallest such relation
Let $\RR'$ be any transitive relation containing $\RR$.
We want to show that $\RR^+ \subseteq \RR'$.
It is sufficient to show that $\forall i \in \N: \RR_i \subseteq \RR'$.

Since $\RR \subseteq \RR'$, we have that $\RR_0 \subseteq \RR'$.
Suppose $\RR_i \subseteq \RR'$.
From the method of construction, as $\RR'$ is transitive:

$\RR_{i + 1} \subseteq \RR'$
Therefore, by induction:

$\forall i \in \N: \RR_i \subseteq \RR'$
So $\RR^+ \subseteq \RR'$, and hence the result.
$\blacksquare$






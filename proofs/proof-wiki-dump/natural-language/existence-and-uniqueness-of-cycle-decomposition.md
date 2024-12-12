# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Cycle_Decomposition



Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Every element of $S_n$ may be uniquely expressed as a cycle decomposition, up to the order of factors.


Proof
By definition, a cycle decomposition of an element of $S_n$ is a product of disjoint cycles.


Construction of Disjoint Permutations
Let $\sigma \in S_n$ be a permutation on $S_n$.
Let $\RR_\sigma$ be the equivalence defined in Permutation Induces Equivalence Relation.
Let $\N_n$ be used to denote the (one-based) initial segment of natural numbers:

$\N_n = \closedint 1 n = \set {1, 2, 3, \ldots, n}$
Let $\N_n / \RR_\sigma = \set {E_1, E_2, \ldots, E_m}$ be the quotient set of $\N_n$ determined by $\RR_\sigma$.

By Equivalence Class of Element is Subset:

$E \in \N_n / \RR_\sigma \implies E \subseteq \N_n$
For any $E_i \in \N_n / \RR_\sigma$, let $\rho_i: \paren {\N_n \setminus E_i} \to \paren {\N_n \setminus E_i}$ be the identity mapping on $\N_n \setminus E_i$.
By Identity Mapping is Permutation, $\rho_i$ is a permutation.

Also, let $\phi_i = \tuple {E_i, E_i, R}$ be a relation where $R$ is defined as:

$\forall x, y \in E_i: \tuple {x, y} \in R \iff \map \sigma x = y$

It is easily seen that $\phi_i$ is many to one.
For all $x \in E_i$:














\(\ds x\)

\(\RR_\sigma\)







\(\ds \map \sigma x\)














\(\ds \leadsto \ \ \)





\(\ds \map \sigma x\)

\(\in\)







\(\ds E_i\)














\(\ds \leadsto \ \ \)





\(\ds \sigma \sqbrk {E_i}\)

\(\subseteq\)







\(\ds E_i\)









which shows that $\phi_i$ is left-total.

It then follows from the definition of a mapping that $\phi_i: E_i \to E_i$ is a mapping defined by:

$\map {\phi_i} x = \map \sigma x$
It is seen that $\phi_i$ is an injection because $\sigma$ is an injection.
So by Injection from Finite Set to Itself is Permutation, $\phi_i$ is a permutation on $E_i$.

By Intersection with Relative Complement is Empty, $E_i$ and $\N_n \setminus E_i$ are disjoint.
By Union with Relative Complement:

$E_i \cup \paren {\N_n \setminus E_i} = \N_n$
So by Union of Bijections with Disjoint Domains and Codomains is Bijection, let the permutation $\sigma_i \in S_n$ be defined by:

$\map {\sigma_i} x = \map {\paren {\phi_i \cup \rho_i} } x = \begin{cases}
\map \sigma x & : x \in E_i \\
x & : x \notin E_i
\end{cases}$

By Equivalence Classes are Disjoint, it follows that each of the $\sigma_i$ are disjoint.
$\Box$


These Permutations are Cycles
It is now to be shown that all of the $\sigma_i$ are cycles.

From Order of Element Divides Order of Finite Group, there exists $\alpha \in \Z_{\gt 0}$ such that $\sigma_i^\alpha = e$, and so:

$\map {\sigma_i^\alpha} x = \map e x = x$
By Well-Ordering Principle, let $k = \min \set {\alpha \in \N_{\gt 0}: \map {\sigma_i^\alpha} x = x}$

Because $\sigma_i$ fixes each $y \notin E_i$, it suffices to show that:

$E_i = \set {x, \map {\sigma_i} x, \ldots, \map {\sigma_i^{k - 1} } x}$
for some $x \in E_i$.

If $x \in E_i$, then for all $t \in \Z$:

$x \mathrel {\RR_\sigma} \map {\sigma_i^t} x \implies \map {\sigma_i^t} x \in E_i$

It has been shown that:

$(1) \quad \set {x, \map {\sigma_i} x, \ldots, \map {\sigma_i^{k - 1} } x} \subseteq E_i$

Let $x, y \in E_i$.
Then:














\(\ds x\)

\(\RR_\sigma\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \map {\sigma_i^t} x\)

\(=\)







\(\ds y\)





for some $t \in \Z$, by Permutation Induces Equivalence Relation








\(\ds \leadsto \ \ \)





\(\ds \map {\sigma_i^{k q + r} } x\)

\(=\)







\(\ds y\)





for some $q \in \Z$, and $0 \le r \lt k$ by Division Theorem








\(\ds \leadsto \ \ \)





\(\ds \map {\sigma_i^r \sigma_i^{k q} } x\)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \map {\sigma_i^r} x\)

\(=\)







\(\ds y\)





Fixed Point of Permutation is Fixed Point of Power




It has been shown that:

$(2) \quad E_i \subseteq \set {x, \map {\sigma_i} x, \ldots, \map {\sigma_i^{k - 1} } x}$

Combining $(1)$ and $(2)$ yields:

$E_i = \set {x, \map {\sigma_i} x, \ldots, \map {\sigma_i^{k - 1} } x}$
$\Box$


The Product of These Cycles form the Permutation
Finally, it is now to be shown that $\sigma = \sigma_1 \sigma_2 \cdots \sigma_m$.

From the Fundamental Theorem on Equivalence Relations:

$x \in \N_n \implies x \in E_j$
for some $j \in \set {1, 2, \ldots, m}$.
Therefore:














\(\ds \map {\sigma_1 \sigma_2 \cdots \sigma_m} x\)

\(=\)







\(\ds \map {\sigma_1 \sigma_2 \cdots \sigma_j} x\)




















\(\ds \)

\(=\)







\(\ds \map {\sigma_j} x\)





because $\sigma_j \sqbrk {E_j} = E_j$














\(\ds \)

\(=\)







\(\ds \map \sigma x\)





Definition of $\sigma_i$




and so existence of a cycle decomposition has been shown.
$\Box$


Uniqueness of Cycle Decomposition
Take the cycle decomposition of $\sigma$, which is $\sigma_1 \sigma_2 \cdots \sigma_m$.
Let $\tau_1 \tau_2 \cdots \tau_s$ be some product of disjoint cycles such that $\sigma = \tau_1 \tau_2 \cdots \tau_s$.
It is assume that this product describes $\sigma$ completely and does not contain any duplicate $1$-cycles.
Let $x$ be a moved element of $\sigma$.

Then there exists a $j \in \set {1, 2, \ldots, s}$ such that $\map {\tau_j} x \ne x$.
And so:














\(\ds \map \sigma x\)

\(=\)







\(\ds \map {\tau_1 \tau_2 \cdots \tau_j} x\)




















\(\ds \)

\(=\)







\(\ds \map {\tau_j} x\)





Power of Moved Element is Moved




It has already been shown that $x \in E_i$ for some $i \in \set {1, 2, \ldots, m}$.
Therefore:














\(\ds \map {\sigma_i} x\)

\(=\)







\(\ds \map {\tau_j} x\)




















\(\ds \map {\sigma_i^2} x\)

\(=\)







\(\ds \map {\tau_{j \prime} \tau_j} x\)





by Power of Moved Element is Moved














\(\ds \)

\(=\)







\(\ds \map {\tau_j^2} x\)





because $\map {\sigma_i^2} x \ne \map {\sigma_i} x$ and this product is disjoint














\(\ds \vdots\)

\(\vdots\)







\(\ds \vdots\)




















\(\ds \map {\sigma_i^{k - 1} } x\)

\(=\)







\(\ds \map {\tau_j^{k - 1} } x\)










This effectively shows that $\sigma_i = \tau_j$.

Doing this for every $E_i$ implies that $m = s$ and that there exists a $\rho \in S_m$ such that:

$\sigma_{\map \rho i} = \tau_i$

In other words, $\tau_1 \tau_2 \cdots \tau_m$ is just a reordering of $\sigma_1 \sigma_2 \cdots \sigma_m$.
$\blacksquare$


Also see
Definition:Cycle Type


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 80$: Theorem
1974: Thomas W. Hungerford: Algebra: $\S 1.6$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations: Proposition $9.5$





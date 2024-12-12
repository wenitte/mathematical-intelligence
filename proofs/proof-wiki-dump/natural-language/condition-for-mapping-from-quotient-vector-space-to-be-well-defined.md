# 

Source: https://proofwiki.org/wiki/Condition_for_Mapping_from_Quotient_Vector_Space_to_be_Well-Defined

Theorem
Let $V, W$ be vector spaces.
Let $T: V \to W$ be a linear transformation.

Let $M$ be a subspace of $V$.
Let $V / M$ be the quotient vector space of $V$ by $M$.
Let $Q_M: V \to V / M$ be the associated quotient mapping.

Then:

there exists a linear transformation $L: V / M \to W$ such that $L \circ Q_M = T$
if and only if:

$M \subseteq \ker T$


$\begin {xy} \xymatrix@L + 2mu@ + 1em {V \ar[r]^*{T} \ar[d]_*{Q_M} & W \\ V / M \ar@{-->}[ur]_*{L} } \end {xy}$


Proof
By Condition for Mapping from Quotient Set to be Well-Defined, it follows that:

$L: V / M \to W$ exists
if and only if

$\forall v, v' \in V: v + M = v' + M \implies T v = T v'$

Now $v + M = v' + M$ if and only if $v - v' \in M$.
Since $T$ is linear:

$T v = T v' \iff T \paren{ v - v' } = 0$
In particular then, with $v' = 0$ it follows that:

$L: V / M \to W$ exists
if and only if

$\forall v \in V: v \in M \implies T v = 0$
and the latter states that $M \subseteq \ker T$.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): Appendix $\text{A}$ Preliminaries: $\S 1.$ Linear Algebra: Proposition $1.3$





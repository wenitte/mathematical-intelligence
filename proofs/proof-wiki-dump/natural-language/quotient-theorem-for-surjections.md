# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Surjections



Theorem
Let $f: S \to T$ be a surjection.

Then there is one and only one bijection $r: S / \RR_f \to T$ such that:

$r \circ q_{\RR_f} = f$
where:

$\RR_f$ is the equivalence induced by $f$
$r: S / \RR_f \to T$ is the renaming mapping
$q_{\RR_f}: S \to S / \RR_f$ is the quotient mapping induced by $\RR_f$.

This can be illustrated using a commutative diagram as follows:
$\quad\quad \begin {xy} \xymatrix@L + 2mu@ + 1em {
S \ar@{-->}[rr]^*{f = r \circ q_{\RR_f} }
\ar[dd]_*{q_{\RR_f} }
&& T \\
\\
S / \RR_f \ar[urur]_*{r} 
} \end {xy}$


Proof
From the definition of Induced Equivalence, the mapping $f: S \to T$ induces an equivalence $\RR_f$ on its domain.
As $f: S \to T$ is a surjection, $T = \Img f$ by definition.
From Renaming Mapping is Bijection, the renaming mapping $r: S / \RR_f \to T$ is a bijection, where $S / \RR_f$ is the quotient set of $S$ by $\RR_f$.
Hence:

$r \circ q_{\RR_f} = f$
$r$ is the only mapping $r: S / \RR_f \to T$ that satisfies this equality.
$\blacksquare$


Also known as
Also known as the factor theorem for surjections.


Also see
Factoring Mapping into Quotient and Injection
Factoring Mapping into Surjection and Inclusion
Quotient Theorem for Sets


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 10$: Equivalence Relations: Theorem $10.5$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 3$: Relations: Exercise $3.4 \ \text{(b)}$





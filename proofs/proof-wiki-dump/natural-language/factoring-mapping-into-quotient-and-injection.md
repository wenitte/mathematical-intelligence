# 

Source: https://proofwiki.org/wiki/Factoring_Mapping_into_Quotient_and_Injection



Theorem
Let $f: S \to T$ be a mapping.

Then $f$ can be uniquely factored into a quotient mapping, followed by an injection.

Thus:

$f = h \circ q_{\RR_f}$
where:

$q_{\RR_f}: S \to S / \RR_f: \map {q_{\RR_f} } s = \eqclass s {\RR_f}$
$h: S / \RR_f \to T: \map h {\eqclass s {\RR_f} } = \map f s$
$\eqclass s {\RR_f}$ denotes the equivalence class of $s$ with respect to the equivalence relation $\RR$ induced on $S$ by $f$.

This can be illustrated using a commutative diagram as follows:

$\quad\quad \begin{xy}\xymatrix@L+2mu@+1em{
S \ar[r]^*{q_{\RR_f} }
\ar@{-->}[rd]_*{f = h \circ q_{\RR_f} }
&
S / \RR_f \ar[d]^*{h}
\\ &
T
}\end{xy}$


Proof
The mapping $q_{\RR_f}: S \to S / \RR_f$ follows from the definition of quotient mapping.

The mapping $h$ is justified by Condition for Mapping from Quotient Set to be Well-Defined.
$\blacksquare$


Also see
Factoring Mapping into Surjection and Inclusion
Quotient Theorem for Surjections
Quotient Theorem for Sets


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Factoring Functions
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $10 \ \text{(ii)}$





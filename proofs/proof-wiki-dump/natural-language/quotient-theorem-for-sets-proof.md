# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Sets/Proof



Theorem
A mapping $f: S \to T$ can be uniquely factored into a surjection, followed by a bijection, followed by an injection.
Thus:

$f = i \circ r \circ q_{\RR_f}$
where:








\(\ds q_{\RR_f}: \ \ \)



\(\, \ds S \to S / \RR_f: \, \)

\(\ds \map {q_{\RR_f} } s\)

\(=\)







\(\ds \eqclass s {\RR_f}\)





Quotient Mapping








\(\ds r: \ \ \)



\(\, \ds S / \RR_f \to \Img f: \, \)

\(\ds \map r {\eqclass s {\RR_f} }\)

\(=\)







\(\ds \map f s\)





Renaming Mapping








\(\ds i: \ \ \)



\(\, \ds \Img f \to T: \, \)

\(\ds \map i t\)

\(=\)







\(\ds t\)





Inclusion Mapping



where:

$\RR_f$ is the equivalence induced by $f$
$S / \RR_f$ is the quotient set of $S$ induced by $\RR_f$

This can be illustrated using a commutative diagram as follows:
$\quad\quad \begin {xy} \xymatrix@L + 2mu@ + 1em {
S \ar@{-->}[rrr]^*{f = i_T \circ r \circ q_{\RR_f} }
\ar[d]_*{q_{\RR_f} }
& & & T \\
S / \RR_f \ar[rrr]_*{r} & & & \Img f \ar[u]_*{i_T} } \end {xy}$


Proof
From Factoring Mapping into Surjection and Inclusion, $f$ can be factored uniquely into:

A surjection $g: S \to \Img f$, followed by:
The inclusion mapping $i: \Img f \to T$ (an injection).

$\quad\quad \begin{xy}\xymatrix@L+2mu@+1em {
S \ar[drdr]_*{g}
\ar@{-->}[rr]^*{f = i_T \circ g}
& & T
\\ \\
& & \Img f \ar[uu]_*{i_T}
}\end{xy}$

From the Quotient Theorem for Surjections, the surjection $g$ can be factored uniquely into:

The quotient mapping $q_{\RR_f}: S \to S / \RR_f$ (a surjection), followed by:
The renaming mapping $r: S / \RR_f \to \Img f$ (a bijection).

Thus:

$f = i_T \circ \paren {r \circ q_{\RR_f} }$
As Composition of Mappings is Associative it can be seen that $f = i_T \circ r \circ q_{\RR_f}$.

The commutative diagram is as follows:
$\quad\quad \begin {xy} \xymatrix@L + 2mu@ + 1em {
S \ar@{-->}[rrr]^*{f = i_T \circ r \circ q_{\RR_f} }
\ar[ddd]_*{q_{\RR_f} }
\ar@{..>}[drdrdr]_*{g = r \circ q_{\RR_f} }
& & & T \\ \\ \\
S / \RR_f \ar[rrr]_*{r} & & & \Img f \ar[uuu]_*{i_T} } \end {xy}$
$\blacksquare$


Also known as
Otherwise known as the factoring theorem or factor theorem.

This construction is known as the canonical decomposition of $f$.


Also see
Factoring Mapping into Quotient and Injection
Factoring Mapping into Surjection and Inclusion
Quotient Theorem for Surjections


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{K}$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.6$





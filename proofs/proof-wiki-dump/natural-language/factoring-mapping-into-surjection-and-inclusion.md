# 

Source: https://proofwiki.org/wiki/Factoring_Mapping_into_Surjection_and_Inclusion



Theorem
Every mapping $f:S \to T$ can be uniquely factored into a surjection $g$ followed by the inclusion mapping $i_T$.
That is, $f = i_T \circ g$ where:

$g: S \to \Img f: \map g x = \map f x$
$i_T: \Img f \to T: \map {i_T} x = x$

This can be illustrated using a commutative diagram as follows:
$\quad\quad \begin{xy}\xymatrix@L+2mu@+1em {
S \ar@{-->}[r]^*{g}
\ar[rd]_*{f = i_T \circ g}
&
\Img f \ar@{-->}[d]^*{i_T}
\\
&
T
}\end{xy}$


Proof
From Surjection by Restriction of Codomain, $f: S \to \Img f$ is a surjection.
The mapping $g: S \to \Img f$ where $\map g x = \map f x$ is therefore also clearly a surjection.
The mapping $g: S \to \Img f: \map g x = \map f x$ is clearly unique, by Equality of Mappings.

From Inclusion Mapping is Injection, $i_T: \Img f \to T$ is an injection.
Likewise, the mapping $i_T: \Img f \to T : \map {i_T} x = x$ is also unique, by its own definition.
$\blacksquare$


Also see
Factoring Mapping into Quotient and Injection
Quotient Theorem for Surjections
Quotient Theorem for Sets


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Factoring Functions





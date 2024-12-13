# 

Source: https://proofwiki.org/wiki/Mapping_is_Extension_iff_Composite_with_Inclusion



Theorem
Let $S$ and $T$ be sets.
Let $A \subseteq S$.
Let $f: S \to T$ and $g: A \to T$ be mappings.

Then $f$ is an extension of $g$ if and only if:

$f = g \circ i_A$
where $i_A$ is the inclusion mapping on $A$.

This can be illustrated using a commutative diagram as follows:

$\begin {xy} \xymatrix@L + 2mu@ + 1em {
 A \ar[r]^*{i_A}
     \ar@{-->}[rd]_*{f = g \circ i_A}
&
 S \ar[d]^*{g}
\\
&
 T
} \end {xy}$


Proof
Necessary Condition
Let $f: S \to T$ be an extension of $g: A \to T$.
Then by definition:










\(\ds \forall x \in A: \, \)



\(\ds \map f x\)

\(=\)







\(\ds \map g x\)




















\(\ds \)

\(=\)







\(\ds \map g {\map {i_A} x}\)





Definition of Inclusion Mapping














\(\ds \)

\(=\)







\(\ds \map {\paren {g \circ i_A} } x\)





Definition of Composition of Mappings



That is:

$f = g \circ i_A$
$\Box$


Sufficient Condition
Let $f = g \circ i_A$ where $i_A$ is the inclusion mapping on $A$.
Then:










\(\ds \forall x \in A: \, \)



\(\ds \map f x\)

\(=\)







\(\ds \map {\paren {g \circ i_A} } x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \map g {\map {i_A} x}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map g x\)





Definition of Inclusion Mapping



So, by definition, $f$ is an extension of $g$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 9$: Inverse Functions, Extensions, and Restrictions





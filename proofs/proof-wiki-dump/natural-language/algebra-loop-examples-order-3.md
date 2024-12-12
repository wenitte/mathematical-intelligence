# 

Source: https://proofwiki.org/wiki/Algebra_Loop/Examples/Order_3

Example of Algebra Loop
The following is the Cayley table of the only operation $\circ$ on $S = \set {e, a, b}$ such that $\struct {S, \circ}$ is an algebra loop whose identity is $e$:

$\begin{array}{r|rrr}
\circ & e & a & b \\
\hline
e & e & a & b
\\
a & a & b & e
\\
b & b & e & a
\\
\end{array}$
Hence, up to isomorphism, there is only one algebra loop with $3$ elements.
This is isomorphic to the additive group of integers modulo $3$.


Proof
The initial specification allows us to populate the first few elements of the Cayley table:

$\begin{array}{r|rrr}
\circ & e & a & b \\
\hline
e & e & a & b
\\
a & a &   &  
\\
b & b &   &  
\\
\end{array}$

Then we note that:














\(\ds a \circ b\)

\(=\)







\(\ds e\)




















\(\ds b \circ a\)

\(=\)







\(\ds e\)









because both $a$ and $b$ already appear in the row and column of those cells.

Hence we have:

$\begin{array}{r|rrr}
\circ & e & a & b \\
\hline
e & e & a & b
\\
a & a &   & e
\\
b & b & e &  
\\
\end{array}$
and the remaining cells are likewise forced.

The isomorphism $\phi$ to the additive group of integers modulo $3$ can be established as:














\(\ds \map \phi e\)

\(=\)







\(\ds \eqclass 0 3\)




















\(\ds \map \phi a\)

\(=\)







\(\ds \eqclass 1 3\)




















\(\ds \map \phi b\)

\(=\)







\(\ds \eqclass 2 3\)









The fact that this is indeed an isomorphism follows by inspection.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.8 \ \text {(a)}$





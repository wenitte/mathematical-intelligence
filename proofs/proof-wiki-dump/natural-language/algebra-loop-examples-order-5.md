# 

Source: https://proofwiki.org/wiki/Algebra_Loop/Examples/Order_5

Example of Algebra Loop
The following is the Cayley table of an operation $\circ$ on $S = \set {e, a, b, c, d}$ such that $\struct {S, \circ}$ is an algebra loop whose identity is $e$, but which is not actually a group:

$\begin{array}{r|rrr}
\circ & e & a & b & c & d \\
\hline
e & e & a & b & c & d
\\
a & a & e & d & b & c
\\
b & b & c & e & d & a
\\
c & c & d & a & e & b
\\
d & d & b & c & a & e
\\
\end{array}$


Proof
We note that:














\(\ds \paren {a \circ a} \circ b\)

\(=\)







\(\ds e \circ b\)




















\(\ds \)

\(=\)







\(\ds b\)




















\(\ds a \circ \paren {a \circ b}\)

\(=\)







\(\ds a \circ d\)




















\(\ds \)

\(=\)







\(\ds c\)









demonstrating that $\circ$ is not associative.
Hence $\struct {S, \circ}$ is not a group.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.8 \ \text {(c)}$





# 

Source: https://proofwiki.org/wiki/Line_from_Bisector_of_Side_of_Parallelogram_to_Vertex_Trisects_Diagonal

Theorem
Let $ABCD$ be a parallelogram.
Let $E$ be the midpoint of $AD$.

Then the point at which the line $BE$ meets $AC$ trisects $AC$.


Proof

Let the given intersection be at $F$.
We have that $E$ is the midpoint of $AD$.
Thus:














\(\ds \vec {AB} + \vec {BE}\)

\(=\)







\(\ds \frac {\vec {AD} } 2\)














\(\ds \leadsto \ \ \)





\(\ds \vec {BE}\)

\(=\)







\(\ds \frac {\vec {AD} } 2 - \vec {AB}\)














\(\ds \leadsto \ \ \)





\(\ds \vec {AF}\)

\(=\)







\(\ds m \paren {\frac {\vec {AD} } 2 - \vec {BE} }\)





for some $m$ such that $0 \le m \le 1$




Since $\vec {AB} + \vec {BC}$ we have $\vec {AF} = n \paren {\vec {AB} + \vec {BC} }$ where $0 \le n \le 1$.
But:

$\vec {AB} + \vec {BF} = \vec {AF}$
That is:

$\vec {AB} + m \paren {\dfrac {\vec {BC} } 2 - \vec {AB} } = n \paren {\vec {AB} + \vec {BC} }$
That is:

$\paren {1 - m - n} \vec {AB} + \paren {\dfrac m 2 - n} \vec {AB} = 0$
These have a simultaneous solution because $\vec {AB}$ and $\vec {AD}$ are neither coincident nor parallel.
So:

$1 - m - n = 0, \dfrac m 2 - n = 0 \implies m = 2 n$
Hence $3n = 1$ and so:

$n = \dfrac 1 3$
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Graphical Representation of Complex Numbers. Vectors: $69$





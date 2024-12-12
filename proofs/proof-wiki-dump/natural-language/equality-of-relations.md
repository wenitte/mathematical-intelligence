# 

Source: https://proofwiki.org/wiki/Equality_of_Relations



Theorem
Let $\RR_1$ and $\RR_2$ be relations on $S_1 \times T_1$ and $S_2 \times T_2$ respectively.
Then $\RR_1$ and $\RR_2$ are equal if and only if:

$S_1 = S_2$
$T_1 = T_2$
$\tuple {s, t} \in \RR_1 \iff \tuple {s, t} \in \RR_2$

It is worth labouring the point that for two relations to be equal, not only must their domains be equal, but so must their codomains.


Proof
This follows from set equality and Equality of Ordered Pairs.
A relation on $S \times T$ is an ordered triple, thus:














\(\ds \RR_1\)

\(=\)







\(\ds \tuple {S_1, T_1, R_1}\)





where $R_1 \subseteq S_1 \times T_1$














\(\ds \RR_2\)

\(=\)







\(\ds \tuple {S_2, T_2, R_2}\)





where $R_2 \subseteq S_2 \times T_2$




From Equality of Ordered Tuples, $\RR_1 = \RR_1$ if and only if:














\(\ds S_1\)

\(=\)







\(\ds S_2\)




















\(\ds T_1\)

\(=\)







\(\ds T_2\)




















\(\ds R_1\)

\(=\)







\(\ds R_2\)










Then we have that $R_1$ and $R_2$ are sets of ordered pairs.
Thus by definition of set equality:

$R_1 = R_2 \iff \paren {\forall \tuple {x, y} \in \S_1 \times T_2: \tuple {x, y} \in R_1 \iff \tuple {x, y} \in R_2}$
Hence the result.
$\blacksquare$


Also known as
Some sources refer to this concept between two relations as being equivalence, rather than equality.


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 4$. Relations; functional relations; mappings





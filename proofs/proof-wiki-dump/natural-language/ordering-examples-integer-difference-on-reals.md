# 

Source: https://proofwiki.org/wiki/Ordering/Examples/Integer_Difference_on_Reals



Example of Ordering
Let $\preccurlyeq$ denote the relation on the set of real numbers $\R$ defined as:

$a \preccurlyeq b$ if and only if $b - a$ is a non-negative integer
Then $\preccurlyeq$ is an ordering on $\R$.


Proof
Reflexivity
We have that:

$\forall a \in \R: a - a = 0 \in \Z_{\ge 0}$
Thus:

$\forall a \in \R: a \preccurlyeq a$
So $\preccurlyeq$ has been shown to be reflexive.
$\Box$


Transitivity
Let $a, b, c \in \R$ such that:














\(\ds a\)

\(\preccurlyeq\)







\(\ds b\)


















\(\, \ds \land \, \)

\(\ds b\)

\(\preccurlyeq\)







\(\ds c\)














\(\ds \leadsto \ \ \)

\(\ds \exists m, n \in \Z_{\ge 0}: \, \)



\(\ds b - a\)

\(=\)







\(\ds m\)





Definition of $\preccurlyeq$












\(\, \ds \land \, \)

\(\ds c - b\)

\(=\)







\(\ds n\)














\(\ds \leadsto \ \ \)

\(\ds \exists m, n \in \Z_{\ge 0}: \, \)



\(\ds \paren {b - a} + \paren {c - b}\)

\(=\)







\(\ds m + n\)














\(\ds \leadsto \ \ \)

\(\ds \exists m + n \in \Z_{\ge 0}: \, \)



\(\ds c - a\)

\(=\)







\(\ds m + n\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(\preccurlyeq\)







\(\ds c\)





Definition of $\preccurlyeq$




So $\preccurlyeq$ has been shown to be transitive.
$\Box$


Antisymmetry
Let $a, b \in \R$ such that:














\(\ds a\)

\(\preccurlyeq\)







\(\ds b\)


















\(\, \ds \land \, \)

\(\ds b\)

\(\preccurlyeq\)







\(\ds a\)














\(\ds \leadsto \ \ \)

\(\ds \exists m, n \in \Z_{\ge 0}: \, \)



\(\ds b - a\)

\(=\)







\(\ds m\)





Definition of $\preccurlyeq$












\(\, \ds \land \, \)

\(\ds a - b\)

\(=\)







\(\ds n\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a - b} + \paren {b - a}\)

\(=\)







\(\ds m + n\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds m + n\)














\(\ds \leadsto \ \ \)





\(\ds m = n\)

\(=\)







\(\ds 0\)





Definition of $m$ and $n$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)





Definition of $\preccurlyeq$



So $\preccurlyeq$ has been shown to be antisymmetric.
$\Box$

$\preccurlyeq$ has been shown to be reflexive, transitive and antisymmetric.
Hence by definition it is an ordering.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: $(3)$





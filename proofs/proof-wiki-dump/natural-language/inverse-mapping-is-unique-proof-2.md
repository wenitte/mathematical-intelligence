# 

Source: https://proofwiki.org/wiki/Inverse_Mapping_is_Unique/Proof_2

Theorem
Let $f: S \to T$ be a mapping.
If $f$ has an inverse mapping, then that inverse mapping is unique.

That is, if:

$f$ and $g$ are inverse mappings of each other
and

$f$ and $h$ are inverse mappings of each other
then $g = h$.


Proof
We need to show that:

$\forall t \in T: \map g t = \map h t$
So:














\(\ds \map f {\map g t}\)

\(=\)







\(\ds t\)





Definition of Inverse Mapping








\(\ds \leadsto \ \ \)





\(\ds \map h t\)

\(=\)







\(\ds \map h {\map f {\map g t} }\)














\(\ds \leadsto \ \ \)





\(\ds \map h t\)

\(=\)







\(\ds \map g t\)





as $\forall s \in S: \map h {\map f s} = s$



$\blacksquare$
Hence the result.


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 9$: Inverse Functions, Extensions, and Restrictions





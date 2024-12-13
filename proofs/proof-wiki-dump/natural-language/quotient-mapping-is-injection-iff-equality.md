# 

Source: https://proofwiki.org/wiki/Quotient_Mapping_is_Injection_iff_Equality



Theorem
Let $\RR$ be an equivalence relation on $S$.
Then the quotient mapping $q_\RR: S \to S / \RR$ is an injection if and only if $\RR$ is the equality relation.


Proof
Let $\eqclass x \RR, \eqclass y \RR \in S / \RR$


Sufficient Condition
Let $q_\RR: S \to S / \RR$ be an injection.

Then:














\(\ds x\)

\(\RR\)







\(\ds y\)




















\(\ds \eqclass x \RR\)

\(=\)







\(\ds \eqclass y \RR\)





Definition of Equivalence Class








\(\ds \leadsto \ \ \)





\(\ds \map {q_\RR} x\)

\(=\)







\(\ds \map {q_\RR} y\)





Definition of Quotient Mapping








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Definition of Injection




That is:

$\RR$ is the equality relation.
$\Box$


Necessary Condition
Let $q_\RR: S \to S / \RR$ be a mapping which is specifically not an injection.

Then:










\(\ds \exists a, b \in S, a \ne b: \, \)



\(\ds \map {q_\RR} a\)

\(=\)







\(\ds \map {q_\RR} b\)





$q_\RR$ is not an injection








\(\ds \leadsto \ \ \)





\(\ds \eqclass a \RR\)

\(=\)







\(\ds \eqclass b \RR\)





Definition of Quotient Mapping








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\RR\)







\(\ds b\)





Definition of Equivalence Class



That is:

$a \ne b$
but:

$a \mathrel \RR b$
and so $\RR$ is not the equality relation.

From Rule of Transposition it follows that:

if $\RR$ is the equality relation then $q_\RR$ is an injection.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.4$: Equivalence relations





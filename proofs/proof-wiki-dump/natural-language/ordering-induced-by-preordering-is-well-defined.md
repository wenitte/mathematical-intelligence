# 

Source: https://proofwiki.org/wiki/Ordering_Induced_by_Preordering_is_Well-Defined

Definition
Let $\struct {S, \RR}$ be a relational structure such that $\RR$ is a preordering.
Let $\sim_\RR$ denote the equivalence on $S$ induced by $\RR$:

$x \sim_\RR y$ if and only if $x \mathrel \RR y$ and $y \mathrel \RR x$

Let $\preccurlyeq_\RR$ be the ordering on the quotient set $S / {\sim_\RR}$ by $\RR$:

$\eqclass x {\sim_\RR} \preccurlyeq_\RR \eqclass y {\sim_\RR} \iff x \mathrel \RR y$
where $\eqclass x {\sim_\RR}$ denotes the equivalence class of $x$ under $\sim_\RR$.

Then $\preccurlyeq_\RR$ is a well-defined relation.


Proof
We need to demonstrate that when:

$a \sim_\RR a'$
$b \sim_\RR b'$
it follows that:

$\eqclass a {\sim_\RR} \preccurlyeq_\RR \eqclass b {\sim_\RR} \iff \eqclass {a'} {\sim_\RR} \preccurlyeq_\RR \eqclass {b'} {\sim_\RR}$

So, let:

$a \sim_\RR a'$
$b \sim_\RR b'$
for arbitrary $a, b, a', b' \in S$.
By definition of $\sim_\RR$, this means:

$a \mathrel \RR a'$ and $a' \mathrel \RR a$
$b \mathrel \RR b'$ and $b' \mathrel \RR b$

So:














\(\ds \eqclass a {\sim_\RR}\)

\(\preccurlyeq_\RR\)







\(\ds \eqclass b {\sim_\RR}\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(\RR\)







\(\ds b\)





Definition of $\preccurlyeq_\RR$








\(\ds \leadsto \ \ \)





\(\ds a'\)

\(\RR\)







\(\ds b\)





$\RR$ is transitive: $a' \mathrel \RR a$ and $a \mathrel \RR b$








\(\ds \leadsto \ \ \)





\(\ds a'\)

\(\RR\)







\(\ds b'\)





$\RR$ is transitive: $a' \mathrel \RR b$ and $b  \mathrel \RR b'$








\(\ds \leadsto \ \ \)





\(\ds \eqclass {a'} {\sim_\RR}\)

\(\preccurlyeq_\RR\)







\(\ds \eqclass {b'} {\sim_\RR}\)





Definition of $\preccurlyeq_\RR$



That is:

$\eqclass a {\sim_\RR} \preccurlyeq_\RR \eqclass b {\sim_\RR} \implies \eqclass {a'} {\sim_\RR} \preccurlyeq_\RR \eqclass {b'} {\sim_\RR}$

The same argument is used to prove that:

$\eqclass {a'} {\sim_\RR} \preccurlyeq_\RR \eqclass {b'} {\sim_\RR} \implies \eqclass a {\sim_\RR} \preccurlyeq_\RR \eqclass b {\sim_\RR}$

Hence the result.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $40 \ \text {(a)}$





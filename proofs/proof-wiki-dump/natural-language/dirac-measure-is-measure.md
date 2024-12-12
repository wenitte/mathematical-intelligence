# 

Source: https://proofwiki.org/wiki/Dirac_Measure_is_Measure



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $x \in X$, and let $\delta_x$ be the Dirac measure at $x$.

Then $\delta_x$ is a measure.


Proof
Let us verify in turn that $\delta_x$ satisfies the axioms for a measure.


Axiom $(1)$
By definition of the Dirac measure, $\map {\delta_x} E \ge 0$ for all $E \in \Sigma$.
$\Box$


Axiom $(2)$
Let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint sets.
It follows that if for some $m \in \N$, $x \in E_m$, it must be that $n \ne m$ implies $x \notin E_n$.

Now suppose $x \in E_m$ for some $m \in \N$.
Then by definition of set union, $x \in \ds \bigcup_{n \mathop \in \N} E_n$.
Thus:














\(\ds \map {\delta_x} {\bigcup_{n \mathop \in \N} E_n}\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map {\delta_x} {E_n}\)









because $\map {\delta_x} {E_n} = 0$ if and only if $n \ne m$, and $1$ otherwise.

Finally, if $x \notin E_n$ for all $n \in \N$, then by definition of set union:

$x \notin \ds \bigcup_{n \mathop \in \N} E_n$
so that:














\(\ds \map {\delta_x} {\bigcup_{n \mathop \in \N} E_n}\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} 0\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map {\delta_x} {E_n}\)










Hence, from Proof by Cases:

$\ds \sum_{n \mathop \in \N} \map {\delta_x} {E_n} = \map {\delta_x} {\bigcup_{n \mathop \in \N} E_n}$
$\Box$


Axiom $(3)$
By definition of the Dirac measure, $\map {\delta_x} x = 1$.
Hence there is an $E \in \Sigma$ such that $\map {\delta_x} E$ is finite.
$\Box$

Thus, $\delta_x$, satisfying all the axioms, is a measure.
$\blacksquare$





